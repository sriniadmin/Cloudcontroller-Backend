const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
const bcrypt = require("bcrypt")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Allergy = models.allergy

// async function db_create_allergy(tenant_id, allergy_data, transaction) {
//     allergy_list = ""
//     logger.debug("allergy data is " + JSON.stringify(allergy_data))

//     await Allergy.create(
//         {
//             allergy_type: allergy_data["allergy_type"],
//             pid: allergy_data["pid"],
//             allergy_name: allergy_data["allergy_name"],
//             reaction: allergy_data["reaction"],
//             status: allergy_data["status"],
//             tenant_id: allergy_data["tenant_id"],
//             allergy_uuid: allergy_data["allergy_uuid"],
//             note: allergy_data["note"],
//             date_from: allergy_data["date_from"],
//             date_to: allergy_data["date_to"],
//         },
//         { transaction: transaction["transaction"] }
//     )
//         .then((allergy_data) => {
//             logger.debug("Allergy insert output is" + JSON.stringify(allergy_data))
//             allergy_list = allergy_data
//         })
//         .catch((err) => {
//             logger.debug(
//                 "Allergy insert  error " + tenant_id + " not found Err:" + err
//             )
//             throw new Error("Allergy insert  error -  tenant check" + err)
//         })

//     return allergy_list
// }


// async function db_get_allergy_list(tenant_id, username, params) {
//     alergy_list = ""
//     let {
//         // limit,
//         // offset,
//         // filter,
//         pid,
//     } = params

//     logger.debug('this is allergy controller')
//     await Allergy.findAll({
//         // limit: parseInt(limit),
//         //offset:parseInt(offset),
//         // order: Sequelize.literal('date DESC'),
//         raw: true,
//         where: { pid: pid },
//     })
//         .then((allergy_data) => {
//             logger.debug("Allergy list is" + allergy_data)
//             alergy_list = allergy_data
//         })
//         .catch((err) => {
//             logger.debug(
//                 "Allergy list fetch error " +
//                 tenant_id +
//                 "not found Err:" +
//                 err
//             )
//             throw new Error("Allergy list fetch error -  tenant check")
//         })

//     return alergy_list

// }

// async function db_update_allergy(tenant_id, allergy_data, given_pid, transaction) {
//     let { pid } = given_pid
//     let allergy_uuid = allergy_data["allergy_uuid"]
//     if (!allergy_data) return
//     allergy_list = ""
//     logger.debug("Allergy data is " + allergy_data)
//     console.log(allergy_data)

//     await Allergy.update(
//         {
//             allergy_type: allergy_data["allergy_type"],
//             pid: allergy_data["pid"],
//             allergy_name: allergy_data["allergy_name"],
//             reaction: allergy_data["reaction"],
//             status: allergy_data["status"],
//             tenant_id: allergy_data["tenant_id"],
//             allergy_uuid: allergy_data["allergy_uuid"],
//             note: allergy_data["note"],
//             date_from: allergy_data["date_from"],
//             date_to: allergy_data["date_to"],
//         },
//         {
//             where: {
//                 allergy_uuid: allergy_uuid,
//             },
//         },
//         { transaction: transaction["transaction"] }
//     )

//         .then((allergy_data) => {
//             logger.debug("Allergy insert output is" + allergy_data)
//             allergy_list = allergy_data
//         })
//         .catch((err) => {
//             logger.debug(
//                 "Allergy insert  error " + tenant_id + " not found Err:" + err
//             )
//             throw new Error("Allergy insert  error -  tenant check")
//         })

//     return allergy_list
// }


async function db_get_allergy_list(params) {
    try {
        return await Allergy.findAll({
            where: {
                pid: params.pid
            },
            order: [["id", "DESC"]]
        })
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}


async function db_add_allergy(params) {
    try {
        const obj = {
            allergy_name: params["allergy_name"],
            allergy_type: params["allergy_type"],
            date_from: params["date_from"] || null,
            date_to: params["date_to"] || null,
            note: params["note"] || null,
            tenant_id: params["tenant_id"],
            pid: params["pid"],
            reaction: params["reaction"],
            allergy_uuid: params["allergy_uuid"],
            status: params["status"]
        }
        return await Allergy.create(obj)
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}


async function db_update_allergy(params) {
    try {
        const obj = {
            allergy_name: params["allergy_name"],
            allergy_type: params["allergy_type"],
            date_from: params["date_from"],
            date_to: params["date_to"],
            note: params["note"],
            reaction: params["reaction"],
            status: params["status"]
        }
        return await Allergy.update(
            obj,
            {
                where: {
                    allergy_uuid: params["allergy_uuid"],
                }
            }
        )
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

module.exports = {
    db_get_allergy_list,
    db_add_allergy,
    db_update_allergy,
}
