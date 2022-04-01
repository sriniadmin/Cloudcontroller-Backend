var express = require("express")
var router = express.Router()
var { loginUser, logoutUser } = require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 * /api/sign/logout:
 *   get:
 *       tags:
 *         - Users
 *       summary: Logout from the System
 *       responses:
 *         '201':
 *           description: User Logout Successful
 */

router.get("/logout", logoutUser, apiFinalProcess)

/**
 * @openapi
 * /api/sign/login:
 *   post:
 *       tags:
 *         - Users
 *       summary: Login to the System
 *       requestBody:
 *         description: Login to the System with Credentials
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         '201':
 *           description: User Login
 */

router.post("/login", loginUser,apiFinalProcess)

module.exports = router
