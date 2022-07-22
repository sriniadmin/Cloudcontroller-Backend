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
        let condition = {
            pid: params.pid
        }

        if(params.date){
            condition.end_date = {
                [Op.gte]: new Date(moment(params.date).format('YYYY-MM-DD'))
            }
        }
        const data = await Medication.findAll({
            attributes: ['id','drug_name', 'type', 'occurrence', 'morning', 'afternoon', 'evening', 'night', 'dosage_morning', 'dosage_afternoon', 'dosage_evening', 'dosage_night', 'start_date', 'end_date'],
            where: condition
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
