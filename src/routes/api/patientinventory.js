const logger = require("../../config/logger")
var express = require("express")
var router = express.Router()

const {
  apiFinalProcess
} = require("../../middleware/apiFinalResponse")


const {
  patientInventory, registerPatientInventory
} = require("../../business_logic/routes/patient")

/**
 * @openapi
 * /api/patientinventory:
 *   get:
 *       tags:
 *         - PatientInventory
 *       summary: Inventory of the Patient
 *       responses:
 *         '201':
 *           description: Patient Demographic Information is provided.
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
 *            description: fname=joh&lname=do&location_uuid=<>&med_red=1234
 *          - in: query
 *            name: duration
 *            default: 3
 *            schema:
 *               type: string
 *            description: The duration are 1(8hrs), 2(12 hrs), 3(24 hrs) , 4(48 hr), 5 (76 hrs), 6 (7 days), 7 (14 days)
 */


router.get("/", patientInventory, apiFinalProcess)

/**
 * @openapi
 * /api/patientinventory/patient_injection:
 *   get:
 *       tags:
 *         - PatientInventory
 *       summary: Inventory of the Patient
 *       responses:
 *         '201':
 *           description: Patient Demographic Information is provided.
 *       parameters:
 *          - in: query
 *            name: pid
 *            schema:
 *               type: String
 *          - in: query
 *            name: tenant_id
 *            schema:
 *               type: String
 */


 router.get("/patient_injection", registerPatientInventory, apiFinalProcess)


module.exports = router
