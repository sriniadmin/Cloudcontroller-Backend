const logger = require("../config/logger")
const gtts = require("gtts")
const fs = require("fs")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const sequelizeDB = require("../config/emrmysqldb")
const postgresSequelizeDB = require("../config/emrpostgresdb")
const RBAC = require("../middleware/rbac")
var extract = require("pdf-text-extract")
const { license } = require("../external_services/license/license.json")
const alertEnum = require('../alerter/alertEnum')
const { v1: uuid } = require('uuid')
const { createWorker, PSM, createScheduler } = require("tesseract.js")
const lodash = require("lodash")
let tags
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const stream = require('stream');

const recallFuntion = recall
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)

const schemaValidator = require("../dbmodels/jsonSchema/schemaValidator")
const {
    SYSTEM_AAA_CODE,
    LOCATION_CODE,
    TENANTS_CODE,
    TENANT_CODE,
    BED_CODE,
    TRANSACTION_CODE,
    PATCH_CODE,
    CONNECTOR_CODE,
    PRODUCT_CODE,
    FACILITY_CODE,
    INTERNAL_CODE,
    USER_CODE,
    JSON_SCHEMA_CODE,
    LICENSE_CODE,
    SCHEMA_CODE,
    UUID_CONST,
    IMAGE_CODE,
    ROLE_CODE,
    MEDICAL_HISTORY_CODE,
    ALLERGY_CODE,
    LAB_REPORT_CODE,
    REPORT_CODE,
    TASK_CODE,
    PASSWORD_CODE,
    PROFILE_CODE,
    DEVICE_CODE
} = require("../lib/constants/AppEnum")

const getUUID = require("../lib/system/uuidSystem").getUUID

const {
    db_get_device_type
} = require("../dbcontrollers/deivce_type.controller")

const {
    db_create_images,
    db_get_images_list,
    db_create_report,
    db_get_report_list,
    db_update_images,
} = require("../middleware/upload.controller")
const {
    db_get_connector_list,
    db_create_connector,
} = require("../dbcontrollers/connector.controller")
const {
    db_get_product_list,
    db_create_product,
} = require("../dbcontrollers/product.controller")

const {
    db_get_facility_list,
    db_create_facility,
    db_update_facility,
    db_get_facility
} = require("../dbcontrollers/facility.controller")

const {
    db_get_location_list,
    db_create_location,
    db_location_count,
    db_get_remote_location,
    db_update_remote_location,
    db_create_remote_location,
} = require("../dbcontrollers/location.controller")

const {
    db_get_role_list,
    db_create_role,
    db_delete_role,
    db_update_role,
    db_role_exist,
    db_bulk_create_role,
    db_get_role
} = require("../dbcontrollers/role.controller")

const modelsInfo = require("../utils/scripts/Models_fields_info")
const user_controller = require("../dbcontrollers/user.controller")

const { dbOutput_JSON } = require("../utils/dbUtils/dbUtils")

const {
    db_get_tenant_id,
    db_get_tenant_list,
    db_update_tenant,
    db_create_tenant,
    db_get_tenant_name,
    db_check_tenant,
    db_get_root_tenant
} = require("../dbcontrollers/tenant.controller")

const {
    db_create_patch,
    db_get_patch_list,
    db_patch_exist_new,
    db_patch_uuid_exist,
    db_update_patch_status,
    db_update_patch_uuid,
    db_patch_count,
    db_patch_serial_exist,
    db_get_patch,
    db_get_patch_select_boxes,
    db_delete_patch,
    db_get_patch_saas,
    db_create_device,
    db_check_duplicate_device,
    db_get_device,
    db_count_device,
    db_reset_device
} = require("../dbcontrollers/patch.controller")

const {
    db_create_medical_history,
} = require("../dbcontrollers/medical_history.controller")

const {
    db_create_allergy,
    db_get_allergy_list,
    db_update_allergy,
} = require("../dbcontrollers/allergy.controller")

const {
    dbGetProfileInfo,
    dbCreateProfile,
    dbUpdateProfile,
    dbProfileExists,
} = require("../dbcontrollers/profile.controller")

const db_get_user_list = user_controller.db_get_user_list
const db_get_user_profile = user_controller.db_get_user_profile
const db_get_user = user_controller.db_get_user
const db_update_user = user_controller.db_update_user
const db_user_exist = user_controller.db_user_exist
const db_create_user = user_controller.db_create_user
const db_validate_user_auth = user_controller.db_validate_user_auth
const db_user_count = user_controller.db_user_count
const db_user_email = user_controller.db_user_email
const db_username_exist = user_controller.db_username_exist

const {
    db_get_bed_list,
    db_create_bed,
} = require("../dbcontrollers/bed.controller")

const API_TOKEN = models.api_token

const redisClient = require("../external_services/redis/cache_service/redis_client")
const { info } = require("console")
const {
    db_create_lab_report,
    db_get_lab_report,
    db_get_lab_report_by_id,
    db_download_data
} = require("../dbcontrollers/lab_report.controller")
const { getLicenseData } = require("./license")
const { db_create_license } = require("../dbcontrollers/license.controller")
const {
    db_create_task,
    db_get_task,
    db_update_task,
} = require("../dbcontrollers/task.controller")
const { emailer } = require("../external_services/email/email")
const {
    // db_create_user_tenant,
    db_get_user_tenant,
} = require("../dbcontrollers/user_tenant.controller")

const {
    db_gateway_by_patient
} = require("../dbcontrollers/patch_patient.controller")

function getFilter(filter, subfilter) {
    if (!filter) return { [subfilter]: null }
    filter = filter.split("&")
    let tempval = filter.filter((element) => element.includes(subfilter))
    logger.debug("The value is ", tempval)
    if (tempval && tempval.length > 0) {
        key = tempval[0].split("=")[0]
        val = tempval[0].split("=")[1]
        if (!val) return { [key]: null }
        return {
            [key]: val,
        }
    }
    return { [subfilter]: null }
}

// Validated
async function getUserInventory(req, res, next) {
    try {
        const data = await db_get_user_list(req.query)
        const count = await db_user_count(req.query)

        req.apiRes = USER_CODE["2"]
        req.apiRes["response"] = {
            users: data,
            count: data.length,
            userTotalCount: count,
        }
    } catch (error) {
        req.apiRes = USER_CODE["1"]
        req.apiRes["error"] = {
            error: error,
        }
    }
    return responseAPI(res, req.apiRes)
}

async function getSelfUserAlert(req, next) {
    email = req.userEmail
    tenant_id = req.userTenantId
    let users
    try {
        req.query["email"] = email
        req.query["self"] = true
        users = await db_get_user_list(tenant_id, email, req.query)
    } catch (err) {
        logger.debug("USER DOES NOT EXIST " + err)
        req.apiRes = USER_CODE["1"]
        req.apiRes["error"] = {
            error: "Error in fetching the user :" + err,
        }
        return next()
    }
    return {
        users: users,
        count: users.length,
    }
}

// Validated
async function createUuid(req, res, next) {
    tenantuuid = req.body.tenantuuid
    uuidtype = req.body.uuidtype
    uuidDict = { uuidType: uuidtype, tenantID: tenantuuid }
    let uuid_result
    try {
        uuid_result = await getUUID(uuidDict)
    } catch (err) {
        logger.error("UUID Catch - UUID list error : " + err)
        req.apiRes = INTERNAL_CODE["1"]
        req.apiRes["error"] = {
            error: "Error in creating the UUID :" + err,
        }
        return next()
    }
    req.apiRes = INTERNAL_CODE["0"]
    req.apiRes["response"] = {
        uuid: uuid_result,
        count: uuid_result.length,
    }
    return responseAPI(res, req.apiRes)
}

// Validated
function textToSpeech(req, res) {
    var text = req.body.text
    outputFilePath = Date.now() + "output.mp3"
    var voice = new gtts(text, "en")
    voice.save(outputFilePath, function (err, result) {
        if (err) {
            fs.unlinkSync(outputFilePath)
            res.send("Unable to convert to audio")
        }
        res.download(outputFilePath, (err) => {
            if (err) {
                fs.unlinkSync(outputFilePath)
                res.send("Unable to download the file")
            }

            fs.unlinkSync(outputFilePath)
        })
    })
}

//Validated
async function imageUpload(req, res, next) {
    const t = await sequelizeDB.transaction()
    let result
    let images_data = req.body
    let images_json = JSON.stringify(images_data)
    images_json = JSON.parse(images_json)
    logger.debug("The images data is", images_json)
    const filePath = "/images/"
    const fullUrl = filePath + req.file.filename
    uuidDict = { uuidType: UUID_CONST["image"], tenantID: 0 }
    try {
        result = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            images_json["image_uuid"] = uuid_result
            return db_create_images(
                images_json,
                req.file,
                {
                    transaction: t,
                },
                fullUrl
            )
        })
    } catch (error) {
        req.apiRes = IMAGE_CODE["1"]
        logger.debug("Error in image upload is" + error)
        req.apiRes["error"] = {
            errMessage: "ERROR IN UPLOADING THE IMAGE",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = IMAGE_CODE["0"]
    req.apiRes["response"] = {
        imageData: respResult,
    }
    return next()
}

async function updateImageUpload(req, res, next) {
    const t = await sequelizeDB.transaction()
    let result
    let images_data = req.body
    let images_json = JSON.stringify(images_data)
    let template_uuid=req.body['template_uuid']
    images_json = JSON.parse(images_json)
    logger.debug("The images data is", images_json)
    const filePath = "/images/"
    const fullUrl = filePath + req.file.filename
    uuidDict = { uuidType: UUID_CONST["image"], tenantID: 0 }
    try {
        result = await sequelizeDB.transaction(async function (t) {
            return db_update_images(
                images_json,
                req.file,
                template_uuid,
                {
                    transaction: t,
                },
                fullUrl
            )
        })
    } catch (error) {
        req.apiRes = IMAGE_CODE["1"]
        logger.debug("Error in image upload is" + error)
        req.apiRes["error"] = {
            errMessage: "ERROR IN UPLOADING THE IMAGE",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = IMAGE_CODE["0"]
    req.apiRes["response"] = {
        imageData: respResult,
    }
    return next()
}


//report
async function reportUpload(req, res, next) {
    const t = await sequelizeDB.transaction()
    let result
    let images_data = req.body
    let tenant_id = req.userTenantId
    let images_json = JSON.stringify(images_data)
    images_json = JSON.parse(images_json)
    logger.debug("The report data is", images_json)
    const filePath = "/images/"
    const fullUrl = filePath + req.file.filename
    logger.debug("IMAGE URL IS", fullUrl)
    uuidDict = {
        uuidType: UUID_CONST["report"],
        tenantID: tenant_id,
    }
    try {
        result = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("the uuid result is", uuid_result)
            images_json["report_uuid"] = uuid_result
            return db_create_report(
                images_json,
                req.file,
                {
                    transaction: t,
                },
                fullUrl
            )
        })
    } catch (error) {
        req.apiRes = IMAGE_CODE["1"]
        logger.debug("Error in image upload is" + error)
        req.apiRes["error"] = {
            errMessage: "ERROR IN UPLOADING THE IMAGE",
        }
        return next()
    }
    var options = {
        layout: "layout",
        splitPages: false,
    }
    //pdf-text-extract  : To get this working install poppler-utils : sudo apt-get install poppler-utils
    async function check() {
        return new Promise((resolve, reject) => {
            extract(req.file["path"], options, async function (err, pages) {
                if (err) {
                    logger.debug(err)
                    return
                }
                logger.debug("the text is", pages)
                pp = pages
                resolve(pp)
            })
        })
    }
    let page = await check()
    logger.debug("the check page  is", page.toString())

    respResult = dbOutput_JSON(result)
    logger.debug("the respresult is", respResult)
    req.apiRes = IMAGE_CODE["0"]
    req.apiRes["response"] = {
        imageData: respResult,
        Report: page.toString(),
    }
    return next()
}

//get report
async function getReport(req, res, next) {
    username = req.userName
    tenant_id = req.userTenantId
    let report

    try {
        report = await db_get_report_list(tenant_id, username, req.query)
    } catch (err) {
        logger.debug("Report list error " + err)
        req.apiRes = REPORT_CODE["2"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE REPORT INVENTORY",
        }
        return next()
    }
    req.apiRes = REPORT_CODE["1"]
    req.apiRes["response"] = {
        reportData: report,
    }
    return responseAPI(res, req.apiRes)
}

async function getImages(req, res, next) {
    logger.debug("IMAGES info is ", req.userweight, req.userRole)
    username = req.userName
    tenant_id = req.userTenantId
    let images

    try {
        images = await db_get_images_list(tenant_id, username, req.query)
        logger.debug("TYPE OF IMAGES", typeof images)
        logger.debug("THE LIMIT IS", req.query["limit"])
    } catch (err) {
        logger.debug("Images list error " + err)
        req.apiRes = IMAGE_CODE["3"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE IMAGES INVENTORY",
        }
        return next()
    }
    req.apiRes = IMAGE_CODE["2"]
    req.apiRes["response"] = {
        imagesData: images,
    }
    return responseAPI(res, req.apiRes)
}

// Validated
async function validateModels(req, res, next) {
    let model_result
    try {
        model_result = await modelsInfo()
    } catch (err) {
        logger.error("Model validate list error : " + err)
        req.apiRes = INTERNAL_CODE["3"]
        req.apiRes["error"] = {
            error: "Model validate list error" + err,
        }
        return next()
    }
    req.apiRes = INTERNAL_CODE["2"]
    req.apiRes["response"] = {
        modelValidation: model_result,
    }
    return responseAPI(res, req.apiRes)
}

async function passwordCheck(password, hash) {
    let result = -1
    try {
        logger.debug("THE PASSWORD TRY IS")
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, function (err, isMatch) {
                if (err) {
                    logger.debug("THE PASSWORD ERROR", err)
                    resolve(result)
                } else if (!isMatch) {
                    logger.debug("THE PASSWORD MISMATCH ERROR -- Sud", err)
                    result = -2
                    resolve(result)
                } else {
                    logger.debug("Password matches!")
                    result = 0
                    resolve(result)
                }
            })
        })
    } catch (error) {
        logger.debug("BCRYPT FAILURE", error)
    }
    return result
}

//Login routes
// Validated
async function loginUser(req, res, next) {
    let { username, password, email } = req.body //superadmin@ demohospital.com
    { !email && (email = username) }
    { !username && (username = email) }

    let name = username.split("@")[0]
    logger.debug("THE BODY OF LOGIN IS", req.body, email, username, name)
    newTenantId = req.userTenantId
    logger.debug("password is", password, req.body.password)

    let tenant_name = email.split("@")[1]
    logger.debug("THE TENANT IS ", tenant_name)

    let alertEventId = uuid()

    let loginAlert = alertEnum['1']
    loginAlert['event'] = `user login id: ${alertEventId}`
    loginAlert['text'] = `${name} logged in successfully`
    loginAlert['service'] = [`live247.ai`]
    logger.debug('alertdata: ', loginAlert)
    db_validate_user_auth(email, password)
        .then(async (user) => {
            // logger.debug("INSIDE THE USER AUTH FUNCTION", dbOutput_JSON(user))
            user = dbOutput_JSON(user)
            userPid = user[0]["pid"]
            if (!user) {
                logger.debug("User/Email is not existing")
                err = new Error("Email/User does not exist")
                req.apiRes = SYSTEM_AAA_CODE["5"]
                req.apiRes["error"] = {
                    error: "EMAIL/USER DOES NOT EXIST",
                }
                return next()
            }
            logger.debug("THE PASSWORD IS ", password, user[0].password)
            passwordCheck(password, user[0].password)
                .then((result) => {
                    logger.debug("The result is ", result)
                    if (result) {
                        req.apiRes = SYSTEM_AAA_CODE["10"]
                        req.apiRes["error"] = {
                            error: "PASSWORD ERROR",
                        }
                        return next()
                    }
                    expiryTime = new Date(
                        new Date().getTime() +
                        Number(process.env.JWT_EXPIRY_TIMEOUT)
                    )
                    const accessToken = jwt.sign(
                        {
                            userEmail: email,
                            userRole: user[0]["role"],
                            apiVersion: process.env.apiVersion,
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: Number(process.env.JWT_EXPIRY_TIMEOUT),
                        }
                    )
                    logger.debug("Api token is created", accessToken)
                    API_TOKEN.create({
                        token_auth: accessToken,
                        email: email,
                        user_id: user[0].id,
                        expiry: expiryTime,
                    })
                        .then((result) =>
                            logger.debug(
                                "Login jwt - Updated the API_TOKEN - Result :  " +
                                result
                            )
                        )
                        .catch((err) =>
                            logger.debug(
                                "Jwt create error in API TOKEN - Error : " + err
                            )
                        )
                        .catch((err) => {
                            logger.error(
                                "Tenant Catch - Patient list error : " + err
                            )
                            req.apiRes = TENANT_CODE["1"]
                            req.apiRes["error"] = {
                                error: "Failure In Tenant Information",
                            }
                            return next()
                        })

                    res.cookie("tokenKey", accessToken)
                    // try {
                    //     alerter(loginAlert).then((response) => {
                    //         logger.debug(`alertResponse : ${response}`)
                    //     })
                    // } catch (err) {
                    //     logger.debug(`Alert ERROR : ${err.message}`)
                    // }
                    req.apiRes = SYSTEM_AAA_CODE["6"]
                    req.apiRes["response"] = {
                        userEmail: email,
                        accessToken: accessToken,
                        userUuid: user[0]["user_uuid"],
                        userName: user[0]["username"],
                        role: user[0]["role"],
                        tenant: user[0]["tenant_id"],
                        pid: userPid,
                    }
                    logger.debug("this is for alert testing")

                    return next()
                })
                .catch((err) =>
                    logger.debug(
                        "Jwt create error in API TOKEN - Error : " + err
                    )
                )
        })
        .catch((err) => {
            logger.debug("Error in user validation" + err)
            req.apiRes = SYSTEM_AAA_CODE["5"]
            req.apiRes["error"] = {
                error: "INVALID USER",
            }
            return next()
        })
}

async function logoutUser(req, res, next) {
    logger.debug("User Logout Invoked ", req.path)
    let username = req.userEmail.split('@')[0]
    res.clearCookie(process.env.TOKEN_KEY)
    req.apiRes = SYSTEM_AAA_CODE["7"]
    logger.debug("User Logout Invoked ", req.path)
    res.clearCookie(process.env.TOKEN_KEY)
    let alertEventId = uuid()
    let logoutAlert = alertEnum['1']
    logoutAlert['event'] = `user logout id: ${alertEventId}`
    logoutAlert['text'] = `${username} logged out successfully`
    logoutAlert['service'] = [`${req.userTenant}`]
    logger.debug('alertdata: ', logoutAlert)
    // try {
    //     alerter(logoutAlert).then((response) => {
    //         logger.debug(`alertResponse : ${response}`)
    //     })
    // }
    // catch (err) {
    //     logger.debug(`Alert ERROR : ${err.message}`)
    // }
    req.apiRes = SYSTEM_AAA_CODE["7"]
    return responseAPI(res, req.apiRes)
}


async function getSelectBoxPatch(req, res, next) {
    let data
    try {
        data = await db_get_patch_select_boxes(req.query)
    } catch (error) {
        console.log(error)
    }
    req.apiRes = PATCH_CODE["2"]
    req.apiRes["response"] = {
        patches: data,
        count: data.length
    }
    return responseAPI(res, req.apiRes)
}

//Patch Function
// Validated
async function getPatchInventory(req, res, next) {
    // email = req.userEmail
    // username = email.split("@")[0]
    // tenant_name = req.userTenant
    let request = req.body
    let tenant_id = request.tenantId
    if(request.tenantId === undefined){
        request = req.query
        tenant_id = req.query.tenantId
    }
    // logger.debug("THE QUERY IS", req.query)
    // logger.debug("THE PARAMS ARE", req.params)
    let patches
    let filtered_patches = []
    let totalCount = 0
    try {
        let patch_data = await db_get_patch_list(tenant_id, request)
        patches = patch_data[0]
        patches = lodash.uniqBy(patches,'patch_group_id')
        // lodash.uniqBy(patches,'patch_group_id');
        totalCount = patch_data[1]
        patches = dbOutput_JSON(patches)
        let i = 0
        filtered_patches = patches
    } catch (err) {
        logger.debug("Patch list error " + err)
        req.apiRes = PATCH_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE patch",
        }
        return next()
    }
    let tempFilter = []
    if (req.query.devicetype == "gateway") {
        for (let i = 0; i < filtered_patches.length; i++) {
            logger.debug("Individual Gateway patch is", filtered_patches[i])
            if (filtered_patches[i]["AssociatedPatch"].length == 1) {
                logger.debug(
                    "Individual Gateway patch is - Inside IF",
                    filtered_patches[i]
                )
                tempFilter.push(filtered_patches[i])
            }
        }
        filtered_patches = tempFilter
    }
    req.apiRes = PATCH_CODE["2"]
    req.apiRes["response"] = {
        patches: filtered_patches,
        count: filtered_patches.length,
        patchTotalCount: totalCount,
    }
    return responseAPI(res, req.apiRes)
}

//validated
async function createPatch(req, res, next) {
    const t = await sequelizeDB.transaction()
    // email = req.userEmail
    // username = email.split("@")[0]
    // tenant_name = req.userTenant
    tenant_id = req.body.tenantId
    let patch_data = req.body.data

    // let alertEventId = uuid()
    // let patchType = patch_data[0]['patch_type']
    let createPatchAlert = alertEnum['1']

    // createPatchAlert['event'] = `create patch id: ${alertEventId}`
    // createPatchAlert['text'] = `${patchType} patch created for ${username}`
    // createPatchAlert['service'] = [`${req.userTenant} `]

    // logger.debug("PATCH body is", patch_data, patch_data[0]["patch_serial"])
    // let patch_type = patch_data[0]["patch_type"].toLowerCase()
    // logger.debug("the patch type is", patch_type)
    // let patchSerial = patch_data[0]["patch_serial"]
    // logger.debug("PATCH SERIAL NUMBER IS", patchSerial)
    let patch_serial_exist

    req.query = {
        limit: 10,
        offset: 0,
        filter: 0,
        tenant_id: tenant_id,
    }
    // let licenseResponse = await getLicenseData(req)? //TODO: license and roles needs to be pushed for redis
    // logger.debug('the license data is', licenseResponse)
    // logger.debug(
    //     "the license data is",
    //     JSON.stringify(licenseResponse, null, 2)
    // )
    // let sensors = licenseResponse["licenseData"][0]["license"][0]["Devices"]
    // let allDevices = []
    // sensors.map((item) => {
    //     logger.debug("thr item is", item)
    //     logger.debug("the iem sensors is", item.sensors)
    //     allDevices.push(item.sensors)
    // })
    // logger.debug("the sensors are", sensors)
    // logger.debug("the all devices are", allDevices)

    // if (!allDevices.includes(patch_type)) {
    //     logger.debug("Patches are not a part of license", patch_type)
    //     req.apiRes = LICENSE_CODE["8"]
    //     req.apiRes["error"] = {
    //         error: "PATCHES ARE NOT INCLUDED IN THE LICENSE",
    //     }
    //     return next()
    // }
    //JSON SCHEMA VALIDATION
    // let schema_status = schemaValidator.validate_schema(?
    //     req,
    //     SCHEMA_CODE["patchSchema"]
    // )
    // if (!schema_status["status"]) {
    //     req.apiRes = JSON_SCHEMA_CODE["1"]
    //     req.apiRes["error"] = {
    //         error: "Schema Validation Failed " + error,
    //     }
    //     return next()
    // }
    // try {
    //     patch_serial_exist = await db_patch_serial_exist(patchSerial)?
    //     logger.debug(
    //         "THIS IS IN PATCH SERIAL EXIST FUNCTION",
    //         patch_serial_exist
    //     )
    //     if (patch_serial_exist) {
    //         req.apiRes = PATCH_CODE["11"]
    //         req.apiRes["error"] = {
    //             error: "PATCH SERIAL ALREADY EXISTS :",
    //         }
    //         return next()
    //     }
    // } catch (err) {
    //     console.log(err)
    //     logger.debug("PATCH SERIAL ALREADY EXISTS", err)
    //     return next()
    // }

    logger.debug("Patch Data Variable is ", patch_data)
    const promises = []
    let group_id = ""
    // for (let i = 0; i < patch_data.length; i++) {
    //     if (patch_data[i]["patch_type"] == "gateway") {
    //         logger.debug("patch_type is gateway", i)
    //         uuidDict = {
    //             uuidType: UUID_CONST["patch"],
    //             tenantID: tenant_id,
    //         }
    //         promises.push(
    //             sequelizeDB.transaction(function (t) {
    //                 return getUUID(uuidDict, { transaction: t }).then(
    //                     (uuid_result) => {
    //                         logger.debug("The uuid result is", uuid_result)
    //                         patch_data[i]["patch_uuid"] = uuid_result
    //                         patch_data[i]["patch_group_id"] = uuid_result
    //                         group_id = uuid_result
    //                         let temp_patch = patch_data[i]
    //                         patch_data.splice(i, 1)
    //                         return db_create_patch(tenant_id, [temp_patch], {
    //                             transaction: t,
    //                         })
    //                     }
    //                 )
    //             })
    //         )
    //     }
    // }

    await Promise.all(promises).then(async (patch_gw) => {
        logger.debug("After slice, patch is", patch_data)
        const promises_new = []
        for (let i = 0; i < patch_data.length; i++) {
            uuidDict = {
                uuidType: UUID_CONST["patch"],
                tenantID: tenant_id,
            }
            promises_new.push(
                sequelizeDB.transaction(function (t) {
                    return getUUID(uuidDict, { transaction: t }).then(
                        (uuid_result) => {
                            logger.debug("The uuid result is", uuid_result)
                            patch_data[i]["patch_uuid"] = uuid_result
                            if (group_id)
                                patch_data[i]["patch_group_id"] = group_id
                            else patch_data[i]["patch_group_id"] = uuid_result
                            return db_create_patch(tenant_id, req.body, {
                                transaction: t,
                            })
                        }
                    )
                })
            )
        }
        logger.debug("Promise is ", promises)
        await Promise.all(promises_new)
            .then((patches) => {
                logger.debug("PATCH  is" + patches)

                // try {
                //     alerter(createPatchAlert).then((response) => {
                //         logger.debug(`alertResponse: ${response} `)
                //     })
                // }
                // catch (err) {
                //     logger.debug(`Alert ERROR: ${err.message} `)
                // }

                let data = patches
                if(req.body.actionType === 'bundle'){
                    data = {patch_group_id: patch_data[0]["patch_group_id"]}
                }
                else {
                    data = patches.concat(patch_gw)
                }

                return res.status(PATCH_CODE["3"].HttpStatus).json({
                    result: PATCH_CODE["3"].Code,
                    response: { patches: data },
                    error: {},
                    privilege: {},
                })
            })
            .catch((err) => {
                logger.debug("PATCH Create error " + err)
                error = new Error("PATCH Create error " + err)
                return res.status(PATCH_CODE["4"].HttpStatus).json({
                    result: PATCH_CODE["4"].Code,
                    response: {},
                    error: { errMessage: PATCH_CODE["4"].Message },
                    privilege: {},
                })
            })
    })
}

// Validated
async function updatePatchUuid(req, res, next) {
    const t = await sequelizeDB.transaction()
    let patch_data = req.body
    logger.debug("The patch body is", patch_data[0])
    tenant_id = req.userTenantId
    given_patch_uuid = req.params.patch_uuid
    let patch_uuid_exist
    let result
    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["patchSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed " + error,
        }
        return next()
    }
    try {
        patch_uuid_exist = await db_patch_uuid_exist(given_patch_uuid)
        if (!patch_uuid_exist) {
            req.apiRes = PATCH_CODE["5"]
            req.apiRes["error"] = {
                error: "Patch UUID does not exist :" + given_patch_uuid,
            }
            return next()
        }
    } catch (err) {
        logger.debug("Exception : %s PATCH UUID %s", err, given_patch_uuid)
        return next()
    }

    uuidDict = { uuidType: UUID_CONST["user"], tenantID: 0 }
    try {
        // result = await sequelizeDB.transaction(function (t) {
            patch_data[0]["patch_uuid"] = given_patch_uuid
            result =  await db_update_patch_uuid(
                tenant_id,
                patch_data[0],
                given_patch_uuid,
                { transaction: t }
            )
        // })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN UPDATING THE PATCH :" + error,
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = TRANSACTION_CODE["0"]
    req.apiRes["response"] = {
        patch_data: respResult,
        count: respResult.length,
    }
    return next()
}


async function getTenant(req, res, next) {
    try {
        const data = await db_get_tenant_list(req.query)
        req.apiRes = TENANTS_CODE["2"]
        req.apiRes["response"] = {
            tenants: data.data,
            count: data.data.length,
        }
    } catch (error) {
        console.log(error)
        req.apiRes = TENANTS_CODE["1"]
        req.apiRes["error"] = {
            error: error,
        }
    }
    return responseAPI(res, req.apiRes)
}

async function updateTenant(req, res, next) {
    username = req.userName
    tenant_id = req.userTenantId
    let given_tenant_uuid = req.params.tenant_uuid
    const t = await sequelizeDB.transaction()
    //JSON SChema logic
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["tenantsSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed " + error,
        }
        return next()
    }

    let tenant_data = req.body
    let tenants
    try {
        tenants = await sequelizeDB.transaction(async function (t) {
            return db_update_tenant(tenant_id, tenant_data, given_tenant_uuid, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("tenant Create error " + err)
        req.apiRes = TENANTS_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN CREATING THE NEW TENANT",
        }
        return next()
    }

    logger.debug("tenant  is" + tenants)
    tenants = dbOutput_JSON(tenants)
    tenants = req.body
    req.apiRes = TENANTS_CODE["3"]
    req.apiRes["response"] = {
        tenants: [tenants],
        count: tenants.length,
    }
    return next()
}

//BED ROUTES
// Validated
async function getBed(req, res, next) {
    username = req.userName
    tenant_id = req.userTenantId
    let beds
    try {
        beds = await db_get_bed_list(tenant_id, username)
    } catch (err) {
        logger.debug("BED list error " + err)
        req.apiRes = BED_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE BED INVENTORY",
        }
        return next()
    }

    logger.debug("BED list is " + beds)
    req.apiRes = BED_CODE["2"]
    req.apiRes["response"] = {
        beds: [beds],
        count: beds.length,
    }
    return responseAPI(res, req.apiRes)
}

// Validated
async function createBed(req, res, next) {
    const t = await sequelizeDB.transaction()
    tenant_id = req.userTenantId
    let bed_data = req.body
    let beds

    //JSON SCHEMA Validation
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["bedSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed " + error,
        }
        return next()
    }
    uuidDict = { uuidType: UUID_CONST["bed"], tenantID: 0 }
    try {
        beds = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            bed_data["bed_uuid"] = uuid_result
            bed_data["tenant_uuid"] = tenant_id
            return db_create_bed(tenant_id, bed_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("BED list error " + err)
        req.apiRes = BED_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN CREATING THE BED",
        }
        return next()
    }
    logger.debug("BED list is " + beds)
    req.apiRes = BED_CODE["3"]
    req.apiRes["response"] = {
        beds: [beds],
        count: beds.length,
    }
    return responseAPI(res, req.apiRes)
}

//CONNECTOR ROUTES
// Validated
async function getConnector(req, res, next) {
    logger.debug("Connector info is ", req.userweight, req.userRole)
    username = req.userName
    tenant_id = req.userTenantId
    let connectors
    try {
        connectors = await db_get_connector_list(tenant_id, username)
    } catch (err) {
        logger.debug("Connector list error " + err)
        req.apiRes = CONNECTOR_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE CONNECTOR INVENTORY",
        }
        return next()
    }
    logger.debug("Connector list is " + connectors)
    req.apiRes = CONNECTOR_CODE["2"]
    req.apiRes["response"] = {
        connectors: connectors,
        count: connectors.length,
    }
    return responseAPI(res, req.apiRes)
}

async function createConnector(req, res, next) {
    const t = await sequelizeDB.transaction()
    let connector_data = req.body
    given_pid = req.params.pid
    tenant_id = req.userTenantId
    let result
    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["connectorSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
        }
        return next()
    }
    uuidDict = { uuidType: UUID_CONST["connector"], tenantID: 0 }
    try {
        result = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            connector_data["connector_uuid"] = uuid_result
            return db_create_connector(tenant_id, connector_data, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            error: "Creation of connector failed :" + error,
        }
        return next()
    }
    logger.debug("Result is", result)
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = TRANSACTION_CODE["0"]
    req.apiRes["response"] = {
        patient_data: respResult,
        count: respResult.length,
    }
    return next()
}

//PRODUCT ROUTES
// Validated

// async function getProduct(req, res, next) {
//     logger.debug("THIS IS PRODUCT INVENTORY")
//     username = req.userName
//     tenant_id = req.userTenantId
//     let products
//     try {
//         products = await db_get_product_list(tenant_id, username, req.query)
//     } catch (err) {
//         logger.debug("Product list error " + err)
//         req.apiRes = PRODUCT_CODE["1"]
//         req.apiRes["error"] = {
//             error: "ERROR IN FETCHING THE PRODUCTS",
//         }
//         return next()
//     }
//     logger.debug("Product list is " + products)
//     req.apiRes = PRODUCT_CODE["2"]
//     req.apiRes["response"] = {
//         products: products,
//         count: products.length,
//     }
//     return responseAPI(res, req.apiRes)
//     return next()
// }

// async function createProduct(req, res, next) {
//     logger.debug("Product body is", req.body)
//     tenant_id = req.userTenantId
//     const t = await postgresSequelizeDB.transaction()
//     var product_data = req.body
//     let products
//     try {
//         products = await postgresSequelizeDB.transaction(function (t) {
//             return db_create_product(tenant_id, product_data, {
//                 transaction: t,
//             })
//         })
//     } catch (err) {
//         logger.debug("PRODUCT Create error " + err)
//         req.apiRes = PRODUCT_CODE["4"]
//         req.apiRes["error"] = {
//             error: "Creation of Product failed :" + err,
//         }
//         return next()
//     }
//     req.apiRes = PRODUCT_CODE["3"]
//     req.apiRes["response"] = {
//         product_data: products,
//         count: products.length,
//     }
//     return next()
// }

// Location Routes - For Tenant

async function createLocation(req, res, next) {
    const t = await sequelizeDB.transaction()
    let location_data = req.body
    let locations
    let tenant_id = req.body["tenant_uuid"] //tenant_uuid
    logger.debug("THE TENANT ID IN BODY IS", tenant_id)
    try {
        locations = await sequelizeDB.transaction(function (t) {
            return db_create_location(tenant_id, location_data, {
                transaction: t,
            })
        })
    } catch (error) {
        logger.debug("The error in catch is ", error)
        req.apiRes = LOCATION_CODE["4"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN CREATING THE LOCATION ",
        }
        return next()
    }

    logger.debug("LOCATIONS ARE", JSON.stringify(locations))
    //locations = dbOutput_JSON(locations)
    logger.debug(
        "THE LOCATIONS ARE",
        locations,
        req.body,
        JSON.stringify(req.body)
    )
    logger.debug("BED COUNT IS", JSON.stringify(req.body)["buildings"])
    //locations = req.body
    req.apiRes = LOCATION_CODE["3"]
    req.apiRes["response"] = {
        location_data: locations,
        count: locations.length,
    }
    return next()
}

async function createRemoteLocation(req, res, next) {
    const t = await sequelizeDB.transaction()
    let location_data = req.body
    let locations
    let tenant_id = req.body[0]["tenant_uuid"]
    logger.debug("THE TENANT ID IN BODY IS", tenant_id)
    try {
        locations = await sequelizeDB.transaction(function (t) {
            location_data[0]["status"] = "Remote"
            location_data[0]["archive"] = "1"
            return db_create_remote_location(tenant_id, location_data, {
                transaction: t,
            })
        })
    } catch (error) {
        logger.debug("The error in catch is ", error)
        req.apiRes = LOCATION_CODE["4"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN CREATING THE LOCATION ",
        }
        return next()
    }
    logger.debug("LOCATIONS ARE", JSON.stringify(locations))
    logger.debug(
        "THE LOCATIONS ARE",
        locations,
        req.body,
        JSON.stringify(req.body)
    )
    req.apiRes = LOCATION_CODE["3"]
    req.apiRes["response"] = {
        location_data: locations,
    }
    return next()
}

//validated
async function updateRemoteLocation(req, res, next) {
    const t = await sequelizeDB.transaction()
    let location_data = req.body
    location_data = location_data[0]
    let locations
    let tenant_id = req.body[0]["tenant_uuid"]

    try {
        locations = await sequelizeDB.transaction(function (t) {
            location_data["status"] = "Remote"
            location_data["archive"] = "0"
            return db_update_remote_location(tenant_id, location_data, req.query, {
                transaction: t,
            })
        })
    } catch (error) {
        logger.debug("The error in catch is ", error)
        req.apiRes = LOCATION_CODE["4"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN CREATING THE LOCATION ",
        }
        return next()
    }
    logger.debug("LOCATIONS ARE", JSON.stringify(locations))
    logger.debug(
        "THE LOCATIONS ARE",
        locations,
        req.body,
        JSON.stringify(req.body)
    )
    locations = req.body
    req.apiRes = LOCATION_CODE["3"]
    req.apiRes["response"] = {
        location_data: locations,
    }
    return next()
}

//Validated
async function getLocation(req, res, next) {
    let user_name = req.query.userName
    // let given_pid = req.params.pid
    let tenant_id = req.query.tenant_uuid
    let locations, facilities
    let totalCount = 0

    try {
        locations = await db_get_location_list(tenant_id, user_name, req.query)
        totalCount = await db_location_count(tenant_id)
        facilities = await db_get_facility_list(tenant_id, user_name)
        locations = dbOutput_JSON(locations)
        totalCount = dbOutput_JSON(totalCount)
        facilities = dbOutput_JSON(facilities)
    } catch (e) {
        req.apiRes = LOCATION_CODE["1"]
        logger.debug("Exception Location: %s", e)
        return next()
    }

    req.apiRes = LOCATION_CODE["2"]
    req.apiRes["response"] = {
        locations: locations,
        facilities: facilities,
        count: locations.length,
        locationTotalCount: totalCount,
    }
    return responseAPI(res, req.apiRes)
}

async function getRemoteLocation(req, res, next) {
    let tenant_id = req.query.tenant_uuid
    let locations
    logger.debug("the req query is", req.query)

    try {
        locations = await db_get_remote_location(tenant_id, req.query)
    } catch (e) {
        req.apiRes = LOCATION_CODE["1"]
        logger.debug("Exception Location: %s", e)
        return next()
    }

    req.apiRes = LOCATION_CODE["2"]
    req.apiRes["response"] = {
        locations: locations,
    }
    return responseAPI(res, req.apiRes)
}

// Validated
async function createFacility(req, res, next) {
    logger.debug("Facility  header output is ", req.headers)
    logger.debug("Facility  Session output is ", req.session)
    const t = await sequelizeDB.transaction()
    let email = req.userEmail
    let username = req.userName
    let tenant_name = req.userTenant
    let tenant_id = req.userTenantId

    logger.debug("THE MAIN TENANT ID IS", tenant_id)
    tenant_id = req.body["tenant_id"] // This will take the tenant ID passed during the Tenant creation
    let facility_data = req.body
    let facilities
    //JSON SCHEMA Validation
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["facilitySchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
        }
        return next()
    }
    uuidDict = {
        uuidType: UUID_CONST["facility"], // tenant_id should be the same as login tenant
        tenantID: tenant_id,
    }
    try {
        facilities = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            facility_data["facility_uuid"] = uuid_result
            facility_data["tenant_id"] = tenant_id
            logger.debug("TENANT ID IS", facility_data["tenant_id"])
            return db_create_facility(tenant_id, facility_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("Facility create error " + err)
        req.apiRes = FACILITY_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN CREATING FACILITY",
        }
        return next()
    }
    logger.debug("Facility list is " + facilities)
    req.apiRes = FACILITY_CODE["3"]
    req.apiRes["response"] = {
        facilities_data: facilities,
        count: facilities.length,
    }
    return next()
}

async function updateFacility(req, res, next) {
    email = req.userEmail
    username = email.split("@")[0]
    tenant_name = req.userTenant
    let facility_data = req.body
    let tenant_id = req.query.tenant_id
    let facilities
    //JSON SCHEMA Validation
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["facilitySchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed " + error,
        }
        return next()
    }
    uuidDict = {
        uuidType: UUID_CONST["facility"],
        tenantID: tenant_id,
    }
    try {
        facilities = await sequelizeDB.transaction(function (t) {
            facility_data['tenant_id'] = tenant_id
            return db_update_facility(tenant_id, facility_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("Facility update error " + err)
        req.apiRes = FACILITY_CODE["6"]
        req.apiRes["error"] = {
            error: "ERROR IN CREATING FACILITY",
        }
        return next()
    }
    logger.debug("Facility list is " + facilities)
    respResult = dbOutput_JSON(facilities)
    respResult = req.body
    req.apiRes = FACILITY_CODE["5"]
    req.apiRes["response"] = {
        facilities: respResult,
        count: respResult.length,
    }
    return next()
}

async function createRole(req, res, next) {
    const t = await sequelizeDB.transaction()
    let tenant_id = req.body.tenant_id
    let role_name = req.body.role_name

    logger.debug("THE MAIN TENANT ID IS", tenant_id, req.body)
    let role_data = req.body
    let newRole
    uuidDict = {
        uuidType: UUID_CONST["role"],
        tenantID: tenant_id,
    }
    let grantArray = [
        {
            role: "",
            action: "create:any",
            resource: "/api/sign/logout",
            attributes: "*",
        },
    ] //grantarray.push(rbac.req.body[''])
    role_data.categories_permission.map((item) => {
        switch (item) {
            case "viewPatient": {
                grantArray = grantArray.concat(RBAC.viewPatient)
                break
            }
            case "createPatient": {
                grantArray = grantArray.concat(RBAC.createPatient)
                break
            }
            case "deletePatient": {
                grantArray = grantArray.concat(RBAC.deletePatient)
                break
            }
            case "viewPatch": {
                grantArray = grantArray.concat(RBAC.viewPatch)
                break
            }
            case "createPatch": {
                grantArray = grantArray.concat(RBAC.createPatch)
                break
            }
            case "deletePatch": {
                grantArray = grantArray.concat(RBAC.deletePatch)
                break
            }
            case "viewTenant": {
                grantArray = grantArray.concat(RBAC.viewTenant)
                break
            }
            case "createTenant": {
                grantArray = grantArray.concat(RBAC.createTenant)
                break
            }
            case "deleteTenant": {
                grantArray = grantArray.concat(RBAC.deleteTenant)
                break
            }
            case "viewUser": {
                grantArray = grantArray.concat(RBAC.viewUser)
                break
            }
            case "createUser": {
                grantArray = grantArray.concat(RBAC.createUser)
                break
            }
            case "deleteUser": {
                grantArray = grantArray.concat(RBAC.deleteUser)
                break
            }
            case "viewPrescription": {
                grantArray = grantArray.concat(RBAC.viewPrescription)
                break
            }
            case "createPrescription": {
                grantArray = grantArray.concat(RBAC.createPrescription)
                break
            }
            case "deletePrescription": {
                grantArray = grantArray.concat(RBAC.deletePrescription)
                break
            }
            default: {
                logger.debug("field not present for this permission")
                break
            }
        }
    })
    role_data.role_permission = grantArray
    logger.debug("permission granted array", grantArray)
    try {
        role_exist = await db_role_exist(role_name, tenant_id)
        logger.debug("THIS IS ROLE EXIST FUNCTION", role_name, role_exist)
        if (role_exist) {
            req.apiRes = ROLE_CODE["6"]
            req.apiRes["error"] = {
                error: "Role already exist with name :" + role_name,
            }
            return next()
        }
    } catch (err) {
        logger.debug("Exception : %s role_name %s", err, role_name)
        return next()
    }
    try {
        newRole = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            role_data["role_uuid"] = uuid_result
            role_data["tenant_id"] = tenant_id
            logger.debug("TENANT ID IS", role_data["tenant_id"])
            return db_create_role(tenant_id, role_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("Role create error " + err)
        req.apiRes = ROLE_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN CREATING ROLE",
        }
        return next()
    }
    logger.debug("Role list is " + newRole)
    req.apiRes = ROLE_CODE["3"]
    req.apiRes["response"] = {
        role_data: newRole,
        count: newRole.length,
    }
    return responseAPI(res, req.apiRes)
}

async function getRoleData(req) {
    logger.debug("the headers  in role are", req.headers)
    logger.debug("the session in role are", req.session)
    let tenant_id = req.query.tenant_id
    logger.debug("the tenant id in query  is", tenant_id)
    logger.debug("Query, Params ", req.query)
    logger.debug(
        "the role name is",
        req.query.role_name,
        typeof req.query.role_name
    )
    logger.debug("the req query in role is", req.query)
    logger.debug("the filter is", req.query.filter)
    logger.debug("the filter after role is", req.query.filter)
    logger.debug("tenant ID is ", tenant_id, req.query)
    let roles
    try {
        roles = await db_get_role_list(tenant_id, req.query)
    } catch (err) {
        logger.debug("Role list error " + err)
        req.apiRes = ROLE_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING Role INVENTORY",
        }
        return next()
    }
    logger.debug("Role list is " + roles)
    return {
        rolesData: roles,
    }
}

async function deleteRole(req, res, next) {
    const t = await sequelizeDB.transaction()
    logger.debug("role data to delete is", req.query.role_uuid)
    let result
    try {
        result = await sequelizeDB.transaction(async function (t) {
            return db_delete_role(req.query.role_uuid, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        logger.debug("Exception : %s role_uuid %s", req.query.role_uuid)
        req.apiRes = TRANSACTION_CODE["3"]
        req.apiRes["error"] = {
            errMessage: "Role - Delete failed ",
        }
        return next()
    }

    req.apiRes = TRANSACTION_CODE["2"]
    req.apiRes["response"] = {}
    return next()
}


//Patch serial exist api
async function checkPatchSerial(req, res, next) {
    const t = await sequelizeDB.transaction()
    email = req.userEmail
    logger.debug("the email is", email)
    username = email.split("@")[0]
    tenant_name = req.userTenant
    tenant_id = req.userTenantId
    patchSerial = req.params.patch_serial
    logger.debug("the patch serial is", patchSerial)
    logger.debug("THE QUERY IS", req.query)
    logger.debug("THE PARAMS ARE", req.params)
    let patch_serial_exist
    let patch_data
    req.query = {
        limit: 10,
        offset: 0,
        insue: 0,
    }

    try {
        patch_serial_exist = await db_patch_exist_new(patchSerial)
        logger.debug(
            "THIS IS IN PATCH SERIAL EXIST FUNCTION",
            patch_serial_exist
        )
        if (!patch_serial_exist) {
            req.apiRes = PATCH_CODE["12"]
            req.apiRes["error"] = {
                error: "PATCH SERIAL NUMBER DOES NOT EXIST:",
            }
            return next()
        }
    } catch (err) {
        logger.debug("PATCH SERIAL DOES NOT EXIST", err)
        return next()
    }
    logger.debug("the patch serial data is", patch_serial_exist)
    patch_uuid = patch_serial_exist["patch_uuid"]
    logger.debug("the patch uuid is", patch_uuid)
    try {
        patch_data = await db__patch(tenant_id, patch_uuid)
    } catch (err) {
        logger.debug("Patch list error " + err)
        req.apiRes = PATCH_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE PATCH",
        }
        return next()
    }
    req.apiRes = PATCH_CODE["2"]
    req.apiRes["response"] = {
        patches: patch_data,
    }
    return responseAPI(res, req.apiRes)
}

async function updateRole(req, res, next) {
    logger.debug("Role update body output is ", req.body)
    let role_data = req.body
    let tenant_id = req.body.tenant_id
    let role_uuid = req.body.role_uuid
    let rolePermissed
    let grantArray = [
        {
            role: "",
            resource: "/api/sign/logout",
            action: "create:any",
            attributes: "*",
        },
    ]
    role_data.categories_permission.map((item) => {
        switch (item) {
            case "viewPatient": {
                grantArray = grantArray.concat(RBAC.viewPatient)
                break
            }
            case "viewPatientList": {
                grantArray = grantArray.concat(RBAC.viewPatientList)
                break
            }
            case "viewPatientDetails": {
                grantArray = grantArray.concat(RBAC.viewPatientDetails)
                break
            }
            case "viewPatientReport": {
                grantArray = grantArray.concat(RBAC.viewPatientReport)
                break
            }
            case "viewPatientAlert": {
                grantArray = grantArray.concat(RBAC.viewPatientAlert)
                break
            }
            case "viewPatientEmr": {
                grantArray = grantArray.concat(RBAC.viewPatientEmr)
                break
            }
            case "createPatient": {
                grantArray = grantArray.concat(RBAC.createPatient)
                break
            }
            case "deletePatient": {
                grantArray = grantArray.concat(RBAC.deletePatient)
                break
            }
            case "viewPatch": {
                grantArray = grantArray.concat(RBAC.viewPatch)
                break
            }
            case "createPatch": {
                grantArray = grantArray.concat(RBAC.createPatch)
                break
            }
            case "deletePatch": {
                grantArray = grantArray.concat(RBAC.deletePatch)
                break
            }
            case "viewTenant": {
                grantArray = grantArray.concat(RBAC.viewTenant)
                break
            }
            case "createTenant": {
                grantArray = grantArray.concat(RBAC.createTenant)
                break
            }
            case "deleteTenant": {
                grantArray = grantArray.concat(RBAC.deleteTenant)
                break
            }
            case "viewUser": {
                grantArray = grantArray.concat(RBAC.viewUser)
                break
            }
            case "createUser": {
                grantArray = grantArray.concat(RBAC.createUser)
                break
            }
            case "deleteUser": {
                grantArray = grantArray.concat(RBAC.deleteUser)
                break
            }
            case "viewPrescription": {
                grantArray = grantArray.concat(RBAC.viewPrescription)
                break
            }
            case "createPrescription": {
                grantArray = grantArray.concat(RBAC.createPrescription)
                break
            }
            case "deletePrescription": {
                grantArray = grantArray.concat(RBAC.deletePrescription)
                break
            }
            default: {
                logger.debug("field not present for this permission")
                break
            }
        }
    })
    role_data.role_permission = grantArray
    try {
        rolePermissed = await sequelizeDB.transaction(function (t) {
            return db_update_role(tenant_id, role_uuid, role_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("ROLE update error " + err)
        req.apiRes = ROLE_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN UPDATING ROLE",
        }
        return next()
    }
    logger.debug("Updated Role is " + rolePermissed)
    respResult = dbOutput_JSON(rolePermissed)
    logger.debug("respresult in role update", respResult)
    respResult = req.body
    req.apiRes = ROLE_CODE["5"]
    req.apiRes["response"] = {
        rolePermissed: respResult,
        count: respResult.length,
    }
    return next()
}

async function updateAllergy(req, res, next) {
    const t = await sequelizeDB.transaction()
    let allergy_data = req.body
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist

    //JSON SCHEMA LOGIC
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["allergySchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed " + error,
        }
        return next()
    }

    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient - ",
        }
        return next()
    }
    try {
        const promises = []
        for (let i = 0; i < allergy_data.length; i++) {
            promises.push(
                (result = await sequelizeDB.transaction(function (t) {
                    return db_update_prescription(
                        tenant_id,
                        allergy_data[i],
                        given_pid,
                        {
                            transaction: t,
                        }
                    )
                }))
            )
        }
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient - ",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = TRANSACTION_CODE["0"]
    req.apiRes["response"] = {
        patient_data: respResult,
        count: respResult.length,
    }
    return next()
}


async function createTasks(req, res, next) {
    const t = await sequelizeDB.transaction()
    let tenant_id = req.userTenantId
    logger.debug("the tenant id is", tenant_id)
    let task_data = req.body
    let newTask = req.body["task"][0]
    logger.debug("the new task in the body is", newTask)
    req.query = {
        limit: 10,
        offset: 0,
        filter: 0,
        tenant_id: tenant_id,
        pid: task_data["pid"],
    }
    let newTaskUpdated
    let getTasks = await getTaskData(req, next)
    logger.debug("the get tasks is", JSON.stringify(getTasks))
    if (getTasks["taskData"].length === 0) {
        logger.debug("in if loop ")
        newTaskUpdated = [newTask]
    } else {
        logger.debug("in else loop")
        logger.debug("the new task updated for else loop is", newTaskUpdated)
        newTaskUpdated = getTasks["taskData"][0]["task"]
        logger.debug("the new task updated is", newTaskUpdated)
        newTaskUpdated.push(newTask)
    }
    let tasks
    try {
        tasks = await sequelizeDB.transaction(async function (t) {
            task_data["tenant_id"] = tenant_id
            task_data["task"] = newTaskUpdated
            return db_update_task(tenant_id, task_data, {
                transaction: t,
            })
        })
    } catch (err) {
        logger.debug("Task report list error " + err)
        req.apiRes = TASK_CODE["4"]
        req.apiRes["error"] = {
            error: "ERROR IN CREATING THE TASKS",
        }
        return next()
    }
    logger.debug("Task report list is " + tasks)
    // let billingUpdate=await createBilling(req,res,next)
    // logger.debug('the billing update is',billingUpdate)
    req.apiRes = TASK_CODE["3"]
    tasks = req.body
    req.apiRes["response"] = {
        tasksData: tasks,
    }
    return responseAPI(res, req.apiRes)
}

async function getTask(req, res, next) {
    let tenant_id = req.userTenantId
    let tasks
    logger.debug("the req query is", req.query)
    try {
        tasks = await db_get_task(tenant_id, req.query)
    } catch (err) {
        logger.debug("Task list error " + err)
        req.apiRes = TASK_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE TASKS",
        }
        return next()
    }

    logger.debug("Task report list is " + tasks)
    req.apiRes = TASK_CODE["2"]
    req.apiRes["response"] = {
        taskData: tasks,
    }
    return responseAPI(res, req.apiRes)
}

async function getTaskData(req, next) {
    let tenant_id = req.userTenantId
    let tasks
    logger.debug("the req query is", req.query)
    try {
        tasks = await db_get_task(tenant_id, req.query)
    } catch (err) {
        logger.debug("Task list error " + err)
        req.apiRes = TASK_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE TASKS",
        }
        return next()
    }

    logger.debug("Task report list is " + tasks)
    return {
        taskData: tasks,
    }
}

async function passwordReset(req, res, next) {
    const t = await sequelizeDB.transaction()
    let fromAddress = "reset@live247.ai"
    let toAddress = req.body.email
    let DOB = req.body.DOB
    let phone = req.body.phone
    let subject = "Password reset"
    let text = "admin123"
    let newPassword = "Live247@ai123$AI"
    let getUserEmail
    email_exist = await user_controller.db_email_exist(toAddress)
    logger.debug("THIS IS EMAIL EXIST FUNCTION", email_exist)
    if (!email_exist) {
        req.apiRes = PASSWORD_CODE["3"]
        req.apiRes["error"] = {
            error: "EMAIL does not exist :" + toAddress,
        }
        return next()
    }
    logger.debug("this is is user email function")
    getUserEmail = await user_controller.db_get_email_users(toAddress)
    logger.debug("the get user email is", getUserEmail)
    let html =
        "The password for the username " +
        getUserEmail[0].dataValues.username +
        " is set to the following , please change the password after logging in." +
        "The password for reset: " +
        newPassword

    let tenant_id = getUserEmail[0].dataValues.tenant_id
    logger.debug("the tenant id is", tenant_id)
    let userPasswordData = {
        role: getUserEmail[0].dataValues.role,
        fname: getUserEmail[0].dataValues.fname,
        lname: getUserEmail[0].dataValues.lname,
        email: getUserEmail[0].dataValues.email,
        username: getUserEmail[0].dataValues.username,
        password: newPassword,
    }
    try {
        emailResponse = await emailer(
            fromAddress,
            toAddress,
            subject,
            text,
            html
        )
        userPassword = db_user_email(toAddress, userPasswordData)
        logger.debug("the user password is", userPassword)
    } catch (err) {
        logger.debug("Password reset error " + err)
        req.apiRes = PASSWORD_CODE["2"]
        return next()
    }
    req.apiRes = PASSWORD_CODE["1"]
    return responseAPI(res, req.apiRes)
}

// async function createUserTenant(req, res, next) {
//     const t = await sequelizeDB.transaction()
//     let user_tenant_data = req.body
//     let user_tenant
//     tenant_id = req.body[0]["tenant_uuid"]
//     user_uuid = req.body[0]["user_uuid"]
//     role = req.body[0]["role"]
//     try {
//         user_tenant = await sequelizeDB.transaction(function (t) {
//             return db_create_user_tenant(tenant_id, user_tenant_data, {
//                 transaction: t,
//             })
//         })
//     } catch (error) {
//         logger.debug("The error in catch is ", error)
//         req.apiRes = USER_CODE["8"]
//         req.apiRes["error"] = {
//             errMessage: "ERROR IN CREATING THE USER TENANT",
//         }
//         return next()
//     }
//     logger.debug("USER TENANT DATA IS ", JSON.stringify(user_tenant))
//     logger.debug("THE USER TENANT ARE", req.body, JSON.stringify(req.body))
//     //locations = req.body
//     req.apiRes = USER_CODE["8"]
//     req.apiRes["response"] = {
//         user_tenant_data: user_tenant,
//     }
//     return next()
// }


async function getProfiles(req, res, next) {
    try {
        
    } catch (error) {
        
    }
    let pid = req.query.pid
    let profile
    let pidCount = await dbProfileExists(pid)
    if (pidCount === 0) {
        req.apiRes = PROFILE_CODE["5"]
        return responseAPI(res, req.apiRes)
    }
    try {
        profile = await dbGetProfileInfo(pid)
        req.apiRes = PROFILE_CODE["2"]
        req.apiRes["response"] = { profileInfo: profile }
    } catch (err) {
        logger.debug(`Profile fetch ERROR: ${err.message} `)
        req.apiRes = PROFILE_CODE["1"]
        req.apiRes["error"] = { error: err.message }
        return responseAPI(res, req.apiRes)
    }
    return responseAPI(res, req.apiRes)
}

async function postProfiles(req, res, next) {
    let profileData = {}
    // let profile_id = uuid()
    profileData["pid"] = req.query.pid
    profileData["tenant_id"] = req.query.tenant_id
    const t = await sequelizeDB.transaction()
    let uuidDictProfile = {
        uuidType: UUID_CONST["profile"],
        tenantID: profileData["tenant_id"],
    }
    let profile_id = await getUUID(uuidDictProfile, { transaction: t })
    profileData["profile_id"] = profile_id
    profileData["profile_data"] = req.body[0]

    let pidCount = await dbProfileExists(profileData["pid"])

    if (pidCount === 1) {
        req.apiRes = PROFILE_CODE["6"]
        return responseAPI(res, req.apiRes)
    }

    let profile
    try {
        profile = await dbCreateProfile(profileData)
        req.apiRes = PROFILE_CODE["3"]
        req.apiRes["response"] = { profileInfo: profile }
    } catch (err) {
        logger.debug(`Profile create ERROR: ${err.message} `)
        req.apiRes = PROFILE_CODE["4"]
        req.apiRes["error"] = { error: err.message }
        return responseAPI(res, req.apiRes)
    }
    return responseAPI(res, req.apiRes)
}

async function putProfiles(req, res, next) {
    let pid = req.query.pid
    let profileData = {}
    let pidCount = await dbProfileExists(pid)

    if (pidCount === 0) {
        req.apiRes = PROFILE_CODE["5"]
        return responseAPI(res, req.apiRes)
    }
    profileData["profile_data"] = req.body[0]
    let profile
    try {
        profile = await dbUpdateProfile(pid, profileData)
        req.apiRes = PROFILE_CODE["7"]
        req.apiRes["response"] = { profileInfo: profileData }
    } catch (err) {
        logger.debug(`Profile update ERROR: ${err.message} `)
        req.apiRes = PROFILE_CODE["8"]
        req.apiRes["error"] = { error: err.message }
        return responseAPI(res, req.apiRes)
    }
    return responseAPI(res, req.apiRes)
}

async function deletePatch(req, res, next) {
    let data
    try {
        data = await db_delete_patch(req.body)
        if(data[0] === 1){
            req.apiRes = DEVICE_CODE["5"]
            req.apiRes["response"] = { delete: true }
        }
        else{
            req.apiRes = DEVICE_CODE["6"]
            req.apiRes["response"] = { delete: false }
        }
    } catch (error) {
        console.log(error)
        req.apiRes = DEVICE_CODE["4"]
        req.apiRes["error"] = { error: error.message }
        return responseAPI(res, req.apiRes)
    }
    return responseAPI(res, req.apiRes)
}

async function getDeviceType(req, res, next) {
    try {
        const data = await db_get_device_type()
        req.apiRes = DEVICE_CODE["7"]
        req.apiRes["response"] = { data: data }
    } catch (error) {
        console.log(error)
        req.apiRes = DEVICE_CODE["8"]
        req.apiRes["error"] = { error: error.message }
        return responseAPI(res, req.apiRes)
    }
    return responseAPI(res, req.apiRes)
}

async function getPathSaas(req, res, next) {
    try {
        const data = await db_get_patch_saas(req.query)

        if((data === null) || (data.length===0)){
            req.apiRes = PATCH_CODE["13"]
        }
        else{
            req.apiRes = PATCH_CODE["2"]
        }
        req.apiRes["response"] = {
            patch: data,
            count: data.length
        }
    } catch (error) {
        console.log(error)
        req.apiRes["response"] = {error: error}
    }
    
    return responseAPI(res, req.apiRes)
}

async function createDevice(req, res, next) {
    try {
        const params = req.body.data[0]

        let condition = {}
        if(params.patch_type === 'gateway'){
            condition = {
                patch_type: params.patch_type,
                device_serial: params.device_serial
            }
        }
        else {
            condition = {
                patch_type: params.patch_type,
                patch_mac: params.patch_mac
            }
        }

        const check_number = await db_check_duplicate_device(condition)

        if(check_number.data && (params.patch_type === 'gateway')){
            req.apiRes = PATCH_CODE["14"]
            return responseAPI(res, req.apiRes)
        }
        else if(check_number.data){
            req.apiRes = PATCH_CODE["15"]
            return responseAPI(res, req.apiRes)
        }


        if(params.patch_type === 'gateway'){
            if(params.sim){
                condition = {
                    sim: params.sim
                }
                const check_sim = await db_check_duplicate_device(condition)
                if(check_sim.data){
                    req.apiRes = PATCH_CODE["18"]
                    return responseAPI(res, req.apiRes)
                    return next()
                }
            }


            if(params.phone){
                condition = {
                    phone: params.phone
                }
                const check_phone = await db_check_duplicate_device(condition)
                if(check_phone.data){
                    req.apiRes = PATCH_CODE["19"]
                    return responseAPI(res, req.apiRes)
                    return next()
                }
            }
        }


        tags = params.tags
        if(tags.length>0){
            recallFuntion(params.tags.length, 0, req, res, next)
        }else{
            const t = await sequelizeDB.transaction()
            const uuidDict = { uuidType: UUID_CONST["patch"], tenantID: req.body.tenantId}
            params["patch_uuid"] = await getUUID(uuidDict, { transaction: t })
            
            const data = await db_create_device(req.body)
            req.apiRes = PATCH_CODE["3"]
            req.apiRes["response"] = { data: data.data }
            return responseAPI(res, req.apiRes)
        }
    } catch (error) {
        console.log(error)
        req.apiRes = PATCH_CODE["4"]
        req.apiRes["error"] = { error: error }
        return responseAPI(res, req.apiRes)
    }
}

async function recall(length, number, req, res, next) {
    try {
        condition = {
            tags: { [Op.like]: `%"${tags[number]}"%` }
        }
        const check_tags = await db_check_duplicate_device(condition)
        if (check_tags.data) {
            req.apiRes = {
                Code: "TAGS_IS_ALREADY_EXIST",
                HttpStatus: "470",
                Message: `Tag: "${tags[number]}" is already exist`,
            }
            return responseAPI(res, req.apiRes)
        }
        if (length === number+1) {
            const t = await sequelizeDB.transaction()
            const uuidDict = { uuidType: UUID_CONST["patch"], tenantID: req.body.tenantId}
            req.body.data[0]["patch_uuid"] = await getUUID(uuidDict, { transaction: t })
            
            const data = await db_create_device(req.body)
            req.apiRes = PATCH_CODE["3"]
            req.apiRes["response"] = { data: data.data }
            return responseAPI(res, req.apiRes)
        }
        recallFuntion(length, number + 1, req, res, next)
    } catch (error) {
        console.log(error)
        req.apiRes = PATCH_CODE["4"]
        req.apiRes["error"] = { error: error }
        return responseAPI(res, req.apiRes)
    }
}


async function getDevice(req, res, next) {
    try {
        const result = await db_get_device(req.body)

        const count = await db_count_device(req.body)

        req.apiRes = PATCH_CODE["2"]
        req.apiRes["response"] = {
            patches: result.data,
            count: result.data.length,
            patchTotalCount: count.data,
        }

        if(req.body.search){
            req.apiRes["response"].patchTotalCount = result.data.length
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = PATCH_CODE["1"]
    }
    return responseAPI(res, req.apiRes)
}


async function getProduct(req, res, next) {
    try {
        const data = await db_get_product_list(req.query)

        req.apiRes = PRODUCT_CODE["2"]
        req.apiRes["response"] = {
            products: data,
            count: data.length
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = PRODUCT_CODE["1"]
    }

    return responseAPI(res, req.apiRes)
}


async function createProduct(req, res, next) {
    try {
        await db_create_product(req.body)
        req.apiRes = PRODUCT_CODE["3"]
        req.apiRes["response"] = {
            data: req.body
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = PRODUCT_CODE["4"]
    }

    return responseAPI(res, req.apiRes)
}


async function updatePatch(req, res, next) {
    try {
        await db_update_patch_status(req.body[0])
        req.apiRes = PATCH_CODE["16"]
        req.apiRes["response"] = {
            data: req.body
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = PATCH_CODE["17"]
    }

    return responseAPI(res, req.apiRes)
}


// async function getTenant(req, res, next) {
//     try {
//         const data = await db_get_tenant_list(req.query)

//         req.apiRes = TENANTS_CODE["2"]
//         req.apiRes["response"] = {
//             tenants: data,
//             count: data.length
//         }
//     } catch (error) {
//         console.log(error)
//         req.apiRes["error"] = {
//             error: error
//         }
//         req.apiRes = TENANTS_CODE["1"]
//     }

//     return responseAPI(res, req.apiRes)
//     return next()
// }

async function getUserProfile(req, res, next) {
    try {
        const data = await db_get_user_profile(req.query)

        req.apiRes = USER_CODE["2"]
        req.apiRes["response"] = {
            users: data,
            count: data.length
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = USER_CODE["1"]
    }

    return responseAPI(res, req.apiRes)
}


async function createUser(req, res, next) {
    try {
        const exist = await db_get_user(req.body)
        if(exist && exist.email === req.body.email){
            req.apiRes = USER_CODE["11"]
            return responseAPI(res, req.apiRes)
        }
        else if(exist && exist.username === req.body.username){
            req.apiRes = USER_CODE["12"]
            return responseAPI(res, req.apiRes)
        }
        const t = await sequelizeDB.transaction()
        const uuidDict = { uuidType: UUID_CONST["user"], tenantID: 0 }
        req.body.user_uuid = await getUUID(uuidDict, { transaction: t })
        await db_create_user(req.body)
        req.apiRes = USER_CODE["3"]
        req.apiRes["response"] = {
            data: req.body
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = USER_CODE["4"]
    }

    return responseAPI(res, req.apiRes)
}


async function updateUser(req, res, next) {
    try {
        // const exist = await db_get_user(req.body)
        // if(exist && exist.email === req.body.email){
        //     req.apiRes = USER_CODE["11"]
        //     return responseAPI(res, req.apiRes)
        //     return next()
        // }
        // else if(exist && exist.username === req.body.username){
        //     req.apiRes = USER_CODE["12"]
        //     return responseAPI(res, req.apiRes)
        //     return next()
        // }
        await db_update_user(req.body)
        req.apiRes = USER_CODE["14"]
        req.apiRes["response"] = {
            data: req.body
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = USER_CODE["13"]
    }

    return responseAPI(res, req.apiRes)
}


async function resetDevice(req, res, next) {
    try {
        await db_reset_device(req.body)
        req.apiRes = PATCH_CODE["22"]
        if(req.body.reset){
            req.apiRes = PATCH_CODE["20"]
        }
        req.apiRes["response"] = {
            data: req.body
        }
        global_variable.gateway_list = db_gateway_by_patient()
        console.log(global_variable.gateway_list)
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = PATCH_CODE["23"]
        if(req.body.reset){
            req.apiRes = PATCH_CODE["21"]
        }
    }

    return responseAPI(res, req.apiRes)
}


async function getUserTenant(req, res, next) {
    try {
        const data = await db_get_user_tenant(req.query)

        req.apiRes = USER_CODE["9"]
        req.apiRes["response"] = {
            userTenantData: data,
            count: data.length
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = USER_CODE["10"]
    }
    return responseAPI(res, req.apiRes)
}


async function getRoleList(req, res, next) {
    try {
        const data = await db_get_role_list(req.query)

        req.apiRes = ROLE_CODE["2"]
        req.apiRes["response"] = {
            roles: data,
            count: data.length
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = ROLE_CODE["1"]
    }
    return responseAPI(res, req.apiRes)
}


async function getFacility(req, res, next) {
    try {
        const data = await db_get_facility(req.query)

        req.apiRes = FACILITY_CODE["2"]
        req.apiRes["response"] = {
            facilities: data
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = FACILITY_CODE["1"]
    }
    return responseAPI(res, req.apiRes)
}


async function getRole(req, res, next) {
    try {
        const data = await db_get_role(req.params)

        req.apiRes = ROLE_CODE["2"]
        req.apiRes["response"] = {
            data: data,
            count: data.length
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = ROLE_CODE["1"]
    }
    return responseAPI(res, req.apiRes)
}


async function getLabReport(req, res, next) {
    try {
        const data = await db_get_lab_report(req.query)

        req.apiRes = LAB_REPORT_CODE["2"]
        req.apiRes["response"] = {
            labReports: data.data,
            count: data.data.length
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = LAB_REPORT_CODE["1"]
    }
    return responseAPI(res, req.apiRes)
}


async function createLabReport(req, res, next) {
    const accept = '.jpg , .jpeg , .jfif , .pjpeg , .pjp, .png, .svg, .pdf'
    // const doc = '.doc .docx'
    try {
        const data = req.files['file']
        if (!data && !data[0]) {
            return res.status(470).json({ message: 'You must select at least 1 file' })
        }

        let list = data
        if (!data[0]) {
            list = []
            list.push(data)
        }


        // let flg = false
        // for (const obj of list) {
        //     const spl = obj.name.split('.')
        //     if(!accept.includes(spl[spl.length-1])){
        //         flg = true
        //         break
        //     }
        // }
        // if(flg){
        //     return res.status(470).json({ message: 'File type must be image, pdf, doc or docx' })
        // }

        for (let index = 0; index < list.length; index++) {
            const spl = list[index].name.split('.')
            list[index].isShow = 'true'
            if (!accept.includes(spl[spl.length - 1])) {
                list[index].isShow = 'false'
            }
            if (index + 1 === list.length) {
                return loopCreator(list[index], req, res, true)
            }
            loopCreator(list[index], req, res, false)
        }
    } catch (error) {
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
            return res.status(470).json({ message: 'Exceeds the number of files allowed to upload.' })
        }
        return res.status(500, { error: error })
    }
}


async function loopCreator(obj, req, res, stop) {
    await db_create_lab_report({
        data:  obj.data,
        name: obj.name, 
        pid: req.query.pid,
        tenant_id: req.query.tenant_id,
        type: obj.mimetype,
        isShow: obj.isShow
    })
    if(stop){
        return res.send(200, { message: 'Sucessful' })
    }
}


async function getLabReportById(req, res, next) {
    try {
        const data = await db_get_lab_report_by_id(req.params)
        req.apiRes = LAB_REPORT_CODE["2"]
        req.apiRes["response"] = {
            labReport: data.data
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = LAB_REPORT_CODE["1"]
    }
    return responseAPI(res, req.apiRes)
}


async function download(req, res, next) {
    try {
        if(!req.query.id){
            return res.status(470).json({ message: 'Missing param id' })
        }
        const data = await db_download_data(req.query)

        const fileContents = Buffer.from(data.data.data, "base64");

        const readStream = new stream.PassThrough();
        readStream.end(fileContents);

        res.set('Content-disposition', 'attachment; filename=' + data.data.name);
        res.set('Content-Type', 'text/plain');

        return readStream.pipe(res);
    } catch (error) {
        console.log(error)
        return res.status(500, { error: error })
    }
}


async function createTenant(req, res, next) {
    try {
        const result = await db_check_tenant(req.body)
        if(result.data){
            req.apiRes = TENANTS_CODE["5"]
            return responseAPI(res, req.apiRes)
        }

        const root = await db_get_root_tenant(req.body)
        if(!root.data){
            return res.send(500, { error: 'Root id is not exists' })
        }
        req.body.level = root.data.dataValues.level + 1
        if(result.data){
            req.apiRes = TENANTS_CODE["5"]
            return responseAPI(res, req.apiRes)
        }

        const t = await sequelizeDB.transaction()
        const uuidDict = { uuidType: UUID_CONST["tenant"], tenantID: 0 }
        req.body.tenant_uuid = await getUUID(uuidDict, { transaction: t })
        await db_create_tenant(req.body)
        req.apiRes = TENANTS_CODE["3"]
        req.apiRes["response"] = {
            data: req.body
        }
    } catch (error) {
        console.log(error)
        req.apiRes["error"] = {
            error: error
        }
        req.apiRes = TENANTS_CODE["4"]
    }
    return responseAPI(res, req.apiRes)
}


module.exports = {
    getUserInventory,
    getUserProfile,
    createUuid,
    textToSpeech,
    imageUpload,
    validateModels,
    createUser,
    updateUser,
    loginUser,
    logoutUser,
    getPatchInventory,
    createPatch,
    updatePatchUuid,
    updatePatch,
    getTenant,
    createTenant,
    getBed,
    createBed,
    getConnector,
    createConnector,
    getProduct,
    createProduct,
    getFacility,
    createFacility,
    getImages,
    createLocation,
    getLocation,
    updateFacility,
    updateTenant,
    createRole,
    getRoleList,
    deleteRole,
    updateRole,
    updateAllergy,
    reportUpload,
    checkPatchSerial,
    createLabReport,
    getLabReport,
    getReport,
    createRemoteLocation,
    getRemoteLocation,
    createTasks,
    getTask,
    passwordReset,
    // createUserTenant,
    getUserTenant,
    getRoleData,
    createRemoteLocation,
    getProfiles,
    postProfiles,
    putProfiles,
    updateRemoteLocation,
    updateImageUpload,
    getSelectBoxPatch,
    deletePatch,
    getDeviceType,
    getPathSaas,
    createDevice,
    getDevice,
    resetDevice,
    getRole,
    getLabReportById,
    download
}