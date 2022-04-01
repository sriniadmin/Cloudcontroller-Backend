//This handles patch inventory
var express = require("express")
var router = express.Router()
var { getBed, createBed } = require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 *  /api/bed/bedinventory:
 *   get:
 *       tags:
 *         - Bed
 *       summary: Form BED
 *       responses:
 *         '201':
 *           description: BED  Information is provided.
 */

//Get Request

router.get("/bedinventory", getBed, apiFinalProcess)

/**
 * @openapi
 *  /api/bed/:
 *   post:
 *       tags:
 *         - Bed
 *       summary: Create new BED
 *       requestBody:
 *         description: New BED is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bed_create'
 *       responses:
 *         '201':
 *           description: BED Information is added.
 */

router.post("/", createBed, apiFinalProcess)

module.exports = router
