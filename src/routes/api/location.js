var express = require("express")
var router = express.Router()
const logger = require("../../config/logger")
const ApiResponse = require("../../lib/api/apiResponse")
const uuidAPIKey = require("uuid-apikey")
// Database
const Sequelize = require("sequelize")
const sequelizeDB = require("../../config/emrmysqldb")
var initModels =
    require("../../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)

//Patch Utils
const schemaValidator = require("../../dbcontrollers/schemaValidator")
const SCHEMA_CODE = require("../../lib/constants/AppEnum").SCHEMA_CODE
const JSON_SCHEMA_CODE = require("../../lib/constants/AppEnum").JSON_SCHEMA_CODE

const {
    db_get_location_list,
    db_create_location,
} = require("../../dbcontrollers/location.controller")
const tenant_db_controller = require("../../dbcontrollers/tenant.controller")
const db_get_tenant_id = tenant_db_controller.db_get_tenant_id
const TENANT_CODE = require("../../lib/constants/AppEnum").TENANT_CODE
const LOCATION_CODE = require("../../lib/constants/AppEnum").LOCATION_CODE

const Tenants = models.tenant
const LOCATIONS = models.location

const { getLocation, createLocation, createBulkLocation, getRemoteLocation, createRemoteLocation, updateRemoteLocation } = require("../../old_code_refactor/internalUser")

const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 *  /api/location/locationinventory:
 *   get:
 *       tags:
 *         - Location
 *       summary: Form LOCATION
 *       responses:
 *         '201':
 *           description: LOCATION  Information is provided.
 *       parameters:
 *          - in: query
 *            name: limit
 *            default: 100
 *            schema:
 *               type: integer
 *            description: The number of items to return
 *          - in: query
 *            name: offset
 *            default: 0
 *            schema:
 *               type: integer
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: filter
 *            default: 0
 *            schema:
 *               type: string
 *          - in: query
 *            name: tenant_uuid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The number of items to skip before starting to collect the result set
 */

router.get("/locationinventory", getLocation, apiFinalProcess)

/**
 * @openapi
 *  /api/location/:
 *   post:
 *       tags:
 *         - Location
 *       summary: Create new LOCATION
 *       requestBody:
 *         description: New LOCATION is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Location_create'
 *       responses:
 *         '201':
 *           description: location Information is added.
 */


router.post("/",createLocation,apiFinalProcess)

/**
 * @openapi
 *  /api/location/remote:
 *   post:
 *       tags:
 *         - Location
 *       summary: Create new LOCATION
 *       requestBody:
 *         description: New LOCATION is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Location_Bulk'
 *       responses:
 *         '201':
 *           description: location Information is added.
 */


 router.post("/remote",createRemoteLocation,apiFinalProcess)

 /**
 * @openapi
 *  /api/location/remote:
 *   put:
 *       tags:
 *         - Location
 *       summary: Create new LOCATION
 *       requestBody:
 *         description: New LOCATION is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Remote_Location_Delete'
 *       responses:
 *         '201':
 *           description: location Information is added.
 *       parameters:
 *          - in: query
 *            name: ward_tag
 *            default: ward
 *            schema:
 *               type: strig
 *            description: The number of items to return
 *          - in: query
 *            name: floor_tag
 *            default: floor
 *            schema:
 *               type: string
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: status
 *            default: Remote
 *            schema:
 *               type: string
 *          - in: query
 *            name: location_uuid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The number of items to skip before starting to collect the result set
 */


  router.put("/remote",updateRemoteLocation,apiFinalProcess)


 /**
 * @openapi
 *  /api/location/remote/:
 *   get:
 *       tags:
 *         - Location
 *       summary: Form LOCATION
 *       responses:
 *         '201':
 *           description: LOCATION  Information is provided.
 *       parameters:
 *          - in: query
 *            name: limit
 *            default: 100
 *            schema:
 *               type: integer
 *            description: The number of items to return
 *          - in: query
 *            name: offset
 *            default: 0
 *            schema:
 *               type: integer
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: filter
 *            default: 0
 *            schema:
 *               type: string
 *            description: The filtering items
 *          - in: query
 *            name: status
 *            default: 0
 *            schema:
 *               type: string
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: tenant_uuid
 *            default: 0
 *            schema:
 *               type: string
 *            description: The number of items to skip before starting to collect the result set
 */

 router.get("/remote",getRemoteLocation,apiFinalProcess)

module.exports = router
