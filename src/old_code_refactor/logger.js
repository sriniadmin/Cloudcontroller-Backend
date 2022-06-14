// const sequelizeDB = require("../config/emrmysqldb")
// var initModels =
//     require("../dbmodels/sequelizeEMRModels/init-models").initModels
// var models = initModels(sequelizeDB)
const { db_get_logger_data } = require("../dbcontrollers/logger_data.controller")

const {
    ALERT_CODE
} = require("../lib/constants/AppEnum")

async function download(req, res, next) {
    try {

        const file = `./src/public/logger/test.txt`
        res.download(file)
        return next()
    } catch (error) {
        console.log(error)
        req.apiRes = ALERT_CODE["1"]
        req.apiRes["error"] = { error: error }
    }
    res.response(req.apiRes)
    return next()
}

async function upload(req, res, next) {
    // try {
    //     const data = await db_get_alert_data(req.query)

    //     const count = await db_count_alert_data(req.query)
    //     req.apiRes = ALERT_CODE["0"]
    //     req.apiRes["response"] = { 
    //         data: data, 
    //         count: count
    //     }
    // } catch (error) {
    //     console.log(error)
    //     req.apiRes = ALERT_CODE["1"]
    //     req.apiRes["error"] = { error: error }
    // }
    const file = ``;
    res.download(file)
    return next()
}


async function getLoggerData(req, res, next) {
    try {
        const data = await db_get_logger_data(req.query)

        req.apiRes = ALERT_CODE["0"]
        req.apiRes["response"] = { 
            data: data
        }
    } catch (error) {
        console.log(error)
        req.apiRes = ALERT_CODE["1"]
        req.apiRes["error"] = { error: error }
    }
    res.response(req.apiRes)
    return next()
}


module.exports = {
    download,
    upload,
    getLoggerData
}
