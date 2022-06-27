const Sequelize = require("sequelize");
const sequelizeDB = require("../config/emrmysqldb")
const redisClient = require("../external_services/redis/cache_service/redis_client")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Tenants = models.tenant


var Tenant = function (tenantobj) {
    // Basic Details
    this.tenant_name = tenantobj.tenant_name,
        this.tenant_uuid = tenantobj.tenant_uuid
}

async function db_create_tenant(tenant_id, tenant_data, transaction) {
    //This route created new patch in the db
    tenant_list = ""
    let pdata = new Tenant(tenant_data)
    logger.debug("tenant data is " + tenant_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    await Tenants.create({

        tenant_name: tenant_data['tenant_name'],
        tenant_uuid: tenant_data['tenant_uuid'],

    }, { transaction: trans })
        .then((tenant_data) => {
            logger.debug("tenant insert output is" + tenant_data)
            tenant_list = tenant_data
        })
        .catch((err) => {
            logger.debug(
                "tenant insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("tenant insert  error -  tenant check")
        })

    return tenant_list
}


async function db_update_tenant(tenant_id, tenant_data, given_tenant_uuid, transaction) {
    tenant_list = ""
    let pdata = new Tenant(tenant_data)
    logger.debug("tenant data is " + tenant_data)
    let { tenant_uuid } = given_tenant_uuid
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    await Tenants.update({

        tenant_name: tenant_data['tenant_name'],

    },
        {
            where: {
                tenant_uuid: given_tenant_uuid
            }
        },
        { transaction: trans })
        .then((tenant_data) => {
            logger.debug("tenant update output is" + tenant_data)
            tenant_list = tenant_data
        })
        .catch((err) => {
            logger.debug(
                "tenant insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("tenant insert  error -  tenant check")
        })

    return tenant_list
}




async function db_get_tenant_id(tenant_name) {
    tenant_id = ""
    redisResponse = await redisClient.checkRedisCache('tenants', tenant_name);
    logger.debug("Check Redis Cache Done", redisResponse, tenant_name)
    if (redisResponse['status']) {
        logger.debug("Redis Response output is", redisResponse['response']['tenant_id'])
        return redisResponse['response']['tenant_id']
    }
    else {
        await Tenants.findAll({
            where: {
                tenant_name: tenant_name,
            },
            raw: true,
        })
            .then((tenant_data) => {
                logger.debug("Tenant list is" + JSON.stringify(tenant_data))
                tenant_id = tenant_data[0]["tenant_uuid"]
                logger.debug("Tenant uuid " + tenant_id)
            })
            .catch((err) => {
                logger.debug(
                    "Tenant with name " + tenant_name + "not found Err:" + err
                )
                throw new Error("Login Failure as part of tenancy check")
            })
        logger.debug("Done with Await of Tenant")
        return tenant_id
    }

}

async function db_tenant_exist(tenant_uuid, uuid_type) {
    // This async function gets the tenants matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    let tenant_id = ""
    await Tenants.findAll({
        where: {
            tenant_uuid: tenant_uuid,
        },
        raw: true,
    })
        .then((tenant_data) => {
            logger.debug("Tenant list is" + tenant_data, typeof tenant_data, tenant_data.length)
            if (tenant_data.length == 0)
                return tenant_uuid
            tenant_id = tenant_data[0]["tenant_uuid"]
            logger.debug("Tenant uuid " + tenant_id)
        })
        .catch((err) => {
            logger.debug(
                "Tenant  " + tenant_uuid + "not found Err:" + err
            )
            throw new Error("Tenant  " + tenant_uuid + "not found Err:" + err)
        })
    logger.debug("Done with Await of Tenant")
    return tenant_id // This returns tenant_uuid only
}


async function db_tenant_exist_trans(tenant_uuid, uuid_type, transaction) {
    // This async function gets the tenants matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    let tenant_id = ""
    await Tenants.findAll({
        where: {
            tenant_uuid: tenant_uuid,
        },
        raw: true,
    },
        { transaction: transaction["transaction"] })
        .then((tenant_data) => {
            logger.debug("Tenant list is" + tenant_data, typeof tenant_data, tenant_data.length)
            if (tenant_data.length == 0)
                return tenant_uuid
            tenant_id = tenant_data[0]["tenant_uuid"]
            logger.debug("Tenant uuid " + tenant_id)
        })
        .catch((err) => {
            logger.debug(
                "Tenant  " + tenant_uuid + "not found Err:" + err
            )
            throw new Error("Tenant  " + tenant_uuid + "not found Err:" + err)
        })
    logger.debug("Done with Await of Tenant")
    return tenant_id // This returns tenant_uuid only
}


async function db_get_tenant_name(tenant_id) {
    let tenant
    try {
        tenant = await Tenants.findAll({
            where: {
                tenant_uuid:tenant_id

            } 
        })
    } catch (err) {
        throw new Error("Error in fetching the tenant" + err)
    }
    return tenant
}


async function db_get_tenant_list(params) {
    try {
        return await Tenants.findAll()
    } catch (error) {
        throw new Error(error)
    }
}


// async function db_get_tenant_list(params) {
//     try {
//         return await Tenants.findAll({
//             order: [["tenant_name", "ASC"]]
//         })
//     } catch (err) {
//         console.log(err)
//         throw new Error(err)
//     }
// }


module.exports = { db_get_tenant_id, db_get_tenant_list, db_create_tenant, db_tenant_exist, db_update_tenant, db_tenant_exist_trans,db_get_tenant_name }