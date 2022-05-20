var express = require("express")
var router = express.Router()
var {
    createBilling,
    getBilling,
    updateBilling,
    updateBillingInformation,
    updateBillingTask
} = require("../../old_code_refactor/billing")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 * /api/billing/:
 *   get:
 *       tags:
 *         - Billing
 *       summary: Form Billing
 *       responses:
 *         '201':
 *           description: Billing  Information is provided.
 *       parameters:
 *          - in: query
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific billing patient
 *          - in: query
 *            name: bill_date
 *            default: 0
 *            schema:
 *               type: string
 *            description: The uuid of specific billing patient
 *          - in: query
 *            name: billing_uuid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The tenant_id of specific license patient
 *          - in: query
 *            name: status
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
 *            description: Search the billing
 */


router.get("/", getBilling, apiFinalProcess)

/**
 * @openapi
 * /api/billing/:
 *   post:
 *       tags:
 *         - Billing
 *       summary: Create new Billing
 *       requestBody:
 *         description: New Billing is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Billing'
 *       responses:
 *         '201':
 *           description: Billing  Information is added.
 */

router.post("/", createBilling, apiFinalProcess)

/**
 * @openapi
 * /api/billing/task:
 *   post:
 *       tags:
 *         - Billing
 *       summary: Update task for billing
 *       requestBody:
 *         description: Update task for billing 99457 99458
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Billing'
 *       responses:
 *         '201':
 *           description: Billing  Information is added.
 */
router.post("/task", updateBillingTask, apiFinalProcess)

/**
 * @openapi
 * /api/billing/:
 *   put:
 *       tags:
 *         - Billing
 *       summary: Create new Billing
 *       requestBody:
 *         description: New Billing is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Billing_Information'
 *       responses:
 *         '201':
 *           description: Billing  Information is added.
 */

 router.put("/", updateBillingInformation, apiFinalProcess)



module.exports = router
