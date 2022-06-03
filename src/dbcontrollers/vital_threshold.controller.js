const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
//const { propfind } = require("../routes/api/vital");
const Tenants = models.tenant
const VitalThreshold = models.vital_threshold
var Vital_threshold = function (vital_thresholdobj) {
    // Basic Details
    ; (this.mintemp = vital_thresholdobj.mintemp),
        (this.maxtemp = vital_thresholdobj.maxtemp),
        (this.minhr = vital_thresholdobj.minh)
        ; (this.maxhr = vital_thresholdobj.maxhr),
            (this.minrr = vital_thresholdobj.minrr),
            (this.maxrr = vital_thresholdobj.maxrr)
}

async function db_create_vital_threshold(
    tenant_id,
    vital_threshold_data,
    transaction
) {
    // vital_threshold_data = JSON.stringify(vital_threshold_data)
    // vital_threshold_data = JSON.parse(vital_threshold_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let vitals = await VitalThreshold.create(vital_threshold_data, {
        transaction: trans,
    })
    try {
        logger.debug("vital threshold insert output is" + vitals)
    } catch (err) {
        logger.debug(
            "Vital Threshold insert  error " +
            tenant_id +
            " not found Err:" +
            err
        )
        throw new Error("Vital threshold insert  error -  tenant check" + err)
    }
    return vitals
}
//This route created new patch in the db
//     vital_threshold_list = ""
//     let pdata = new Vital_threshold(vital_threshold_data)
//     logger.debug("vital threshold data is " + vital_threshold_data)

//     await VitalThreshold.create({
//             mintemp:vital_threshold_data['mintemp'],
//             maxtemp:vital_threshold_data['maxtemp'],
//             minhr:vital_threshold_data['minhr'],
//             maxhr:vital_threshold_data['maxhr'],
//             minrr:vital_threshold_data['minrr'],
//             maxhr:vital_threshold_data['maxhr'],
//             minspo2:vital_threshold_data['minspo2'],
//             mxspo2:vital_threshold_data['maxspo2'],
//             pid:vital_threshold_data['pid'],
//             tenant_uuid:vital_threshold_data['tenant_uuid'],
//             weight_min:vital_threshold_data['weight_min'],
//             maxhr:vital_threshold_data['maxhr'],
//             minspo2:vital_threshold_data['minspo2'],
//             mxspo2:vital_threshold_data['maxspo2'],

//         },{transaction: transaction['transaction']})
//         .then((vital_threshold_data) => {
//             logger.debug("Vital_threshold insert output is" + vital_threshold_data)
//             vital_threshold_list = vital_threshold_data
//         })
//         .catch((err) => {
//             logger.debug(
//                 "Vital_threshold insert  error " +
//                 tenant_id +
//                 " not found Err:" +
//                 err
//             )
//             throw new Error("Vital_threshold insert  error -  tenant check" + err)
//         })

//     return vital_threshold_list
// }

async function db_delete_vital_threshold(given_pid, transaction) {
    let { pid } = given_pid
    logger.debug("The vital threshold given pid is", given_pid)
    VitalThreshold.destroy(
        {
            where: {
                pid: given_pid,
            },
        },
        { transaction: transaction["transaction"] }
    )
        .then((num) => {
            if (num == 1) {
                logger.debug(
                    "The vital threshold is deleted successfully with pid",
                    given_pid
                )
            } else {
                logger.debug(
                    "Cannot delete vital threshold with pid" + given_pid,
                    "may be the vital threshold was not found"
                )
            }
        })
        .catch((err) => {
            logger.debug("The vital threshold delete error is" + err)
            throw new Error(
                "Could not delete vital threshold with pid",
                given_pid
            )
        })
}


async function db_get_vital_threshold_list(params) {
    try {
        return await VitalThreshold.findAll({
            where: {
                pid: params.pid
            },
            order: [["updatedAt", "DESC"]]
        })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    db_get_vital_threshold_list,
    db_create_vital_threshold,
    db_delete_vital_threshold,
}
