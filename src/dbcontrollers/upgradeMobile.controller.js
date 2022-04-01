const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
const bcrypt = require("bcrypt")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const UpgradeMobile = models.upgradeMobile
const UpgradeGateway = models.upgradeGateway


async function db_upgrade_entry_create(upgrade_data, transaction) {
    upgrade_data = JSON.stringify(upgrade_data)
    upgrade_data = JSON.parse(upgrade_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let upgrademob
    try {
        upgrademob = await UpgradeMobile.create(upgrade_data, { transaction: trans })
        logger.debug("UPgrade Mobile insert output is" + upgrademob)
    } catch (err) {
        logger.debug(
            "Upgrade  " + upgrade_data + "Err:" + err
        )
        throw new Error("Upgrade  " + upgrade_data + "Err:" + err)
    }
    return upgrademob
}

async function db_upgrade_list(tenant_id) {
    let upgrade_data
    logger.debug('THE Upgrade list for tenant', tenant_id)
    whereStatement = {}
    if (tenant_id) {
        whereStatement.tenant_uuid = tenant_id
    }
    try {
        upgrade_data = await UpgradeMobile.findAll({
            where: whereStatement,
            raw: true,
            limit: 10,
            order: [["createdDate", "DESC"]],
        })
    } catch (err) {
        throw new Error("Upgrade  " + tenant_id + "not found Err:" + err)
    }
    logger.debug("The Upgrade Info is", upgrade_data)
    return upgrade_data
}



async function db_upgrade_entry_create_gw(upgrade_data, transaction) {
    upgrade_data = JSON.stringify(upgrade_data)
    upgrade_data = JSON.parse(upgrade_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let upgrademob
    try {
        upgrademob = await UpgradeGateway.create(upgrade_data, { transaction: trans })
        logger.debug("UPgrade Gateway insert output is" + upgrademob)
    } catch (err) {
        logger.debug(
            "Upgrade  " + upgrade_data + "Err:" + err
        )
        throw new Error("Upgrade  " + upgrade_data + "Err:" + err)
    }
    return upgrademob
}

async function db_upgrade_list_gw(tenant_id) {
    let upgrade_data
    logger.debug('THE Upgrade list for tenant', tenant_id)
    whereStatement = {}
    if(tenant_id) {
        whereStatement.tenant_uuid = tenant_id
    }
    try {
        upgrade_data = await UpgradeGateway.findAll({
            where: whereStatement,
            raw: true,
            limit: 1,
            order: [["createdDate","DESC"]],
        })
    } catch (err) {
        throw new Error("Upgrade  " + tenant_id + "not found Err:" + err)
    }
    logger.debug("The Upgrade Info is", upgrade_data)
    return upgrade_data
}


module.exports = {
    db_upgrade_entry_create,
    db_upgrade_list,
    db_upgrade_entry_create_gw,
    db_upgrade_list_gw
}
