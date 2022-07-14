const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Notes = models.notes
const NOTE_ATTACHMENT = models.note_attachment

models.notes.hasMany(models.users, {
    foreignKey: "user_uuid",
    sourceKey: "user_uuid",
    as: "useruuid",
})


models.notes.hasMany(models.note_attachment, {
    foreignKey: "note_uuid",
    sourceKey: "note_uuid"
})

models.notes.hasMany(models.users, {
    foreignKey: "user_uuid",
    sourceKey: "prac_uuid",
    as: "pracuuid",
})


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


async function db_create_notes(params) {
    const t = await sequelizeDB.transaction()
    try {
        const obj = {
            note: params.note,
            note_type: params.note_type,
            note_uuid: params.note_uuid,
            pid: params.pid,
            prac_uuid: params.prac_uuid,
            user_uuid: params.user_uuid,
            tenant_id: params.tenant_id
        }
        const data = await Notes.create(
            obj,
            { transaction: t })
        const result = { data: data }
        await t.commit()
        return result
    } catch (error) {
        await t.rollback()
        throw new Error(error)
    }
}


async function db_get_notes_list(params) {
    const t = await sequelizeDB.transaction()
    try {
        let condition = { pid: params.pid }
        if (params.note) {
            condition.note = { [Op.like]: `%${params.note}%` }
        }
        const data = await Notes.findAll({
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
                {
                    model: models.note_attachment,
                    attributes: ["id", "name", "type"],
                    raw: false,
                }
            ],
            where: condition,
        },
            { transaction: t })
        const result = { data: data }
        await t.commit()
        return result
    } catch (error) {
        await t.rollback()
        throw error
    }
}


async function db_create_notes_attachment(params) {
    const t = await sequelizeDB.transaction()
    try {
        const data = await NOTE_ATTACHMENT.create(
            params,
            { transaction: t })
        const result = { data: data }
        await t.commit()
        return result
    } catch (error) {
        await t.rollback()
        throw new Error(error)
    }
}

async function db_download_attachment(params) {
    const t = await sequelizeDB.transaction()
    try {
        const data = await NOTE_ATTACHMENT.findOne({
            where: {
                id: params.id
            }
            },
            { transaction: t })
        const result = { data: data }
        await t.commit()
        return result
    } catch (error) {
        await t.rollback()
        throw new Error(error)
    }
}


module.exports = {
    db_get_notes_list,
    db_create_notes,
    db_update_notes,
    db_delete_notes,
    db_create_notes_attachment,
    db_download_attachment
}