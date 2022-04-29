//This handles patch inventory
var express = require("express")
const logger = require("../../config/logger")
var router = express.Router()
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")
const { UPGRADE_CODE, UUID_CONST } = require("../../lib/constants/AppEnum")

const sequelizeDB = require("../../config/emrmysqldb")
const getUUID = require("../../lib/system/uuidSystem").getUUID
const { dbOutput_JSON } = require("../../utils/dbUtils/dbUtils")

const {
    db_upgrade_entry_create,
    db_upgrade_list,
    db_upgrade_entry_create_gw,
    db_upgrade_list_gw
} = require("../../dbcontrollers/upgradeMobile.controller")

/**
 * @openapi
 *  /api/upgrade/mobile:
 *   get:
 *       tags:
 *         - Upgrade
 *       summary: Upgrade Mobile 
 *       parameters:
 *          - in: query
 *            name: devicetype
 *            schema:
 *               type: string
 *            description: The device type to filter on
 *       responses:
 *         '201':
 *           description: Upgrade Mobile Json is received.
 */

//Get Request


upgradeMobile = async function (req, res, next) {
    tenant_id = req.userTenantId
    let upgradeInfo
    logger.debug("Upgrade Mobile Version", tenant_id) 
    // let upgradeJson = {
    //     "versionName": "999.0.0",
    //     "versionCode": "998",
    //     "apkUrl": "https://github.com/mikehardy/react-native-update-apk/releases/download/v3.0.1/rn-update-apk-example-3.0.1.apk",
    //     "forceUpdate": false
    // }
    try {
        upgradeInfo = await db_upgrade_list(tenant_id)
    } catch (err) {
        logger.debug("UPGRADE DOES NOT EXIST " + err)
        req.apiRes = UPGRADE_CODE["0"]
        req.apiRes["error"] = {
            error: "Error in fetching the Upgrade :" + err,
        }
        return next()
    }
    logger.debug("Upgrade Mobile Version2" , upgradeInfo, dbOutput_JSON(upgradeInfo))
    req.apiRes = UPGRADE_CODE["1"]
    req.apiRes["response"] = {
        upgrade: upgradeInfo
    }
    logger.debug("Upgrade Mobile Version")
    return next()
}

router.get("/mobile", upgradeMobile, apiFinalProcess)


/**
 * @openapi
 *  components:
 *   schemas:
 *    upgradeMobile_config:
 *     type: object
 *     properties:
 *       upgradeDetails:
 *         type: json
 *         default: ""
 *       tenantuuid:
 *         type: string
 *         default: ""
 */


/**
 * @openapi
 *  /api/upgrade/mobile:
 *   post:
 *       tags:
 *         - Upgrade
 *       summary: Upgrade Mobile 
 *       requestBody:
 *         description: Receive data from upgradeMobile_config etc
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/upgradeMobile_config'
 *       parameters:
 *          - in: query
 *            name: devicetype
 *            schema:
 *               type: string
 *            description: The device type to filter on
 *       responses:
 *         '201':
 *           description: Upgrade Mobile Json is received.
 */

//Post Request


upgradeMobilePost = async function (req, res, next) {
    // tenant_id = req.userTenantId
    tenant_id = req.body.tenantuuid
    // tenantuuid = req.body.tenantuuid
    logger.debug("Upgrade Mobile Version POST")
    // let upgradeJson = req.body
    // let upgradeJson = {
    //     "versionName": "999.0.0",
    //     "versionCode": "998",
    //     "apkUrl": "https://github.com/mikehardy/react-native-update-apk/releases/download/v3.0.1/rn-update-apk-example-3.0.1.apk",
    //     "forceUpdate": false
    // }
    var upgrade_data = req.body
    let upgradeInfo
    let uuidDict = { uuidType: UUID_CONST["user"], tenantID: tenant_id }
    try {
        upgradeInfo = await sequelizeDB.transaction(async function (t) {
            await getUUID(uuidDict, { transaction: t }).then((uuid_result) => {
                logger.debug("The uuid result is", uuid_result)
                upgrade_data["tenant_uuid"] = tenant_id
                upgrade_data["upgradeMobileUUID"] = uuid_result
                return db_upgrade_entry_create(upgrade_data, {
                    transaction: t,
                })
            })
        })
    } catch (err) {
        logger.debug("UPGRADE Create error " + err)
        req.apiRes = UPGRADE_CODE["0"]
        req.apiRes["error"] = {
            error: "Creation of Upgrade failed :" + err,
        }
        return next()
    }
    logger.debug("The Upgrade Info is ", upgradeInfo, JSON.stringify(upgradeInfo))
    req.apiRes = UPGRADE_CODE["1"]
    req.apiRes["response"] = {
        upgrade: req.body
    }
    logger.debug("Upgrade Mobile Version")
    return next()
}

router.post("/mobile", upgradeMobilePost, apiFinalProcess)



//  Gateway Upgrade APIs
// 


/**
 * @openapi
 *  /api/upgrade/gateway:
 *   get:
 *       tags:
 *         - Upgrade
 *       summary: Upgrade gateway
 *       parameters:
 *          - in: query
 *            name: devicetype
 *            schema:
 *               type: string
 *            description: The device type to filter on
 *       responses:
 *         '201':
 *           description: Upgrade Gateway Json is received.
 */

//Get Request


upgradeGateway = async function (req, res, next) {
    tenant_id = req.userTenantId
    //  This is to get the Tenant specific upgrade version - For now its same for all the tenants
    //  Need to take care of tenant specific mobile and gateway
    // oldPid = req.body["pid"]
    // let tenant_id
    // db_patient_exist(tenant_id, oldPid)
    //     .then(async (patients) => {
    //         logger.debug("Success: Patient list is " + JSON.stringify(patients))
    //         tenant_id = patients.tenant_id
    //     })
    let upgradeInfo
    logger.debug("Upgrade Gateway Version", tenant_id)
    // let upgradeJson = {
    //     "versionName": "999.0.0",
    //     "versionCode": "998",
    //     "apkUrl": "https://github.com//download/v3.0.1/rn-update-apk-example-3.0.1.apk",
    //     "forceUpdate": false
    // }
    try {
        upgradeInfo = await db_upgrade_list_gw(tenant_id)
    } catch (err) {
        logger.debug("UPGRADE DOES NOT EXIST " + err)
        req.apiRes = UPGRADE_CODE["0"]
        req.apiRes["error"] = {
            error: "Error in fetching the Upgrade :" + err,
        }
        return next()
    }
    logger.debug("Upgrade Gateway Version2", upgradeInfo, dbOutput_JSON(upgradeInfo))
    req.apiRes = UPGRADE_CODE["1"]
    req.apiRes["response"] = {
        upgrade: upgradeInfo
    }
    logger.debug("Upgrade Gateway Version")
    return next()
}

router.get("/gatewayeee", upgradeGateway, apiFinalProcess)

router.get("/gateway", function (req, res, next) {
    return res.status(200).json({messages: 'u have connected to the Server'})
})


/**
 * @openapi
 *  components:
 *   schemas:
 *    upgradeGateway_config:
 *     type: object
 *     properties:
 *       tenantuuid:
 *         type: string
 *         default: ""
 *       upgradeDetails:
 *         type: json
 *         default: |
 *          { |
 *          versionName: 999.0.0,
 *          versionCode: 998,
 *          apkUrl: https://github.com//download/v3.0.1/rn-update-apk-example-3.0.1.apk,
 *          forceUpdate: false
 *          }
 */


/**
 * @openapi
 *  /api/upgrade/gateway:
 *   post:
 *       tags:
 *         - Upgrade
 *       summary: Upgrade gateway
 *       requestBody:
 *         description: Receive data from upgradeGateway_config etc
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/upgradeGateway_config'
 *       parameters:
 *          - in: query
 *            name: devicetype
 *            schema:
 *               type: string
 *            description: The device type to filter on
 *       responses:
 *         '201':
 *           description: Upgrade gateway Json is received.
 */

//Post Request


upgradeGatewayPost = async function (req, res, next) {
    // tenant_id = req.userTenantId
    // tenantuuid = req.body.tenantuuid
    tenant_id = req.body.tenantuuid
    logger.debug("Upgrade gateway Version POST")
    // let upgradeJson = req.body
    // let upgradeJson = {
    //     "versionName": "999.0.0",
    //     "versionCode": "998",
    //     "apkUrl": "https://github.com//download/v3.0.1/rn-update-apk-example-3.0.1.apk",
    //     "forceUpdate": false
    // }
    var upgrade_data = req.body
    let upgradeInfo
    let uuidDict = { uuidType: UUID_CONST["user"], tenantID: tenant_id }
    try {
        upgradeInfo = await sequelizeDB.transaction(async function (t) {
            await getUUID(uuidDict, { transaction: t }).then((uuid_result) => {
                logger.debug("The uuid result is", uuid_result)
                upgrade_data["tenant_uuid"] = tenant_id
                upgrade_data["upgradeGatewayUUID"] = uuid_result
                return db_upgrade_entry_create_gw(upgrade_data, {
                    transaction: t,
                })
            })
        })
    } catch (err) {
        logger.debug("UPGRADE Create error " + err)
        req.apiRes = UPGRADE_CODE["0"]
        req.apiRes["error"] = {
            error: "Creation of Upgrade failed :" + err,
        }
        return next()
    }
    logger.debug("The Upgrade Info is ", upgradeInfo, JSON.stringify(upgradeInfo))
    req.apiRes = UPGRADE_CODE["1"]
    req.apiRes["response"] = {
        upgrade: req.body
    }
    logger.debug("Upgrade Gateway Version")
    return next()
}

router.post("/gatewayee", upgradeGatewayPost, apiFinalProcess)

router.post("/gateway", function (req, res, next) {
    return res.status(200).json({messages: 'u have connected to the Server'})
})














module.exports = router
