//This handles patch inventory
var express = require("express")
var router = express.Router()
var { getConnector,createConnector } = require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")







/**
 * @openapi
 *  /api/connectors/:
 *   get:
 *       tags:
 *         - Connector
 *       summary: Form Connector
 *       responses:
 *         '201':
 *           description: Connectors  Information is provided.
 */

//Get Request

router.get("/", getConnector,apiFinalProcess)

/**
 * @openapi
 *  /api/connectors/:
 *   post:
 *       tags:
 *         - Connector
 *       summary: Create new Connector
 *       requestBody:
 *         description: New Connector is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Connector'
 *       responses:
 *         '201':
 *           description: Connector Information is added.
 */



router.post("/", createConnector,apiFinalProcess)






module.exports = router
