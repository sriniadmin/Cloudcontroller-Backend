// This file needs to be Deprecated later.

var express = require("express")
const session = require("express-session")
const logger = require("../../../config/logger")
// const logger = console.log
// const logger = winston.loggers.get("development")
const schemaValidator = require("../../../dbcontrollers/schemaValidator")
const ApiResponse = require("../../../lib/api/apiResponse")
var cookie = require("cookie")

// For Api Call Request
const fetch = require("node-fetch")
const axios = require("axios")
var port = process.env.WEB_APP_PORT
const url = "http://localhost:"+port
const headers = {
    "Content-Type": "application/json",
    // client_id: "1001125",
    // client_secret: "876JHG76UKFJYGVHf867rFUTFGHCJ8JHV",
}


const config = {
    url: url,
    method: "post",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
}

async function postLendingApplication(url, headers, data) {
    // This is the Utility function that will help in performing fetch of Apis
    // Its async await of response
    logger.info("Processing POST Loan.", url)
    // return await fetch(url, {
    //     method: "POST",
    //     headers: headers,
    //     credentials: 'include',
    //     body: data,
    // })
    config["data"] = data
    config["url"] = url
    if (headers.hasOwnProperty("Cookie")) {
        logger.info("Cookie is present"+headers["Cookie"])
        config["headers"]["Cookie"] = headers["Cookie"]
    } else {
      config["headers"]["Cookie"] = null
    }
    return await axios(config).then((res) => {
        logger.info("Status: ", res.status)
        logger.info("Headers is " + res.headers)
        // const cookieObj = cookie.parse(
        //     JSON.stringify(res.headers["set-cookie"])
        // )
        // logger.info("Str of Cookie" + JSON.stringify(res.headers["set-cookie"]))
        // logger.info(
        //     "Cookie Headers is " +
        //        Object.keys( cookieObj)
        // )
        // logger.info("Headers is " + cookieObj['tokenKey'])
        // logger.info("Headers is obje " + Object.keys(res.headers["set-cookie"]))
        logger.info("StatusText: ", res.statusText)
        logger.info("OK: ", res.ok)
        return res
    })
}

// End of Api Call Variable declaration

// Auth Role Code



require("dotenv").config({
    path: __dirname + "/../../.env"
})
// End of Auth

var router = express.Router()
const app = express()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"


// Database
const sequelizeDB = require("../../../config/emrmysqldb")
var initModels = require("../../../dbmodels/sequelizeEMRModels/init-models")
  .initModels
var models = initModels(sequelizeDB)

const Users_Secure = models.users_secure

// DB functions

async function  get_user_role_data(email) {
    let userRoleData;
    await Users_Secure.findAll({
                        attributes: ["id", "email", "role", "tenant"],
                        where: {
                            email: email
                        },
                    })
                    .then((user_data) => {
                        logger.info("Setting the local value for the response" + user_data)
                        userRoleData = user_data[0]
                    })
                    .catch(err => {
                        logger.info("Error is " + err)
                    })
                    return userRoleData
}

// End of DB functions


// Roles Requirement
const role_ac = require("../../../roles/roles").roles()

// Should get rid of this
var patientDetailsMock = require("../../../utils/mock/patientlist.mock.js").data
var hospitalDetailsMock = require("../../../utils/mock/hospitalslist.mock.js").data


// Start of all the WEB UI API Endpoints
/**
 * @openapi
 * /:
 *  get:
 *    description: Deprecate this - this is currently taking to the Login page in EJS
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/", function (req, res, next) {
    res.render("index.ejs", {
        title: "Login",
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        breadcrumb: "Login",
        data: [1, 2, 3, 4, 5],
    })
})

router.get("/login", function (req, res, next) {
    res.render("index.ejs", {
        title: "Login",
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        breadcrumb: "Login",
        data: [1, 2, 3, 4, 5],
    })
})


router.get("/logout", function (req, res, next) {

  res.clearCookie(process.env.TOKEN_KEY)
  // req.session.destroy(null)
  logger.info("logout request session ", req.session)
  res.render("index.ejs", {
      dark: false,
      role_ac: role_ac,
      userRoleData: res.locals.loggedInUser,
      title: "Login",
      breadcrumb: "Login",
      data: [1, 2, 3, 4, 5],
  })
    res.redirect('/sign/logout')
    .then((res1) => {
      res.clearCookie(process.env.TOKEN_KEY)
      // req.session.destroy(null)
      logger.info("logout request session ", req.session)
      res.render("index.ejs", {
          dark: false,
          role_ac: role_ac,
          userRoleData: res.locals.loggedInUser,
          title: "Login",
          breadcrumb: "Login",
          data: [1, 2, 3, 4, 5],
      })
    })
    .catch((err) => {
    res.clearCookie(process.env.TOKEN_KEY)
    // req.session.destroy(null)
    logger.info("logout request session ", req.session)
    res.render("index.ejs", {
        dark: false,
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        title: "Login",
        breadcrumb: "Login",
        data: [1, 2, 3, 4, 5],
    })
  })
})


router.get("/signup", function (req, res, next) {
    res.render("signup.ejs", {
        dark: false,
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        title: "Login",
        breadcrumb: "Login",
        data: [1, 2, 3, 4, 5],
    })
})


router.post("/login", function (req, res, next) {
    logger.info("Login of the user in UI")
    let username = req.body.username

    var sess = req.session
    postLendingApplication(
            url + "/sign/login",
            headers,
            JSON.stringify(req.body)
        )
        .then((res1) => {
            logger.info("result is " + res1)
            if (res1['data']["result"]) {
                // logger.info(res1.cookie)
                cookieData = res1.headers["set-cookie"]
                var cSize = Object.keys(cookieData).length;
                let keyFound = {
                    "status": false,
                    "keyValue": -1
                }
                for (key in cookieData) {
                    tempC = cookie.parse(cookieData[key])

                    if (tempC.hasOwnProperty(process.env.TOKEN_KEY)) {
                        keyFound = {
                            status: true,
                            keyValue: key
                        }
                        logger.info("Token Key found at " + key)
                        break
                    }
                }
                if (!keyFound) {
                    // Very unlikely that response was success but the JWT token was not present in cookie.
                    logger.info("Key not found" + keyFound + "response was" + res1)
                    res.status(404)
                    res.send("Please contact admin")
                }
                const cooP = cookie.parse(cookieData[0])
                // logger.info("An" + Object.keys(cookie.parse(cookieData[0])))
                accessToken = cooP[process.env.TOKEN_KEY]
                let userRoleData
                get_user_role_data(username)
                .then((userData) => {

                    userRoleData = userData
                    logger.info("User role data is", userRoleData)
                    res.cookie(process.env.TOKEN_KEY, accessToken)
                    res.render("home.ejs", {
                        dark: false,
                        role_ac: role_ac,
                        userRoleData: userRoleData,
                        title: "Dashboard",
                        breadcrumb: "Dashboard",
                        data: [1, 2, 3, 4, 5],
                    })
                })
                .catch((err) => {
                    logger.info(err)
                      logger.info("Else Error in web Login")
                      req.session.destroy(null)
                      res.status(404)
                      res.send("Please contact admin")
                })


            } else {
                logger.info("Else Error in web Login")
                req.session.destroy(null)
                res.status(404)
                res.send("Please contact admin")
            }
        })
        .catch((err) => {
            logger.info("Error in web Login"+err)
            res.clearCookie(process.env.TOKEN_KEY)
            res.status(404)
            res.send("Please contact admin")
        })
})

router.post("/adduser", function (req, res, next) {
    logger.info("Adding the new user in WebUI" + req.user)
    const temp_headers = {
        "Content-Type": "application/json",
        "X-username": req.user,
        Cookie: process.env.TOKEN_KEY + "=" + req.cookies[process.env.TOKEN_KEY],
    }
     // Validate the user is Admin only
    postLendingApplication(
            url + "/sign/signup",
            temp_headers,
            JSON.stringify(req.body)
        )
        .then((res1) => {
            logger.info("Sign/Signup api response is " + res1.data)
            res.render("administration.ejs", {
                userData: res.locals.loggedInUser,
                dark: false,
                // title: res.locals.loggedInUser,
                title: "Administration",
                breadcrumb: "Administration",
                patientDetails: patientDetailsMock,
                hospitalDetails: hospitalDetailsMock,
            })
        })
        .catch((err) => logger.info("Error in web SignUP" + err))
})

router.post("/signup", function (req, res, next) {
    logger.info("Signup for the new user in UI"+JSON.stringify(req.body))
    postLendingApplication(
            url + "/sign/signup",
            headers,
            JSON.stringify(req.body)
        )
        .then(res1 => {
            logger.info("Sign/Signup api response is " + res1.data)
            res.render("index.ejs", {
                dark: false,
                role_ac: role_ac,
                userRoleData: res.locals.loggedInUser,
                title: "Login",
                breadcrumb: "Login",
                data: [1, 2, 3, 4, 5],
            })
        })
        .catch((err) => logger.info("Error in web SignUP" + err))
})

router.get("/dashboard", function (req, res, next) {
    // sess = req.session
    // logger.info("session is ", sess)
    // verifySession(res, sess)
    //  Should be only for Doctor and Admin
    res.render("home.ejs", {
        dark: false,
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        title: "Dashboard",
        breadcrumb: "Dashboard",
        data: [1, 2, 3, 4, 5],
    })
})


// let fetch = require('node-fetch');

async function getWeather(req) {
    const weather = await fetch(
      url + "/patients/patientinventory?limit=1&&offset=10", {
    method: 'GET',
    headers: {'Content-Type': 'application/json', "Cookie": process.env.TOKEN_KEY + "=" + req.cookies[process.env.TOKEN_KEY]},
  }
);
    let response = await weather.json();
    console.log(response);
    return response
}

router.get("/patientlist", async function (req, res, next) {
    // logger.info("patientDetailsMock = ", patientDetailsMock)
    // sess = req.session
    // verifySession(res, req.session)
//     const temp_headers = {
//         "Content-Type": "application/json",
//         // "X-username": req.userEmail,
//         "Cookie": process.env.TOKEN_KEY + "=" + req.cookies[process.env.TOKEN_KEY],
//     }
//
//     return await fetch(url + "/patients/patientinventory", {
//   method: 'GET',
//   headers: {'Content-Type': 'application/json', "Cookie": process.env.TOKEN_KEY + "=" + req.cookies[process.env.TOKEN_KEY]},
// }).
let x = {}
x["email"]="x@email.com"
x["role"]="Doctor"
await getWeather(req)
.then(res1 => {
        console.log("output of " + JSON.stringify(res1));
          res.render("patientlist.ejs", {
              dark: false,
              role_ac: role_ac,
              userRoleData: x,
              title: "Patient List",
              breadcrumb: "Patient List",
              // patientDetailsList: patientDetailsMock,
              patientDetailsList: res1["response"]["patients"][0],
          })
        console.log(res1.status);
        console.log(res1.statusText);
        console.log(res1.text());
        console.log(res1.json());
        console.log(res1.headers.raw());
        console.log(res1.headers.get('content-type'));
    })
// {
//   logger.info(
//       "Patient/list api response is " + JSON.stringify(res1.json())
//   )
//   res => res.json()
//    // return res.json(res1.json());
//   res.render("patientlist.ejs", {
//       dark: false,
//       role_ac: role_ac,
//       userRoleData: res.locals.loggedInUser,
//       title: "Patient List",
//       breadcrumb: "Patient List",
//       // patientDetailsList: patientDetailsMock,
//       patientDetailsList: res1.data["response"]["patient_list"],
//   })
  // return response.json();
// }).
.catch(err => {console.log(err);});

    // temp_headers['username'] = sess.user
    // postLendingApplication(
    //         url + "/patients/patientinventory",
    //         temp_headers,
    //         JSON.stringify(req.body)
    //     )
    //     .then((res1) => {
    //
    //         logger.info(
    //             "Patient/list api response is " + res1.data
    //         )
    //         newMock = JSON.stringify(res1.data["response"]["patient_list"])
    //         logger.info(
    //             "NewMock Patient/list api response is " + newMock
    //         )
    //         if (res1.data["result"]) {
    //             res.render("patientlist.ejs", {
    //                 dark: false,
    //                 role_ac: role_ac,
    //                 userRoleData: res.locals.loggedInUser,
    //                 title: "Patient List",
    //                 breadcrumb: "Patient List",
    //                 // patientDetailsList: patientDetailsMock,
    //                 patientDetailsList: res1.data["response"]["patient_list"],
    //             })
    //         } else {
    //             logger.info("Else Error in Listing Patients")
    //             res.clearCookie(process.env.TOKEN_KEY)
    //             res.status(404)
    //             res.send("Patient List couldnt be fetched")
    //         }
    //     })
    //     .catch((err) => {
    //         logger.info(" Error in Listing Patients" + err)
    //         // req.session.destroy(null)
    //         res.status(404)
    //         res.send("Patient List couldnt be fetched")
    //     })

})

router.get("/nurseview", function (req, res, next) {
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    // logger.info("patientDetailsMock = ", patientDetailsMock);
    // verifySession(res, req.session)
    res.render("nurseview.ejs", {
        dark: false,
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        title: "Nurse View",
        breadcrumb: "Nurse View",
    })
})

router.post("/createpatient", function (req, res, next) {
    logger.info("create patient API is called")

    // sess = req.session
    // verifySession(res, req.session)
    // temp_headers['username'] = sess.user
    const temp_headers = {
        "Content-Type": "application/json",
        "X-username": req.user,
        Cookie: process.env.TOKEN_KEY + "=" + req.cookies[process.env.TOKEN_KEY],
    }

    postLendingApplication(
            url + "/patients/create",
            temp_headers,
            JSON.stringify(req.body)
        )
        .then((res1) => {
            logger.info("Patient/list api response is " + res1.data)
            newMock = JSON.stringify(res1.data["response"]["patient_list"])
            logger.info("NewMock Patient/create api response is " + newMock)
            if (res1.data["result"]) {
                res.redirect("/patientlist")
                // res.render("patientlist.ejs", {
                //     dark: false,
                //     title: "Patient List",
                //     breadcrumb: "Patient List",
                //     // patientDetailsList: patientDetailsMock,
                //     patientDetailsList: res1.data["response"]["patient_list"],
                // })
            } else {
                logger.info("Else Error in Listing Patients")
                res.clearCookie(process.env.TOKEN_KEY)
                res.status(404)
                res.send("Patient List couldnt be fetched")
            }
        })
        .catch((err) => {
            logger.info(" Error in Listing Patients")
            res.clearCookie(process.env.TOKEN_KEY)
            res.status(404)
            res.send("Patient List couldnt be fetched")
        })
})

router.get("/patientdetails", function (req, res, next) {
    // verifySession(res, req.session)
    var query_patient_id = req.query._query_patientid
    logger.info("Request Query ", query_patient_id)

    var patientDetails = patientDetailsMock.find(
        (a) => a._id === query_patient_id
    )

    // patientDetails.cost =
    //     "$" + Number(patientDetails.cost.replace(/[^0-9.-]+/g, "")).toFixed(0)
    //  patientDetails.cost =
    //      "$100"

    logger.info("patient details ... ")
    logger.info("patient details ... ", query_patient_id)


    var patientdetails_db = [];
    patientdetails_db['firstName'] = 'JohnMary'

    monitortime = req.query.monitortime
    if (typeof req.query.monitortime === "undefined") {
        monitortime = "1m"
    }
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    // var patchMonitorInfo = require("../../mock/patchmonitor.influx")
    // logger.info(" patchMonitorInfo = ", patchMonitorInfo)
    let patchInfluxResult = []
    var patchEcgInfluxResult = []
    var patchHRInfluxResult = []
    var patchRRInfluxResult = []
    var patchTempInfluxResult = []
    var patchSPo2InfluxResult = []

    patchTempBatteryInfluxResult = -1
    patchspo2BatteryInfluxResult = -1
    patchEcgBatteryInfluxResult = -1
    const Influx = require("influx")

    influx_ecg_sql = `select * from "ecg.vector" where time > now() - ` + monitortime
    logger.info(influx_ecg_sql)
    influx_temp_sql = `select * from "temp.vector" where time > now() - ` + monitortime
    logger.info(influx_temp_sql)

    const influx = new Influx.InfluxDB({
        host: "localhost",
        // database: 'example',
        database: "vector-database",
        schema: [{
            measurement: "message",
            fields: {
                temparature: Influx.FieldType.FLOAT
            },
            tags: ["location"],
        }, ],
    })
    logger.info("Testing vectorstuff")
    influx
        .query(
            `select * from "service.vector" where time > now() - ` + monitortime
        )
        .then((result) => {
            let count = result.length
            logger.info("res1 ", result)
            // logger.info("Json", jsonout)
            for (let i = 0; i < count; i++) {
                // logger.info("result loop", result[i])
                var jsonstr = JSON.stringify(result[i])
                var jsonout = JSON.parse(jsonstr)
                // logger.info("Json", jsonout)
                // logger.info("Json 1 ", typeof jsonout)
                // logger.info("Json 1 ", jsonout['message'])
                message_list = jsonout["message"].split(",")
                batteryPercent = message_list[6].split("=")[1]
                // logger.info("Battery Percent", batteryPercent)
                patchInfluxResult.push(batteryPercent)
                patchEcgBatteryInfluxResult =
                    patchInfluxResult[patchInfluxResult.length - 1]
            }
            logger.info("patchInfluxResult is", patchInfluxResult)
        })
        .then((result) => {
            influx
                .query(influx_ecg_sql)
                .then((result) => {
                    let count = result.length
                    logger.info("ECGCount is ", count)
                    for (let i = 0; i < count; i++) {
                        // logger.info("ecgresult loop", result[i])
                        var jsonstr = JSON.stringify(result[i])
                        var jsonout = JSON.parse(jsonstr)
                        // logger.info("ecgJson", jsonout)
                        // logger.info("ecgJson 1 ", typeof jsonout)
                        // logger.info("ecgJson 1 ", jsonout['message'])
                        message_list = JSON.parse(jsonout["message"])
                        // logger.info("ECG Message List", message_list)
                        ecgList = message_list["ecg"]
                        hrList = message_list["hr"]
                        rrList = message_list["rr"]
                        // logger.info("ECG List, HR List, RR List", ecgList, rrList)
                        patchEcgInfluxResult.push.apply(
                            patchEcgInfluxResult,
                            ecgList
                        )
                        // logger.info("DONE LOOP - in still")
                        patchHRInfluxResult.push(hrList)
                        patchRRInfluxResult.push(rrList)
                        // patchEcgInfluxResult = (ecgList);
                        // logger.info("DONE LOOP - in still")
                    }
                    // logger.info("DONE LOOP")
                    patchEcgInfluxResult = patchEcgInfluxResult.slice(1, 1000)
                    patchHRInfluxResult = patchHRInfluxResult.slice(1, 1000)
                    patchRRInfluxResult = patchRRInfluxResult.slice(200, 1000)

                    patchSPo2InfluxResult = patchRRInfluxResult
                    logger.info("patchEcgInfluxResult is", patchEcgInfluxResult)
                    logger.info("patchHRInfluxResult is", patchHRInfluxResult)
                    logger.info("patchRRInfluxResult is", patchRRInfluxResult)
                })
                .then((result) => {
                    influx.query(influx_temp_sql)
                        .then((result) => {
                            let count = result.length
                            logger.info("TempCount is ", count)
                            message_list = ""
                            for (let i = 0; i < count; i++) {
                                var jsonstr = JSON.stringify(result[i])
                                var jsonout = JSON.parse(jsonstr)
                                message_list = jsonout["message"].split(",")
                                tempItem = message_list[3].split("=")[1]
                                patchTempInfluxResult.push(tempItem)
                                patchTempBatteryInfluxResult = message_list[5].split(
                                    "="
                                )[1]
                            }


                            patchTempInfluxResult = patchTempInfluxResult.slice(
                                1,
                                1000
                            )
                            logger.info(
                                "patchTempInfluxResult is",
                                patchTempInfluxResult
                            )
                        })
                        .then((result) => {
                            logger.info("In rendering now....")
                            if (patchHRInfluxResult.length == 0) {

                                patchHRInfluxResult.push(-1)
                            }
                            if (patchRRInfluxResult.length == 0) {

                                patchRRInfluxResult.push(-1)
                            }
                            let x = {}
                            x["email"]="x@email.com"
                            x["role"]="Doctor"
                            return res.render("patientdetails.ejs", {
                                dark: false,
                                role_ac: role_ac,
                                userRoleData: x,
                                title: "Patient : Greta Mills",
                                breadcrumb: "Greta Mills",
                                breadcrumb_status: " Age - 42 | Female | In-patient ",
                                patientDetails: patientDetails,
                                patientDetailsList: patientDetailsMock,
                                patchresult: patchInfluxResult,
                                ecgpatchresult: patchEcgInfluxResult,
                                rrpatchresult: patchRRInfluxResult,
                                hrpatchresult: patchHRInfluxResult,
                                temppatchresult: patchTempInfluxResult,
                                spo2patchresult: patchSPo2InfluxResult,
                                // query_patientid: 1,
                                query_patientid: query_patient_id,
                                ecgbattcurr: patchEcgBatteryInfluxResult,
                                hrmin: Math.min(...patchHRInfluxResult),
                                hrmax: Math.max(...patchHRInfluxResult),
                                hrcurr: patchHRInfluxResult[
                                    patchHRInfluxResult.length - 1
                                ],
                                rrmin: Math.min(...patchRRInfluxResult),
                                rrmax: Math.max(...patchRRInfluxResult),

                                rrcurr: patchRRInfluxResult[
                                    patchRRInfluxResult.length - 1
                                ],
                                // This needs to be changed to patchTempInfluxResult
                                tempmin: Math.min(...patchTempInfluxResult),
                                tempmax: Math.max(...patchTempInfluxResult),

                                tempcurr: patchTempInfluxResult[
                                    patchTempInfluxResult.length - 1
                                ],
                                tempbattcurr: patchTempBatteryInfluxResult,

                                spo2min: Math.min(...patchSPo2InfluxResult),
                                spo2max: Math.max(...patchSPo2InfluxResult),

                                spo2curr:
                                    // This needs to be changed to patchSPo2InfluxResult
                                    patchRRInfluxResult[
                                        patchSPo2InfluxResult.length - 1
                                    ],
                                spo2battcurr: patchTempBatteryInfluxResult,

                                patient_details: patientdetails_db,
                            })
                        })
                })
        })
})

router.get("/hospitalbilling", function (req, res, next) {
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    // logger.info("patientDetailsMock = ", patientDetailsMock);
    // verifySession(res, req.session)

    var currentPatient = patientDetailsMock.find((a) => a._id === req.query.id)
    currentPatient.projectedCost =
        "$" +
        (Number(currentPatient.cost.replace(/[^0-9.-]+/g, "")) * 1.75).toFixed(
            0
        )
    currentPatient.cost =
        "$" + Number(currentPatient.cost.replace(/[^0-9.-]+/g, "")).toFixed(0)

    currentPatient.thresholdCost =
        "$" +
        (Number(currentPatient.cost.replace(/[^0-9.-]+/g, "")) * 2.15).toFixed(
            0
        )
    res.render("hospitalbilling.ejs", {
        dark: false,
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        title: "Hospital Billing",
        breadcrumb: "Hospital Billing",
        patientDetails: patientDetailsMock,
        hospitalDetails: hospitalDetailsMock,
        currentPatient: currentPatient,
    })
})

router.get("/patientbilling", function (req, res, next) {
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    // logger.info("patientDetailsMock = ", patientDetailsMock);
    // verifySession(res, req.session)
    res.render("patientbilling.ejs", {
        dark: false,
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        title: "Patient Billing",
        breadcrumb: "Patient Billing",
    })
})

router.get("/patchinventory", function (req, res, next) {
    // var patchMonitorInfo = require("../mock/patchmonitor.influx")
    // logger.info(" patchMonitorInfo = ", patchMonitorInfo);
    // verifySession(res, req.session)
    res.render("patchinventory.ejs", {
        dark: false,
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        title: "Patch Inventory",
        breadcrumb: "Patch Inventory",
        patientDetails: patientDetailsMock,
        hospitalDetails: hospitalDetailsMock,
    })
})

router.get("/administration", function (req, res, next) {
    logger.info("The user role is " + JSON.stringify(req.user))
    logger.info("The user role is " + req.user.role)
    const permission = role_ac.can(req.user.role).readAny("adminPage")
    // logger.info("Permission is "+permission)
    if (permission.granted) {
        res.render("administration.ejs", {
            dark: false,
            role_ac: role_ac,
            title: "Administration",
            userRoleData: res.locals.loggedInUser,
            breadcrumb: "Administration",
            patientDetails: patientDetailsMock,
            hospitalDetails: hospitalDetailsMock,
        })
    } else {
        res.status(403).end()
    }
})

router.get("/patchinventorydetails", function (req, res, next) {
    logger.info("Req is ", req)
    logger.info("Req is ", req.query.monitortime)
    // verifySession(res, req.session)
    monitortime = req.query.monitortime
    if (typeof req.query.monitortime === "undefined") {
        monitortime = "1m"
    }
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    // var patchMonitorInfo = require("../mock/patchmonitor.influx")
    // logger.info(" patchMonitorInfo = ", patchMonitorInfo);
    let patchInfluxResult = []
    var patchEcgInfluxResult = []
    var patchHRInfluxResult = []
    var patchRRInfluxResult = []
    const Influx = require("influx")

    const influx = new Influx.InfluxDB({
        host: "localhost",
        // database: 'example',
        database: "vector-database",
        schema: [{
            measurement: "message",
            fields: {
                temparature: Influx.FieldType.FLOAT
            },
            tags: ["location"],
        }, ],
    })
    logger.info("Testing vectorstuff")
    influx
        .query(
            `select * from "service.vector" where time > now() - ` + monitortime
        )
        .then((result) => {
            let count = result.length
            logger.info("res1 ", result)
            // logger.info("Json", jsonout)
            for (let i = 0; i < count; i++) {
                // logger.info("result loop", result[i])
                var jsonstr = JSON.stringify(result[i])
                var jsonout = JSON.parse(jsonstr)
                // logger.info("Json", jsonout)
                // logger.info("Json 1 ", typeof jsonout)
                // logger.info("Json 1 ", jsonout['message'])
                message_list = jsonout["message"].split(",")
                batteryPercent = message_list[6].split("=")[1]
                // logger.info("Battery Percent", batteryPercent)
                patchInfluxResult.push(batteryPercent)
            }
            logger.info("patchInfluxResult is", patchInfluxResult)
        })
        .then((result) => {
            influx_sql =
                `select * from "ecg.vector" where time > now() - ` + monitortime
            logger.info(influx_sql)
            influx
                .query(influx_sql)
                .then((result) => {
                    let count = result.length
                    logger.info("Test ECGCount is ", count)
                    for (let i = 0; i < count; i++) {
                        // logger.info("ecgresult loop", result[i])
                        var jsonstr = JSON.stringify(result[i])
                        var jsonout = JSON.parse(jsonstr)
                        // logger.info("ecgJson", jsonout)
                        // logger.info("ecgJson 1 ", typeof jsonout)
                        // logger.info("ecgJson 1 ", jsonout['message'])
                        message_list = JSON.parse(jsonout["message"])
                        // logger.info("ECG Message List", message_list)
                        ecgList = message_list["ecg"]
                        hrList = message_list["hr"]
                        rrList = message_list["rr"]
                        // logger.info("ECG List, HR List, RR List", ecgList, rrList)
                        patchEcgInfluxResult.push.apply(
                            patchEcgInfluxResult,
                            ecgList
                        )
                        // logger.info("DONE LOOP - in still")
                        patchHRInfluxResult.push(hrList)
                        patchRRInfluxResult.push(rrList)
                        // patchEcgInfluxResult = (ecgList);
                        // logger.info("DONE LOOP - in still")
                    }
                    // logger.info("DONE LOOP")
                    patchEcgInfluxResult = patchEcgInfluxResult.slice(1, 3000)
                    // patchHRInfluxResult = patchHRInfluxResult.slice(1, 3000)
                    // patchRRInfluxResult = patchRRInfluxResult.slice(1, 3000)


                    logger.info("patchEcgInfluxResult is", patchEcgInfluxResult)
                    logger.info("patchHRInfluxResult is", patchHRInfluxResult)
                    logger.info("patchRRInfluxResult is", patchRRInfluxResult)
                })

                .then((result) => {
                    logger.info("In rendering now....")


                    return res.render("patchinventorydetails.ejs", {
                        dark: false,
                        title: "Patch Inventory Details",
                        breadcrumb: "Patch Inventory Details",
                        role_ac: role_ac,
                        userRoleData: res.locals.loggedInUser,
                        patchresult: patchInfluxResult,
                        ecgpatchresult: patchEcgInfluxResult,
                        rrpatchresult: patchRRInfluxResult,
                        hrpatchresult: patchHRInfluxResult,

                        hrmin: Math.min(...patchHRInfluxResult),
                        hrmax: Math.max(...patchHRInfluxResult),
                        hrcurr:
                            patchHRInfluxResult[patchHRInfluxResult.length - 1],
                        rrmin: Math.min(...patchRRInfluxResult),
                        rrmax: Math.max(...patchRRInfluxResult),
                        rrcurr:
                            patchRRInfluxResult[patchRRInfluxResult.length - 1],
                        battcurr:
                            patchInfluxResult[patchInfluxResult.length - 1],
                    })
                })
        })
})

router.get("/map", function (req, res, next) {
    var currentPatient = patientDetailsMock.find((a) => a._id === req.query.id)
    // verifySession(res, req.session)
    res.render("map.ejs", {
        dark: false,
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        title: "Map",
        breadcrumb: "Map",
        patientDetails: patientDetailsMock,
        hospitalDetails: hospitalDetailsMock,
        currentPatient: currentPatient,
    })
})

router.get("/sample", function (req, res, next) {
    // verifySession(res, req.session)
    res.render("index2.ejs", {
        dark: false,
        role_ac: role_ac,
        userRoleData: res.locals.loggedInUser,
        title: "Sample Page",
        breadcrumb: "Sample Page",
    })
})


router.post("/dark", function (req, res, next) {
    // verifySession(res, req.session)
    logger.info("Dark Api is called", req.body['key'])
    res.json({
        dark: req.body["key"]
    })
    // Update the database with the status of the dark setting - use this value in temp storage of browser
    // Update the session array and use that info for that session type

})

//module.exports = router
app.use("/", router)
module.exports = app
