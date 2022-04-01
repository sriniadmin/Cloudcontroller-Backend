const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Tenants = models.tenant
const Vitals = models.form_vitals
const uuidAPIKey = require("uuid-apikey")
var Vital = function (vitalobj) {
    // Basic Details
    ; (this.date = vitalobj.date),
        (this.pid = vitalobj.pid),
        (this.user = vitalobj.user),
        (this.groupname = vitalobj.groupname),
        (this.authorized = vitalobj.authorized),
        (this.activity = vitalobj.activity),
        (this.bps = vitalobj.bps),
        (this.bpd = vitalobj.bpd),
        (this.weight = vitalobj.weight),
        (this.height = vitalobj.height),
        (this.temperature = vitalobj.temperature),
        (this.temp_method = vitalobj.temp_method),
        (this.pulse = vitalobj.pulse),
        (this.respiration = vitalobj.respiration),
        (this.note = vitalobj.note),
        (this.BMI = vitalobj.BMI),
        (this.BMI_status = vitalobj.BMI_status),
        (this.waist_circ = vitalobj.waist_circ),
        (this.head_circ = vitalobj.head_circ),
        (this.oxygen_saturation = vitalobj.oxygen_saturation),
        (this.external_id = vitalobj.external_id)
}
async function db_get_vital_list(tenant_id, username, params) {
    vital_list = ""
    let { limit, offset, filter, pid } = params
    whereStatement = {
        tenant_id: tenant_id,
        pid: pid
    }
    logger.debug('this is vital controller')
    await Vitals.findAll({
        limit: parseInt(limit),
        //offset:parseInt(offset),
        order: Sequelize.literal('date DESC'),
        raw: true,
        where: whereStatement,
    })
        .then((vital_data) => {
            logger.debug("Vital list is" + vital_data)
            vital_list = vital_data
        })
        .catch((err) => {
            logger.debug(
                "Vital list fetch error " +
                tenant_id +
                "not found Err:" +
                err
            )
            throw new Error("Vital list fetch error -  tenant check")
        })

    return vital_list

}

async function db_create_vital(tenant_id, vital_data, transaction) {
    vital_list = ""
    logger.debug("vital data is " + JSON.stringify(vital_data))
    let pdata = new Vital(vital_data)

    await Vitals.create(
        {
            pid: vital_data["pid"],
            user: vital_data["user"],
            groupname: vital_data["groupname"],
            authorized: vital_data["authorized"],
            specialty: vital_data["specialty"],
            activity: vital_data["activity"],
            bps: vital_data["bps"],
            bpd: vital_data["bpd"],
            weight: vital_data["weight"],
            height: vital_data["height"],
            temperature: vital_data["temperature"],
            temp_method: vital_data["temp_method"],
            pulse: vital_data["pulse"],
            respiration: vital_data["respiration"],
            note: vital_data["note"],
            BMI: vital_data["BMI"],
            BMI_status: vital_data["BMI_status"],
            waist_circ: vital_data["waist_circ"],
            head_circ: vital_data["head_circ"],
            oxygen_saturation: vital_data["oxygen_saturation"],
            external_id: vital_data["external_id"],
            vital_uuid: vital_data["vital_uuid"],
            vital_date: vital_data["vital_date"],
            spo2: vital_data["spo2"],
            pain_index: vital_data["pain_index"],
            tenant_id: tenant_id,
            date: vital_data["date"],
        },
        { transaction: transaction["transaction"] }
    )
        .then((vital_data) => {
            logger.debug("Vital insert output is" + JSON.stringify(vital_data))
            vital_list = vital_data
        })
        .catch((err) => {
            logger.debug(
                "Vital insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("Vital insert  error -  tenant check" + err)
        })

    return vital_list
}

async function db_update_vital(tenant_id, vital_data, given_pid, transaction) {
    let { pid } = given_pid
    if (!vital_data) return
    vital_list = ""
    let pdata = new Vital(vital_data)
    logger.debug("Vitals data is " + vital_data)

    await Vitals.update(
        {
            date: vital_data["date"],
            pid: vital_data["pid"],
            user: vital_data["user"],
            groupname: vital_data["groupname"],
            authorized: vital_data["authorized"],
            specialty: vital_data["specialty"],
            activity: vital_data["activity"],
            bps: vital_data["bps"],
            bpd: vital_data["bpd"],
            weight: vital_data["weight"],
            height: vital_data["height"],
            temperature: vital_data["temperature"],
            temp_method: vital_data["temp_method"],
            pulse: vital_data["pulse"],
            respiration: vital_data["respiration"],
            note: vital_data["note"],
            BMI: vital_data["BMI"],
            BMI_status: vital_data["BMI_status"],
            waist_circ: vital_data["waist_circ"],
            head_circ: vital_data["head_circ"],
            oxygen_saturation: vital_data["oxygen_saturation"],
            external_id: vital_data["external_id"],
            vital_uuid: vital_data["vital_uuid"],
            tenant_id: tenant_id,
        },
        {
            where: {
                pid: given_pid,
            },
        },
        { transaction: transaction["transaction"] }
    )

        .then((vital_data) => {
            logger.debug("Vitals insert output is" + vital_data)
            vital_list = vital_data
        })
        .catch((err) => {
            logger.debug(
                "Vitals insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("EWS insert  error -  tenant check")
        })

    return vital_list
}

async function db_delete_vital(given_pid, transaction) {
    let { pid } = given_pid
    logger.debug("The vitals given pid is", given_pid)
    Vitals.destroy(
        {
            where: {
                pid: given_pid,
            },
        },
        { transaction: transaction["transaction"] }
    )
        .then((num) => {
            if (num == 1) {
                logger.debug(
                    "The vital is deleted successfully with pid",
                    given_pid
                )
            } else {
                logger.debug(
                    "Cannot delete vital with pid" + given_pid,
                    "may be the vital was not found"
                )
            }
        })
        .catch((err) => {
            logger.debug("The vital delete error is" + err)
            throw new Error("Could not delete vital with pid", given_pid)
        })
}

module.exports = {
    db_get_vital_list,
    db_create_vital,
    db_update_vital,
    db_delete_vital,
}
