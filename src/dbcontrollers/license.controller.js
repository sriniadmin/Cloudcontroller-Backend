const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const License = models.license

async function db_get_license_report(tenant_id, params) {
    let { limit, offset, notes} = params
    logger.debug('tenant id is',tenant_id)
    let whereStatement = { tenant_id: tenant_id }
    let license
    try {
        license = await License.findAll({
            where: whereStatement,
        })
    } catch (err) {
        throw new Error("Error in fetching the license report" + err)
    }
    return license
}

async function db_create_license(tenant_id, license_data, transaction) {
    license_data = JSON.stringify(license_data)
    license_data = JSON.parse(license_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let license
    try {
        license = await License.create(license_data, { transaction: trans })
        logger.debug("License insert output is" + license)
    } catch (err) {
        logger.debug(
            "License insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("License insert  error -  tenant check" + err)
    }
    return license
}

async function db_update_license(
    tenant_id,
    license_data,
    given_pid,
    transaction
) {
    let { pid } = given_pid
    license_data = JSON.stringify(license_data)
    license_data = JSON.parse(license_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let license
    logger.debug("the license data in controller is", license_data)
    try {
        license = await License.update(
            license_data,
            {
                where: {
                    pid: given_pid,
                },
            },
            { transaction: trans }
        )
        logger.debug("License insert output is" + license)
    } catch (err) {
        logger.debug(
            "License insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("License insert  error -  tenant check" + err)
    }
    return license
}

async function db_license_exist(tenant_id) {
    let license_data
    try {
        license_data = await License.count({
            where: {
                tenant_id: tenant_id,
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("License " + tenant_id + "Already Exists:" + err)
    }
    return license_data
}



module.exports = {
    db_create_license,
    db_update_license,
    db_get_license_report,
    db_license_exist
}
