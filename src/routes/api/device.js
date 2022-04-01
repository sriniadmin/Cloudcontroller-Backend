//This handles patch inventory
var express = require("express")
var router = express.Router()
const { getDevices, getDevicesFactoryFile } = require("../../dbcontrollers/device.controller")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")




/**
* @openapi
*  /api/device/:
*   get:
*       tags:
*         - Device
*       summary: Inventory of the Devices
*       responses:
*         '201':
*           description: Device Information is provided.
*       parameters:
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
*            description: Filter on fields:serial_number=123
*/

router.get("/", getDevices, apiFinalProcess)

/**
 * @openapi
 *  /api/device/file:
 *   get:
 *       tags:
 *         - Device
 *       summary: Inventory of the Devices
 *       responses:
 *         '201':
 *           description: Device Information is provided.
 *       parameters:
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
 *            description: Filter on fields:serial_number=123
 */

router.get("/file", getDevicesFactoryFile, apiFinalProcess)

module.exports = router