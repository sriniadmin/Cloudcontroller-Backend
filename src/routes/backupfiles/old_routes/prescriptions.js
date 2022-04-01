//This handles patch inventory
var express = require("express")
var router = express.Router()
const logger = require("../../../config/logger")

const ApiResponse = require("../../../lib/api/apiResponse")
// Database
const Sequelize = require("sequelize")
const sequelizeDB = require("../../../config/emrmysqldb")
var initModels = require("../../../dbmodels/sequelizeEMRModels/init-models")
    .initModels
var models = initModels(sequelizeDB)

//Patch Utils
const schemaValidator = require("../../../dbcontrollers/schemaValidator")
const  SCHEMA_CODE = require("../../../lib/constants/AppEnum").SCHEMA_CODE
const  JSON_SCHEMA_CODE = require("../../../lib/constants/AppEnum").JSON_SCHEMA_CODE
const TENANT_CODE = require("../../../lib/constants/AppEnum").TENANT_CODE
const PRESCRIPTION_CODE = require("../../../lib/constants/AppEnum").PRESCRIPTION_CODE
//Controller
const { db_create_prescription,db_get_prescription_list } = require("../../../dbcontrollers/prescription.controller")
const tenant_db_controller = require("../../../dbcontrollers/tenant.controller")
const db_get_tenant_id=tenant_db_controller.db_get_tenant_id

const Tenants = models.tenant
const Prescriptions=models.prescriptions




/**
 * @openapi
 *  /api/prescriptions/prescriptionsinventory:
 *   get:
 *       tags:
 *         - Prescriptions
 *       summary: Form prescriptions
 *       responses:
 *         '201':
 *           description: Prescriptions  Information is provided.
 */

//Get Request

router.get("/prescriptionsinventory", function (req, res, next) {
    logger.debug("User info is ", req.userEmail, req.userRole)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant

    tenant_id = db_get_tenant_id(tenant_name)
        .then((tenant_id_result) => {
            logger.debug("Tenant uuid outside " + tenant_id_result)
            tenant_id = tenant_id_result
            if (!tenant_id) {
                error = new Error("Fetching Tenant list not working for this Request")
                return res.status(TENANT_CODE["1"].HttpStatus).json({
                    result: TENANT_CODE["1"].Code,
                    response: {},
                    error: {errMessage: TENANT_CODE["1"].Message},
                    privilege: {}
                })
            }
            db_get_prescription_list(tenant_id, username)
                .then((prescriptions) => {
                    logger.debug("Prescription list is " + prescriptions)
                    return res.status(PRESCRIPTION_CODE["2"].HttpStatus).json({
                        result: PRESCRIPTION_CODE["2"].Code,
                        response: {"prescriptions": [prescriptions]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("Prescription list error " + err)
                    return res.status(PRESCRIPTION_CODE["1"].HttpStatus).json({
                        result: PRESCRIPTION_CODE["1"].Code,
                        response: {},
                        error: {errMessage: PRESCRIPTION_CODE["1"].Message},
                        privilege: {}
                    })
                })
        })
        .catch((err) => {
            logger.error("Tenant Catch - date_added list error : " + err)
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {errMessage: TENANT_CODE["1"].Message, errInfo: "Tenant Catch Error"},
                privilege: {}
            })
        })
})


/**
 * @openapi
 *  /api/prescriptions/:
 *   post:
 *       tags:
 *         - Prescriptions
 *       summary: Create new prescriptions
 *       requestBody:
 *         description: New prescriptions is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prescription_create'
 *       responses:
 *         '201':
 *           description: Prescriptions Information is added.
 */


router.post("/", function (req, res, next) {
    logger.debug("Prescription  header output is ", req.headers)
    logger.debug("Prescription  Session output is ", req.session)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant
    //JSON SChema logic
    let schema_status = schemaValidator.validate_schema(req,SCHEMA_CODE['prescriptionsSchema'])
    if(!schema_status['status']){
        return res.status(JSON_SCHEMA_CODE["1"].HttpStatus).json({
            result: JSON_SCHEMA_CODE["1"].Code,
            response: {},
            error: {errMessage: schema_status['error']},
            privilege: {}
        })
    }
    let prescription_data = req.body
    logger.debug("date_added Data Variable is ", prescription_data)

    // TODO: Tenant - can be fetched from the JWT and redis cache can be used to get the tenant uuid and tenant name
    tenant_id = db_get_tenant_id(tenant_name)
        .then((tenant_id_result) => {
            logger.debug("Tenant uuid outside " + tenant_id_result)
            tenant_id = tenant_id_result
            if (!tenant_id) {
                error = new Error(
                    "Fetching tenant list not working for this Request"
                )
                return res.status(TENANT_CODE["1"].HttpStatus).json({
                    result: TENANT_CODE["1"].Code,
                    response: {},
                    error: {errMessage: TENANT_CODE["1"].Message},
                    privilege: {}
                })
            }
            db_create_prescription(tenant_id, prescription_data)
                .then((prescriptions) => {
                    logger.debug("Prescription  is" + prescriptions)
                    return res.status(PRESCRIPTION_CODE["3"].HttpStatus).json({
                        result: PRESCRIPTION_CODE["3"].Code,
                        response: {"prescriptions": [prescriptions]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("Prescription Create error " + err)
                     error = new Error("Prescription Create error " + err)
                     return res.status(PRESCRIPTION_CODE["4"].HttpStatus).json({
                         result: PRESCRIPTION_CODE["4"].Code,
                         response: {},
                         error: {errMessage: PRESCRIPTION_CODE["4"].Message},
                         privilege: {}
                     })
                })
        })
        .catch((err) => {
            console.error("Main Catch - Prescription Create error : " + err)
            error = new Error("Prescription insert could not be performed")
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {errMessage: TENANT_CODE["1"].Message, errInfo: "Tenant Catch Error"},
                privilege: {}
            })
        })
})








module.exports = router
