const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const { db_get_alert_data, db_count_alert_data } = require("../dbcontrollers/alert_data.controller")

const {
    ALERT_CODE
} = require("../lib/constants/AppEnum")

async function getAlertData(req, res, next) {
    try {
        const data = await db_get_alert_data(req.query)

        const count = await db_count_alert_data(req.query)
        req.apiRes = ALERT_CODE["0"]
        req.apiRes["response"] = { 
            data: data, 
            count: count
        }
    } catch (error) {
        console.log(error)
        req.apiRes = ALERT_CODE["1"]
        req.apiRes["error"] = { error: error }
    }
    return responseAPI(res, req.apiRes)
}


module.exports = {
    getAlertData
}
