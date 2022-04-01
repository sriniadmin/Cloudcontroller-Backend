const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
const bcrypt = require("bcrypt")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Procedure = models.procedure

async function db_create_procedure(tenant_id, procedure_data, transaction) {
    procedure_data = JSON.stringify(procedure_data)
    procedure_data = JSON.parse(procedure_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let procedure
    try {
        procedure = await Procedure.create(procedure_data, {
            transaction: trans,
        })
        logger.debug("Procedure insert output is" + procedure)
    } catch (err) {
        logger.debug(
            "Procedure insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Procedure insert  error -  tenant check" + err)
    }
    return procedure
}

async function db_update_procedure(
    tenant_id,
    procedure_data,
    given_uuid,
    transaction
) {
    let { pid } = given_uuid
    procedure_data = JSON.stringify(procedure_data)
    procedure_data = JSON.parse(procedure_data)
    let procedure_uuid = procedure_data["procedure_uuid"]
    logger.debug("the procedure uuid in controller is", procedure_uuid)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let procedure
    try {
        procedure = await Procedure.update(
            procedure_data,
            {
                where: {
                    pid: given_uuid,
                    procedure_uuid: procedure_uuid,
                },
            },
            { transaction: trans }
        )
        logger.debug("Procedure insert output is" + procedure)
    } catch (err) {
        logger.debug(
            "Procedure insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Procedure insert  error -  tenant check" + err)
    }
    return procedure
}



async function db_get_procedure_list(tenant_id, username, params) {
    procedure_list = ""
    let {
        // limit,
        // offset,
        // filter,
        pid,
        startDate,
        endDate,
    } = params

    if (startDate && endDate) {
        // when dates are provided - fetch all in the given range

        await Procedure.findAll({
            // limit: parseInt(limit),
            //offset:parseInt(offset),
            // order: Sequelize.literal('date DESC'),
            raw: true,
            where: {
                pid: pid,
                diagnosis_date: {
                    [Op.between]: [startDate, endDate],
                    // same effect
                    // $lte: new Date(startDate),
                    // $gte: new Date(endDate),
                },
            },
            order: [["diagnosis_date", "ASC"]],
        })
            .then((procedure_data) => {
                logger.debug("Procedure list is" + procedure_data)
                procedure_list = procedure_data
            })
            .catch((err) => {
                logger.debug(
                    "Procedure list fetch error " +
                        tenant_id +
                        "not found Err:" +
                        err
                )
                throw new Error("Procedure list fetch error -  tenant check")
            })
    } else {
        // when datese are not provided - fetch all procedures

        await Procedure.findAll({
            // limit: parseInt(limit),
            //offset:parseInt(offset),
            // order: Sequelize.literal('date DESC'),
            raw: true,
            where: { pid: pid },
        })
            .then((procedure_data) => {
                logger.debug("Procedure list is" + procedure_data)
                procedure_list = procedure_data
            })
            .catch((err) => {
                logger.debug(
                    "Procedure list fetch error " +
                        tenant_id +
                        "not found Err:" +
                        err
                )
                throw new Error("Procedure list fetch error -  tenant check")
            })
    }

    return procedure_list
}

module.exports = {
    db_create_procedure,
    db_get_procedure_list,
    db_update_procedure,
}
