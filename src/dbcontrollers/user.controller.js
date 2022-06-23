const Sequelize = require("sequelize")
const Op = Sequelize.Op
const sequelizeDB = require("../config/emrmysqldb")
const bcrypt = require("bcrypt")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)
const logger = require("../config/logger")
const Users = models.users

models.users.belongsTo(models.user_tenant_map, {
    foreignKey: "user_uuid",
    targetKey: "user_uuid",
})


async function db_validate_user_auth(email, password) {
    //todo:Have to validate email and password
    let user_id = ""
    //let whereStatement = { tenant_id: tenant_id }
    let whereStatement = {}
    logger.debug("THE PASSWORD IS", password)
    if (email) whereStatement.email = email
    try {
        user_id = await Users.findAll({
            where: whereStatement,
        })
    } catch (err) {
        throw new Error("Login Failure as part of user cred -  tenant check")
    }
    return user_id
}


async function db_user_exist(user_uuid) {
    let user_data
    try {
        user_data = await Users.count({
            where: {
                user_uuid: user_uuid,
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("User  " + user_uuid + "not found Err:" + err)
    }
    return user_data
}

async function db_username_exist(username) {
    let user_data
    logger.debug("THIS IS IN USERNAME FUNCTION", user_data)
    try {
        user_data = await Users.count({
            where: {
                username: username,
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("User  " + username + "not found Err:" + err)
    }
    return user_data
}

async function db_user_count(tenant_id) {
    let total_user_count
    try {
        total_user_count = await Users.count()
    } catch (error) {
        logger.debug(
            "Users list count failed error " +
                tenant_id +
                "not found Err:" +
                err
        )
        throw new Error("DBQuery: Users List Count Failed")
    }
    logger.debug("Total User Count is %s", total_user_count)
    return total_user_count
}

async function db_update_user(tenant_id, user_data, given_uuid, transaction) {
    let { user_uuid } = given_uuid
    user_data = JSON.stringify(user_data)
    user_data = JSON.parse(user_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let users
    try {
        users = await Users.update(
            user_data,
            {
                where: {
                    user_uuid: given_uuid,
                },
            },
            { transaction: trans }
        )
        logger.debug("User insert output is" + users)
    } catch (err) {
        logger.debug(
            "User insert  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("User insert  error -  tenant check" + err)
    }
    return users
}

async function db_get_email_users(email, phone) {
    let emailUsers
    try {
        emailUsers = await Users.findAll({
            where: {
                [Op.and]: [
                    {
                        email: email,
                    },
                ],
            },
        })
    } catch (err) {
        throw new Error("Error in fetching the users" + err)
    }
    return emailUsers
}


async function db_user_email(email, user_data) {
    let userEmail
    logger.debug("the email and password is", email)
    logger.debug("the user data is", user_data)
    try {
        userEmail = await Users.update(user_data, {
            where: {
                email: email,
            },
        })
    } catch (err) {
        logger.debug("Unable to find the user with the email" + email + err)
        throw new Error("DBQuery: User email not found")
    }
    return userEmail
}


async function db_email_exist(email) {
    let user_data
    try {
        user_data = await Users.count({
            where: {
                email: email,
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("User  " + email + "not found Err:" + err)
    }
    return user_data
}

async function db_update_patient_user(
    tenant_id,
    user_data,
    given_pid,
    transaction
) {
    let { pid } = given_pid
    user_data = JSON.stringify(user_data)
    user_data = JSON.parse(user_data)
    logger.debug("the user_data in pateint user is", user_data)
    let trans = null
    if (typeof transaction !== "undefined") {
        logger.debug("Transacation is not undefined")
        trans = transaction["transaction"]
    }
    let users
    try {
        users = await Users.update(
            user_data,
            {
                where: {
                    pid: given_pid,
                },
            },
            { transaction: trans }
        )
        logger.debug("User insert output is" + users)
    } catch (err) {
        logger.debug(
            "User update  error " + tenant_id + " not found Err:" + err
        )
        throw new Error("User update  error -  tenant check" + err)
    }
    return users
}


async function db_get_user_list(params) {
    try {
        return await Users.findAll({
            attributes: [
                "id",
                "username",
                "fname",
                "lname",
                "mname",
                "active",
                "email",
                "role",
                "phone",
                "user_uuid",
                "title",
                "tenant_id",
            ],
            where: {
                tenant_id: params.tenantId,
                role: ['Doctor', 'doctor', 'Nurse', 'nurse']
            },
            order: [["date", "ASC"]],
            raw: false
        })
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}


async function db_create_user(params) {
    try {
        return await Users.create(params)
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}


module.exports = {
    db_get_user_list,
    db_create_user,
    db_validate_user_auth,
    db_update_user,
    db_user_exist,
    db_user_count,
    db_username_exist,
    db_user_email,
    db_get_email_users,
    db_email_exist,
    db_update_patient_user,
}