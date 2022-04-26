const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const DEVICE_TYPE = models.device_type

async function db_get_device_type(params) {
    let data
    try {
        data = await DEVICE_TYPE.findAll()

    } catch (error) {
        console.log(error)
    }
    return data
}

module.exports = {
    db_get_device_type
}