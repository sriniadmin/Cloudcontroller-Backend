const logger = require("../config/logger")
const sequelizeDB = require("../config/emrmysqldb")
const RBAC = require("../middleware/rbac")
const {
    db_get_role_list,
    db_create_role,
    db_delete_role,
    db_update_role,
    db_role_exist,
} = require("../dbcontrollers/role.controller")

const {UUID_CONST,ROLE_CODE}=require("../lib/constants/AppEnum")
const getUUID = require("../lib/system/uuidSystem").getUUID


async function createRole(req, res, next) {
    const t = await sequelizeDB.transaction()
    let tenant_id = req.body.tenant_id
    let role_name = req.body.role_name

    logger.debug("THE MAIN TENANT ID IS", tenant_id, req.body)
    let role_data = req.body
    let newRole
    uuidDict = {
        uuidType: UUID_CONST["role"],
        tenantID: tenant_id,
    }
    let grantArray = [
        {
            role: "",
            resource: "/api/sign/logout",
            action: "create:any",
            attributes: "*",
        },
    ]
    role_data.categories_permission.map((item) => {
        switch (item) {
            case "viewPatient": {
                grantArray = grantArray.concat(RBAC.viewPatient)
                break
            }
            case "createPatient": {
                grantArray = grantArray.concat(RBAC.createPatient)
                break
            }
            case "deletePatient": {
                grantArray = grantArray.concat(RBAC.deletePatient)
                break
            }
            case "viewPatch": {
                grantArray = grantArray.concat(RBAC.viewPatch)
                break
            }
            case "createPatch": {
                grantArray = grantArray.concat(RBAC.createPatch)
                break
            }
            case "deletePatch": {
                grantArray = grantArray.concat(RBAC.deletePatch)
                break
            }
            case "viewTenant": {
                grantArray = grantArray.concat(RBAC.viewTenant)
                break
            }
            case "createTenant": {
                grantArray = grantArray.concat(RBAC.createTenant)
                break
            }
            case "deleteTenant": {
                grantArray = grantArray.concat(RBAC.deleteTenant)
                break
            }
            case "viewUser": {
                grantArray = grantArray.concat(RBAC.viewUser)
                break
            }
            case "createUser": {
                grantArray = grantArray.concat(RBAC.createUser)
                break
            }
            case "deleteUser": {
                grantArray = grantArray.concat(RBAC.deleteUser)
                break
            }
            case "viewPrescription": {
                grantArray = grantArray.concat(RBAC.viewPrescription)
                break
            }
            case "createPrescription": {
                grantArray = grantArray.concat(RBAC.createPrescription)
                break
            }
            case "deletePrescription": {
                grantArray = grantArray.concat(RBAC.deletePrescription)
                break
            }
            default: {
                logger.debug("field not present for this permission")
                break
            }
        }
    })
    role_data.role_permission = grantArray
    logger.debug("permission granted array", grantArray)
    try {
        role_exist = await db_role_exist(role_name, tenant_id)
        logger.debug("THIS IS ROLE EXIST FUNCTION", role_name, role_exist)
        if (role_exist) {
            req.apiRes = ROLE_CODE["6"]
            req.apiRes["error"] = {
                error: "Role already exist with name :" + role_name,
            }
            return next()
        }
    } catch (err) {
        logger.debug("Exception : %s role_name %s", err, role_name)
        return next()
    }
    try {
        newRole = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            role_data["role_uuid"] = uuid_result
            role_data["tenant_id"] = tenant_id
            logger.debug("TENANT ID IS", role_data["tenant_id"])
            return db_create_role(tenant_id, role_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("Role create error " + err)
        req.apiRes = ROLE_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN CREATING FACILITY",
        }
        return next()
    }
    logger.debug("Role list is " + newRole)
    req.apiRes = ROLE_CODE["3"]
    req.apiRes["response"] = {
        role_data: newRole,
        count: newRole.length,
    }
    return responseAPI(res, req.apiRes)
}

async function getRole(req, res, next) {
    tenant_id = req.params.tenant_id
    logger.debug("tenant ID is ", tenant_id, req.query)
    let roles
    try {
        roles = await db_get_role_list(tenant_id)
    } catch (err) {
        logger.debug("Role list error " + err)
        req.apiRes = ROLE_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING Role INVENTORY",
        }
        return next()
    }
    logger.debug("Role list is " + roles)
    req.apiRes = ROLE_CODE["2"]
    req.apiRes["response"] = {
        roles: [roles],
        count: roles.length,
    }
    return responseAPI(res, req.apiRes)
}

async function deleteRole(req, res, next) {
    const t = await sequelizeDB.transaction()
    logger.debug("role data to delete is", req.query.role_uuid)
    let result
    try {
        result = await sequelizeDB.transaction(async function (t) {
            return db_delete_role(req.query.role_uuid, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        logger.debug("Exception : %s role_uuid %s", req.query.role_uuid)
        req.apiRes = TRANSACTION_CODE["3"]
        req.apiRes["error"] = {
            errMessage: "Role - Delete failed ",
        }
        return next()
    }

    req.apiRes = TRANSACTION_CODE["2"]
    req.apiRes["response"] = {}
    return next()
}

async function updateRole(req, res, next) {
    logger.debug("Role update body output is ", req.body)
    let role_data = req.body
    let tenant_id = req.body.tenant_id
    let role_uuid = req.body.role_uuid
    let rolePermissed
    let grantArray = [
        {
            role: "",
            resource: "/api/sign/logout",
            action: "create:any",
            attributes: "*",
        },
    ]
    role_data.categories_permission.map((item) => {
        switch (item) {
            case "viewPatient": {
                grantArray = grantArray.concat(RBAC.viewPatient)
                break
            }
            case "createPatient": {
                grantArray = grantArray.concat(RBAC.createPatient)
                break
            }
            case "deletePatient": {
                grantArray = grantArray.concat(RBAC.deletePatient)
                break
            }
            case "viewPatch": {
                grantArray = grantArray.concat(RBAC.viewPatch)
                break
            }
            case "createPatch": {
                grantArray = grantArray.concat(RBAC.createPatch)
                break
            }
            case "deletePatch": {
                grantArray = grantArray.concat(RBAC.deletePatch)
                break
            }
            case "viewTenant": {
                grantArray = grantArray.concat(RBAC.viewTenant)
                break
            }
            case "createTenant": {
                grantArray = grantArray.concat(RBAC.createTenant)
                break
            }
            case "deleteTenant": {
                grantArray = grantArray.concat(RBAC.deleteTenant)
                break
            }
            case "viewUser": {
                grantArray = grantArray.concat(RBAC.viewUser)
                break
            }
            case "createUser": {
                grantArray = grantArray.concat(RBAC.createUser)
                break
            }
            case "deleteUser": {
                grantArray = grantArray.concat(RBAC.deleteUser)
                break
            }
            case "viewPrescription": {
                grantArray = grantArray.concat(RBAC.viewPrescription)
                break
            }
            case "createPrescription": {
                grantArray = grantArray.concat(RBAC.createPrescription)
                break
            }
            case "deletePrescription": {
                grantArray = grantArray.concat(RBAC.deletePrescription)
                break
            }
            default: {
                logger.debug("field not present for this permission")
                break
            }
        }
    })
    role_data.role_permission = grantArray
    try {
        rolePermissed = await sequelizeDB.transaction(function (t) {
            return db_update_role(tenant_id, role_uuid, role_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("ROLE update error " + err)
        req.apiRes = ROLE_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN UPDATING ROLE",
        }
        return next()
    }
    logger.debug("Updated Role is " + rolePermissed)
    respResult = dbOutput_JSON(rolePermissed)
    logger.debug("respresult in role update", respResult)
    respResult = req.body
    req.apiRes = ROLE_CODE["5"]
    req.apiRes["response"] = {
        rolePermissed: respResult,
        count: respResult.length,
    }
    return next()
}

module.exports = {
    createRole,
    getRole,
    deleteRole,
    updateRole,
}
