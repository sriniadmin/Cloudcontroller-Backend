const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Facilities = models.facility

async function db_get_facility_list(tenant_id, username) {
    // This async function gets the tenants matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    let result
    let whereStatement = { tenant_id: tenant_id }
    try {
        facility_data = await Facilities.findAll({
            raw: true,
            where: whereStatement,
        })
        logger.debug("facility list is" + facility_data)
        result = facility_data
    }
    catch (err) {
        logger.debug("Facility list fetch error " + tenant_id + "not found Err:" + err)
        throw new Error("facility list fetch error -  tenant check")
    }
    return result
}

async function db_create_facility(tenant_id, facility_data, transaction) {
    //This email created new facility in the db
    let result
    try {
        result = await Facilities.create(
            facility_data,
            { transaction: transaction["transaction"] })
        logger.debug("facility insert output is" + result)
    }
    catch (err) {
        logger.debug("facility insert  error " + tenant_id + " not found Err:" + err)
        throw new Error("facility insert  error -  tenant check")
    }
    return result
}

async function db_update_facility(tenant_id, facility_data, transaction) {
    let result
    try {
        result = await Facilities.update(
            facility_data,
            {
                where: {
                    tenant_id: tenant_id,
                },
            },
            { transaction: transaction["transaction"] }
        )
        logger.debug("Facility insert output is" + result)
    }
    catch (err) {
        logger.debug(
            "Facility insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("facility insert  error -  tenant check")
    }
    return result
}

module.exports = {
    db_get_facility_list,
    db_create_facility,
    db_update_facility,
}