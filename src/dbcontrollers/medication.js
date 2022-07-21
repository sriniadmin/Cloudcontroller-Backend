const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
const Op = Sequelize.Op;
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)


const Medication = models.medication



async function db_get_medication_list(params) {
    const t = await sequelizeDB.transaction()
    try {
        const data = await Medication.findAll({
            attributes: ['id','drug_name', 'type', 'occurrence', 'morning', 'afternoon', 'evening', 'dosage_morning', 'dosage_afternoon', 'dosage_evening', 'start_date', 'end_date'],
            where: {
                pid: params.pid
            }
        },
            { transaction: t })
        const result = { data: data }
        await t.commit()
        return result.data
    } catch (error) {
        await t.rollback()
        throw error
    }
}


async function db_edit_medication(params) {
    const t = await sequelizeDB.transaction()
    try {
        const data = Medication.update(
            params,
            {
                where: {
                    id: params.updateId
                }
            },
            { transaction: t }
        )
        let result = { data: data }
        await t.commit()
        return result.data
    } catch (error) {
        await t.rollback()
        throw error
    }
}


module.exports = {
    db_get_medication_list,
    db_edit_medication
}