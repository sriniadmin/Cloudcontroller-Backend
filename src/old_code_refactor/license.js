const logger = require("../config/logger")
const sequelizeDB = require("../config/emrmysqldb")
const {
    db_create_license,
    db_get_license_report,
    db_license_exist,
} = require("../dbcontrollers/license.controller")

const getUUID = require("../lib/system/uuidSystem").getUUID
const { LICENSE_CODE, UUID_CONST } = require("../lib/constants/AppEnum")

async function createLicense(req, res, next) {
    const t = await sequelizeDB.transaction()
    let license_data = req.body
    let tenant_id = license_data["tenant_id"]
    logger.debug("the tenant id is", tenant_id)
    logger.debug("the new license data body is", license_data)
    let license
    let license_exist
    license_exist = await db_license_exist(tenant_id) //TODO:Have to make it like this in every other file , where we are checking for the other check 
    logger.debug("THIS IS IN LICENSE EXIST FUNCTION", license_exist)
    if (license_exist) {
        req.apiRes = LICENSE_CODE["7"]
        req.apiRes["error"] = {
            error: "LICENSE ALREADY EXISTS :",
        }
        return next()
    }

    uuidDict = { uuidType: UUID_CONST["license"], tenantID: tenant_id }
    try {
        license = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            license_data["license_uuid"] = uuid_result
            license_data["tenant_id"] = tenant_id
            return db_create_license(tenant_id, license_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("license list error " + err)
        req.apiRes = LICENSE_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN CREATING THE LICENSE",
        }
        return next()
    }
    logger.debug("License list is " + license)
    req.apiRes = LICENSE_CODE["3"]
    req.apiRes["response"] = {
        licenseData: license,
        count: license.length,
    }
    return responseAPI(res, req.apiRes)
}
const redisClient = require("../external_services/redis/cache_service/redis_client")
const { db_get_tenant_name } = require("../dbcontrollers/tenant.controller")


async function getLicense(req, res, next) {
    let tenant_id = req.query.tenant_id
    logger.debug("tenant ID is ", tenant_id, req.query)
    let license
    let tenant_name=await db_get_tenant_name(tenant_id)
    logger.debug('the tenant name in license controller file is',tenant_name)
    tenant_name=tenant_name[0].dataValues.tenant_name
    logger.debug("the tenant name is", tenant_name)
    accessToken = req.cookies[process.env.TOKEN_KEY]
    await redisClient.redisTenantUpdate(accessToken, tenant_name, tenant_id)
    logger.debug("the req query for the license is", req.query)
    logger.debug('the tenant name in redis after license is',req.userTenant)
    try {
        license = await db_get_license_report(tenant_id, req.query)
    } catch (err) {
        logger.debug("License list error " + err)
        req.apiRes = LICENSE_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING LICENSE INVENTORY",
        }
        return next()
    }
    logger.debug("License list is " + license)
    req.apiRes = LICENSE_CODE["2"]
    req.apiRes["response"] = {
        licenseData: license,
        count: license.length,
    }
    return responseAPI(res, req.apiRes)
}

//this is for getting the response and use it in the patch check based on the license
async function getLicenseData(req) {
    let tenant_id = req.query.tenant_id
    logger.debug("tenant ID is ", tenant_id, req.query)

    let license
    logger.debug("the req query for the license is", req.query)
    try {
        license = await db_get_license_report(tenant_id, req.query)
    } catch (err) {
        logger.debug("License list error " + err)
        req.apiRes = LICENSE_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING LICENSE INVENTORY",
        }
        // return next()
    }
    logger.debug("License list is " + license)
    return {
        licenseData: license,
    }
}

module.exports = { createLicense, getLicense, getLicenseData }
