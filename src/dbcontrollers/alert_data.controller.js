const sequelizeDB = require("../config/emrmysqldb")
const Sequelize = require("sequelize")
const Op = Sequelize.Op
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const ALERT_DATA = models.alert_data
const ALERT_NOTE = models.alert_note
const moment = require("moment");

models.alert_data.hasMany(models.alert_note, {
    foreignKey: "alert_uuid",
    sourceKey: "alert_uuid",
})

async function db_get_alert_data(params) {
    const t = await sequelizeDB.transaction()
    try {
        let limit = parseInt(params.limit)
        if (parseInt(params.offset) === 0){
            params.offset = 1
        }
        let offset = (params.offset - 1) * limit
        let condition = {
            pid: params.pid
        }
        if (params.search) {
            offset = 0
            params.search = (params.search).toLowerCase()

            condition.device_type = { [Op.like]: `%${params.search}%` }
        }
        if(params.isAttended){
            condition.isAttended = params.isAttended
        }
        if(params.date){
            let searchDateBegin = moment(params.date).set({hour:0,minute:0,second:0});
            console.log(searchDateBegin);
            let searchDateEnd = moment(params.date).set({hour:23,minute:59,second:59});
            condition = {
                ...condition,
                time: {
                    [Op.gte]: searchDateBegin
                },
                [Op.and]:[
                    {
                        time: {
                            [Op.lte]: searchDateEnd
                        }
                    }
                ]
              
            }
        }
        let data = await ALERT_DATA.findAll(
            {
                include: [
                    {
                        model:models.alert_note,
                        attributes:['id','note','date']
                    }
                ],
                where: condition,
                limit: limit,
                offset: offset,
                order: [["time", "DESC"]]
            },
            { transaction: t }
        )

        data = data
        await t.commit()
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}


async function db_add_alert_data(params) {
    const t = await sequelizeDB.transaction()
    try {
        let data = await ALERT_DATA.create(
            params,
            { transaction: t }
        )
        data = data
        await t.commit()
        return data
    } catch (error) {
        await t.rollback()
        throw error
    }
}


async function db_edit_alert_data(params) {
    const t = await sequelizeDB.transaction()
    try {
        let data = await ALERT_DATA.update(
            {
                isAttended: params.isAttended
            },
            {
                where: {
                    alert_uuid: params.alert_uuid
                }
            },
            { transaction: t }
        )
        data = data
        await t.commit()
        return data
    } catch (error) {
        await t.rollback()
        throw error
    }
}


async function db_add_alert_note(params) {
    const t = await sequelizeDB.transaction()
    try {
        let data = await ALERT_NOTE.create(
            {
                alert_uuid: params.alert_uuid,
                note: params.note
            },
            { transaction: t }
        )
        data = data
        await t.commit()
        return data
    } catch (error) {
        await t.rollback()
        throw error
    }
}


async function db_count_alert_data(params) {
    const t = await sequelizeDB.transaction()
    try {
        let data = await ALERT_DATA.count(
            {
                where: {
                    pid: params.pid
                }
            },
            { transaction: t }
        )
        data = data
        await t.commit()
        return data
    } catch (error) {
        await t.rollback()
        throw error
    }
}


module.exports = {
    db_get_alert_data,
    db_add_alert_data,
    db_count_alert_data,
    db_edit_alert_data,
    db_add_alert_note
}