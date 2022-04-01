//This handles patch inventory
var express = require("express")
var router = express.Router()
var { createRole, getRole, deleteRole, updateRole } = require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 *  /api/role/:
 *   get:
 *       tags:
 *         - Role
 *       summary: fetch all ROLE
 *       responses:
 *         '201':
 *           description: ROLE  Information is provided.
 *       parameters:
 *          - in: query
 *            name: tenant_id
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The tenant_id of specific license patient
 *          - in: query
 *            name: role_name
 *            default: 0
 *            schema:
 *               type: string
 *            description: The tenant_id of specific license patient
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
 *            name: filter
 *            default: 0
 *            schema:
 *               type: string
 *            description: Filter on the roles
 */

//Get Request

router.get("/", getRole, apiFinalProcess)

/**
 * @openapi
 *  /api/role/:
 *   post:
 *       tags:
 *         - Role
 *       summary: Create new ROLE
 *       requestBody:
 *         description: New ROLE is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role_create'
 *       responses:
 *         '201':
 *           description: ROLE Information is added.
 */

router.post("/", createRole, apiFinalProcess)


/**
 * @openapi
 *  /api/role/:
 *   put:
 *       tags:
 *         - Role
 *       summary: Update ROLE
 *       requestBody:
 *         description: Update Role with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role_update'
 *       responses:
 *         '201':
 *           description: ROLE Information is added.
 */

router.put("/", updateRole, apiFinalProcess)


/**
 * @openapi
 *  /api/role/:
 *   delete:
 *       tags:
 *         - Role
 *       summary: delete ROLE
 *       responses:
 *         '201':
 *           description: ROLE is deleted.
 *       parameters:
 *       - in: query
 *         name: role_uuid
 *         schema:
 *            type: string
 *         description: role_uuid as filter
 */

router.delete("/", deleteRole, apiFinalProcess)




module.exports = router
