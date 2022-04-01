//This handles patch inventory
var express = require("express")
var router = express.Router()
const logger = require("../../../config/logger")
const ApiResponse = require("../../../lib/api/apiResponse")
const uuidAPIKey = require('uuid-apikey');
// Database
const Sequelize = require("sequelize")
const sequelizeDB = require("../../../config/emrmysqldb")
var initModels = require("../../../dbmodels/sequelizeEMRModels/init-models")
    .initModels
var models = initModels(sequelizeDB)

//Patch Utils
const schemaValidator = require("../../../dbcontrollers/schemaValidator")
const  SCHEMA_CODE = require("../../../lib/constants/AppEnum").SCHEMA_CODE
const  JSON_SCHEMA_CODE = require("../../../lib/constants/AppEnum").JSON_SCHEMA_CODE

const appointment_controller=require("../../../dbcontrollers/appointment.controller")
const TENANT_CODE = require("../../../lib/constants/AppEnum").TENANT_CODE
const APPOINTMENT_CODE = require("../../../lib/constants/AppEnum").APPOINTMENT_CODE

const Tenants = models.tenant
const Appointments=models.Appointment

var Appointment = function (appointmentobj) {
    // Basic Details
    this.pid=appointmentobj.pid,
    this.prac_uuid=appointmentobj.prac_uuid,
    this.date=appointmentobj.date,
    this.startTime=appointmentobj.startTime,
    this.endTime=appointmentobj.endTime


}

async function db_get_appointment_list(tenant_id, username) {
    // This async function gets the tenants matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    appointment_list = ""
    await Appointments.findAll({
            // The where class is needed to find the USER having the same tenant id
            // where: {
            //     tenant_id: tenant_id,
            //     username: username,

            // },
            raw: true,
        })
        .then((appointment_data) => {
            logger.debug("Appointment list is" + appointment_data)
            appointment_list = appointment_data
        })
        .catch((err) => {
            logger.debug("Appointment list fetch error " + tenant_id + "not found Err:" + err)
            throw new Error(
                "Appointment list fetch error -  tenant check"
            )
        })

    return appointment_list
}

async function db_create_appointment(tenant_id, appointment_data) {
    //This route created new patch in the db
    appointment_list = ""
    let pdata = new Appointment(appointment_data)
    logger.debug("appointment data is " + appointment_data)

    await Appointments.create({
            prac_uuid:appointment_data['prac_uuid'],
            date:appointment_data['date'],
            startTime:appointment_data['startTime'],
            endTime:appointment_data['endTime'],
            pid: uuidAPIKey.create()["uuid"],


        })
        .then((appointment_data) => {
            logger.debug("Appointment insert output is" + appointment_data)
            appointment_list = appointment_data
        })
        .catch((err) => {
            logger.debug(
                "Appointment insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("Appointment insert  error -  tenant check")
        })

    return appointment_list
}





async function db_get_tenant_id(tenant_name) {
    // This async function gets the appointments matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    tenant_id = ""
    await Tenants.findAll({
            where: {
                tenant_name: tenant_name,
            },
            raw: true,
        })
        .then((tenant_data) => {
            logger.debug("Tenant list is" + tenant_data)
            tenant_id = tenant_data[0]["id"]
            logger.debug("Tenant uuid " + tenant_id)
        })
        .catch((err) => {
            logger.debug(
                "Tenant with name " + tenant_name + "not found Err:" + err
            )
            throw new Error("Login Failure as part of tenancy check")
        })
    logger.debug("Done with Await of Tenant")
    return tenant_id
}



/**
 * @openapi
 *  /api/appointment/appointmentinventory:
 *   get:
 *       tags:
 *         - Appointment
 *       summary: Form Appointment
 *       responses:
 *         '201':
 *           description: Appointment  Information is provided.
 */

//Get Request

router.get("/appointmentinventory", function (req, res, next) {
    logger.debug("Appointment info is ", req.userweight, req.userRole)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant

    tenant_id = db_get_tenant_id(tenant_name)
        .then((tenant_id_result) => {
            logger.debug("Tenant uuid outside " + tenant_id_result)
            tenant_id = tenant_id_result
            if (!tenant_id) {
                error = new Error("Fetching Tenant list not working for this Request")
                return res.status(TENANT_CODE["1"].HttpStatus).json({
                    result: TENANT_CODE["1"].Code,
                    response: {},
                    error: {errMessage: TENANT_CODE["1"].Message},
                    privilege: {}
                })
            }
            db_get_appointment_list(tenant_id, username)
                .then((appointments) => {
                    logger.debug("Appointment list is " + appointments)
                    return res.status(APPOINTMENT_CODE["2"].HttpStatus).json({
                        result: APPOINTMENT_CODE["2"].Code,
                        response: {"appointments": [appointments]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("Appointment list error " + err)
                    return res.status(APPOINTMENT_CODE["1"].HttpStatus).json({
                        result: APPOINTMENT_CODE["1"].Code,
                        response: {},
                        error: {errMessage: APPOINTMENT_CODE["1"].Message},
                        privilege: {}
                    })
                })
        })
        .catch((err) => {
            logger.error("Tenant Catch - USER list error : " + err)
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {errMessage: TENANT_CODE["1"].Message, errInfo: "Tenant Catch Error"},
                privilege: {}
            })
        })
})


/**
 * @openapi
 *  /api/appointment/:
 *   post:
 *       tags:
 *         - Appointment
 *       summary: Create new Appointment
 *       requestBody:
 *         description: New Appointment is created with all the necessary information
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment_create'
 *       responses:
 *         '201':
 *           description: Appointment Information is added.
 */


router.post("/", function (req, res, next) {
    logger.debug("appointemnt  header output is ", req.headers)
    logger.debug("Appointment  Session output is ", req.session)
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant

    // Form the USER data for Insert
    let appointment_data = appointment_controller.parse_fill_appointment_details_from_req(req)
    logger.debug("User Data Variable is ", appointment_data)

    // TODO: Tenant - can be fetched from the JWT and redis cache can be used to get the tenant uuid and tenant name
    tenant_id = db_get_tenant_id(tenant_name)
        .then((tenant_id_result) => {
            logger.debug("Tenant uuid outside " + tenant_id_result)
            tenant_id = tenant_id_result
            if (!tenant_id) {
                error = new Error(
                    "Fetching tenant list not working for this Request"
                )
                return res.status(TENANT_CODE["1"].HttpStatus).json({
                    result: TENANT_CODE["1"].Code,
                    response: {},
                    error: {errMessage: TENANT_CODE["1"].Message},
                    privilege: {}
                })
            }
            db_create_appointment(tenant_id, appointment_data)
                .then((appointments) => {
                    logger.debug("Appointment  is" + appointments)
                    return res.status(APPOINTMENT_CODE["3"].HttpStatus).json({
                        result: APPOINTMENT_CODE["3"].Code,
                        response: {"appointments": [appointments]},
                        error: {},
                        privilege: {}
                    })
                })
                .catch((err) => {
                    logger.debug("Appointment Create error " + err)
                     error = new Error("appointment Create error " + err)
                     return res.status(APPOINTMENT_CODE["4"].HttpStatus).json({
                         result: APPOINTMENT_CODE["4"].Code,
                         response: {},
                         error: {errMessage: APPOINTMENT_CODE["4"].Message},
                         privilege: {}
                     })
                })
        })
        .catch((err) => {
            console.error("Main Catch - appointment Create error : " + err)
            error = new Error("appointment insert could not be performed")
            return res.status(TENANT_CODE["1"].HttpStatus).json({
                result: TENANT_CODE["1"].Code,
                response: {},
                error: {errMessage: TENANT_CODE["1"].Message, errInfo: "Tenant Catch Error"},
                privilege: {}
            })
        })
})








module.exports = router
