const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
const bcrypt = require("bcrypt")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Role = models.role
const RBAC = require("../middleware/rbac")

const getUUID = require("../lib/system/uuidSystem").getUUID
const { UUID_CONST } = require("../lib/constants/AppEnum")

async function db_get_particular_role_list(tenant_id, role) {
    role_list = ""
    logger.debug("tenant is is", tenant_id)
    let whereStatement = { tenant_id: tenant_id }
    logger.debug('the where statement is', whereStatement)
    await Role.findAll({
        where: {
            tenant_id: tenant_id,
        },
        raw: true,
    })
        .then((role_data) => {
            logger.debug("Role list is" + role_data)
            role_list = role_data
        })
        .catch((err) => {
            logger.debug(
                "Role list fetch error " + tenant_id + "not found Err:" + err
            )
            throw new Error("Role list fetch error -  tenant check")
        })

    return role_list
}

async function db_create_role(tenant_id, role_data, transaction) {
    role_data = JSON.stringify(role_data)
    role_data = JSON.parse(role_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let newRole
    try {
        newRole = await Role.create(role_data, { transaction: trans })
        logger.debug("Role insert output is" + newRole)
    } catch (err) {
        logger.debug(
            "Role insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Role insert  error -  tenant check" + err)
    }
    return newRole
}

async function db_bulk_create_role(tenant_id, transaction) {

    let t = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        t = transaction["transaction"]
    }

    let roles = [
        {
            role_name: "Doctor",
            tenant_id: tenant_id,
            role_permission: [],
            categories_permission: ['viewPatientList', 'viewPatientDetails', 'viewPatientReport', 'viewPatientAlert', 'viewPatientEmr', 'createPatient', 'deletePatient', 'viewUser'],
        },
        {
            role_name: "Nurse",
            tenant_id: tenant_id,
            role_permission: [],
            categories_permission: ['viewPatientList', 'viewPatientDetails', 'viewPatientReport', 'viewPatientAlert', 'viewPatientEmr', 'createPatient', 'deletePatient', 'viewUser'],
        },
        {
            role_name: "Admin",
            tenant_id: tenant_id,
            role_permission: [],
            categories_permission: ['viewUser', 'createUser', 'deleteUser', 'viewTenant', 'createTenant', 'deleteTenant'],
        },
        {
            role_name: "SuperAdmin",
            tenant_id: tenant_id,
            role_permission: [],
            categories_permission: ['viewPatientList', 'viewPatientDetails', 'viewPatientReport', 'viewPatientAlert', 'viewPatientEmr', 'createPatient', 'deletePatient', 'viewTenant', 'createTenant', 'deleteTenant', 'viewPrescription', 'createPrescription', 'deletePrescription', 'createPatch', 'deletePatch', 'deleteUser', 'createUser', 'viewUser', 'viewPatch'],
        },
        {
            role_name: "InternalAdmin",
            tenant_id: tenant_id,
            role_permission: [],
            categories_permission: ['viewPatientList', 'viewPatientDetails', 'viewPatientReport', 'viewPatientAlert', 'viewPatientEmr', 'createPatient', 'deletePatient', 'viewTenant', 'createTenant', 'deleteTenant', 'viewPrescription', 'createPrescription', 'deletePrescription', 'createPatch', 'deletePatch', 'deleteUser', 'createUser', 'viewUser', 'viewPatch'],
        },
        {
            role_name: "TenantAdmin",
            tenant_id: tenant_id,
            role_permission: [],
            categories_permission: ['viewPatientList', 'viewPatientDetails', 'viewPatientReport', 'viewPatientAlert', 'viewPatientEmr', 'createPatient', 'deletePatient', 'viewTenant', 'createTenant', 'deleteTenant', 'viewPrescription', 'createPrescription', 'deletePrescription', 'createPatch', 'deletePatch', 'deleteUser', 'createUser', 'viewUser', 'viewPatch'],
        },
        {
            role_name: "Patient",
            tenant_id: tenant_id,
            role_permission: [],
            categories_permission: ['viewPatientDetails'],
        },
    ]

    logger.debug("roles array is formed", roles)

    for (role of roles) {
        uuidDict = {
            uuidType: UUID_CONST["role"],
            tenantID: tenant_id,
        }
        logger.debug("roles array UUID dict is formed", uuidDict)
        try {
            logger.debug(" UUID_result dict about to be formed")
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug(" UUID_result dict is formed", uuidDict)
            logger.debug("The uuid result for role", role.role_name, uuid_result)
            role["role_uuid"] = uuid_result;
        }
        catch (err) {
            logger.debug("couldn't allocate UUID to roles " + err)
        }
        let grantArray = [
            {
                role: "",
                resource: "/api/sign/logout",
                action: "create:any",
                attributes: "*",
            },
        ]
        role.categories_permission.map((item) => {
            switch (item) {
                case "viewPatient": {
                    grantArray = grantArray.concat(RBAC.viewPatient)
                    break
                }
                case "viewPatientList": {
                    grantArray = grantArray.concat(RBAC.viewPatientList)
                    break
                }
                case "viewPatientDetails": {
                    grantArray = grantArray.concat(RBAC.viewPatientDetails)
                    break
                }
                case "viewPatientReport": {
                    grantArray = grantArray.concat(RBAC.viewPatientReport)
                    break
                }
                case "viewPatientAlert": {
                    grantArray = grantArray.concat(RBAC.viewPatientAlert)
                    break
                }
                case "viewPatientEmr": {
                    grantArray = grantArray.concat(RBAC.viewPatientEmr)
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
        role.role_permission = grantArray
    }

    let newRolesRes = null;
    try {
        newRolesRes = await Role.bulkCreate(roles, { transaction: t })
        logger.debug("multi Roles insert output is" + newRolesRes)
    } catch (err) {
        logger.debug(
            "MULTI Role insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Roles insert  error -  tenant check" + err)
    }
    return newRolesRes
}


async function db_update_role(tenant_id, role_uuid, role_data, transaction) {
    logger.debug("tenant_id while role update is" + tenant_id)
    logger.debug("role_uuid while role update is" + role_uuid)
    role_data = JSON.stringify(role_data)
    role_data = JSON.parse(role_data)
    logger.debug("Role data is " + role_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let updatedRoleData = ""
    await Role.update(
        role_data,
        {
            where: {
                [Op.and]: [{ tenant_id: tenant_id }, { role_uuid: role_uuid }],
            },
        },
        { transaction: transaction }
    )
        .then((roleData) => {
            logger.debug("Role update output is" + roleData)
            updatedRoleData = roleData
        })
        .catch((err) => {
            logger.debug(
                "Role Update error " + tenant_id + " not found Err:" + err
            )
            throw new Error("ERROR IN UPDATING THE ROLE" + err)
        })

    return updatedRoleData
}

async function db_delete_role(role_uuid, transaction) {
    logger.debug("The patient given role_uuid is", role_uuid)

    Role.destroy(
        {
            where: {
                role_uuid: role_uuid,
            },
        },

        { transaction: transaction["transaction"] }
    )
        .then((num) => {
            if (num == 1) {
                logger.debug(
                    "The role is deleted successfully with role_uuid",
                    role_uuid
                )
            } else {
                logger.debug(
                    "Cannot delete role with role_uuid" + role_uuid,
                    "may be the role was not found"
                )
            }
        })
        .catch((err) => {
            logger.debug("The role delete error is" + err)
            throw new Error("Could not delete role with", role_uuid)
        })
}

async function db_role_exist(role_name, tenant_uuid) {
    let role_data
    try {
        role_data = await Role.count({
            where: {
                [Op.and]: [
                    { tenant_id: tenant_uuid },
                    { role_name: role_name },
                ],
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("Role  " + role_name + " found Err:" + err)
    }
    return role_data
}


async function db_get_role_list(params) {
    try {
        return await Role.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset),
            where: {
                [Op.or]: [
                    {
                        role_name: {
                            [Op.like]: `${params.role_name}`,
                        },
                    },
                ],
                [Op.and]: [
                    {
                        tenant_id: params.tenant_id,
                    },
                ],
            },
            raw: true,
        })
    } catch (error) {
        throw new Error(error)
    }
}


async function db_get_role(params) {
    try {
        return await Role.findOne({
            where: {
                tenant_id: params.pid
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = {
    db_get_role_list,
    db_create_role,
    db_get_particular_role_list,
    db_delete_role,
    db_bulk_create_role,
    db_update_role,
    db_role_exist,
    db_get_role
}
