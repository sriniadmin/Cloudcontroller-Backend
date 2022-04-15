const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const uuidAPIKey = require("uuid-apikey")
const Tenants = models.tenant
const Patches = models.patch
const Patch_Patient_Map = models.patch_patient_map

models.patch_patient_map.hasMany(models.patch, {
    foreignKey: "patch_uuid",
    sourceKey: "patch_uuid",
})
models.patch_patient_map.hasMany(models.patient_data, {
    foreignKey: "pid",
    sourceKey: "pid",   
})
models.patch.hasOne(models.patch_patient_map, {
    foreignKey: "patch_uuid",
    sourceKey: "patch_uuid",
})
// models.patch.hasMany(models.patch,{ foreignKey:'patch_group_id',sourceKey:'patch_uuid' , as: 'AssociatedPatch'})
models.patch.hasMany(models.patch, {
    foreignKey: "patch_group_id",
    sourceKey: "patch_group_id",
    as: "AssociatedPatch",
})


async function db_get_patch_list(tenant_id, query_param) {
    // This async function gets the tenants matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    patch_list = []

    let { limit, offset, filter, patch_serial } = query_param
    let whereStatement = {
        tenant_id: tenant_id,
    }
    if (patch_serial == '0')
        patch_serial = ''
    let whereStatement1 = { tenant_id: tenant_id }
    let TotalCount = 0
    let whereStmtForFree = "patch.tenant_id = '" + tenant_id + "'"
    let innerRequired = false
    logger.debug("patch serial is ", query_param.patch_serial)
    if (query_param.patch_serial) {
        whereStatement.patch_serial = { [Op.like]: "%" + patch_serial + "%" }
        whereStmtForFree +=
            " and patch.patch_serial like '%" + patch_serial + "%' "
        // patch_serial: { [Op.like]: }
    }

    if (query_param.devicetype) {
        // whereStatement.patch_type = {$like: '%' + query_param.devicetype + '%'};
        if (query_param.devicetype == "bundle") {
            whereStatement.patch_type = "gateway"
            whereStmtForFree += " and patch.patch_type = 'gateway'"
            // whereStatement.patch_uuid = models.patch_patient_map.patch_group_id;
        } else {
            whereStatement.patch_type = query_param.devicetype
            whereStmtForFree +=
                " and patch.patch_type = '" + query_param.devicetype + "'"
        }
    }

    if (query_param.inuse == 1) {
        // whereStatement1.pid != '0';
        innerRequired = true
    }
    let patch_uuid_from_patient_map

    if (query_param.inuse == -1) {
        whereStatement = Sequelize.literal(
            "((patch.patch_uuid NOT IN (SELECT R.patch_uuid FROM patch_patient_map R )) and " +
            whereStmtForFree +
            ")"
        )
        // innerRequired = true;
    }
    logger.debug("The WhereStatement is ", whereStatement)
    await Patches.findAll({
        // include: [
        //     {
        //         model: models.patch_patient_map,
        //         include:[
        //             {
        //                 model:models.patient_data,
        //                 attributes:['fname','lname','pid']
        //             }
        //         ],
        //         //required: innerRequired,
        //         required: false,
        //         where: whereStatement1,
        //     },
        //     {
        //         model: models.patch,
        //         //   required:false,
        //         required: true,
        //         as: "AssociatedPatch",
        //     },

        // ],
        where: whereStatement,
        limit: parseInt(limit),
        offset: parseInt(offset),
        raw: false,
        // required:true,
        required: false,
        order: [["id", "DESC"]],
        // group: ["patch.patch_group_id"]
    })
        .then((patch_data) => {
            // logger.debug("Patch list value is" + patch_data, JSON.stringify(patch_data))
            // patch_list = JSON.stringify(patch_data)
            patch_list = patch_data
            logger.debug(
                "Patch list value is assigned",
                JSON.stringify(patch_data),
                patch_data.length
            )
            // return patch_data
            // return [JSON.stringify(patch_data), patch_data.length]
        })
        .catch((err) => {
            logger.debug(
                "Patch list fetch error " + tenant_id + "not found Err:" + err
            )
            throw new Error("Patch list fetch error -  tenant check")
        })

    await Patches.count({
        include: [
            {
                model: models.patch_patient_map,
                required: innerRequired,
                // required: false,
                where: whereStatement1,
            },
        ],
        where: whereStatement,
        limit: parseInt(limit),
        offset: parseInt(offset),
        raw: false,
        required: true,
    })
        .then((patch_data) => {
            logger.debug(
                "Patch list value is" + patch_data,
                JSON.stringify(patch_data)
            )
            // patch_list = JSON.stringify(patch_data)
            TotalCount = patch_data
            logger.debug("Patch list value is assigned", patch_data)
            // return patch_data
            // return [JSON.stringify(patch_data), patch_data.length]
        })
        .catch((err) => {
            logger.debug(
                "Patch list fetch error " + tenant_id + "not found Err:" + err
            )
            throw new Error("Patch list fetch error -  tenant check")
        })
    logger.debug("The patch list is and count ", patch_list, TotalCount)
    return [patch_list, TotalCount]
}

async function db_create_patch(tenant_id, patch_data, transaction) {
    //This route created new patch in the db
    patch_list = ""
    if (!patch_data) return
    logger.debug("Patch data is " + JSON.stringify(patch_data))

    const promises = []
    for (let i = 0; i < patch_data.length; i++) {
        // await
        logger.debug("patch type is", patch_data[i]["patch_uuid"])
        promises.push(
            Patches.create(
                {
                    patch_type: patch_data[i]["patch_type"],
                    patch_name: patch_data[i]["patch_name"],
                    patch_uuid: patch_data[i]["patch_uuid"],
                    patch_status: patch_data[i]["patch_status"],
                    patch_group_id: patch_data[i]["patch_group_id"],
                    specialty: patch_data[i]["specialty"],
                    patch_mac: patch_data[i]["patch_mac"],
                    patch_bluetooth: patch_data[i]["patch_bluetooth"],
                    patch_sensor_id: patch_data[i]["patch_sensor_id"],
                    patch_serial: patch_data[i]["patch_serial"],
                    tenant_id: tenant_id,
                    pid: patch_data[i]["pid"],
                },
                { transaction: transaction["transaction"] }
            )
        )
    }
    logger.debug("Promise is ", promises)
    await Promise.all(promises)
        .then((patch_data) => {
            logger.debug("Patch insert output is" + patch_data)
            patch_list = patch_data
        })
        .catch((err) => {
            console.log('GUGGG',err)
            logger.debug(
                "Patch insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("Patch insert  error -  tenant check" + err)
        })

    return patch_list
}

async function db_update_patch(tenant_id, patch_data, given_pid, transaction) {
    let { pid } = given_pid
    if (!patch_data) return
    logger.debug("The patch pid is", given_pid)
    patch_patient_map_list = ""
    logger.debug("Patch data is " + patch_data)
    const promises = []
    for (let i = 0; i < patch_data.length; i++) {
        // await
        logger.debug("patch type is", patch_data[i]["patch_uuid"])
        promises.push(
            Patches.update(
                {
                    patch_type: patch_data[i]["patch_type"],
                    patch_name: patch_data[i]["patch_name"],
                    patch_uuid: patch_data[i]["patch_uuid"],
                    patch_status: patch_data[i]["patch_status"],
                    patch_group_id: patch_data[i]["patch_group_id"],
                    specialty: patch_data[i]["specialty"],
                    patch_mac: patch_data[i]["patch_mac"],
                    patch_bluetooth: patch_data[i]["patch_bluetooth"],
                    patch_sensor_id: patch_data[i]["patch_sensor_id"],
                    patch_serial: patch_data[i]["patch_serial"],
                    tenant_id: tenant_id,
                    pid: patch_data[i]["pid"],
                    // pid:given_pid
                },
                {
                    where: {
                        patch_uuid: patch_data[i]["patch_uuid"],
                    },
                },
                { transaction: transaction["transaction"] }
            )
        )
    }
    logger.debug("Promise is ", promises)
    await Promise.all(promises)
        .then((patch_patient_map_data) => {
            logger.debug(
                "patch_patient_map insert output is" + patch_patient_map_data
            )
            patch_patient_map_list = patch_patient_map_data
        })
        .catch((err) => {
            logger.debug(
                "Patch insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("patch_patient_map insert  error -  tenant check")
        })

    return patch_patient_map_list
}

async function db_patch_exist(tenant_uuid, patch_list) {
    let patch_id = ""
    const promises = []
    for (let i = 0; i < patch_list.length; i++) {
        promises.push(
            Patches.findAll({
                where: {
                    tenant_id: tenant_uuid,
                    patch_uuid: patch_list[i]["patch_uuid"],
                },
                raw: true,
            })
        )
    }
    await Promise.all(promises)
        .then((patch_data) => {
            logger.debug(
                "Patch list is" + JSON.stringify(patch_data),
                typeof patch_data,
                patch_data.length
            )
            if (patch_data.length == 0) return patch_data
            patch_id = patch_data
            logger.debug("patch uuid " + patch_id)
        })
        .catch((err) => {
            logger.debug(
                "Patch  " +
                tenant_uuid +
                ":" +
                patch_list +
                "not found Err:" +
                err
            )
            throw new Error(
                "Patch  " +
                tenant_uuid +
                ":" +
                patch_list +
                "not found Err:" +
                err
            )
        })
    logger.debug("Done with Await of Patch")
    return patch_id
}

async function db_patch_exist_new(patch_serial) {
    let patch_id = ""
    var patch_serial_ids = []
    patch_serial_ids.push(patch_serial)
    logger.debug("The patch serial iids is", patch_serial_ids)
    logger.debug("the patch serial number is", patch_serial)
    await Patches.findAll({
        where: {
            patch_serial: patch_serial,
        },
        raw: true,
    })
        .then((patch_data) => {
            logger.debug(
                "Patch list is" + patch_data,
                typeof patch_data,
                patch_data.length
            )
            if (patch_data.length == 0) return patch_id
            patch_id = patch_data[0]
            logger.debug("Tenant uuid " + patch_id)
        })
        .catch((err) => {
            logger.debug(
                "Patch serial " +
                tenant_uuid +
                ":" +
                patient_uuid +
                "not found Err:" +
                err
            )
            throw new Error(
                "Patch serial " +
                tenant_uuid +
                ":" +
                patient_uuid +
                "not found Err:" +
                err
            )
        })
    logger.debug("Done with Await of Patch")
    return patch_id
}

async function db_update_patch_new(tenant_id, patch_data, transaction) {
    logger.debug("Patch data is " + patch_data)
    if (!patch_data) return
    patch_list = ""
    logger.debug(
        "Patch data is " + JSON.stringify(patch_data),
        patch_data["patch_group_id"]
    )

    await Patches.update(
        {
            patch_group_id: patch_data["patch_group_id"],
        },
        {
            where: {
                patch_serial: patch_data["patch_serial"],
            },
        },
        { transaction: transaction["transaction"] }
    )

        .then((patch_output_data) => {
            logger.debug("patch insert output is" + patch_output_data)
            patch_list = patch_output_data
        })
        .catch((err) => {
            logger.debug(
                "Patch insert  error " + tenant_id + " not found Err:" + err
            )
            throw new Error("Patch insert  error -  tenant check")
        })

    return patch_list
}

async function db_patch_uuid_exist(patch_uuid) {
    let patch_id = ""
    logger.debug("the patch uuid number is", patch_uuid)
    await Patches.findAll({
        where: {
            patch_uuid: patch_uuid,
        },
        raw: true,
    })
        .then((patch_data) => {
            logger.debug(
                "Patch list is" + patch_data,
                typeof patch_data,
                patch_data.length
            )
            if (patch_data.length == 0) return patch_id
            patch_id = patch_data[0]
            logger.debug("Tenant uuid " + patch_id)
        })
        .catch((err) => {
            logger.debug("Patch UUID " + ":" + "not found Err:" + err)
            throw new Error("Patch UUID " + ":" + "not found Err:" + err)
        })
    logger.debug("Done with Await of Patch")
    return patch_id
}

async function db_patch_count(tenant_id) {
    let total_patch_count
    try {
        total_patch_count = await Patches.count()
    } catch (error) {
        logger.debug(
            "patch list count failed error " +
            tenant_id +
            "not found Err:" +
            err
        )
        throw new Error("DBQuery: Patch List Count Failed")
    }
    logger.debug("Total Patch Count is %s", total_patch_count)
    return total_patch_count
}

async function db_update_patch_uuid(
    tenant_id,
    patch_data,
    given_patch_uuid,
    transaction
) {
    let { patch_uuid } = given_patch_uuid
    patch_data = JSON.stringify(patch_data)
    patch_data = JSON.parse(patch_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let patch
    try {
        patch = await Patches.update(
            patch_data,
            {
                where: {
                    patch_uuid: given_patch_uuid,
                },
            },
            { transaction: trans }
        )
        logger.debug("Patch update output is" + patch)
    } catch (err) {
        logger.debug(
            "Patch update  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Patch insert  error -  tenant check" + err)
    }
    return patch
}

async function db_patch_serial_exist(patch_serial) {
    logger.debug('the patch_serial is', patch_serial)
    let patch_data
    logger.debug("THIS IS IN PATCH SERIAL FUNCTION", patch_data)
    try {
        patch_data = await Patches.count({
            where: {
                patch_serial: patch_serial,
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("Patch  " + patch_serial + "not found Err:" + err)
    }
    return patch_data
}

async function db_get_patch(tenant_id, patch_uuid) {
    let patch_data
    whereStatement = { tenant_id: tenant_id, patch_uuid: patch_uuid }

    try {
        patch_data = await Patches.findAll({
            include: [
                {
                    model: models.patch_patient_map
                }
            ],

            where: whereStatement,
        })
    } catch (err) {
        throw new Error("Failed to get the associated patch")
    }
    return patch_data
}

module.exports = {
    db_get_patch_list,
    db_create_patch,
    db_update_patch,
    db_patch_exist,
    db_patch_exist_new,
    db_update_patch_new,
    db_update_patch_uuid,
    db_patch_uuid_exist,
    db_patch_count,
    db_patch_serial_exist,
    db_get_patch
}
