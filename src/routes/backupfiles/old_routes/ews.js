//This handles patch inventory
var express = require("express")
var router = express.Router()
const logger = require("../../../config/logger")
const ApiResponse = require("../../../lib/api/apiResponse")
const uuidAPIKey = require('uuid-apikey');
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
const EWS_CODE = require("../../../lib/constants/AppEnum").EWS_CODE

const {db_get_ews_list,db_create_ews}=require("../../../dbcontrollers/ews.controller")
const tenant_db_controller = require("../../../dbcontrollers/tenant.controller")
const db_get_tenant_id=tenant_db_controller.db_get_tenant_id
const Tenants = models.tenant
const EWSS=models.ews_table



/**
 * @openapi
 *  /api/ews/ewsinventory:
 *   get:
 *       tags:
 *         - EWS
 *       summary: Form EWS
 *       responses:
 *         '201':
 *           description: EWS  Information is provided.
 */

//Get Request

router.get("/ewsinventory", function (req, res, next) {
    logger.debug("EWS info is ", req.userweight, req.userRole)
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
            db_get_ews_list(tenant_id, username)
                .then((ewss) => {
                    logger.debug("EWS list is " + ewss)
                    return res.status(EWS_CODE["2"].HttpStatus).json({
                        result: EWS_CODE["2"].Code,
                        response: {"ewss": [ewss]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("EWS list error " + err)
                    return res.status(EWS_CODE["1"].HttpStatus).json({
                        result: EWS_CODE["1"].Code,
                        response: {},
                        error: {errMessage: EWS_CODE["1"].Message},
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
 *  /api/ews/:
 *   post:
 *       tags:
 *         - EWS
 *       summary: Create new EWS
 *       requestBody:
 *         description: New EWS is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ews_create'
 *       responses:
 *         '201':
 *           description: EWS Information is added.
 */


router.post("/", function (req, res, next) {
    logger.debug("EWS  header output is ", req.headers)
    logger.debug("EWS  Session output is ", req.session)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant

    let schema_status = schemaValidator.validate_schema(req,SCHEMA_CODE['ewsTableSchema'])
    if(!schema_status['status']){
        return res.status(JSON_SCHEMA_CODE["1"].HttpStatus).json({
            result: JSON_SCHEMA_CODE["1"].Code,
            response: {},
            error: {errMessage: schema_status['error']},
            privilege: {}
        })

    }
    // Form the USER data for Insert
    let ews_data = req.body
    logger.debug("EWS Data Variable is ",ews_data)


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
            db_create_ews(tenant_id, ews_data)
                .then((ewss) => {
                    logger.debug("EWS  is" + ewss)
                    return res.status(EWS_CODE["3"].HttpStatus).json({
                        result: EWS_CODE["3"].Code,
                        response: {"ewss": [ewss]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("EWS Create error " + err)
                     error = new Error("EWS Create error " + err)
                     return res.status(EWS_CODE["4"].HttpStatus).json({
                         result: EWS_CODE["4"].Code,
                         response: {},
                         error: {errMessage: EWS_CODE["4"].Message},
                         privilege: {}
                     })
                })
        })
        .catch((err) => {
            console.error("Main Catch - EWS Create error : " + err)
            error = new Error("EWS insert could not be performed")
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {errMessage: TENANT_CODE["1"].Message, errInfo: "Tenant Catch Error"},
                privilege: {}
            })
        })
})








module.exports = router
