const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const userTenant = models.user_tenant_map

models.user_tenant_map.belongsTo(models.users, {
    foreignKey: "tenant_id",
    targetKey: "tenant_id",
})
async function db_get_user_tenant(params) {
    let { limit, offset, notes, user_uuid, tenant_id, role } = params
    logger.debug("the role is", params.role)
    logger.debug("tanant id,user_uuid is", tenant_id, user_uuid)
    logger.debug("the user uuid is", params.user_uuid)
    let user_tenant
    if (
        params.user_uuid != "0" &&
        params.tenant_id == "0" &&
        params.role == "0"
    ) {
        logger.debug("in if loop")
        user_tenant = await userTenant.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            where: {
                user_uuid: user_uuid,
            },
        })
        return user_tenant
    } else if (
        params.tenant_id != "0" &&
        params.user_uuid == "0" &&
        params.role == "0"
    ) {
        logger.debug("in else if loop", params.tenant_id, params.role)
        let user_tenant = await userTenant.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),

            where: {
                [Op.and]: [
                    {
                        tenant_id: tenant_id,
                    },
                    {
                        role: {
                            [Op.notLike]: "Patient",
                        },
                    },
                ],
            },
            raw: false,
        })
        return user_tenant
    } else if (
        params.tenant_id != "0" &&
        params.user_uuid == "0" &&
        params.role != "0"
    ) {
        logger.debug("in  2nd else if loop", params.tenant_id, params.role)
        let user_tenant = await userTenant.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            include: [
                {
                    model: models.users,
                },
            ],
            where: {
                [Op.or]: [
                    {
                        tenant_id: tenant_id,
                    },
                ],
                [Op.and]: [
                    {
                        role: {
                            [Op.like]: `${params.role}`,
                        },
                    },
                ],
            },
            raw: false,
        })
        return user_tenant
    } else {
        logger.debug("in else loop")
        user_tenant = await userTenant.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
        })
        return user_tenant
    }
}

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

// where: {
//     [Op.or]:[
//         {
//             user_uuid:{
//                 [Op.like]:`${params.user_uuid}`
//             }
//         },
//         {
//             tenant_id:{
//                 [Op.like]:`${params.tenant_id}`
//             }
//         },
//         {
//            role:{
//                [Op.like]:`${params.role}`
//            }
//         }
//     ],
//     [Op.and]:[
//         {
//             role:{
//                 [Op.notLike]: "Patient",
//             }
//         }
//     ]
// }

module.exports = {
    // db_create_user_tenant,
    db_get_user_tenant,
}
