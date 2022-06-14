const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const LOGGER_DATA = models.logger_data

async function db_get_logger_data(params) {
    try {
        // let limit = parseInt(params.limit)
        // if (parseInt(params.offset) === 0){
        //     params.offset = 1
        // }
        // let offset = (params.offset - 1) * limit
        // let condition = {
        //     pid: params.pid
        // }
        // if (params.search) {
        //     offset = 0
        //     params.search = (params.search).toLowerCase()
        //     condition = {
        //         pid: params.pid,
        //         device_type: { [Op.like]: `%${params.search}%` }
        //     }
        // }
        return await LOGGER_DATA.findAll({
            where: {
                tenant_id: params.tenantId
            },
            // limit: limit,
            // offset: offset,
            order: [["time", "DESC"]]
        })
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

async function db_add_alert_data(params) {
    try {
        return await LOGGER_DATA.create(params)
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

async function db_count_alert_data(params) {
    try {
        return await LOGGER_DATA.count({
            where: {
                tenant_id: params.tenantId
            }
        })
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = {
    db_get_logger_data,
    db_add_alert_data,
    db_count_alert_data
}