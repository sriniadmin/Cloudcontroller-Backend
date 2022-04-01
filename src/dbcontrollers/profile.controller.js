const Sequelize = require('sequelize')
const op = Sequelize.Op
const SequelizeDB = require('../config/emrmysqldb')
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(SequelizeDB)
var Profile = models.profile

async function dbGetProfileInfo(pid) {
    try {
        let profiles = await Profile.findAll(
            {
                where: {
                    pid: pid,
                },
            }
        )
        logger.debug(`filtered profile : ${profiles}`)
        return profiles
    }
    catch (err) {
        logger.debug(`ERROR : ${err.message}`)
    }
}

async function dbCreateProfile(profData) {
    let profileData = JSON.stringify(profData)
    profileData = JSON.parse(profileData)
    let profiles
    try {
        profiles = await Profile.create(profileData)
        logger.debug(`Profile create output : ${profiles}`)
    }
    catch (err) {
        logger.debug(`ERROR : ${err.message}`)
    }
    return profiles
}

async function dbUpdateProfile(pid, profData) {
    let profileData = JSON.stringify(profData)
    profileData = JSON.parse(profileData)
    try {
        profiles = await Profile.update(
            profileData,
            {
                where: {
                    pid: pid,
                },
            },
        )
        logger.debug(`updated profile data ${profiles}`)
    }
    catch (err) {
        logger.debug(`ERROR : ${err.message}`)
    }
    return profiles
}

async function dbProfileExists(pid) {
    let pidFlag
    try {
        pidFlag = await Profile.count({
            where: {
                pid: pid,
            },
            raw: true,
        })
    } catch (err) {
        throw new Error("Profile  " + pid + "not found Err:" + err)
    }
    return pidFlag
}

module.exports = {
    dbGetProfileInfo,
    dbCreateProfile,
    dbUpdateProfile,
    dbProfileExists
}