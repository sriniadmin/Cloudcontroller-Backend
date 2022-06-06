const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const ALERT_DATA = models.alert_data

async function db_get_alert_data(params) {
    try {
        return await ALERT_DATA.findAll({
            where: {
                pid: params.pid
            },
            order: [["time", "DESC"]]
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