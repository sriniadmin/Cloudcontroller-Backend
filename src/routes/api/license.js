var express = require("express")
var router = express.Router()
var {
createLicense, getLicense
} = require("../../old_code_refactor/license")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 * /api/license/:
 *   get:
 *       tags:
 *         - License
 *       summary: Form license
 *       responses:
 *         '201':
 *           description: license  Information is provided.
 *       parameters:
 *          - in: query
 *            name: tenant_id
 *            default: 0
 *            schema:
 *               type: uuid
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
 *            description: Search the license
 */


router.get("/", getLicense, apiFinalProcess)

/**
 * @openapi
 * /api/license/:
 *   post:
 *       tags:
 *         - License
 *       summary: Create new License
 *       requestBody:
 *         description: New License is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/License'
 *       responses:
 *         '201':
 *           description: License  Information is added.
 */

router.post("/", createLicense, apiFinalProcess)

//let license=[{"sesnors":"BP","spo2"}]
//licesne[0]={sensors:"spo2","bp","advac":}
//license[0]['sensors]={"spo2","bp"}

//"SPO2 SENSOR,BP SENSOR,DIGITAL SCALE"


module.exports = router
