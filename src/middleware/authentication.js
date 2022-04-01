// var express = require('express')
// var app = express()
const jwt = require("jsonwebtoken")
// const logger = require("../config/logger")
var log4js = require('log4js');
log4js.configure('./src/config/log4js-config.json');
const logger = log4js.getLogger('mware');

const redisClient = require("../external_services/redis/cache_service/redis_client")

// Database
const Sequelize = require("sequelize")
const sequelizeDB = require("../config/emrmysqldb")
var initModels =
    require("../dbmodels/sequelizeEMRModels/init-models").initModels
var models = initModels(sequelizeDB)

const tenant_db_controller = require("../dbcontrollers/tenant.controller")
const db_get_tenant_id = tenant_db_controller.db_get_tenant_id

const SYSTEM_AAA_CODE = require("../lib/constants/AppEnum").SYSTEM_AAA_CODE
const IGNORE_AUTH_PATH = require("../lib/constants/authPriv").IGNORE_AUTH_PATH

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

var ignoreReqPathWithoutAuth = function (path) {
    if (IGNORE_AUTH_PATH.includes(path)) {
        return true
    } else {
        return false
    }
}

var validateSession = async function (req, res, next) {
    // Verify the session exist in the Redis Cache or (TODO :DB )
    // Cache to be update if the session is valid ; with the new access timeout and validate expiry timeout
    // Verify the activity of the user - in terms of last access time and also security
    // TODO : Change the cookie JWT if the expiry is nearing
    logger.debug('the headers  in role are',req.headers)
    logger.debug('the session in role are',req.session)
    logger.debug("Validate Session for URL ", req.path)
    if (ignoreReqPathWithoutAuth(req.path)) {
        logger.debug("Ignoring path for authentication check URL - " + req.path)
        return next()
    }
    if (req.cookies[process.env.TOKEN_KEY]) {
        const accessToken = req.cookies[process.env.TOKEN_KEY]
        let JwtDecoded = null
        currTime = Date.now()
        try {
            JwtDecoded = jwt.verify(accessToken, process.env.JWT_SECRET)
            logger.debug("JWT decoded is", JwtDecoded)
        } catch (err) {
            response = err
            logger.info("Cookie JWK Error : " + response + err)
            // if (response == "TokenExpiredError") {
            // catch all error to Token Expiry as of today - Needs improvement in error handling
            res.clearCookie(process.env.TOKEN_KEY)
            return res.status(SYSTEM_AAA_CODE["2"].HttpStatus).json({
                result: SYSTEM_AAA_CODE["2"].Code,
                response: {},
                error: {
                    errMessage: SYSTEM_AAA_CODE["2"].Message,
                },
                privilege: {},
            })
            // }
        }
        logger.debug("Check Redis Cache")
        redisResponse = await redisClient.checkRedisCache(
            "userSession",
            accessToken
        )
        logger.debug("Check Redis Cache Done", redisResponse)
        if (redisResponse["status"]) {
            // let JwtDecoded = JSON.parse(redisResponse['response'])
            logger.debug("Cache found")
            let JwtDecoded = redisResponse["response"]
            logger.debug("parsing JwtDecoded", typeof JwtDecoded)
            req.userEmail = JwtDecoded.userEmail
            req.userName = JwtDecoded.userEmail.split("@")[0]
            req.userRole = JwtDecoded.userRole
            req.userTenant = JwtDecoded.userTenant
            req.userTenantId = ""
            await db_get_tenant_id(req.userTenant)
                .then((tenantId) => {
                    req.userTenantId = tenantId
                    logger.debug("AUTH Tenant ID Response", req.userTenantId)
                })
                .catch((err) => {
                    logger.error("Tenant Invalid : " + req.userTenant)
                })

            if (
                JwtDecoded.accessTime +
                    process.env.JWT_USER_ACCESS_TIMEOUT * 1000 <
                currTime
            ) {
                logger.debug(
                    "Current time and accessTime are ",
                    currTime,
                    JwtDecoded.accessTime
                )
                res.clearCookie(process.env.TOKEN_KEY)
                res.status(SYSTEM_AAA_CODE["8"].HttpStatus).json({
                    result: SYSTEM_AAA_CODE["8"].Code,
                    response: {},
                    error: {
                        errMessage: SYSTEM_AAA_CODE["8"].Message,
                    },
                    privilege: {},
                })
            }
            JwtDecoded.accessTime = currTime
            redisResponse = redisClient.updateRedisCache(
                "userSession",
                accessToken,
                JwtDecoded
            )
            logger.debug("useremail is ", JwtDecoded["userEmail"])
            return next()
        } else if (
            redisResponse["status"] == false &&
            redisResponse["error"] == false
        ) {
            logger.debug("Cache not found - Inserting now.. ", accessToken)
            try {
                redisResponse = redisClient.updateRedisCache(
                    "userSession",
                    accessToken,
                    JwtDecoded
                )
                redisResponse = redisClient.updateRedisCache(
                    "userSession",
                    JwtDecoded.userEmail,
                    JwtDecoded
                )

                // Send JSON resp
                logger.debug("parsing JwtDecoded", typeof JwtDecoded)

                req.userEmail = JwtDecoded.userEmail
                req.userName = JwtDecoded.userEmail.split("@")[0]
                req.userRole = JwtDecoded.userRole
                req.userTenant = JwtDecoded.userTenant
                req.userTenantId = ""
                //req.page = req.headers["x-live247-pg" - visualizer]
                await db_get_tenant_id(req.userTenant)
                    .then((tenantId) => {
                        req.userTenantId = tenantId
                        logger.debug(
                            "AUTH Tenant ID Response",
                            req.userTenantId
                        )
                    })
                    .catch((err) => {
                        logger.error("Tenant Invalid : " + req.userTenant)
                    })
                JwtDecoded.accessTime = currTime
                logger.debug("useremail is ", JwtDecoded["userEmail"], currTime)
                return next()
            } catch (err) {
                logger.error(" Error in creating redis cache: " + err)
                //  Add redisClient Key removal generic function
                redisClient.del(
                    `userSession:${accessToken}`,
                    function (err, response) {
                        if (response == 1) {
                            console.log("Deleted key Successfully!")
                        } else {
                            console.log("Cannot delete Key")
                        }
                    }
                )
            }
        } else {
            // Error handle from checkRedisCache
            response = redisResponse["response"]
            logger.info("Cookie JWK Error : " + response)
            if (response == "TokenExpiredError") {
                res.clearCookie(process.env.TOKEN_KEY)
                res.status(SYSTEM_AAA_CODE["2"].HttpStatus).json({
                    result: SYSTEM_AAA_CODE["2"].Code,
                    response: {},
                    error: {
                        errMessage: SYSTEM_AAA_CODE["2"].Message,
                    },
                    privilege: {},
                })
            }
        }
    } else {
        // The Token Key itself is not present - Needs Authentication
        logger.debug("The Token key was not present for " + req.path)
        // Respond JSON for Session Expiry
        res.status(SYSTEM_AAA_CODE["3"].HttpStatus).json({
            result: SYSTEM_AAA_CODE["3"].Code,
            response: {},
            error: {
                errMessage: SYSTEM_AAA_CODE["3"].Message,
            },
            privilege: {},
        })
    }
}

module.exports = {
    validateSession,
}
