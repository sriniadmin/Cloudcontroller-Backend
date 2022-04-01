const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models")
    .initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Tenants = models.tenant
const Prac_Patient_Map = models.practictioner_patient_map
const uuidAPIKey = require("uuid-apikey")
var Prac = function (practictionerobj) {
    // Basic Details
    ; (this.patient_uuid = practictionerobj.patient_uuid),
        (this.users_uuid = practictionerobj.users_uuid),
        (this.archive = practictionerobj.archive)
}

models.practictioner_patient_map.hasMany(models.users, {
    foreignKey: "user_uuid",
    sourceKey: "users_uuid",
})

// models.practictioner_patient_map.hasMany(models.users, {
//     foreignKey: "user_uuid",
//     sourceKey: "prac_uuid",
//     as: 'PracTable'
// })

async function db_get_practictioner_list(tenant_id, username, params) {
    practictioner_list = ""
    let { limit, offset, filter, pid } = params
    if (pid) {
        await Prac_Patient_Map.findAll({
            limit: parseInt(limit),
            // offset:parseInt(offset),
            include: [{
                model: models.users,
                attributes: ["fname", "lname"],
                raw: false,
            }
            ],
            // include: [
            // ],
            order: ["id"],
            raw: true,
            where: { pid: pid },
        })
            .then((practictioner_data) => {
                logger.debug("Patch list is" + practictioner_data)
                practictioner_list = practictioner_data
            })
            .catch((err) => {
                logger.debug(
                    "Practictioner list fetch error " +
                    tenant_id +
                    "not found Err:" +
                    err
                )
                throw new Error(
                    "Practictioner list fetch error -  tenant check"
                )
            })

        return practictioner_list
    } else {
        await Prac_Patient_Map.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: ["id"],
            raw: true,
        })
            .then((practictioner_data) => {
                logger.debug("Practictioner list is" + practictioner_data)

                practictioner_list = practictioner_data
            })
            .catch((err) => {
                logger.debug(
                    "Practioctioner list fetch error " +
                    tenant_id +
                    "not found Err:" +
                    err
                )
                throw new Error(
                    "Practioctioner list fetch error -  tenant check"
                )
            })

        return practictioner_list
    }
}

async function db_create_practictioner(
    tenant_id,
    practictioner_data,
    transaction
) {
    //This route created new patch in the db
    practictioner_list = ""
    let pdata = new Prac(practictioner_data)
    logger.debug("Practictioner data is " + JSON.stringify(practictioner_data))

    await Prac_Patient_Map.create(
        {
            patient_uuid: practictioner_data["patient_uuid"],
            users_uuid: practictioner_data["users_uuid"],
            archive: practictioner_data["archive"],
            pid: practictioner_data["pid"],
            primary_consultant: practictioner_data["primary_consultant"],
            secondary_consultant: practictioner_data["secondary_consultant"],
            tenant_id: tenant_id,
        },
        { transaction: transaction["transaction"] }
    )
        .then((practictioner_data) => {
            logger.debug("Prac insert output is" + practictioner_data)
            practictioner_list = practictioner_data
        })
        .catch((err) => {
            logger.debug(
                "Practictioner insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("Practictioner insert  error -  tenant check" + err)
        })

    return practictioner_list
}

module.exports = { db_get_practictioner_list, db_create_practictioner }
