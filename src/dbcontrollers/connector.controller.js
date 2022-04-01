const Sequelize = require("sequelize");
const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Connectors = models.connector
var Connector = function (connectorobj) {
    this.url = connectorobj.url,
        this.username = connectorobj.username,
        this.password = connectorobj.password,
        this.crontime = connectorobj.crontime,
        this.connector_uuid = connectorobj.connector_uuid,
        this.connector_specifics = connectorobj.connector_specifics
    this.resources = connectorobj.resources


}
async function db_get_connector_list(tenant_id, username) {
    connector_list = ""
    await Connectors.findAll({
        raw: true,
    })
        .then((connector_data) => {
            logger.debug("Connector list is" + connector_data)

            connector_list = connector_data
        })
        .catch((err) => {
            logger.debug("Connector list fetch error " + tenant_id + "not found Err:" + err)
            throw new Error(
                "Connector list fetch error -  tenant check"
            )
        })

    return connector_list
}
async function db_create_connector(tenant_id, connector_data, transaction) {
    connector_list = ""
    if (!connector_data)
        return
    let pdata = new Connector(connector_data)
    logger.debug("Connector data is " + connector_data)

    await Connectors.create({
        url: connector_data['url'],
        username: connector_data['username'],
        password: connector_data['password'],
        crontime: connector_data['crontime'],
        connector_uuid: connector_data["connector_uuid"],
        connector_specifics: connector_data['connector_specifics'],
        resources: connector_data['resources'],


    }, { transaction: transaction['transaction'] })
        .then((connector_data) => {
            logger.debug("Connector insert output is" + connector_data)
            connector_list = connector_data
        })
        .catch((err) => {
            logger.debug(
                "Connector insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("Connector insert  error -  tenant check")
        })

    return connector_list
}





module.exports = { db_get_connector_list, db_create_connector }
