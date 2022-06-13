const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const ALERT_DATA = models.alert_data

async function db_get_alert_data(params) {
    try {
        let limit = params.limit
        let offset = (params.offset - 1) * limit
        let condition = {
            pid: params.pid
        }
        if (params.search) {
            offset = 0
            params.search = (params.search).toLowerCase()
            condition = {
                pid: params.pid,
                device_type: { [Op.like]: `%${params.search}%` }
            }
        }
        return await ALERT_DATA.findAll({
            where: condition,
            order: [["time", "DESC"]],
            limit: limit,
            offset: offset,
        })
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

async function db_add_alert_data(params) {
    try {
        return await ALERT_DATA.create(params)
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = {
    db_get_alert_data,
    db_add_alert_data
}