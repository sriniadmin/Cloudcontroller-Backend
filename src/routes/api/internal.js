

var express = require("express")
var router = express.Router()
const upload = require("../../middleware/upload")

var {createUuid,textToSpeech,imageUpload,validateModels, getImages, reportUpload, getLabReport, createLabReport, getReport, updateImageUpload, getLabReportById}=require("../../old_code_refactor/internalUser")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")







/**
 * @openapi
 *  components:
 *   schemas:
 *    getUUID:
 *     type: object
 *     properties:
 *       uuidtype:
 *         type: string
 *         default: patient
 *       tenantuuid:
 *         type: string
 *         default: tenant7346f4c1-8f3d-4359-9153-b402aea37c76
 */

/**
 * @openapi
 *  /api/internal/getuuid:
 *   post:
 *       tags:
 *         - Internal
 *       summary: Get UUID for a specific type
 *       requestBody:
 *         description: New user is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getUUID'
 *       responses:
 *         '201':
 *           description: User  Information is added.
 */

router.post("/getuuid", createUuid,apiFinalProcess)

/**
 * @openapi
 *  components:
 *   schemas:
 *    Text_Speech:
 *     type: object
 *     properties:
 *       text:
 *         type: string
 *         default: convert me
 */



/**
 * @openapi
 *  components:
 *   schemas:
 *    Text_Speech:
 *     type: object
 *     properties:
 *       text:
 *         type: string
 *         default: convert me
 */

/**
 * @openapi
 * /api/internal/texttospeech:
 *   post:
 *       tags:
 *         - Internal
 *       summary: Text to Audio coversion
 *       requestBody:
 *         description: New text to audio
 *         required: true
 *         content:
 *           application/x-www-form-urlencoded:
 *             schema:
 *               $ref: '#/components/schemas/Text_Speech'
 *       responses:
 *         '201':
 *           description: Text to Audio Conversion
 */

router.post("/texttospeech", textToSpeech)

/**
 * @openapi
 * /api/internal/upload:
 *   post:
 *       tags:
 *         - Internal
 *       summary: Create Image
 *       requestBody:
 *         description: New image
 *         required: true
 *         content:
 *            multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       responses:
 *         '201':
 *           description: Image  Information is added.
 
*/

router.post("/upload", upload.single("data"),imageUpload,apiFinalProcess)

/**
 * @openapi
 * /api/internal/upload:
 *   put:
 *       tags:
 *         - Internal
 *       summary: Create Image
 *       requestBody:
 *         description: New image
 *         required: true
 *         content:
 *            multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/Image_Update'
 *       responses:
 *         '201':
 *           description: Image  Information is added.
 
*/

router.put("/upload", upload.single("data"),updateImageUpload,apiFinalProcess) 


/**
 * @openapi
 * /api/internal/report:
 *   post:
 *       tags:
 *         - Internal
 *       summary: Create Image
 *       requestBody:
 *         description: New image
 *         required: true
 *         content:
 *            multipart/form-data:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       responses:
 *         '201':
 *           description: Image  Information is added.
 
*/

router.post("/report", upload.single("data"),reportUpload,apiFinalProcess)

/**
 * @openapi
 *  /api/internal/upload:
 *   get:
 *       tags:
 *         - Internal
 *       summary: Get Images
 *       responses:
 *         '201':
 *            description: Images  Information is provided.
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
 *            name: template_uuid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: Filter based on template_uuid like note_uuid
 *          - in: query
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: Filter based on pid 
 
 */
router.get("/upload", getImages,apiFinalProcess)


/**
 * @openapi
 *  /api/internal/validatemodels:
 *   post:
 *       tags:
 *         - Internal
 *       summary: get all the validate fields for the records
 *       responses:
 *         '201':
 *           description: validate Information is added.
 */

router.post("/validatemodels", validateModels,apiFinalProcess)

/**
 * @openapi
 * /api/internal/lab_report:
 *   post:
 *       tags:
 *         - Internal
 *       summary: Create Lab report
 *       requestBody:
 *         description: New lab report
 *         required: true
 *         content:
 *            application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lab_Report'
 *       responses:
 *         '201':
 *           description: Lab report  Information is added.
 
*/

router.post("/lab_report",createLabReport,apiFinalProcess)


/**
 * @openapi
 *  /api/internal/lab_report:
 *   get:
 *       tags:
 *         - Internal
 *       summary: Get Lab report
 *       responses:
 *         '201':
 *            description: Lab report  Information is provided.
 
 */
 router.get("/lab_report", getLabReport,apiFinalProcess)


 /**
 * @openapi
 *  /api/internal/lab_report/:id:
 *   get:
 *       tags:
 *         - Internal
 *       summary: Get Lab report
 *       responses:
 *         '201':
 *            description: Lab report  Information is provided.
 
 */
  router.get("/lab_report/:id", getLabReportById,apiFinalProcess)


 /**
 * @openapi
 *  /api/internal/report:
 *   get:
 *       tags:
 *         - Internal
 *       summary: Get Images
 *       responses:
 *         '201':
 *            description: Images  Information is provided.
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
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: Filter based on pid 
 *          - in: query
 *            name: report_uuid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: Filter based on report_uuid 
 
 */
router.get("/report", getReport,apiFinalProcess)


module.exports = router
