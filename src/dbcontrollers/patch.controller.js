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


async function db_get_patch_select_boxes(params) {
    let data
    try {
        data = await Patches.findAll({
            attributes: ['id', 'patch_type', 'device_serial', 'patch_uuid', 'tags', 'sim', 'phone'],
            where: {
                patch_type: params.devicetype,
                patch_status: 'inactive',
                group_type: 'Device',
                in_use: 'false'
            },
            order: [["date", "DESC"]]
        });
    } catch (error) {
        console.log(error)
    }
    return data
}

//for customer testing change latter
async function db_get_patch_saas(params) {
    let data
    let attributes = ['id', 'patch_type', 'patch_serial', 'patch_uuid', 'patch_mac', 'enterprise']
    let filter

    if(params.filter){
        filter = params.filter.split("=")
    }

    try {
        if(filter[1]){
            data = await Patches.findAll({
                attributes: attributes,
                where: {patch_serial: filter[1]},
            });
        }
        else{
            data = await Patches.findAll({
                attributes: attributes,
                limit: parseInt(params.limit)
            });
        }
    } catch (error) {
        console.log(error)
    }
    return data
}


async function db_get_patch_list(tenant_id, query_param) {
    // This async function gets the tenants matching the tenant_name
    // It currently does not check if more than one tenant exist or not. TODO
    // Returns a promise of the tenant_id number
    patch_list = []

    let { limit, offset, filter, patch_serial } = query_param
    const hardLimit = 10
    offset = parseInt(offset)* hardLimit
    limit = parseInt(limit)
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
    // if (query_param.patch_serial) {
    //     whereStatement.patch_serial = { [Op.like]: "%" + patch_serial + "%" }
    //     whereStmtForFree +=
    //         " and patch.patch_serial like '%" + patch_serial + "%' "
    //     // patch_serial: { [Op.like]: }
    // }

    // if (query_param.devicetype) {
    //     // whereStatement.patch_type = {$like: '%' + query_param.devicetype + '%'};
    //     if (query_param.devicetype == "bundle") {
    //         whereStatement.patch_type = "gateway"
    //         whereStmtForFree += " and patch.patch_type = 'gateway'"
    //         // whereStatement.patch_uuid = models.patch_patient_map.patch_group_id;
    //     } else {
    //         whereStatement.patch_type = query_param.devicetype
    //         whereStmtForFree +=
    //             " and patch.patch_type = '" + query_param.devicetype + "'"
    //     }
    // }

    // if (query_param.inuse == 1) {
    //     // whereStatement1.pid != '0';
    //     innerRequired = true
    // }
    // let patch_uuid_from_patient_map

    // if (query_param.inuse == -1) {
    //     whereStatement = Sequelize.literal(
    //         "((patch.patch_uuid NOT IN (SELECT R.patch_uuid FROM patch_patient_map R )) and " +
    //         whereStmtForFree +
    //         ")"
    //     )
    //     // innerRequired = true;
    // }
    logger.debug("The WhereStatement is ", whereStatement)
    await Patches.findAll({
        include: [
            {
                model: models.patch_patient_map,
                include:[
                    {
                        model:models.patient_data,
                        attributes:['fname','lname','pid']
                    }
                ],
                //required: innerRequired,
                required: false,
                where: whereStatement1,
            },
            {
                model: models.patch,
                //   required:false,
                required: true,
                as: "AssociatedPatch",
            },

        ],
        where: whereStatement,
        limit: limit,
        offset: offset,
        // required:true,
        required: false,
        order: [["date", "DESC"]],
        raw: false,
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

async function db_create_patch(tenant_id, params, transaction) {
    let patch_data = params.data
    //This route created new patch in the db
    let patch_list
    if (!patch_data) return
    logger.debug("Patch data is " + JSON.stringify(patch_data))

    const promises = []

    if(params.actionType !== 'bundle'){
        for (let i = 0; i < patch_data.length; i++) {
            // await
            logger.debug("patch type is", patch_data[i]["patch_uuid"])
            promises.push(
                Patches.create(
                    {
                        patch_type: patch_data[i]["patch_type"],
                        // patch_name: patch_data[i]["patch_name"],
                        patch_uuid: patch_data[i]["patch_uuid"],
                        patch_status: 'Inactive',
                        patch_group_id: patch_data[i]["patch_group_id"],
                        // specialty: patch_data[i]["specialty"],
                        patch_mac: patch_data[i]["patch_mac"],
                        // patch_bluetooth: patch_data[i]["patch_bluetooth"],
                        // patch_sensor_id: patch_data[i]["patch_sensor_id"],
                        patch_serial: patch_data[i]["patch_serial"],
                        group_type: 'Device',
                        in_use: 'false',
                        tenant_id: tenant_id,
                        // pid: patch_data[i]["pid"],
                    },
                    { transaction: transaction["transaction"] }
                )
            )
        }
    }

    else {
        if(patch_data[0].ecg){
            promises.push(
                Patches.update(
                    {
                        patch_group_id: patch_data[0]["patch_group_id"],
                        data: Sequelize.fn("now"),
                        group_type: 'Bundle',
                        in_use: 'false'
                    },
                    { where: { 
                        patch_serial: patch_data[0].ecg,
                        patch_type: 'ecg'
                    } }
                )
            )
        }
        if(patch_data[0].gateway){
            promises.push(
                Patches.update(
                    {
                        patch_group_id: patch_data[0]["patch_group_id"],
                        data: Sequelize.fn("now"),
                        group_type: 'Bundle',
                        in_use: 'false'
                    },
                    { where: { 
                        patch_serial: patch_data[0].gateway,
                        patch_type: 'gateway'
                    } }
                )
            )
        }
        if(patch_data[0].spo2){
            promises.push(
                Patches.update(
                    {
                        patch_group_id: patch_data[0]["patch_group_id"],
                        data: Sequelize.fn("now"),
                        group_type: 'Bundle',
                        in_use: 'false'
                    },
                    { where: { 
                        patch_serial: patch_data[0].spo2,
                        patch_type: 'spo2'
                    } }
                )
            )
        }
        if(patch_data[0].temperature){
            promises.push(
                Patches.update(
                    {
                        patch_group_id: patch_data[0]["patch_group_id"],
                        data: Sequelize.fn("now"),
                        group_type: 'Bundle',
                        in_use: 'false'
                    },
                    { where: { 
                        patch_serial: patch_data[0].temperature,
                        patch_type: 'temperature'
                    } }
                )
            )
        }
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

async function db_check_patch_exist(tenant_uuid, patch_list) {
    let data
    const promises = []
    try {
        patch_list.forEach(obj => {
            promises.push(
                Patches.findOne({
                    where: {
                        tenant_id: tenant_uuid,
                        patch_uuid: obj["patch_uuid"],
                    },
                    raw: true,
                })
            )
        });
        await Promise.all(promises)
        .then((result) => {
            let check = false
            data = result
            for (const obj of result) {
                if(obj === null){
                    check = true
                    break
                }
            }
            if(check){
                data = undefined
            }
        })
    } catch (error) {
        console.log(error)
    }
    
    return data
}

async function db_patch_exist(tenant_uuid, patch_list) {
    let data
    // const promises = []
    // for (let i = 0; i < patch_list.length; i++) {
    //     promises.push(
        try {
            data = await Patches.findOne({
                where: {
                    tenant_id: tenant_uuid,
                    patch_uuid: patch_list["patch_uuid"],
                },
                raw: true,
            })
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
        return data
            
    //     )
    // }
    // await Promise.all(promises)
    //     .then((patch_data) => {
    //         logger.debug(
    //             "Patch list is" + JSON.stringify(patch_data),
    //             typeof patch_data,
    //             patch_data.length
    //         )
    //         if (patch_data.length == 0) return patch_data
    //         patch_id = patch_data
    //         logger.debug("patch uuid " + patch_id)
    //     })
    //     .catch((err) => {
    //         logger.debug(
    //             "Patch  " +
    //             tenant_uuid +
    //             ":" +
    //             patch_list +
    //             "not found Err:" +
    //             err
    //         )
    //         throw new Error(
    //             "Patch  " +
    //             tenant_uuid +
    //             ":" +
    //             patch_list +
    //             "not found Err:" +
    //             err
    //         )
    //     })
    // logger.debug("Done with Await of Patch")
    // return patch_id
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



async function db_patch_uuid_exist(patch_uuid) {
    let patch_id
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
            { patch_status: patch_data.patch_status },
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
        patch_data = await Patches.findOne({
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

async function db_delete_patch(params) {
    let data
    let promises = []
    try {
        params.list.forEach(obj => {
            promises.push(
                Patches.destroy({
                    where: {
                        tenant_id: params.tenantId,
                        patch_uuid: obj.patch_uuid,
                        in_use: 'false'
                    }
                })
            )
        });

        await Promise.all(promises)
        .then((result) => {
            data = result
        })
        .catch((error) => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
    return data
}

async function db_update_patch_unRegister(params) {
    let promises = []
    params.forEach(obj => {
        promises.push(
            Patches.update(
                {
                    patch_status: 'Inactive',
                    in_use: 'false',
                    patch_serial: null
                },
                { where: { patch_uuid: obj } }
            )
        )
    });

    await Promise.all(promises)
        .then((result) => {
            return result
        })
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
}

async function db_update_patch_register(params) {
    let promises = []
    params.list.forEach(obj => {
        promises.push(
            Patches.update(
                { 
                    patch_serial: params.gateway,
                    patch_status: 'Active' 
                },
                { where: {patch_uuid: obj}}
            )
        )
    });

    await Promise.all(promises)
    .then((result) => {
        return result
    })
    .catch((error) => {
        console.log(error)
        throw new Error(error)
    })
}

async function db_get_device_id(params) {
    try {
        return await Patches.findOne({
            attributes: ['patch_uuid'],
            where: {patch_serial: params},
        })
    } catch (error) {
        throw new Error(error)
    }
}

async function db_create_device(params, transaction) {
    try {
        return await Patches.create(
            {
                patch_type: params.body.data[0]["patch_type"],
                // patch_name: patch_data[i]["patch_name"],
                patch_uuid: params.body.data[0]["patch_uuid"],
                patch_status: 'Inactive',
                patch_group_id: params.body.data[0]["patch_uuid"],
                // specialty: patch_data[i]["specialty"],
                patch_mac: params.body.data[0]["patch_mac"],
                tags: JSON.stringify(params.body.data[0]["tags"]),
                sim: params.body.data[0]["sim"],
                device_serial: params.body.data[0]["device_serial"],
                group_type: 'Device',
                in_use: 'false',
                tenant_id: params.body.tenantId,
                phone: params.body.data[0]["phone"],
            },
            { transaction: transaction }
        )
    } catch (error) {
        throw new Error(error)
    }
}

async function db_check_duplicate_device(params, transaction) {
    try {
        return await Patches.findOne({
            where: params
        },
        {transaction: transaction}
	)
    } catch (error) {
        throw new Error(error)
    }
}

async function db_get_device(params) {
    const t = await sequelizeDB.transaction()
    try {
        let numb = params.limit
        let limit = params.limit
        let offset = (params.offset - 1) * limit
        let condition_device = {
            tenant_id: params.tenantId
        }
        let condition_patient = { 
            tenant_id: params.tenantId
        }
        
        if (params.search) {
            limit = 1000000
            offset = 0
            params.search = (params.search).toLowerCase()
            const strings = params.search.split(" ")
            if (strings.length === 2) {
                condition_patient = {
                    tenant_id: params.tenantId,
                    fname: { [Op.like]: `%${strings[0]}%` },
                    lname: { [Op.like]: `%${strings[1]}%` }
                }
            }
            else if (strings.length === 3) {
                condition_patient = {
                    tenant_id: params.tenantId,
                    fname: { [Op.like]: `%${strings[0]}%` },
                    mname: { [Op.like]: `%${strings[1]}%` },
                    lname: { [Op.like]: `%${strings[2]}%` }
                }
            }
            else {
                condition_patient = {
                    tenant_id: params.tenantId,
                    [Op.or]: [
                        { fname: { [Op.like]: `%${params.search}%` } },
                        { lname: { [Op.like]: `%${params.search}%` } },
                        { mname: { [Op.like]: `%${params.search}%` } }
                    ]
                }
            }

            condition_device = {
                tenant_id: params.tenantId,
                [Op.or]: [
                    { patch_mac: { [Op.like]: "%" + params.search + "%" } },
                    { device_serial: { [Op.like]: "%" + params.search + "%" } }
                ]
            }
        }

        const data_by_device = await Patches.findAll({
            include: [
                {
                    model: models.patch_patient_map,
                    include: [
                        {
                            model: models.patient_data,
                            attributes: ['fname', 'lname', 'pid', 'med_record', 'primary_consultant', 'secondary_consultant']
                        }
                    ],
                    required: false,
                    where: {
                        tenant_id: params.tenantId
                    }
                },

            ],
            where: condition_device,
            limit: limit,
            offset: offset,
            required: false,
            order: [["date", "DESC"]],
            raw: false,
        },
        { transaction: t })

        if(data_by_device.length > 0){
            const result = { data: getDataByLimit(data_by_device, numb) }
            await t.commit()
            return result
        }

        const data_by_patient = await Patches.findAll({
            include: [
                {
                    model: models.patch_patient_map,
                    include: [
                        {
                            model: models.patient_data,
                            attributes: ['fname', 'lname', 'pid', 'med_record', 'primary_consultant', 'secondary_consultant'],
                            where: condition_patient
                        }
                    ],
                    required: false,
                    where: {
                        tenant_id: params.tenantId
                    }
                },

            ],
            where: {
                tenant_id: params.tenantId
            },
            limit: limit,
            offset: offset,
            required: false,
            order: [["date", "DESC"]],
            raw: false,
        },
        { transaction: t })

        const result = { data: getDataByLimit(data_by_patient, numb) }
        await t.commit()
        return result
    } catch (error) {
        await t.rollback()
        throw error
    }
}

function getDataByLimit(data, limit) {
    let result = []
    for (let index = 0; index <limit+1; index++) {
        if(data[index] && index<limit){
            result.push(data[index])
        }
        else {
            return result
        }
    }

}


async function db_count_device(params) {
    const t = await sequelizeDB.transaction()
    try {
        const data = await Patches.count({
            where: {
                tenant_id: params.tenantId
            }
        })
        let result = { data: data }
        await t.commit()
        return result
    } catch (error) {
        await t.rollback()
        throw error
    }
}


async function db_update_patch_status(params) {

    return await Patches.update(
        { patch_status: params.patch_status },
        { where: {patch_uuid: params.patch_uuid}}
    )
    .catch((error) => {
        throw new Error(error)
    })
}

async function db_update_patch_gateway(params) {

    return await Patches.update(
        { 
            scan: params.scan,
            reset: params.reset
        },
        { where: {patch_uuid: params.patch_uuid}}
    )
    .catch((error) => {
        throw new Error(error)
    })
}


async function db_reset_device(params) {
    try {
        let data = {}
        if(params.reset){
            data.reset = params.reset
        }
        else{
            data.scan = params.scan
        }
        return await Patches.update(
            data,
            { where: {patch_uuid: params.patch_uuid}}
        )
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}


module.exports = {
    db_get_patch_list,
    db_create_patch,
    db_update_patch,
    db_patch_exist,
    db_patch_exist_new,
    db_update_patch_status,
    db_update_patch_uuid,
    db_patch_uuid_exist,
    db_patch_count,
    db_patch_serial_exist,
    db_get_patch,
    db_check_patch_exist,
    db_get_patch_select_boxes,
    db_delete_patch,
    db_get_patch_saas,
    db_update_patch_unRegister,
    db_get_device_id,
    db_create_device,
    db_check_duplicate_device,
    db_get_device,
    db_count_device,
    db_update_patch_register,
    db_update_patch_gateway,
    db_reset_device
}
