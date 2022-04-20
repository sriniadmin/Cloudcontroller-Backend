const Sequelize = require("sequelize");
const sequelizeDB = require("../config/emrmysqldb");
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels;
var models = initModels(sequelizeDB);
const logger = require("../config/logger");
const uuidAPIKey = require("uuid-apikey");
const Tenants = models.tenant;
const Patch_Patient_Map = models.patch_patient_map;
// const Patch_Patient_Map = models.patch_patient_map
var PatchPatientMap = function (patch_patient_map_obj) {
    // Basic Details
    (this.pid = patch_patient_map_obj.pid),
        (this.patch_uuid = patch_patient_map_obj.patch_uuid);
};

models.patch_patient_map.hasMany(models.patch, {
    foreignKey: "patch_uuid",
    sourceKey: "patch_uuid",
});

async function db_get_patch_map_list(tenant_id, username, params) {
    prac_list = "";
    let { limit, offset, filter, pid, sn } = params;
    if (!limit) {
        limit = 100;
    }
    if (!offset) {
        offset = 0;
    }
    let whereStatementPatch = {}
    if(tenant_id) {  
            whereStatementPatch.tenant_id =tenant_id
    }
    
    if (sn) {
        whereStatementPatch.patch_serial = sn;
    }
    if (pid) {
        await Patch_Patient_Map.findAll({
            include: [
                {
                    model: models.patch,
                    raw: false,
                    where: whereStatementPatch,
                },
            ],
            limit: parseInt(limit),
            // offset:parseInt(offset),
            order: ["id"],
            raw: false,
            where: {
                pid: pid,
            },
        })
            .then((patch_patient_map_data) => {
                logger.debug(
                    "Patient Patch Map list is" + patch_patient_map_data
                );
                patch_patient_map_list = patch_patient_map_data;
            })
            .catch((err) => {
                logger.debug(
                    "Patch list fetch error " +
                    tenant_id +
                    "not found Err:" +
                    err
                );
                throw new Error("Patch list fetch error -  tenant check");
            });

        return patch_patient_map_list;
    } else {
        await Patch_Patient_Map.findAll({
            include: [
                {
                    model: models.patch,
                    raw: false,
                    where: whereStatementPatch,
                },
            ],
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: ["id"],
            raw: true,
        })
            .then((patch_patient_map_data) => {
                // logger.debug("patch patient list is" + patch_patient_map_data);

                patch_patient_map_list = patch_patient_map_data;
            })
            .catch((err) => {
                logger.debug(
                    "patch_patient_map list fetch error " +
                    tenant_id +
                    "not found Err:" +
                    err
                );
                throw new Error(
                    "patch_patient_map list fetch error -  tenant check"
                );
            });

        return patch_patient_map_list;
    }
}

function updateOrCreate(model, where, newItem) {
    // First try to find the record
    return model
        .findOne({
            where: where,
        })
        .then(function (foundItem) {
            if (!foundItem) {
                // Item not found, create a new one
                return model.create(newItem).then(function (item) {
                    return {
                        item: item,
                        created: true,
                    };
                });
            }
            // Found an item, update it
            return model
                .update(newItem, {
                    where: where,
                })
                .then(function (item) {
                    return {
                        item: item,
                        created: false,
                    };
                });
        });
}

async function db_create_patch_associate(
    tenant_id,
    patch_patient_map_data,
    transaction
) {
    //This route created new patch_patient_map in the db
    patch_patient_map_list = "";
    if (!patch_patient_map_data) return;
    logger.debug(
        "Patch data is " + JSON.stringify(patch_patient_map_data) + tenant_id
    );
    let pdata = new PatchPatientMap(patch_patient_map_data);
    const promises = [];
    for (let i = 0; i < patch_patient_map_data.length; i++) {
        logger.debug("patch type is", patch_patient_map_data[i]["patch_uuid"]);
        if (patch_patient_map_data[i]["pid"] == 0) {
            logger.debug("The Patch is getting removed now..");
            promises.push(
                Patch_Patient_Map.destroy(
                    {
                        where: {
                            // pid:patch_patient_map_data[i]['pid'],
                            patch_uuid: patch_patient_map_data[i]["patch_uuid"],
                            tenant_id: tenant_id,
                        },
                    },
                    {
                        transaction: transaction["transaction"],
                    }
                )
            );
        } else {
            logger.debug("The Patch is getting created/updated now..");
            promises.push(
                updateOrCreate(
                    Patch_Patient_Map,
                    {
                        pid: patch_patient_map_data[i]["pid"],
                        patch_uuid: patch_patient_map_data[i]["patch_uuid"],
                        tenant_id: tenant_id,
                    },
                    {
                        pid: patch_patient_map_data[i]["pid"],
                        patch_uuid: patch_patient_map_data[i]["patch_uuid"],
                        config: patch_patient_map_data[i]["config"],
                        duration: patch_patient_map_data[i]["duration"],

                        command: patch_patient_map_data[i]["command"], 
                        //keepaliveTime: patch_patient_map_data[i]["keepaliveTime"],
                        keepaliveHistory: patch_patient_map_data[i]["keepaliveHistory"],

                        tenant_id: tenant_id,
                    }
                )
            );
        }
    }
    logger.debug("Promise is ", promises);
    await Promise.all(promises)
        .then((patch_patient_map_data) => {
            logger.debug(
                "patch_patient_map insert output is" + patch_patient_map_data
            );
            patch_patient_map_list = patch_patient_map_data;
        })
        .catch((err) => {
            console.log('BUG:', err)
            logger.debug(
                "Prac insert  error " + tenant_id + " not found Err:" + err
            );
            throw new Error("patch_patient_map insert  error -  tenant check");
        });

    return patch_patient_map_list;
}

async function db_create_patch_associate_one(
    tenant_id,
    patch_patient_map_data,
    pid
) {
    //This route created new patch_patient_map in the db
    let data

    let promises = [];

    patch_patient_map_data.forEach(obj => {
        if (obj["pid"] == 0) {
            logger.debug("The Patch is getting removed now..");
            promises.push(
                Patch_Patient_Map.destroy(
                    {
                        where: {
                            // pid:patch_patient_map_data['pid'],
                            patch_uuid: obj["patch_uuid"],
                            tenant_id: tenant_id,
                        },
                    },
                    {
                        transaction: transaction["transaction"],
                    }
                )
            );
        } else {
            logger.debug("The Patch is getting created/updated now..");
            promises.push(
                updateOrCreate(
                    Patch_Patient_Map,
                    {
                        pid: pid,
                        patch_uuid: obj["patch_uuid"],
                        tenant_id: tenant_id,
                    },
                    {
                        pid: pid,
                        patch_uuid: obj["patch_uuid"],
                        config: obj["config"],
                        duration: obj["duration"],
    
                        command: obj["command"],
                        //keepaliveTime: patch_patient_map_data["keepaliveTime"],
                        keepaliveHistory: obj["keepaliveHistory"],
    
                        tenant_id: tenant_id,
                    }
                )
            );
        }
    });

    await Promise.all(promises)
        .then((patch_patient_map_data) => {
            logger.debug(
                "patch_patient_map insert output is" + patch_patient_map_data
            );
            data = patch_patient_map_data;
        })
        .catch((err) => {
            console.log('BUG:', err)
            logger.debug(
                "Prac insert  error " + tenant_id + " not found Err:" + err
            );
            throw new Error("patch_patient_map insert  error -  tenant check");
        });

    return data;
}

async function db_update_patch_associate(
    tenant_id,
    patch_data,
    given_pid,
    transaction
) {
    let { pid } = given_pid;
    if (!patch_data) return;
    logger.debug("The patch pid is", given_pid);
    patch_patient_map_list = "";
    let pdata = new PatchPatientMap(patch_data);
    logger.debug("Patch data is " + patch_data);
    const promises = [];
    for (let i = 0; i < patch_data.length; i++) {
        // await
        logger.debug("patch type is", patch_data[i]["patch_uuid"]);
        promises.push(
            Patch_Patient_Map.update(
                {
                    duration: patch_data[i]["duration"],
                    config: patch_data[i]["config"],

                    command: patch_data[i]["command"],
                    keepaliveTime: patch_data[i]["keepaliveTime"],
                    keepaliveHistory: patch_data[i]["keepaliveHistory"],


                },
                {
                    where: {
                        patch_uuid: patch_data[i]["patch_uuid"],
                    },
                },
                {
                    transaction: transaction["transaction"],
                }
            )
        );
    }
    logger.debug("Promise is ", promises);
    await Promise.all(promises)
        .then((patch_patient_map_data) => {
            logger.debug(
                "patch_patient_map insert output is" + patch_patient_map_data
            );
            patch_patient_map_list = patch_patient_map_data;
        })
        .catch((err) => {
            logger.debug(
                "Patch insert  error " + tenant_id + " not found Err:" + err
            );
            throw new Error(
                "patch_patient_map insert  error -  tenant check" + err
            );
        });

    return patch_patient_map_list;
}

async function db_delete_patch_patient_map(given_pid, transaction) {
    let patch_patient_map_data;
    try {
        patch_patient_map_data = await Patch_Patient_Map.destroy(
            {
                where: {
                    pid: given_pid,
                },
            },
            {
                transaction: transaction["transaction"],
            }
        );
    } catch (err) {
        logger.debug('Could not delete the patches' + err)
        throw new Error("Patch  " + given_pid + "not found Err:" + err);
    }
    return patch_patient_map_data;
}

// async function db_delete_patch_patient_map(given_pid, transaction) {
//     let { pid } = given_pid
//     logger.debug("The patch_patient_map given pid is", given_pid)
//     Patch_Patient_Map.destroy(
//         {
//             where: {
//                 pid: given_pid,
//             },
//         },
//         {
//             transaction: transaction["transaction"],
//         }
//     )
//         .then((num) => {
//             if (num == 1) {
//                 logger.debug(
//                     "The patch_patient_map is deleted successfully with pid",
//                     given_pid
//                 )
//             } else {
//                 logger.debug(
//                     "Cannot delete patch_patient_map with pid" + given_pid,
//                     "may be the patch_patient_map was not found"
//                 )
//             }
//         })
//         .catch((err) => {
//             logger.debug("The patch_patient_map delete error is" + err)
//             throw new Error(
//                 "Could not delete patch_patient_map with pid",
//                 given_pid
//             )
//         })
// }

async function clear_command(tenant_id, patch_data, transaction) {
    // logger.debug("clear command : ", patch_data, tenant_id);
    if (!transaction) {
        transaction = {};
        transaction["transaction"] = null;
    }

    if (!patch_data) return;
    let { pid } = patch_data;
    // logger.debug("clear command : pid ", pid, patch_data["pid"]);
    let patch_patient_map_list;
    const promises = [];
    await Patch_Patient_Map.update(
        {
            command: "",
        },
        { where: { pid: pid } }
    )
        .then((patch_patient_map_data) => {
            // logger.debug(
            //     "clearing command  output is" + patch_patient_map_data
            // );
            patch_patient_map_list = patch_patient_map_data;
        })
        .catch((err) => {
            logger.debug(
                "Patch insert  error " + tenant_id + " not found Err:" + err
            );
            throw new Error(
                "patch_patient_map insert  error -  tenant check" + err
            );
        });
    // logger.debug("Clearing return");
    return patch_patient_map_list;
}

async function update_keepalive(tenant_id, patch_data, transaction) {
    // logger.debug("keepalive command : ", patch_data, tenant_id);
    if (!patch_data) return;
    if (!transaction) {
        transaction = {};
        transaction["transaction"] = null;
    }
    let { pid, keepaliveData, discoverData } = patch_data;
    let patch_patient_map_list;
    // logger.debug(
    //     "keepalive command serial : ",
    //     pid,
    //     Object.keys(keepaliveData)
    // );
    const promises = [];
    promises.push(
        Patch_Patient_Map.update(
            {
                keepaliveHistory: keepaliveData,
            },
            {
                where: {
                    pid: pid,
                },
            }
        )
    );
    if (discoverData){
        promises.push(
            Patch_Patient_Map.update(
                {
                    discoverDevices: discoverData,
                },
                {
                    where: {
                        pid: pid,
                    },
                }
            )
        );
    }
    logger.debug("Promise is ", promises);
    await Promise.all(promises)
        .then((patch_patient_map_data) => {
            logger.debug(
                "keepalive command  output is" +
                JSON.stringify(patch_patient_map_data)
            );
            patch_patient_map_list = patch_patient_map_data;
        })
        .catch((err) => {
            logger.debug(
                "Patch insert  error " + tenant_id + " not found Err:" + err
            );
            throw new Error(
                "patch_patient_map insert  error -  tenant check" + err
            );
        });

    return patch_patient_map_list;
}





module.exports = {
    db_get_patch_map_list,
    db_create_patch_associate,
    db_update_patch_associate,
    db_delete_patch_patient_map,
    clear_command,
    update_keepalive,
    db_create_patch_associate_one
};
