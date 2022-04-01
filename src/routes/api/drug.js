//This handles patch inventory
var express = require("express")
var router = express.Router()

const postgresSequelizeDB = require("../../config/emrpostgresdb")
var initModels =
    require("../../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(postgresSequelizeDB)

var { getProduct, createProduct } = require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 *  /api/product/:
 *   get:
 *       tags:
 *         - Product
 *       summary: Product Information
 *       responses:
 *         '201':
 *           description: product Information is provided.
 *       parameters:
 *          - in: query
 *            name: generic_name
 *            default: ramipril
 *            schema:
 *               type: string
 *            description: Generic name of the product
 *          - in: query
 *            name: product_name
 *            default: ramipril
 *            schema:
 *               type: string
 *            description: Product name
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
 *            description: The number of items to skip before starting to collect the result set
 */

//Get Request

router.get("/", getProduct,apiFinalProcess)

/**
 * @openapi
 *  /api/product/:
 *   post:
 *       tags:
 *         - Product
 *       summary: Create Product
 *       requestBody:
 *         description: New Product is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       responses:
 *         '201':
 *           description: Product  Information is added.
 */

 router.post("/", createProduct,apiFinalProcess)


module.exports = router
