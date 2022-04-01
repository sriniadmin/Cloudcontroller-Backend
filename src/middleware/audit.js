//a-z Standard Modules
const fs = require('fs')
const url = require('url')

// Database Connector
// const Sequelize = require("sequelize")
// const sequelizeDB = require("../config/emrmysqldb")
// var initModels = require("../dbmodels/sequelizeEMRModels/init-models").initModels
// var models = initModels(sequelizeDB)
const auditLogCtrlr = require("../dbcontrollers/audit_log.controller.js");

const logReqBodyMandatory = ['userEmail', 'userRole', 'tenant'];


// auditRoutes = {
//     "/api/alerts": {
//         logMethod: ['GET'],
//         logReqBody: [],
//         logReqParams: [],
//         logReqQuery: ['pid']
//     },
//     "/api/patients": {
//         logMethod: ['GET', 'POST'],
//         logReqBody: [],
//         logReqParams: [],
//         logReqQuery: ['pid']
//     },
//     "/api/patients/.*/patch_map": {
//         logMethod: ['GET', 'POST'],
//         logReqBody: [],
//         logReqParams: [],
//         logReqQuery: ['pid']
//     }
// }

let auditRoutesCfg = undefined

auditorLoadCfg = function () {
    fs.readFile('./src/middleware/audit.json', (err, data) => {
        if (err) throw err;
        auditRoutesCfg = JSON.parse(data);
        console.log("AUDIT]: Config loaded... ", auditRoutesCfg);
        return auditRoutesCfg
    })
}

auditor = function (req, res, next) {
    if (auditRoutesCfg === undefined) {
        //console.log("[AUDIT]: Configuration not loaded")
        next()
    } else {
        //console.log("[AUDIT]: ", auditRoutesCfg.route)
    }

    let params = [];
    let path = url.parse(req.url,true).pathname
    let query = url.parse(req.url,true).query
    let body = req.body
    let ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress;
    let date = new Date().toISOString().
    replace(/T/, ' ').      // replace T with a space
    replace(/\..+/, '')     // delete the dot and everything after
    if (req.Params) {
        params = observeParams.concat(req.Params)
    }

        
    console.log("Date ", date)
    console.log("IP ", ip)
    console.log("Path ", path)
    console.log("Params ", params)
    console.log("Body ", body)
    console.log("Query ", query)

    _url = path.split('/', 3)
    basePath = '/'+_url[1]+'/'+_url[2]
    console.log(req.method)
    console.log(req.userEmail)
    console.log("[AUDIT]: BasePath, Array", basePath, Object.keys(auditRoutesCfg.route))

    /*
    let auditLog = Object.create(auditLogCtrlr.AuditLogObj)
    
    auditLog['pid'] = ""
    auditLog['userEmail'] = req.userEmail.toLowerCase()
    auditLog['userRole'] = req.userRole.toLowerCase()
    auditLog['tenant'] = req.tenant.toLowerCase()
    auditLog['reqBody'] = ""
    console.log("Audit Log", auditLog)
    
    auditLogCtrlr.create(req, res, auditLog)
    */

    if (Object.keys(auditRoutesCfg.route).includes(basePath)) {
        routes = Object.keys(auditRoutesCfg.route)
        for (let i = 0; i < routes.length; ++i) {
            const rt = routes[i]
            console.log("Route :", rt, path)
            let re = new RegExp(rt)
            let match = re.exec(path)
            console.log(match)
            if (match) {
                adRt = auditRoutesCfg.route[rt]
     
                if (adRt.verb.includes(req.method)) {
                    let auditLog = Object.create(auditLogCtrlr.AuditLogObj)
    
                    if (req) {
                        auditLog['userEmail'] = req.userEmail ? req.userEmail.toLowerCase() : 'empty email'
                        auditLog['userRole'] = req.userRole ? req.userRole.toLowerCase() : 'empty role'
                        auditLog['tenant'] = req.userTenant ? req.userTenant.toLowerCase() : 'empty tenant'
                        auditLog['reqBody'] = req.body ? req.body : {}
                        auditLog['reqBody'] = JSON.stringify(auditLog['reqBody'])
                        auditLog['verb'] = req.method ? req.method.toLowerCase() : 'empty req method'
                    }

                    if (res) {
                        auditLog['rsqBody'] = res.body ? res.body : {}
                        auditLog['rspBody'] = JSON.stringify(auditLog['rspBody'])
                        auditLog['rspCode'] = 0
                    }
                    auditLog['route'] = path
                    auditLog['route_str'] = adRt.audit

                    //console.log("Audit Log", auditLog)

                    auditLogCtrlr.create(req, res, auditLog)
    
                    if (adRt.hasOwnProperty('logMethod')) {
                        adRt.logMethod(req, res, match, auditLog)
                    }
                }
                break
            }
        }
        /*
        if (route.method.includes(req.method)) {
            console.log("Generate Audit Log", basePath, req.method);
            for (let p of auditRoutesCfg.user.id) {
                console.log(p, req[p])
            }
        }*/
    }
    next();
}

module.exports = {
    auditor: auditor, 
    auditorLoadCfg: auditorLoadCfg
};
