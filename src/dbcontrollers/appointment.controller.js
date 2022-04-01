const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models")
    .initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const uuidAPIKey = require("uuid-apikey")
const Tenants = models.tenant
const Appointments = models.Appointment
var Appointment = function (appointmentobj) {
    (this.prac_uuid = appointmentobj.prac_uuid),
        (this.date = appointmentobj.date),
        (this.startTime = appointmentobj.startTime),
        (this.endTime = appointmentobj.endTime),
        (this.pid = appointmentobj.pid),
        (this.tenant_uuid = appointmentobj.tenant_uuid)
}

async function db_get_appointment_list(tenant_id, username, params) {
    appointment_list = ""
    let { limit, offset, filter, pid } = params
    if (pid) {
        await Appointments.findAll({
            limit: parseInt(limit),
            // offset:parseInt(offset),
            order: ["id"],
            raw: true,
            where: { pid: pid },
        })
            .then((appointment_data) => {
                logger.debug("Appointment list is" + appointment_data)
                appointment_list = appointment_data
            })
            .catch((err) => {
                logger.debug(
                    "Appointment list fetch error " +
                    tenant_id +
                    "not found Err:" +
                    err
                )
                throw new Error("Appointment list fetch error -  tenant check")
            })

        return appointment_list
    } else {
        await Appointments.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: ["id"],
            raw: true,
        })
            .then((appointment_data) => {
                logger.debug("Appointment list is" + appointment_data)

                appointment_list = appointment_data
            })
            .catch((err) => {
                logger.debug(
                    "Appointment list fetch error " +
                    minrr +
                    "not found Err:" +
                    err
                )
                throw new Error(
                    "Appointment list fetch error -  tenant check"
                )
            })

        return appointment_list
    }
}

async function db_create_appointment(
    tenant_id,
    appointment_data,
    transaction
) {
    appointment_list = ""
    let pdata = new Appointment(appointment_data)
    logger.debug("appointment data is " + appointment_data)

    await Appointments.create(
        {
            prac_uuid: appointment_data["prac_uuid"],
            date: appointment_data["date"],
            startTime: appointment_data["startTime"],
            endTime: appointment_data["endTime"],
            pid: appointment_data["pid"],
            tenant_uuid: appointment_data["tenant_uuid"],
        },
        { transaction: transaction["transaction"] }
    )
        .then((appointment_data) => {
            logger.debug("appointment insert output is" + appointment_data)
            appointment_list = appointment_data
        })
        .catch((err) => {
            logger.debug(
                "appointment insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("Appointment insert  error -  tenant check")
        })

    return appointment_list
}

module.exports = { db_get_appointment_list, db_create_appointment }
