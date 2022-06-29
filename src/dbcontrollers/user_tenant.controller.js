const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const userTenant = models.user_tenant_map
const user = models.users
const tenant = models.tenant

models.user_tenant_map.belongsTo(models.users, {
    foreignKey: "tenant_id",
    targetKey: "tenant_id",
})


async function db_create_user_tenant(tenant_id, user_tenant_data, transaction) {
    let t = null
    logger.debug("the tenant id in user tenant controller", tenant_id)
    let user_tenant
    try {
        user_tenant = await userTenant.bulkCreate(user_tenant_data, {
            transaction: t,
        })
        logger.debug("the user tenant is", user_tenant)
        logger.debug("user tenant  insert output is" + user_tenant)
    } catch (err) {
        logger.debug(
            "user tenant  insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("User tenant insert  error -  tenant check" + err)
    }
    return user_tenant
}

user.hasOne(tenant, {
    foreignKey: "tenant_uuid",
    sourceKey: "tenant_id"
})

async function db_get_user_tenant(params) {
    try {
        return await user.findAll({
            attributes: ['user_uuid', 'role', 'date'],
            include: [
                {
                    model: tenant,
                    attributes: ['tenant_uuid', 'tenant_name']
                }
            ],
            raw: true,
        })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    // db_create_user_tenant,
    db_get_user_tenant,
}
