const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
const bcrypt = require("bcrypt")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const MedicalHistory = models.medical_history

async function db_create_medical_history(tenant_id, medical_history_data, transaction) {
    let medical_history_list = ""
    logger.debug("medical history data is " + JSON.stringify(medical_history_data))

    await MedicalHistory.create(
        {
            date_of_treatment: medical_history_data["date_of_treatment"],
            treatment: medical_history_data["treatment"],
            hospital_name: medical_history_data["hospital_name"],
            doctor_name: medical_history_data["doctor_name"],
            note: medical_history_data["note"],
            date: medical_history_data["date"],
            tenant_id: medical_history_data["tenant_id"],
            pid: medical_history_data["pid"],
            medical_history_uuid: medical_history_data["medical_history_uuid"],
            symptoms:medical_history_data["symptoms"]
        },
        { transaction: transaction["transaction"] }
    )
        .then((medical_history_data) => {
            logger.debug("Medical History insert output is" + JSON.stringify(medical_history_data))
            medical_history_list = medical_history_data
        })
        .catch((err) => {
            logger.debug(
                "Medical History insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("Medical History insert  error -  tenant check" + err)
        })

    return medical_history_list
}


async function db_get_medical_history_list(tenant_id, username, params) {
    let medical_history_list = ""
    let {
        // limit,
        // offset,
        // filter,
        pid,
    } = params

    logger.debug('this is medical history controller')
    await MedicalHistory.findAll({
        // limit: parseInt(limit),
        //offset:parseInt(offset),
        // order: Sequelize.literal('date DESC'),
        raw: true,
        where: { pid: pid },
    })
        .then((medical_history_data) => {
            logger.debug("Medical History list is" + medical_history_data)
            medical_history_list = medical_history_data
        })
        .catch((err) => {
            logger.debug(
                "Medical History list fetch error " +
                tenant_id +
                "not found Err:" +
                err
            )
            throw new Error("Medical History list fetch error -  tenant check")
        })

    return medical_history_list

}

async function db_update_medical_history(tenant_id, medical_history_data, given_pid, transaction) {
    let { pid } = given_pid
    let medical_history_uuid = medical_history_data["medical_history_uuid"]
    if (!medical_history_data) return
    let medical_history_list = ""
    logger.debug("medical History data is " + medical_history_data)
    console.log(medical_history_data)

    await MedicalHistory.update(
        {
            date_of_treatment: medical_history_data["date_of_treatment"],
            treatment: medical_history_data["treatment"],
            hospital_name: medical_history_data["hospital_name"],
            doctor_name: medical_history_data["doctor_name"],
            note: medical_history_data["note"],
            date: medical_history_data["date"],
            tenant_id: medical_history_data["tenant_id"],
            pid: medical_history_data["pid"],
            medical_history_uuid: medical_history_data["medical_history_uuid"],
            symptoms:medical_history_data["symptoms"]
        },
        {
            where: {
                medical_history_uuid: medical_history_uuid,
            },
        },
        { transaction: transaction["transaction"] }
    )

        .then((medical_history_data) => {
            logger.debug("Medical history insert output is" + medical_history_data)
            medical_history_list = medical_history_data
        })
        .catch((err) => {
            logger.debug(
                "Medical History insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("Medical History insert  error -  tenant check")
        })

    return medical_history_list
}

module.exports = {
    db_create_medical_history,
    db_get_medical_history_list,
    db_update_medical_history,
}
