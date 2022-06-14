var express = require("express")
var router = express.Router()
var {
    download,
    upload,
    getLoggerData
} = require("../../old_code_refactor/logger")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

/**
 * @openapi
 *  /api/logger/:
 *   get:
 *       tags:
 *         - Loggers
 *       summary: Loggers
 *       responses:
 *         '200':
 *           description: download Loggers
 *       parameters:
 *          - in: query
 *            name: patienUUID
 *            default: 0
 *            schema:
 *               type: string
 *            description: patient id
 *          - in: query
 *            name: fileName
 *            default: 0
 *            schema:
 *               type: string
 *            description: file name
 */

router.get("/download", download, apiFinalProcess)

/**
 * @openapi
  *  /api/logger/:
 *   post:
 *       tags:
 *         - Loggers
 *       summary: Loggers
 *       responses:
 *         '200':
 *           description: download Loggers
 *       parameters:
 *          - in: query
 *            name: patienUUID
 *            default: 0
 *            schema:
 *               type: string
 *            description: patient id
 *          - in: query
 *            name: fileName
 *            default: 0
 *            schema:
 *               type: string
 *            description: file name
 */

router.post("/upload", upload, apiFinalProcess)


/**
 * @openapi
 *  /api/logger/:
 *   get:
 *       tags:
 *         - Loggers
 *       summary: Loggers
 *       responses:
 *         '200':
 *           description: download Loggers
 *       parameters:
 *          - in: query
 *            name: patienUUID
 *            default: 0
 *            schema:
 *               type: string
 *            description: patient id
 *          - in: query
 *            name: fileName
 *            default: 0
 *            schema:
 *               type: string
 *            description: file name
 */

 router.get("/", getLoggerData, apiFinalProcess)


module.exports = router