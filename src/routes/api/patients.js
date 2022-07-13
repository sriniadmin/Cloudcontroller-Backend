// This would be handling the user signup usecases
const logger = require("../../config/logger");
var express = require("express");

var router = express.Router();

const {
    createPatientInBulk,
    deletePatient,
    getUserPatientMap,
    getPatientDetail,
    createPatient,
    updatePatient,
    createPatientPatchMap,
    getPatientPatch,
    getPatientSensorData,
    getPatientOTP,
    createPatientNotes,
    getPatientNotes,
    createPatientLocation,
    getPatientLocation,
    createPatientVital,
    getPatientVital,
    updatePatientVital,
    createPatientPractitioner,
    getPatientPractitioner,
    createPatientVitalThreshold,
    getPatientVitalThreashold,
    getPatientReport,
    getPatientTrend,
    createPatientPrescription,
    updatePatientPrescription,
    getPatientPrescription,
    createPatientAppointment,
    getPatientAppointment,
    createUserPatientMap,
    getEws,
    createEws,
    updatePatientPatchMap,
    createPatientMedication,
    deboardPatientPatch,
    getPatientAllergy,
    updatePatientAllergy,
    createPatientAllergy,
    getPatientMedicalHistory,
    createPatientMedicalHistory,
    updatePatientMedicalHistory,
    getDeboardReport,
    createPatientProcedure,
    getPatientProcedure,
    updatePatientProcedure,
    patientActions,
    editPatient,
    addNewPatient,
    createPatientNoteAttachment,
    downloadNoteAttachment
} = require("../../business_logic/routes/patient")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse");


//Api Routes

/**
 * @openapi
 * /api/patients/{pid}:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the Patient
 *       responses:
 *         '201':
 *           description: Patient Demographic Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific patient
 *          - in: query
 *            name: limit
 *            default: 100
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
 *          - in: query
 *            name: duration
 *            default: 3
 *            schema:
 *               type: string
 *            description: The duration are 1(8hrs), 2(12 hrs), 3(24 hrs) , 4(48 hr), 5 (76 hrs), 6 (7 days)
 *
 */

router.get("/:pid", getPatientDetail, apiFinalProcess)


/**
 * @openapi
 * /api/patients/:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create new Patient
 *       requestBody:
 *         description: New patient is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patient_Transaction'
 *       responses:
 *         '201':
 *           description: Patient Demographic Information is added.
 */
router.post("/", addNewPatient, apiFinalProcess)

/**
 * @openapi
 * /api/patients/bulkAdd:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Add Patient In Bulk
 *       requestBody:
 *         description: New patients are created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Patient_Transaction'                
 *       responses:
 *         '201':
 *           description: Patient Demographic Information is added.
 */
router.post("/bulkAdd", createPatientInBulk, apiFinalProcess)



/**
 * @openapi
 * /api/patients/{pid}:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Update Patient
 *       requestBody:
 *         description: New patient is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patient_Update'
 *       responses:
 *         '201':
 *           description: Patient Demographic Information is added.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific patient
 */
router.post("/:pid", editPatient, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/patch_map:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create patient patch
 *       requestBody:
 *         description: New patient patch is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Patch_Patient_Map'
 *       responses:
 *         '201':
 *           description: Patient patch Information is added.
 *
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific patch
 */

router.post("/:pid/patch_map", createPatientPatchMap, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/patch_map:
 *   put:
 *       tags:
 *         - Patient
 *       summary: Update patient patch
 *       requestBody:
 *         description: Provide the valid pid and patch_uuid to update the patch patient map
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Update_Patch_Patient_Map'
 *       responses:
 *         '201':
 *           description: Update the patch patient map duration and config.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The pid of specific patch
 */

router.put("/:pid/patch_map", updatePatientPatchMap, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/patch_map:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the Patch
 *       responses:
 *         '201':
 *           description: Patch Demographic Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific patch
 *          - in: query
 *            name: limit
 *            default: 100
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
router.get("/:pid/patch_map", getPatientPatch, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/sensordata:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the sensordata
 *       responses:
 *         '201':
 *           description: sensordata  Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific sensordata
 *          - in: query
 *            name: limit
 *            default: 100
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
 *            name: start
 *            default: 0
 *            schema:
 *               type: string
 *            description: Filter from the patient to fetch Sensor data with start_time and end_time
 *          - in: query
 *            name: stop
 *            default: 0
 *            schema:
 *               type: string
 *            description: Filter from the patient to fetch Sensor data with start_time and end_time
 *          - in: query
 *            name: motion
 *            default: -1
 *            schema:
 *               type: string
 *            description: |
 *                Filter based on the motion
 *
 *                Motion defines
 *
 */
router.get("/:pid/sensordata", getPatientSensorData, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/otp:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the Patient
 *       responses:
 *         '201':
 *           description: Provides the OTP for the patient.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific patient
 *          - in: query
 *            name: limit
 *            default: 100
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
router.get("/:pid/otp", getPatientOTP, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/notes:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create patient note
 *       requestBody:
 *         description: New patient is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notes_create'
 *       responses:
 *         '201':
 *           description: Patient Note Information is added.
 *
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific notes
 */

router.post("/:pid/notes", createPatientNotes, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/notes/upload:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create patient note
 *       requestBody:
 *         description: New patient is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notes_create'
 *       responses:
 *         '201':
 *           description: Patient Note Information is added.
 *
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific notes
 */

 router.post("/:pid/notes/upload", createPatientNoteAttachment, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/notes:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the Notes
 *       responses:
 *         '201':
 *           description: Notes Demographic Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific notes
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
 *            name: note
 *            default: 0
 *            schema:
 *               type: string
 *            description: Search the note
 */
router.get("/:pid/notes", getPatientNotes, apiFinalProcess);


router.get("/:pid/notes/download", downloadNoteAttachment, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/location:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create patient location
 *       requestBody:
 *         description: New patient is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PatientLocation'
 *       responses:
 *         '201':
 *           description:  Patient Location Information is added.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific location
 */

router.post("/:pid/location", createPatientLocation, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/location:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the location
 *       responses:
 *         '201':
 *           description: location Demographic Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific location
 *          - in: query
 *            name: limit
 *            default: 1
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
router.get("/:pid/location", getPatientLocation, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/vital:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create patient vital
 *       requestBody:
 *         description: New patient vital is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vital_create'
 *       responses:
 *         '201':
 *           description: Patient Vital Information is added.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific vital
 */

router.post("/:pid/vital", createPatientVital, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/vital:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the Vitals
 *       responses:
 *         '201':
 *           description: Vitals Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific vitlas
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
router.get("/:pid/vital", getPatientVital, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/vital:
 *   put:
 *       tags:
 *         - Patient
 *       summary: update patient vital
 *       requestBody:
 *         description: New patient vital is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vital_create'
 *       responses:
 *         '201':
 *           description: Update Vital Information of the patient.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific vital
 */

router.put("/:pid/vital", updatePatientVital, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/practictioner:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create patient practictioner
 *       requestBody:
 *         description: New patient practictioner is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prac_create'
 *       responses:
 *         '201':
 *           description: Patient Practictioner Information is added.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific practictioner
 */

router.post("/:pid/practictioner", createPatientPractitioner, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/practictioner:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the practictioner
 *       responses:
 *         '201':
 *           description: practictioner Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific practictioner
 *          - in: query
 *            name: limit
 *            default: 100
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
router.get("/:pid/practictioner", getPatientPractitioner, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/vitalthreshold:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create patient vital threshold
 *       requestBody:
 *         description: New patient vital threshold is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vital_Threshold'
 *       responses:
 *         '201':
 *           description: vital threshold  Information is added.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific vital threshold
 */

router.post("/:pid/vitalthreshold", createPatientVitalThreshold, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/vitalthreshold:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the vital threshold
 *       responses:
 *         '201':
 *           description: vital threshold Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific vital threshold
 *          - in: query
 *            name: limit
 *            default: 100
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
router.get("/:pid/vitalthreshold", getPatientVitalThreashold, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/report:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the patient report
 *       responses:
 *         '201':
 *           description: Patient report Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The patient report
 *          - in: query
 *            name: limit
 *            default: 100
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
 *          - in: query
 *            name: duration
 *            default: 3
 *            schema:
 *               type: string
 *            description: The duration are 1(8hrs), 2(12 hrs), 3(24 hrs) , 4(48 hr), 5 (76 hrs), 6 (7 days)
 */

router.get("/:pid/report", getPatientReport, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/trend:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the Trends
 *       responses:
 *         '201':
 *           description: Trends Info is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific location
 *          - in: query
 *            name: limit
 *            default: 1
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
 *            default: start_date=2012-01-01
 *            schema:
 *               type: string
 *            description: The filter takes start_date and provides the trend for that day - yyyy-mm-dd
 *          - in: query
 *            name: endDate
 *            default: ''
 *            schema:
 *               type: string
 *            description: The endDate format - yyyy-mm-dd
 *          - in: query
 *            name: duration
 *            default: 3
 *            schema:
 *               type: string
 *            description: The duration are 1(8hrs), 2(12 hrs), 3(24 hrs) , 4(48 hr), 5 (76 hrs), 6 (7 days)
 */
router.get("/:pid/trend", getPatientTrend, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/prescription:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create patient Prescription
 *       requestBody:
 *         description: New patient prescriptions is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prescription_create'
 *       responses:
 *         '201':
 *           description: Prescriptions Information is added.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific  prescription
 */

router.post("/:pid/prescription", createPatientPrescription, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/prescription:
 *   put:
 *       tags:
 *         - Patient
 *       summary: Update patient Prescription
 *       requestBody:
 *         description: New patient prescriptions is updated with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Prescription_create'
 *       responses:
 *         '201':
 *           description: Prescriptions Information is updated.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific  prescription
 */

router.put("/:pid/prescription", updatePatientPrescription, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/prescription:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the prescription
 *       responses:
 *         '201':
 *           description: Prescription Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific Prescription
 *          - in: query
 *            name: limit
 *            default: 20
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
router.get("/:pid/prescription", getPatientPrescription, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/appointment:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create patient appointment
 *       requestBody:
 *         description: New patient appointment is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment_create'
 *       responses:
 *         '201':
 *           description: appointment Information is added.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific  appointment
 */
router.post("/:pid/appointment", createPatientAppointment, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/appointment:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the Appointment
 *       responses:
 *         '201':
 *           description: Appointment  Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific appointment
 *          - in: query
 *            name: limit
 *            default: 1
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
router.get("/:pid/appointment", getPatientAppointment, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/user_patient_map:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create patient user patient map
 *       requestBody:
 *         description: New patient user patient map is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User_Patient_Map'
 *       responses:
 *         '201':
 *           description: user patient map Information is added.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific  user patient map
 */
router.post("/:pid/user_patient_map", createUserPatientMap, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/user_patient_map:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the user patient map
 *       responses:
 *         '201':
 *           description: user patient map  Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific user patient map
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
router.get("/:pid/user_patient_map", getUserPatientMap, apiFinalProcess);

/**
 * @openapi
 * /api/patients/{pid}/ews:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create EWS
 *       requestBody:
 *         description: New EWS is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ews_create'
 *       responses:
 *         '201':
 *           description: EWS Information is added.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific patch
 */
router.post("/:pid/ews", createEws, apiFinalProcess)


/**
* @openapi
* /api/patients/{pid}/ews:
*   get:
*       tags:
*         - Patient
*       summary: Information of the ews
*       responses:
*         '201':
*           description: EWS Information is provided.
*       parameters:
*          - in: path
*            name: pid
*            default: 0
*            schema:
*               type: uuid
*            description: The uuid of specific EWS
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
router.get("/:pid/ews", getEws, apiFinalProcess)

/**
 * @openapi
 * /api/patients/{pid}:
 *   delete:
 *       tags:
 *         - Patient
 *       summary: Delete Patient
 *       responses:
 *         '201':
 *           description: Patient delete with pid.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific patient
 */
router.delete("/:pid", deletePatient, apiFinalProcess)


/**
 * @openapi
 * /api/patients:
 *   delete:
 *       tags:
 *         - Patient
 *       summary: Delete Patient
 *       responses:
 *         '201':
 *           description: Patient delete with pid.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific patient
 */
 router.delete("/", patientActions, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/medication:
 *   post:
 *       tags:
 *         - Patient
 *       summary: Create Patient Medication
 *       requestBody:
 *         description: New patient medication is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patient_Medication'
 *       responses:
 *         '201':
 *           description: Patient Medication Information of the patient.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific patient
 */
router.post("/:pid/medication", createPatientMedication, apiFinalProcess)

/**
* @openapi
* /api/patients/{pid}/allergy:
*   post:
*       tags:
*         - Patient
*       summary: Create new Allergy
*       requestBody:
*         description: New Allergy is created with all the necessary information
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Allergy'
*       responses:
*         '201':
*           description: Allergy is created.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The pid of the patient
 */
router.post("/:pid/allergy", createPatientAllergy, apiFinalProcess)

/**
 * @openapi
 * /api/patients/{pid}/allergy:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the allergy
 *       responses:
 *         '201':
 *           description: Allergy Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The pid of the patient
 */

router.get("/:pid/allergy", getPatientAllergy, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/allergy:
 *   put:
 *       tags:
 *         - Patient
 *       summary: update patient allergy
 *       requestBody:
 *         description: New patient allergy is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Allergy'
 *       responses:
 *         '201':
 *           description: Update Allergy Information of the patient.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The pid of the patient
 */

router.put("/:pid/allergy", updatePatientAllergy, apiFinalProcess)

/**
* @openapi
* /api/patients/{pid}/medical_history:
*   post:
*       tags:
*         - Patient
*       summary: Create new Medical History
*       requestBody:
*         description: New Medical History is created with all the necessary information
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Medical_history'
*       responses:
*         '201':
*           description: Medical History is created.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The pid of the patient
 */
router.post("/:pid/medical_history", createPatientMedicalHistory, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/medical_history:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the Medical History
 *       responses:
 *         '201':
 *           description: Medical History Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The pid of the patient
 */
router.get("/:pid/medical_history", getPatientMedicalHistory, apiFinalProcess)

/**
 * @openapi
 * /api/patients/{pid}/medical_history:
 *   put:
 *       tags:
 *         - Patient
 *       summary: update patient Medical History
 *       requestBody:
 *         description: New patient Medical History is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Medical_history'
 *       responses:
 *         '201':
 *           description: Update Medical History Information of the patient.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The pid of the patient
 */
router.put("/:pid/medical_history", updatePatientMedicalHistory, apiFinalProcess)

/**
* @openapi
* /api/patients/{pid}/deboard:
*   delete:
*       tags:
*         - Patient
*       summary: Delete all the patches associated with the pid
*       responses:
*         '201':
*           description: Delete all the patches associated with the pid.
*       parameters:
*          - in: path
*            name: pid
*            default: 0
*            schema:
*               type: uuid
*            description: Delete all the patches associated with the pid.
*/
router.delete("/:pid/deboard", deboardPatientPatch, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/deboardReport:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the ews
 *       responses:
 *         '201':
 *           description: Deboard report opf the patient  is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific deboarded patient
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

router.post("/:pid/medication", createPatientMedication, apiFinalProcess);

function newD(req, res, next) {
    logger.debug("TESTING deboard");
    req.apiRes = {}
    req.apiRes["response"] = {
        patientMedicationData: medication,
        count: medication.length,
    }
    res.response(req.apiRes)
    return next();
}
/**
 * @openapi
 * /api/patients/{pid}/deboard:
 *   delete:
 *       tags:
 *         - Patient
 *       summary: Delete all the patches associated with the pid
 *       responses:
 *         '201':
 *           description: Delete all the patches associated with the pid.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: Delete all the patches associated with the pid.
 *          - in: query
 *            name: limit
 *            default: 1
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
 *            default: start_date=2012-01-01
 *            schema:
 *               type: string
 *            description: The filter takes start_date and provides the trend for that day - yyyy-mm-dd
 *          - in: query
 *            name: endDate
 *            default: ''
 *            schema:
 *               type: string
 *            description: The endDate format - yyyy-mm-dd
 *          - in: query
 *            name: duration
 *            default: 3
 *            schema:
 *               type: string
 *            description: The duration are 1(8hrs), 2(12 hrs), 3(24 hrs) , 4(48 hr), 5 (76 hrs), 6 (7 days)
 */
router.delete("/:pid/deboard", deboardPatientPatch, apiFinalProcess);


/**
 * @openapi
 * /api/patients/{pid}/deboardReport:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the ews
 *       responses:
 *         '201':
 *           description: Deboard report opf the patient  is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The uuid of specific deboarded patient
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

router.get("/:pid/deboardReport", getDeboardReport, apiFinalProcess);

/**
* @openapi
* /api/patients/{pid}/procedure:
*   post:
*       tags:
*         - Patient
*       summary: Create new procedure
*       requestBody:
*         description: New procedure is created with all the necessary information
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Procedure'
*       responses:
*         '201':
*           description: procedure is created.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The pid of the patient
 */
router.post("/:pid/procedure", createPatientProcedure, apiFinalProcess)

/**
 * @openapi
 * /api/patients/{pid}/procedure:
 *   put:
 *       tags:
 *         - Patient
 *       summary: update patient procedure
 *       requestBody:
 *         description: New patient procedure is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Procedure'
 *       responses:
 *         '201':
 *           description: Update procedure Information of the patient.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The pid of the patient
 */

router.put("/:pid/procedure", updatePatientProcedure, apiFinalProcess)


/**
 * @openapi
 * /api/patients/{pid}/procedure:
 *   get:
 *       tags:
 *         - Patient
 *       summary: Information of the procedure
 *       responses:
 *         '201':
 *           description: procedure Information is provided.
 *       parameters:
 *          - in: path
 *            name: pid
 *            default: 0
 *            schema:
 *               type: uuid
 *            description: The pid of the patient
 *          - in: query
 *            name: startDate
 *            default: ''
 *            schema:
 *               type: string
 *            description: The startDate format - yyyy-mm-dd
 *          - in: query
 *            name: endDate
 *            default: ''
 *            schema:
 *               type: string
 *            description: The endDate format - yyyy-mm-dd
 */

router.get("/:pid/procedure", getPatientProcedure, apiFinalProcess)


module.exports = router;
