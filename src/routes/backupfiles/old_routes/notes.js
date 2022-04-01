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

const {db_create_notes,db_get_notes_list}=require("../../../dbcontrollers/note.controller")
const tenant_db_controller = require("../../../dbcontrollers/tenant.controller")
const db_get_tenant_id=tenant_db_controller.db_get_tenant_id
const TENANT_CODE = require("../../../lib/constants/AppEnum").TENANT_CODE
const NOTES_CODE = require("../../../lib/constants/AppEnum").NOTES_CODE

const Tenants = models.tenant
const Notes=models.notes






/**
 * @openapi
 *  /api/notes/notesinventory:
 *   get:
 *       tags:
 *         - Notes
 *       summary: Form Notes
 *       responses:
 *         '201':
 *           description: Notes  Information is provided.
 *       parameters:
 *          - in: query
 *            name: limit
 *            default: 0
 *            schema:
 *               type: integer
 *            description: The number of items to return
 *          - in: query
 *            name: offset
 *            default: 10
 *            schema:
 *               type: integer
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: filter
 *            default: 0
 *            schema:
 *               type: string
 *            description: The number of items to skip before starting to collect the result set
 */

//Get Request

router.get("/notesinventory", function (req, res, next) {
    logger.debug("Notes info is ", req.userweight, req.userRole)
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
            db_get_notes_list(tenant_id, username,req.query)
                .then((notes) => {
                    logger.debug("Notes list is " + notes)
                    return res.status(NOTES_CODE["2"].HttpStatus).json({
                        result: NOTES_CODE["2"].Code,
                        response: {"notes": [notes]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("Notes list error " + err)
                    return res.status(NOTES_CODE["1"].HttpStatus).json({
                        result: NOTES_CODE["1"].Code,
                        response: {},
                        error: {errMessage: NOTES_CODE["1"].Message},
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
 *  /api/notes/:
 *   post:
 *       tags:
 *         - Notes
 *       summary: Create new Notes
 *       requestBody:
 *         description: New Notes is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notes_create'
 *       responses:
 *         '201':
 *           description: Notes Information is added.
 */


router.post("/", function (req, res, next) {
    logger.debug("Notes  header output is ", req.headers)
    logger.debug("Notes  Session output is ", req.session)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant

    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(req,SCHEMA_CODE['notesSchema'])
    if(!schema_status['status']){
        return res.status(JSON_SCHEMA_CODE["1"].HttpStatus).json({
            result: JSON_SCHEMA_CODE["1"].Code,
            response: {},
            error: {errMessage: schema_status['error']},
            privilege: {}
        })
    }

    // Form the USER data for Insert
    let notes_data =req.body
    logger.debug("Notes Data Variable is ", notes_data)

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
            db_create_notes(tenant_id, notes_data)
                .then((notes) => {
                    logger.debug("Notes  is" + notes)
                    return res.status(NOTES_CODE["3"].HttpStatus).json({
                        result: NOTES_CODE["3"].Code,
                        response: {"notes": [notes]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("notes Create error " + err)
                     error = new Error("Notes Create error " + err)
                     return res.status(NOTES_CODE["4"].HttpStatus).json({
                         result: NOTES_CODE["4"].Code,
                         response: {},
                         error: {errMessage: NOTES_CODE["4"].Message},
                         privilege: {}
                     })
                })
        })
        .catch((err) => {
            console.error("Main Catch - Notes Create error : " + err)
            error = new Error("EWS insert could not be performed")
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
 * /api/notes/{pid}:
 *   get:
 *       tags:
 *         - Notes
 *       summary: Information of the Notes
 *       responses:
 *         '201':
 *           description: Notes Demographic Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific notes
 *          - in: query
 *            name: limit
 *            default: 1
 *            schema:
 *               type: integer
 *            description: The number of items to return
 *          - in: query
 *            name: offset
 *            default: 10
 *            schema:
 *               type: integer
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: filter
 *            default: 0
 *            schema:
 *               type: string
 *            description: The number of items to skip before starting to collect the result set
 */




router.get("/:pid", function (req, res, next) {
    // This API gets the username and tenant and other HTTP Headers info
    // TODO : Validate the values for each of the field
    // Get the patient list based on the Role information
    // Needs to add the Filter, Pagination Logic

    logger.debug("Notes info is ", req.userEmail, req.userRole, req.params)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant

    tenant_id = db_get_tenant_id(tenant_name)
        .then((tenant_id_result) => {
            logger.debug("Tenant uuid outside " + tenant_id_result)
            tenant_id = tenant_id_result
            if (!tenant_id) {
                error = new Error("Fetching Tenant list not working for this Request")
                let apiResponse = ApiResponse({
                    result: TENANT_CODE["1"].Code,
                    response: {},
                    error: {errMessage: TENANT_CODE["1"].Message},
                    privilege: {}
                })
                logger.debug("Api Response is ", apiResponse)
                return res.status(TENANT_CODE["1"].HttpStatus).json(JSON.stringify(apiResponse))
            }
            // let params = {'limit' : req.query.limit, 'offset': req.query.offset,'filter':req.query.filter}
            req.query.pid = req.params.pid // THis is an Hack - Need a better way - TODO
            db_get_notes_list(tenant_id, username,req.query)
                .then((notes) => {
                  let apiResponse = new ApiResponse({
                      result: NOTES_CODE["2"].Code,
                      response: {"notes": [notes]},
                      error: {},
                      privilege: {}
                  })
                  logger.debug("Api Response is ", apiResponse)
                    logger.debug("Success: Notes list is " + notes)
                    return res.status(NOTES_CODE["2"].HttpStatus).json(apiResponse)
                })
                .catch((err) => {
                    logger.debug("Notes list error " + err)
                    return res.status(NOTES_CODE["1"].HttpStatus).json({
                        result: NOTES_CODE["1"].Code,
                        response: {},
                        error: {errMessage: NOTES_CODE["1"].Message},
                        privilege: {}
                    })
                })
        })
        .catch((err) => {
            logger.error("Tenant Catch - Notes list error : " + err)
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {errMessage: TENANT_CODE["1"].Message, errInfo: "Tenant Catch Error"},
                privilege: {}
            })
        })
})








module.exports = router
