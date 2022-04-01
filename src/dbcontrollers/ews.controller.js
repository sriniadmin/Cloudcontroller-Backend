const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Tenants = models.tenant
const EWSS = models.ews_table
const uuidAPIKey = require("uuid-apikey")
var EWS = function (ewsobj) {
    // Basic Details
    ; (this.pid = ewsobj.pid),
        (this.timestamp = ewsobj.timestamp),
        (this.calculated_time = ewsobj.calculated_time),
        (this.score = ewsobj.score),
        (this.score_split = ewsobj.score_split),
        (this.archive = ewsobj.archive)
}

async function db_get_ews_list(tenant_id, username, params) {
    ews_list = ""
    let { limit, offset, filter, pid } = params
    if (pid) {
        await EWSS.findAll({
            limit: parseInt(limit),
            order: Sequelize.literal('start_date DESC'),
            raw: true,
        })
            .then((ews_data) => {
                logger.debug("EWS list is" + ews_data)
                ews_list = ews_data
            })
            .catch((err) => {
                logger.debug(
                    "EWS list fetch error " + tenant_id + "not found Err:" + err
                )
                throw new Error("EWS list fetch error -  tenant check")
            })

        return ews_list
    } else {
        await EWSS.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: Sequelize.literal('start_date DESC'),
            raw: true,
        })
            .then((ews_data) => {
                logger.debug("EWS list is" + ews_data)
                ews_list = ews_data
            })
            .catch((err) => {
                logger.debug(
                    "EWS list fetch error " + tenant_id + "not found Err:" + err
                )
                throw new Error("EWS list fetch error -  tenant check")
            })

        return ews_list
    }
}

async function db_create_ews(tenant_id, ews_data, transaction) {
    //This route created new patch in the db
    ews_list = ""
    if (!ews_data) return
    let pdata = new EWS(ews_data)
    logger.debug("EWS data is " + ews_data)

    await EWSS.create(
        {
            timestamp: ews_data["timestamp"],
            calculated_time: ews_data["calculated_time"],
            score: ews_data["score"],
            score_split: ews_data["score_split"],
            archive: ews_data["archive"],
            tenant_id: tenant_id,
            pid: ews_data["pid"],
        },
        { transaction: transaction["transaction"] }
    )
        .then((ews_data) => {
            logger.debug("EWS insert output is" + ews_data)
            ews_list = ews_data
        })
        .catch((err) => {
            logger.debug(
                "EWS insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("EWS insert  error -  tenant check")
        })

    return ews_list
}

async function db_update_ews(tenant_id, ews_data, given_pid, transaction) {
    let { pid } = given_pid
    if (!ews_data) return
    ews_list = ""
    let pdata = new EWS(ews_data)
    logger.debug("EWS data is " + ews_data)

    await EWSS.update(
        {
            timestamp: ews_data["timestamp"],
            calculated_time: ews_data["calculated_time"],
            score: ews_data["score"],
            score_split: ews_data["score_split"],
            archive: ews_data["archive"],
            pid: ews_data["pid"],
            tenant_id: tenant_id,
        },
        {
            where: {
                pid: given_pid,
            },
        },
        { transaction: transaction["transaction"] }
    )

        .then((ews_data) => {
            logger.debug("EWS insert output is" + ews_data)
            ews_list = ews_data
        })
        .catch((err) => {
            logger.debug(
                "EWS insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("EWS insert  error -  tenant check")
        })

    return ews_list
}

async function db_delete_ews(given_pid, transaction) {
    let { pid } = given_pid
    logger.debug("The ews given pid is", given_pid)
    EWSS.destroy(
        {
            where: {
                pid: given_pid,
            },
        },
        { transaction: transaction["transaction"] }
    )
        .then((num) => {
            if (num == 1) {
                logger.debug(
                    "The ews is deleted successfully with pid",
                    given_pid
                )
            } else {
                logger.debug(
                    "Cannot delete ews with pid" + given_pid,
                    "may be the ews was not found"
                )
            }
        })
        .catch((err) => {
            logger.debug("The ews delete error is" + err)
            throw new Error("Could not delete ews with pid", given_pid)
        })
}

module.exports = {
    db_get_ews_list,
    db_create_ews,
    db_update_ews,
    db_delete_ews,
}
