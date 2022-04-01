const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Notes = models.notes

models.notes.hasMany(models.users, {
    foreignKey: "user_uuid",
    sourceKey: "user_uuid",
    as: "useruuid",
})

models.notes.hasMany(models.users, {
    foreignKey: "user_uuid",
    sourceKey: "prac_uuid",
    as: "pracuuid",
})



async function db_get_notes_list(tenant_id, username, params) {
    let notes
    let { limit, offset, note, pid } = params
    let whereStatement = { pid: pid }
    logger.debug("THE PID IS", pid)
    if (note) {
        whereStatement.note = { [Op.like]: "%" + note + "%" }
    }

    try {
        notes = await Notes.findAll({
            include: [
                {
                    model: models.users,
                    as: "useruuid",
                    attributes: ["fname", "lname", "username", "user_uuid"],
                    raw: false,
                },
                {
                    model: models.users,
                    as: "pracuuid",
                    attributes: ["fname", "lname", "username", "user_uuid"],
                    raw: false,
                },
            ],
            where: whereStatement,
        })
    } catch (err) {
        throw new Error("Failure in fetching the notes" + err)
    }
    return notes
}

async function db_create_notes(tenant_id, notes_data, transaction) {
    notes_data = JSON.stringify(notes_data)
    notes_data = JSON.parse(notes_data)
    logger.debug("the notes data is", notes_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let notes
    try {
        notes = await Notes.create(notes_data, { transaction: trans })
        logger.debug("Notes insert output is" + notes)
    } catch (err) {
        logger.debug(
            "Notes insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Notes insert  error -  tenant check" + err)
    }
    return notes
}

async function db_update_notes(tenant_id, notes_data, given_pid, transaction) {
    let { pid } = given_pid
    notes_data = JSON.stringify(notes_data)
    notes_data = JSON.parse(notes_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let notes
    try {
        notes = await Notes.update(
            notes_data,
            {
                where: {
                    pid: given_pid,
                },
            },
            { transaction: trans }
        )
        logger.debug("Notes insert output is" + notes)
    } catch (err) {
        logger.debug(
            "Notes insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("Notes insert  error -  tenant check" + err)
    }
    return notes
}

async function db_delete_notes(given_pid, transaction) {
    let { pid } = given_pid
    logger.debug("The note given pid is", given_pid)
    Notes.destroy(
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
                    "The notes is deleted successfully with pid",
                    given_pid
                )
            } else {
                logger.debug(
                    "Cannot delete note with pid" + given_pid,
                    "may be the note was not found"
                )
            }
        })
        .catch((err) => {
            logger.debug("The note delete error is" + err)
            throw new Error("Could not delete note with pid", given_pid)
        })
}
module.exports = {
    db_get_notes_list,
    db_create_notes,
    db_update_notes,
    db_delete_notes,
}
