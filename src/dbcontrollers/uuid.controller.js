const logger = require("../config/logger")
const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models")
    .initModels
var models = initModels(sequelizeDB)

const UUID = models.uuid

async function db_create_uuid(tenant_uuid, uuid_with_uuidtype) {
    let uuid_list = null
    let error = null


    try {
        await UUID.create(
            {
                tenant_uuid: tenant_uuid,
                uuid: uuid_with_uuidtype,
            }
        )
            .then((uuid_data) => {
                logger.debug("UUID Insert output is" + JSON.stringify(uuid_data))
                uuid_list = uuid_data
            })
            .catch((err) => {
                logger.debug(
                    "UUID insert  error " +
                    tenant_uuid +
                    " uuid " +
                    uuid_with_uuidtype +
                    " not found Err:" +
                    err +
                    err.sql
                )
                error = err
            })
    } catch (error) {
        logger.debug("Transaction error in UUID Create", error)
    }

    logger.debug("UUID Function end")
    return uuid_list, error
}

module.exports = { db_create_uuid }
