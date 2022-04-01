var express = require("express")
var router = express.Router()
var {
    getTask,
    createTasks,
} = require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 *  /api/tasks/:
 *   get:
 *       tags:
 *         - Task
 *       summary: Inventory of the task
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
 *            name: pid
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

router.get("/", getTask, apiFinalProcess)


/**
 * @openapi
 *  /api/tasks/:
 *   post:
 *       tags:
 *         - Task
 *       summary: Create new task
 *       requestBody:
 *         description: New task is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       responses:
 *         '201':
 *           description: Task  Information is added.
 */

router.post("/", createTasks, apiFinalProcess)


module.exports = router
