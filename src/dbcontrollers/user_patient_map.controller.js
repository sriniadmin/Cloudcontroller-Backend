const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels = require("../dbmodels/sequelizeEMRModels/init-models")
    .initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const UserPatientMap = models.user_patient_map
var UserMap = function (userpatientobj) {
    (this.user_uuid = userpatientobj.user_uuid),
        (this.updated_time = userpatientobj.updated_time),
        (this.archive = userpatientobj.archive),
        (this.active = userpatientobj.active),
        (this.pid = userpatientobj.pid),
        (this.patient_uuid = userpatientobj.patient_uuid),
        (this.role = userpatientobj.role)
}

models.user_patient_map.hasMany(models.users, {
    foreignKey: "user_uuid",
    sourceKey: "user_uuid",
})

async function db_get_user_patient_map_list(tenant_id, username, params) {
    user_patient_map_list = ""
    let { limit, offset, filter, pid } = params
    if (pid) {
        await UserPatientMap.findAll({
            limit: parseInt(limit),
            // offset:parseInt(offset),
            include: [{
                model: models.users,
                attributes: ["fname", "lname"],
                raw: false,
            },
            ],
            order: ["id"],
            raw: true,
            where: { pid: pid },
        })
            .then((user_patient_map_data) => {
                logger.debug("user patient map list is" + user_patient_map_data)
                user_patient_map_list = user_patient_map_data
            })
            .catch((err) => {
                logger.debug(
                    "user patient map list fetch error " +
                    tenant_id +
                    "not found Err:" +
                    err
                )
                throw new Error(
                    "user patient map list fetch error -  tenant check"
                )
            })

        return user_patient_map_list
    } else {
        await UserPatientMap.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: ["id"],
            raw: true,
        })
            .then((user_patient_map_data) => {
                logger.debug("user patient map list is" + user_patient_map_data)

                user_patient_map_list = user_patient_map_data
            })
            .catch((err) => {
                logger.debug(
                    "user patient map list fetch error " +
                    minrr +
                    "not found Err:" +
                    err
                )
                throw new Error(
                    "user patient map list fetch error -  tenant check"
                )
            })

        return user_patient_map_list
    }
}

async function db_create_user_patient_map(
    tenant_id,
    user_patient_map_data,
    transaction
) {
    user_patient_map_list = ""
    let pdata = new UserMap(user_patient_map_data)
    logger.debug("User Patient Map data is " + user_patient_map_data)

    await UserPatientMap.create(
        {
            user_uuid: user_patient_map_data["user_uuid"],
            updated_time: user_patient_map_data["updated_time"],
            archive: user_patient_map_data["archive"],
            active: user_patient_map_data["active"],
            pid: user_patient_map_data["pid"],
            role: user_patient_map_data["role"],
        },
        { transaction: transaction["transaction"] }
    )
        .then((user_patient_map_data) => {
            logger.debug(
                "user patient map insert output is" + user_patient_map_data
            )
            user_patient_map_list = user_patient_map_data
        })
        .catch((err) => {
            logger.debug(
                "user patient map insert  error " +
                tenant_id +
                " not found Err:" +
                err
            )
            throw new Error("user patient map insert  error -  tenant check" + err)
        })

    return user_patient_map_list
}

module.exports = { db_get_user_patient_map_list, db_create_user_patient_map }
