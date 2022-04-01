//This handles patch inventory
var express = require("express")
var router = express.Router()
const logger = require("../../config/logger")
const ApiResponse = require("../../lib/api/apiResponse")
// Database
const Sequelize = require("sequelize")
const sequelizeDB = require("../../config/emrmysqldb")
var initModels = require("../../dbmodels/sequelizeEMRModels/init-models")
    .initModels
var models = initModels(sequelizeDB)

//Patch Utils
const schemaValidator = require("../../dbcontrollers/schemaValidator")
const  SCHEMA_CODE = require("../../lib/constants/AppEnum").SCHEMA_CODE
const  JSON_SCHEMA_CODE = require("../../lib/constants/AppEnum").JSON_SCHEMA_CODE
const TENANT_CODE = require("../../lib/constants/AppEnum").TENANT_CODE
const VITAL_CODE = require("../../lib/constants/AppEnum").VITAL_CODE
//Controllers
const tenant_db_controller = require("../../dbcontrollers/tenant.controller")
const vital_controller=require("../../dbcontrollers/vital.controller")

const db_get_tenant_id=tenant_db_controller.db_get_tenant_id
const db_get_vital_list=vital_controller.db_get_vital_list

const db_create_vital=vital_controller.db_create_vital
const Tenants = models.tenant
const Vitals=models.form_vitals



/**
 * @openapi
 * /api/vital/vitalinventory:
 *   get:
 *       tags:
 *         - Vitals
 *       summary: Form Vitals
 *       responses:
 *         '201':
 *           description: Vital  Information is provided.
 */

//Get Request

router.get("/vitalinventory", function (req, res, next) {
    logger.debug("Patch info is ", req.userweight, req.userRole)
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
            db_get_vital_list(tenant_id, username)
                .then((vitals) => {
                    logger.debug("Vital list is " + vitals)
                    return res.status(VITAL_CODE["2"].HttpStatus).json({
                        result: VITAL_CODE["2"].Code,
                        response: {"vitals": [vitals]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("Vital list error " + err)
                    return res.status(VITAL_CODE["1"].HttpStatus).json({
                        result: VITAL_CODE["1"].Code,
                        response: {},
                        error: {errMessage: VITAL_CODE["1"].Message},
                        privilege: {}
                    })
                })
        })
        .catch((err) => {
            logger.error("Tenant Catch - USER list error : " + err)
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
 * /api/vital/:
 *   post:
 *       tags:
 *         - Vitals
 *       summary: Create new Vital
 *       requestBody:
 *         description: New vital is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vital_create'
 *       responses:
 *         '201':
 *           description: Vital Information is added.
 */


router.post("/", function (req, res, next) {
    logger.debug("Vital  header output is ", req.headers)
    logger.debug("Vital  Session output is ", req.session)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant


    let schema_status = schemaValidator.validate_schema(req,SCHEMA_CODE['vitalsSchema'])
    if(!schema_status['status']){
        return res.status(JSON_SCHEMA_CODE["1"].HttpStatus).json({
            result: JSON_SCHEMA_CODE["1"].Code,
            response: {},
            error: {errMessage: schema_status['error']},
            privilege: {}
        })
    }

    // Form the USER data for Insert
    let vital_data = req.body
    logger.debug("Vital Data Variable is ", vital_data)

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
            db_create_vital(tenant_id, vital_data)
                .then((vitals) => {
                    logger.debug("Vital  is" + vitals)
                    return res.status(VITAL_CODE["3"].HttpStatus).json({
                        result: VITAL_CODE["3"].Code,
                        response: {"vitals": [vitals]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("Vital Create error " + err)
                     error = new Error("Vital Create error " + err)
                     return res.status(VITAL_CODE["4"].HttpStatus).json({
                         result: VITAL_CODE["4"].Code,
                         response: {},
                         error: {errMessage: VITAL_CODE["4"].Message},
                         privilege: {}
                     })
                })
        })
        .catch((err) => {
            console.error("Main Catch - Vital Create error : " + err)
            error = new Error("Vital insert could not be performed")
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {errMessage: TENANT_CODE["1"].Message, errInfo: "Tenant Catch Error"},
                privilege: {}
            })
        })
})








module.exports = router
