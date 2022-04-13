//This handles patch inventory
var express = require("express")
var router = express.Router()
var { getPatchInventory,createPatch,updatePatchUuid,updatePatch, checkPatchSerial } = require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")



/**
 * @openapi
 *  /api/patch/patchinventory:
 *   get:
 *       tags:
 *         - Patch
 *       summary: Patch Inventory
 *       parameters:
 *          - in: query
 *            name: devicetype
 *            schema:
 *               type: string
 *            description: The device type to filter on
 *          - in: query
 *            name: limit
 *            default: 10
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
 *            name: inuse
 *            default: 0
 *            schema:
 *               type: string
 *            description: -1 denotes return only free patches ,0 - denotes return all the patches, 1 denotes return patches which are in use by patients
 *          - in: query
 *            name: patch_serial
 *            default: ""
 *            schema:
 *               type: string
 *            description: Search on the Patch Serial Number
 *       responses:
 *         '201':
 *           description: Patch  Information is provided.
 */

//Get Request

router.post("/patchinventory", getPatchInventory,apiFinalProcess)

router.get("/patchinventory", getPatchInventory,apiFinalProcess)
/**
 * @openapi
 *  /api/patch/:
 *   post:
 *       tags:
 *         - Patch
 *       summary: Create new Patch
 *       requestBody:
 *         description: New patch is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Patch_create'
 *       responses:
 *         '201':
 *           description: Patch Information is added.
 */

router.post("/", createPatch,apiFinalProcess)
/**
 * @openapi
 * /api/patch/:
 *   put:
 *       tags:
 *         - Patch
 *       summary: update patient patch
 *       requestBody:
 *         description: New patient patch is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patch_create_group_id'
 *       responses:
 *         '201':
 *           description: Update patch Information of the patient.

 */

router.put("/", updatePatch)

/**
 * @openapi
 * /api/patch/{patch_uuid}:
 *   put:
 *       tags:
 *         - Patch
 *       summary: Update patient patch
 *       requestBody:
 *         description: New patient patch is updated with all the necessary information
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Patch_create'
 *       responses:
 *         '201':
 *           description: Patch Update is added.
 *       parameters:
 *          - in: path
 *            name: patch_uuid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific  patch
 */

router.put("/:patch_uuid", updatePatchUuid,apiFinalProcess)

/**
 * @openapi
 *  /api/patch/{patch_serial}:
 *   get:
 *       tags:
 *         - Patch
 *       summary: Patch Inventory
 *       parameters:
 *          - in: path
 *            name: patch_serial
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: Provide the patch_serial number of specific patch 
 *       responses:
 *         '201':
 *           description: Patch  Information is provided.
 */

//Get Request

router.get("/:patch_serial", checkPatchSerial,apiFinalProcess)

module.exports = router
