//This handles facility inventory
var express = require("express")
var router = express.Router()
var { getFacility, createFacility, updateFacility } = require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 *  /api/facility/facilityinventory:
 *   get:
 *       tags:
 *         - Facilities
 *       summary: Facilities Info
 *       parameters:
 *          - in: query
 *            name: tenant_uuid
 *            default: 0
 *            schema:
 *               type: uuid
 *       responses:
 *         '201':
 *           description: Facility  Information is provided.
 */
router.get("/facilityinventory", getFacility, apiFinalProcess)

/**
 * @openapi
 *  /api/facility/:
 *   post:
 *       tags:
 *         - Facilities
 *       summary: Create new Facility
 *       requestBody:
 *         description: New facility is created with all the necessary incountry_codeation
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Facility_create'
 *       responses:
 *         '201':
 *           description: Facility information is added.
 */
router.post("/", createFacility, apiFinalProcess)

/**
 * @openapi
 *  /api/facility/{facility_uuid}:
 *   put:
 *       tags:
 *         - Facilities
 *       summary: Update  Facility
 *       requestBody:
 *         description: Update the facility
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Facility_update'
 *       responses:
 *         '201':
 *           description: Facility information is added.
 *       parameters:
 *          - in: query
 *            name: tenant_id
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The facility_uuid of specific  facility
 */
router.put("/:facility_uuid", updateFacility, apiFinalProcess)


module.exports = router
