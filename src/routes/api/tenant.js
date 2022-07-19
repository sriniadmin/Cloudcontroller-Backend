var express = require("express")
var router = express.Router()

var {
    getTenant,
    createTenant,
    updateTenant,
    disableTenant
} = require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 * /api/tenant/tenantinventory:
 *   get:
 *       tags:
 *         - Tenants
 *       summary: Form Tenants
 *       responses:
 *         '201':
 *           description: Tenants  Information is provided.
 */

//Get Request

router.get("/tenantinventory", getTenant, apiFinalProcess)

/**
 * @openapi
 * /api/tenant/:
 *   post:
 *       tags:
 *         - Tenants
 *       summary: Create new tenant
 *       requestBody:
 *         description: New Tenant is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenant_create'
 *       responses:
 *         '201':
 *           description: Tenants Information is added.
 */

router.post("/", createTenant, apiFinalProcess)

/**
 * @openapi
 * /api/tenant/{tenant_uuid}:
 *   put:
 *       tags:
 *         - Tenants
 *       summary: Update Tenant name
 *       requestBody:
 *         description: Update the tenant name by providing the tenant_uuid
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenant_update'
 *       responses:
 *         '201':
 *           description: Update the tenant_name
 *       parameters:
 *          - in: path
 *            name: tenant_uuid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The tenant_uuid of the specific tenant
 */

router.put("/:tenant_uuid", updateTenant, apiFinalProcess)

/**
 * @openapi
 * /api/tenant/:
 *   delete:
 *       tags:
 *         - Tenants
 *       summary: Create new tenant
 *       requestBody:
 *         description: New Tenant is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenant_create'
 *       responses:
 *         '201':
 *           description: Tenants Information is added.
 */

 router.delete("/:tenant_uuid", disableTenant, apiFinalProcess)

module.exports = router
