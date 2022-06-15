const sequelizeDB = require("../config/emrmysqldb")
const Sequelize = require("sequelize")
const Op = Sequelize.Op
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const ALERT_DATA = models.alert_data
const moment = require("moment");

async function db_get_alert_data(params) {
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
            condition = {
                pid: params.pid,
                device_type: { [Op.like]: `%${params.search}%` }
            }
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
        return await ALERT_DATA.findAll({
            where: condition,
            limit: limit,
            offset: offset,
            order: [["time", "DESC"]],
            logging: console.log
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

async function db_count_alert_data(params) {
    try {
        return await ALERT_DATA.count({
            where: {
                pid: params.pid
            }
        })
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = {
    db_get_alert_data,
    db_add_alert_data,
    db_count_alert_data
}