const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Tenants = models.tenant
const PatientMedication = models.patient_medication_table
const uuidAPIKey = require("uuid-apikey")


async function db_create_patient_medication(tenant_id, patient_medication_table, transaction) {
    patient_medication_table = JSON.stringify(patient_medication_table)
    patient_medication_table = JSON.parse(patient_medication_table)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let patient_medication = await PatientMedication.create(patient_medication_table, { transaction: trans })
    try {
        logger.debug("User insert output is" + patient_medication)
    } catch (err) {
        logger.debug(
            "Patient Medication Table insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Patient Medication table insert  error -  tenant check" + err)
    }
    return patient_medication
}


module.exports = {
    db_create_patient_medication
}
