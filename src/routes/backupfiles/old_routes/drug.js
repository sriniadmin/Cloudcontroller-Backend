//This handles Drug inventory
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

//Drug Utils
const schemaValidator = require("../../../dbcontrollers/schemaValidator")
const  SCHEMA_CODE = require("../../../lib/constants/AppEnum").SCHEMA_CODE
const  JSON_SCHEMA_CODE = require("../../../lib/constants/AppEnum").JSON_SCHEMA_CODE

const TENANT_CODE = require("../../../lib/constants/AppEnum").TENANT_CODE
const DRUG_CODE = require("../../../lib/constants/AppEnum").DRUG_CODE

const {db_get_drug_list,db_create_Drug}=require("../../../dbcontrollers/drug.controller")
const tenant_db_controller = require("../../../dbcontrollers/tenant.controller")
const db_get_tenant_id=tenant_db_controller.db_get_tenant_id
const Tenants = models.tenant
const Drugs=models.drugs





/**
 * @openapi
 *  /api/drug/druginventory:
 *   get:
 *       tags:
 *         - Drugs
 *       summary: Form Drugs
 *       responses:
 *         '201':
 *           description: Drug  Information is provided.
 */

//Get Request

router.get("/druginventory", function (req, res, next) {
    logger.debug("Drug info is ", req.userEmail, req.userRole)
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
            db_get_drug_list(tenant_id, username)
                .then((drugs) => {
                    logger.debug("Drug list is " + drugs)
                    return res.status(DRUG_CODE["2"].HttpStatus).json({
                        result: DRUG_CODE["2"].Code,
                        response: {"drugs": [drugs]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("Drug list error " + err)
                    return res.status(DRUG_CODE["1"].HttpStatus).json({
                        result: DRUG_CODE["1"].Code,
                        response: {},
                        error: {errMessage: DRUG_CODE["1"].Message},
                        privilege: {}
                    })
                })
        })
        .catch((err) => {
            logger.error("Tenant Catch - on_order list error : " + err)
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
 *  /api/drug/:
 *   post:
 *       tags:
 *         - Drugs
 *       summary: Create new Drug
 *       requestBody:
 *         description: New Drug is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Drug_create'
 *       responses:
 *         '201':
 *           description: Drug Information is added.
 */


router.post("/", function (req, res, next) {
    logger.debug("Drug  header output is ", req.headers)
    logger.debug("Drug  Session output is ", req.session)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant
    //JSON SCHEMA Validation
    let schema_status = schemaValidator.validate_schema(req,SCHEMA_CODE['drugsSchema'])
    if(!schema_status['status']){
        return res.status(JSON_SCHEMA_CODE["1"].HttpStatus).json({
            result: JSON_SCHEMA_CODE["1"].Code,
            response: {},
            error: {errMessage: schema_status['error']},
            privilege: {}
        })

    }

    // Form the on_order data for Insert
    let drug_data = req.body
    logger.debug("Drug Data Variable is ", drug_data)

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
            db_create_Drug(tenant_id, drug_data)
                .then((drugs) => {
                    logger.debug("Drug  is" + drugs)
                    return res.status(DRUG_CODE["3"].HttpStatus).json({
                        result: DRUG_CODE["3"].Code,
                        response: {"drugs": [drugs]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("Drug Create error " + err)
                     error = new Error("Drug Create error " + err)
                     return res.status(DRUG_CODE["4"].HttpStatus).json({
                         result: DRUG_CODE["4"].Code,
                         response: {},
                         error: {errMessage: DRUG_CODE["4"].Message},
                         privilege: {}
                     })
                })
        })
        .catch((err) => {
            console.error("Main Catch - Drug Create error : " + err)
            error = new Error("Drug insert could not be performed")
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {errMessage: TENANT_CODE["1"].Message, errInfo: "Tenant Catch Error"},
                privilege: {}
            })
        })
})








module.exports = router
