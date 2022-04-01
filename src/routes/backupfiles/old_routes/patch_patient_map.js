//this file is not needed

var express = require("express")
var router = express.Router()
const logger = require("../../config/logger")

// Database
const Sequelize = require("sequelize")
const sequelizeDB = require("../../config/emrmysqldb")
var initModels = require("../../dbmodels/sequelizeEMRModels/init-models")
    .initModels
var models = initModels(sequelizeDB)

//User Utils
const schemaValidator = require("../../dbcontrollers/schemaValidator")
const  SCHEMA_CODE = require("../../lib/constants/AppEnum").SCHEMA_CODE
const  JSON_SCHEMA_CODE = require("../../lib/constants/AppEnum").JSON_SCHEMA_CODE
const  PATCH_PATIENT_MAP_CODE = require("../../lib/constants/AppEnum").PATCH_PATIENT_MAP_CODE
const TENANT_CODE = require("../../lib/constants/AppEnum").TENANT_CODE
const {db_create_prac,db_get_patch_map_list}=require("../../dbcontrollers/patch_patient.controller")
const tenant_db_controller = require("../../dbcontrollers/tenant.controller")
const db_get_tenant_id=tenant_db_controller.db_get_tenant_id
var RegisterPatientGRPC = require("../../external_services/grpc/kafka_service")


const Tenants = models.tenant
const Patch_Patient_Map = models.patch_patient_map



/**
 * @openapi
 *  /api/patch_patient_map/patchpatientinventory:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Form PatchPatientInventory
 *       responses:
 *         '201':
 *           description: Patch patient map Information is provided.
 */

//Get Request

router.get("/patchpatientinventory", function (req, res, next) {
    logger.debug("Patch info is ", req.userweight, req.userRole)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant
    tenant_id=req.userTenantId

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
            db_get_patch_map_list(tenant_id, username)
                .then((patch_patient_map) => {
                    logger.debug("PATCH_PATIENT_MAP_CODE list is " + patch_patient_map)
                    return res.status(PATCH_PATIENT_MAP_CODE["2"].HttpStatus).json({
                        result: PATCH_PATIENT_MAP_CODE["2"].Code,
                        response: {"patient_patch_data": [patch_patient_map]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("PATCH_PATIENT_MAP_CODE list error " + err)
                    return res.status(PATCH_PATIENT_MAP_CODE["1"].HttpStatus).json({
                        result: PATCH_PATIENT_MAP_CODE["1"].Code,
                        response: {},
                        error: {errMessage: PATCH_PATIENT_MAP_CODE["1"].Message},
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
 *  /api/patch_patient_map/:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create new Patch Patient Map
 *       requestBody:
 *         description: New mapping is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patch_Patient_Map'
 *       responses:
 *         '201':
 *           description: Patient Map Information is added.
 */


router.post("/", function (req, res, next) {
    logger.debug("patch_patient_map  header output is ", req.headers)
    logger.debug("patch_patient_map  Session output is ", req.session)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant

    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(req,SCHEMA_CODE['patchPatientMap'])
    if(!schema_status['status']){
        return res.status(JSON_SCHEMA_CODE["1"].HttpStatus).json({
            result: JSON_SCHEMA_CODE["1"].Code,
            response: {},
            error: {errMessage: schema_status['error']},
            privilege: {}
        })
    }


    // Form the USER data for Insert
    let patch_patient_map_data = req.body
    logger.debug("Patch Data Variable is ", patch_patient_map_data)

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
            logger.debug("Testing")
            db_create_prac(tenant_id, patch_patient_map_data)
                .then((patch_patient_map) => {
                    logger.debug("PATCH_PATIENT_MAP_CODE   is" + patch_patient_map)
                    logger.debug("Register to GRPC for Patient", patch_patient_map["patient_uuid"])
                    RegisterPatientGRPC({"patientUUID":patch_patient_map["patient_uuid"]})
                    logger.debug("Register Complete", patch_patient_map["patient_uuid"])
                    return res.status(PATCH_PATIENT_MAP_CODE["3"].HttpStatus).json({
                        result: PATCH_PATIENT_MAP_CODE["3"].Code,
                        response: {"pracs": [patch_patient_map]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("PATCH_PATIENT_MAP_CODE Create error " + err)
                     error = new Error("PATCH_PATIENT_MAP_CODE Create error " + err)
                     return res.status(PATCH_PATIENT_MAP_CODE["4"].HttpStatus).json({
                         result: PATCH_PATIENT_MAP_CODE["4"].Code,
                         response: {},
                         error: {errMessage: PATCH_PATIENT_MAP_CODE["4"].Message},
                         privilege: {}
                     })
                })
        })
        .catch((err) => {
            console.error("Main Catch - Prac Create error : " + err)
            error = new Error("Prac insert could not be performed")
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {errMessage: TENANT_CODE["1"].Message, errInfo: "Tenant Catch Error"},
                privilege: {}
            })
        })
})


module.exports = router
