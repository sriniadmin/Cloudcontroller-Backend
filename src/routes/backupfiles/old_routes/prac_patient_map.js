var express = require("express")
var router = express.Router()
const logger = require("../../config/logger")
const uuidAPIKey = require("uuid-apikey")
// Database
const Sequelize = require("sequelize")
const sequelizeDB = require("../../config/emrmysqldb")
var initModels = require("../../dbmodels/sequelizeEMRModels/init-models")
    .initModels
var models = initModels(sequelizeDB)

//User Utils
const schemaValidator = require("../../dbcontrollers/schemaValidator")
const SCHEMA_CODE = require("../../lib/constants/AppEnum").SCHEMA_CODE
const JSON_SCHEMA_CODE = require("../../lib/constants/AppEnum").JSON_SCHEMA_CODE

const PRAC_CODE = require("../../lib/constants/AppEnum").PRAC_CODE
const TENANT_CODE = require("../../lib/constants/AppEnum").TENANT_CODE

//Controller
const {
    db_get_practictioner_list,
    db_create_practictioner,
} = require("../../dbcontrollers/practictioner.controller")
const tenant_db_controller = require("../../dbcontrollers/tenant.controller")
const db_get_tenant_id = tenant_db_controller.db_get_tenant_id
const Tenants = models.tenant
const Prac_Patient_Map = models.practictioner_patient_map

/**
 * @openapi
 *  /api/prac_patient_map/pracinventory:
 *   get:
 *       tags:
 *         - Pracs
 *       summary: Form pracs
 *       responses:
 *         '201':
 *           description: Prac patient map Information is provided.
 */

//Get Request

router.get("/pracinventory", function (req, res, next) {
    logger.debug("Patch info is ", req.userweight, req.userRole)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant

    tenant_id = db_get_tenant_id(tenant_name)
        .then((tenant_id_result) => {
            logger.debug("Tenant uuid outside " + tenant_id_result)
            tenant_id = tenant_id_result
            if (!tenant_id) {
                error = new Error(
                    "Fetching Tenant list not working for this Request"
                )
                return res.status(TENANT_CODE["1"].HttpStatus).json({
                    result: TENANT_CODE["1"].Code,
                    response: {},
                    error: { errMessage: TENANT_CODE["1"].Message },
                    privilege: {},
                })
            }
            db_get_practictioner_list(tenant_id, username)
                .then((pracs) => {
                    logger.debug("Prac list is " + pracs)
                    return res.status(PRAC_CODE["2"].HttpStatus).json({
                        result: PRAC_CODE["2"].Code,
                        response: { pracs: [pracs] },
                        error: {},
                        privilege: {},
                    })
                })
                .catch((err) => {
                    logger.debug("Prac list error " + err)
                    return res.status(PRAC_CODE["1"].HttpStatus).json({
                        result: PRAC_CODE["1"].Code,
                        response: {},
                        error: { errMessage: PRAC_CODE["1"].Message },
                        privilege: {},
                    })
                })
        })
        .catch((err) => {
            logger.error("Tenant Catch - USER list error : " + err)
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {
                    errMessage: TENANT_CODE["1"].Message,
                    errInfo: "Tenant Catch Error",
                },
                privilege: {},
            })
        })
})

/**
 * @openapi
 *  /api/prac_patient_map/:
 *   post:
 *       tags:
 *         - Pracs
 *       summary: Create new Patient Map
 *       requestBody:
 *         description: New mapping is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prac_create'
 *       responses:
 *         '201':
 *           description: Patient Map Information is added.
 */

router.post("/", function (req, res, next) {
    logger.debug("Prac  header output is ", req.headers)
    logger.debug("Prac  Session output is ", req.session)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant
    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["pracPatientMapSchema"]
    )
    if (!schema_status["status"]) {
        return res.status(JSON_SCHEMA_CODE["1"].HttpStatus).json({
            result: JSON_SCHEMA_CODE["1"].Code,
            response: {},
            error: { errMessage: schema_status["error"] },
            privilege: {},
        })
    }

    // Form the USER data for Insert
    let prac_data = req.body
    logger.debug("Prac Data Variable is ", prac_data)

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
                    error: { errMessage: TENANT_CODE["1"].Message },
                    privilege: {},
                })
            }
            db_create_practictioner(tenant_id, prac_data)
                .then((pracs) => {
                    logger.debug("Prac  is" + pracs)
                    return res.status(PRAC_CODE["3"].HttpStatus).json({
                        result: PRAC_CODE["3"].Code,
                        response: { pracs: [pracs] },
                        error: {},
                        privilege: {},
                    })
                })
                .catch((err) => {
                    logger.debug("Prac Create error " + err)
                    error = new Error("Prac Create error " + err)
                    return res.status(PRAC_CODE["4"].HttpStatus).json({
                        result: PRAC_CODE["4"].Code,
                        response: {},
                        error: { errMessage: PRAC_CODE["4"].Message },
                        privilege: {},
                    })
                })
        })
        .catch((err) => {
            console.error("Main Catch - Prac Create error : " + err)
            error = new Error("Prac insert could not be performed")
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {
                    errMessage: TENANT_CODE["1"].Message,
                    errInfo: "Tenant Catch Error",
                },
                privilege: {},
            })
        })
})

module.exports = router
