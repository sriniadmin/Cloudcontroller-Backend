var express = require("express")
var router = express.Router()
var {
    getUserProfile,
    updateUser,
    getUserInventory,
    createUser,
    passwordReset,
    // createUserTenant,
    getUserTenant,
} = require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 *  /api/users/userinventory:
 *   get:
 *       tags:
 *         - Users
 *       summary: Inventory of the User
 *       responses:
 *         '201':
 *           description: User  Information is provided.
 *       parameters:
 *          - in: query
 *            name: limit
 *            default: 10
 *            schema:
 *               type: integer
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: offset
 *            default: 0
 *            schema:
 *               type: integer
 *            description: The number of items to return
 *          - in: query
 *            name: tenant_id
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The tenant_id of specific  facility
 *          - in: query
 *            name: filter
 *            default: 0
 *            schema:
 *               type: string
 *            description: The number of items to skip before starting to collect the result set
 */

router.get("/userinventory", getUserInventory, apiFinalProcess)

/**
 * @openapi
 *  /api/users/profile:
 *   get:
 *       tags:
 *         - Users
 *       summary: User Information of the logged in user
 *       responses:
 *         '201':
 *           description: User Information of the logged in user
 *       parameters:
 *          - in: query
 *            name: limit
 *            default: 100
 *            schema:
 *               type: integer
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: offset
 *            default: 0
 *            schema:
 *               type: integer
 *            description: The number of items to return
 *          - in: query
 *            name: filter
 *            default: 0
 *            schema:
 *               type: string
 *            description: The number of items to skip before starting to collect the result set
 */

router.get("/profile", getUserProfile, apiFinalProcess)

/**
 * @openapi
 *  /api/users/:
 *   post:
 *       tags:
 *         - Users
 *       summary: Create new User
 *       requestBody:
 *         description: New user is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User_create'
 *       responses:
 *         '201':
 *           description: User  Information is added.
 */

router.post("/", createUser, apiFinalProcess)

/**
 * @openapi
 * /api/users/{user_uuid}:
 *   put:
 *       tags:
 *         - Users
 *       summary: Update user
 *       requestBody:
 *         description: New user is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User_create'
 *       responses:
 *         '201':
 *           description: User  Information is added.
 *       parameters:
 *          - in: path
 *            name: user_uuid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific user
 */

router.put("/:user_uuid", updateUser, apiFinalProcess)

/**
 * @openapi
 *  /api/users/passwordReset:
 *   post:
 *       tags:
 *         - Users
 *       summary: Create new User
 *       requestBody:
 *         description: New user is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Password_Reset'
 *       responses:
 *         '201':
 *           description: User  Information is added.
 */


 router.post("/passwordReset", passwordReset, apiFinalProcess)


 /**
 * @openapi
 *  /api/users/user_tenant:
 *   post:
 *       tags:
 *         - Users
 *       summary: Create new User
 *       requestBody:
 *         description: New user is created with all the tenant necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/User_Tenant'
 *       responses:
 *         '201':
 *           description: User  Information is added.
 */


//   router.post("/user_tenant", createUserTenant, apiFinalProcess)

  /**
 * @openapi
 *  /api/users/user_tenant:
 *   get:
 *       tags:
 *         - Users
 *       summary: User Information of the logged in user
 *       responses:
 *         '201':
 *           description: User Information of the logged in user
 *       parameters:
 *          - in: query
 *            name: limit
 *            default: 100
 *            schema:
 *               type: integer
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: offset
 *            default: 0
 *            schema:
 *               type: integer
 *            description: The number of items to return
 *          - in: query
 *            name: filter
 *            default: 0
 *            schema:
 *               type: string
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: user_uuid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The user uuid 
 */

router.get("/user_tenant",getUserTenant, apiFinalProcess)


module.exports = router
