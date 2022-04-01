var express = require("express")
const session = require("express-session")

// For Api Call Request
const fetch = require("node-fetch")
const url = "http://localhost:7117"
const headers = {
    "Content-Type": "application/json",
    // client_id: "1001125",
    // client_secret: "876JHG76UKFJYGVHf867rFUTFGHCJ8JHV",
}

async function postLendingApplication(url, headers, data) {
    // This is the Utility function that will help in performing fetch of Apis
    // Its async await of response
    console.log("Processing POST Loan.")
    return await fetch(url, {
        method: "POST",
        headers: headers,
        body: data,
    }).then((res) => {
        console.log("Status: ", res.status)
        console.log("StatusText: ", res.statusText)
        console.log("OK: ", res.ok)
        return res.json()
    })
}

// End of Api Call Variable declaration

var router = express.Router()
const app = express()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

app.use(session({
    secret: "ssshhhhh",
    saveUninitialized: true,
    resave: false
}))
app.use(function (req, res, next) {
    res.locals.user = req.session.user
    next()
})

var patientDetailsMock = require("../mock/patientlist.mock.js").data
var hospitalDetailsMock = require("../mock/hospitalslist.mock.js").data

function verifySession(res, sess) {
    console.log("Session is ", sess)
    if (typeof sess === "undefined" || !sess.user) {
        res.render("index.ejs", {
            title: "Login",
            breadcrumb: "Login",
            data: [1, 2, 3, 4, 5],
        })
        res.send("Contact Admin (s) - Thank YOU !!")
        res.end("Done")
    }
    return true
}

router.get("/", function (req, res, next) {
    res.render("index.ejs", {
        title: "Login",
        breadcrumb: "Login",
        data: [1, 2, 3, 4, 5],
    })
})


router.get("/logout", function (req, res, next) {
    req.session.destroy(null)
    console.log("logout request session ", req.session)
    res.render("index.ejs", {
        dark: true,
        title: "Login",
        breadcrumb: "Login",
        data: [1, 2, 3, 4, 5],
    })
})



router.get("/signup", function (req, res, next) {
    res.render("signup.ejs", {
        dark: true,
        title: "Login",
        breadcrumb: "Login",
        data: [1, 2, 3, 4, 5],
    })
})

router.post("/login", function (req, res, next) {
    console.log("Login of the user in UI")
    let username = req.body.login_username

    var sess = req.session
    postLendingApplication(
        url + "/users/login",
        headers,
        JSON.stringify(req.body)
    )
        .then((res1) => {
            sess.user = username
            verifySession(res, sess)
            console.log(
                "Users/Login api response is " + JSON.stringify(res1, null, 2)
            )

            if (res1["response"]) {
                res.render("home.ejs", {
                    dark: true,
                    title: "Dashboard",
                    breadcrumb: "Dashboard",
                    data: [1, 2, 3, 4, 5],
                })
            } else {
                console.log("Else Error in web SignUP")
                req.session.destroy(null)
                res.status(404)
                res.send("Please contact admin")
            }
        })
        .catch((err) => {
            console.log("Error in web SignUP")
            req.session.destroy(null)
            res.status(404)
            res.send("Please contact admin")
        })
})

router.post("/signup", function (req, res, next) {
    console.log("Signup for the new user in UI")
    postLendingApplication(
            url + "/sign/signup",
            headers,
            JSON.stringify(req.body)
        )
        .then(res1 => {
            console.log(
                "Sign/Signup api response is " + JSON.stringify(res1, null, 2)
            )
            res.render("index.ejs", {
                dark: true,
                title: "Login",
                breadcrumb: "Login",
                data: [1, 2, 3, 4, 5],
            })
        })
        .catch((err) => console.log("Error in web SignUP"))

})

router.get("/dashboard", function (req, res, next) {
    sess = req.session
    console.log("session is ", sess)
    verifySession(res, sess)
    res.render("home.ejs", {
        dark: true,
        title: "Dashboard",
        breadcrumb: "Dashboard",
        data: [1, 2, 3, 4, 5],
    })
})

router.get("/patientlist", function (req, res, next) {
    // console.log("patientDetailsMock = ", patientDetailsMock)
    sess = req.session
    // verifySession(res, req.session)
    const temp_headers = {
        "Content-Type": "application/json",
        "X-username" : sess.user,
        // client_id: "1001125",
        // client_secret: "876JHG76UKFJYGVHf867rFUTFGHCJ8JHV",
    }
    
    // temp_headers['username'] = sess.user
    postLendingApplication(
        url + "/patients/list",
        temp_headers,
        JSON.stringify(req.body)
    )
        .then((res1) => {
            console.log(
                "Patient/list api response is " + JSON.stringify(res1, null, 2)
            )
            newMock = JSON.stringify(res1["patient_list"])
             console.log(
                 "NewMock Patient/list api response is " + newMock
             )
            if (res1["response"]) {
                res.render("patientlist.ejs", {
                    dark: false,
                    title: "Patient List",
                    breadcrumb: "Patient List",
                    // patientDetailsList: patientDetailsMock,
                    patientDetailsList: res1["patient_list"],
                })
            } else {
                console.log("Else Error in Listing Patients")
                req.session.destroy(null)
                res.status(404)
                res.send("Patient List couldnt be fetched")
            }
        })
        .catch((err) => {
            console.log(" Error in Listing Patients")
            req.session.destroy(null)
            res.status(404)
            res.send("Patient List couldnt be fetched")
        })
    
})

router.get("/nurseview", function (req, res, next) {
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    // console.log("patientDetailsMock = ", patientDetailsMock);
    verifySession(res, req.session)
    res.render("nurseview.ejs", {
        dark: true,
        title: "Nurse View",
        breadcrumb: "Nurse View",
    })
})

router.post("/createpatient", function (req, res, next) {
    console.log("create patient API is called")
    
    sess = req.session
    // verifySession(res, req.session)
    const temp_headers = {
        "Content-Type": "application/json",
        "X-username": sess.user,
        // client_id: "1001125",
        // client_secret: "876JHG76UKFJYGVHf867rFUTFGHCJ8JHV",
    }

    // temp_headers['username'] = sess.user
    postLendingApplication(
        url + "/patients/create",
        temp_headers,
        JSON.stringify(req.body)
    )
        .then((res1) => {
            console.log(
                "Patient/create api response is " + JSON.stringify(res1, null, 2)
            )
            newMock = JSON.stringify(res1["patient_list"])
            console.log("NewMock Patient/create api response is " + newMock)
            if (res1["response"]) {
                res.render("patientlist.ejs", {
                    dark: false,
                    title: "Patient List",
                    breadcrumb: "Patient List",
                    // patientDetailsList: patientDetailsMock,
                    patientDetailsList: res1["patient_list"],
                })
            } else {
                console.log("Else Error in Listing Patients")
                req.session.destroy(null)
                res.status(404)
                res.send("Patient List couldnt be fetched")
            }
        })
        .catch((err) => {
            console.log(" Error in Listing Patients")
            req.session.destroy(null)
            res.status(404)
            res.send("Patient List couldnt be fetched")
        })
})

// router.post("/createpatient", function (req, res, next) {
//     // var patientDetailsMock = require("../mock/patientdetails.mock")
//     // console.log("patientDetailsMock = ", patientDetailsMock);
//     verifySession(res, req.session)

//     patientController.create(req, res)
//     res.render("patientlist.ejs", {
//         dark: false,
//         title: "Patient List",
//         breadcrumb: "Patient List",
//         patientDetailsList: patientDetailsMock,
//     })
//     // .then(function (response) {
//     //     console.log("Response of paient -- ", response)
//     //     res.render("patientinventory.ejs", {
//     //         dark: true,
//     //         title: "Nurse View",
//     //         breadcrumb: "Nurse View",
//     //     })
//     // })
// })

router.post("/createpatient1", function (req, res, next) {
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    // console.log("patientDetailsMock = ", patientDetailsMock);
    verifySession(res, req.session)


    firstName = req.body["firstName"]
    lastName = req.body["lastName1"]
    phonenum = req.body['phoneNumber1']
    emailAddress1 = req.body['emailAddress1']
    phoneNumber1 = req.body['phoneNumber1']
    dob = req.body['dob']
    patientsex = req.body['patientsex']
    patientuidtype = req.body['patientuidtype']
    patientuid1 = req.body['patientuid1']
    address1 = req.body['address1']
    patientcity = req.body['patientcity']
    patientState = req.body["patientState"]
    patientcountry = req.body["patientcountry"]
    patientzip1 = req.body['patientzip1']



    const axios = require("axios")

    axios
        .post("https://localhost:443/apis/api/auth", {
            grant_type: "password",
            username: "admin",
            password: "pass",
            scope: "default",
        })
        .then(function (response) {
            console.log(response.data["access_token"])
            acc_token = "Bearer " + response.data["access_token"]
            var data = JSON.stringify({
                title: "Mr",
                fname: firstName,
                mname: "",
                lname: lastName,
                street: "456 Tree Lane",
                postal_code: "08642",
                city: "FooTown",
                state: "FL",
                country_code: "US",
                phone_contact: "123-456-7890",
                DOB: "1992-02-02",
                sex: "Male",
                race: "",
                ethnicity: "",
                dob: "1992-02-02",
            })
            console.log("Json out is", data)
            var config = {
                method: "post",
                url: "https://localhost:443/apis/api/patient",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: acc_token,
                },
                data: data,
            }

            axios(config)
                .then(function (response) {
                    console.log("Response of paient -- ", response)
                    res.render("patientinventory.ejs", {
                        dark: true,
                        title: "Nurse View",
                        breadcrumb: "Nurse View",
                    })
                })
                .catch(function (error) {
                    console.log(error)
                    res.render("error.ejs", {
                        dark: true,
                        error: error,
                        message: "Error due to " + error,
                        title: "Nurse View",
                        breadcrumb: "Nurse View",
                    })
                })
        })
        .catch(function (error) {
            console.log(error)
            res.render("error.ejs", {
                dark: true,
                error: error,
                message: "Error due to " + error,
                title: "Nurse View",
                breadcrumb: "Nurse View",
            })
        })
    console.log("Test done")
})

router.get("/patientdetails", function (req, res, next) {
    verifySession(res, req.session)
    var query_patient_id = req.query._query_patientid
    console.log("Request Query ", query_patient_id)

    var patientDetails = patientDetailsMock.find(
        (a) => a._id === query_patient_id
    )

    // patientDetails.cost =
    //     "$" + Number(patientDetails.cost.replace(/[^0-9.-]+/g, "")).toFixed(0)
        //  patientDetails.cost =
        //      "$100"
             
    console.log("patient details ... ")
    console.log("patient details ... ", query_patient_id)


    var patientdetails_db = [];
    patientdetails_db['firstName'] = 'JohnMary'

    monitortime = req.query.monitortime
    if (typeof req.query.monitortime === "undefined") {
        monitortime = "1m"
    }
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    var patchMonitorInfo = require("../mock/patchmonitor.influx")
    console.log(" patchMonitorInfo = ", patchMonitorInfo)
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
    console.log(influx_ecg_sql)
    influx_temp_sql = `select * from "temp.vector" where time > now() - ` + monitortime
    console.log(influx_temp_sql)

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
    console.log("Testing vectorstuff")
    influx
        .query(
            `select * from "service.vector" where time > now() - ` + monitortime
        )
        .then((result) => {
            let count = result.length
            console.log("res1 ", result)
            // console.log("Json", jsonout)
            for (let i = 0; i < count; i++) {
                // console.log("result loop", result[i])
                var jsonstr = JSON.stringify(result[i])
                var jsonout = JSON.parse(jsonstr)
                // console.log("Json", jsonout)
                // console.log("Json 1 ", typeof jsonout)
                // console.log("Json 1 ", jsonout['message'])
                message_list = jsonout["message"].split(",")
                batteryPercent = message_list[6].split("=")[1]
                // console.log("Battery Percent", batteryPercent)
                patchInfluxResult.push(batteryPercent)
                patchEcgBatteryInfluxResult =
                    patchInfluxResult[patchInfluxResult.length - 1]
            }
            console.log("patchInfluxResult is", patchInfluxResult)
        })
        .then((result) => {
            influx
                .query(influx_ecg_sql)
                .then((result) => {
                    let count = result.length
                    console.log("ECGCount is ", count)
                    for (let i = 0; i < count; i++) {
                        // console.log("ecgresult loop", result[i])
                        var jsonstr = JSON.stringify(result[i])
                        var jsonout = JSON.parse(jsonstr)
                        // console.log("ecgJson", jsonout)
                        // console.log("ecgJson 1 ", typeof jsonout)
                        // console.log("ecgJson 1 ", jsonout['message'])
                        message_list = JSON.parse(jsonout["message"])
                        // console.log("ECG Message List", message_list)
                        ecgList = message_list["ecg"]
                        hrList = message_list["hr"]
                        rrList = message_list["rr"]
                        // console.log("ECG List, HR List, RR List", ecgList, rrList)
                        patchEcgInfluxResult.push.apply(
                            patchEcgInfluxResult,
                            ecgList
                        )
                        // console.log("DONE LOOP - in still")
                        patchHRInfluxResult.push(hrList)
                        patchRRInfluxResult.push(rrList)
                        // patchEcgInfluxResult = (ecgList);
                        // console.log("DONE LOOP - in still")
                    }
                    // console.log("DONE LOOP")
                    patchEcgInfluxResult = patchEcgInfluxResult.slice(1, 1000)
                    patchHRInfluxResult = patchHRInfluxResult.slice(1, 1000)
                    patchRRInfluxResult = patchRRInfluxResult.slice(200, 1000)

                    patchSPo2InfluxResult = patchRRInfluxResult
                    console.log("patchEcgInfluxResult is", patchEcgInfluxResult)
                    console.log("patchHRInfluxResult is", patchHRInfluxResult)
                    console.log("patchRRInfluxResult is", patchRRInfluxResult)
                })
                .then((result) => {
                    influx.query(influx_temp_sql)
                        .then((result) => {
                            let count = result.length
                            console.log("TempCount is ", count)
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
                            console.log(
                                "patchTempInfluxResult is",
                                patchTempInfluxResult
                            )
                        })
                        .then((result) => {
                            console.log("In rendering now....")
                            if (patchHRInfluxResult.length == 0) {

                                patchHRInfluxResult.push(-1)
                            }
                            if (patchRRInfluxResult.length == 0) {

                                patchRRInfluxResult.push(-1)
                            }
                            return res.render("patientdetails.ejs", {
                                dark: false,
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
                                hrcurr: patchHRInfluxResult[patchHRInfluxResult.length - 1],
                                rrmin: Math.min(...patchRRInfluxResult),
                                rrmax: Math.max(...patchRRInfluxResult),

                                rrcurr: patchRRInfluxResult[patchRRInfluxResult.length - 1],
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
    // console.log("patientDetailsMock = ", patientDetailsMock);
    verifySession(res, req.session)

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
        dark: true,
        title: "Hospital Billing",
        breadcrumb: "Hospital Billing",
        patientDetails: patientDetailsMock,
        hospitalDetails: hospitalDetailsMock,
        currentPatient: currentPatient,
    })
})

router.get("/patientbilling", function (req, res, next) {
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    // console.log("patientDetailsMock = ", patientDetailsMock);
    verifySession(res, req.session)
    res.render("patientbilling.ejs", {
        dark: true,
        title: "Patient Billing",
        breadcrumb: "Patient Billing",
    })
})

router.get("/patchinventory", function (req, res, next) {
    // var patchMonitorInfo = require("../mock/patchmonitor.influx")
    // console.log(" patchMonitorInfo = ", patchMonitorInfo);
    verifySession(res, req.session)
    res.render("patchinventory.ejs", {
        dark: true,
        title: "Patch Inventory",
        breadcrumb: "Patch Inventory",
        patientDetails: patientDetailsMock,
        hospitalDetails: hospitalDetailsMock,
    })
})

router.get("/administration", function (req, res, next) {
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    // console.log("patientDetailsMock = ", patientDetailsMock);
    verifySession(res, req.session)
    res.render("administration.ejs", {
        dark: true,
        title: "Onboarding",
        breadcrumb: "Onboarding",
        patientDetails: patientDetailsMock,
        hospitalDetails: hospitalDetailsMock,
    })
})

router.get("/patchinventorydetails", function (req, res, next) {
    console.log("Req is ", req)
    console.log("Req is ", req.query.monitortime)
    verifySession(res, req.session)
    monitortime = req.query.monitortime
    if (typeof req.query.monitortime === "undefined") {
        monitortime = "1m"
    }
    // var patientDetailsMock = require("../mock/patientdetails.mock")
    var patchMonitorInfo = require("../mock/patchmonitor.influx")
    // console.log(" patchMonitorInfo = ", patchMonitorInfo);
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
    console.log("Testing vectorstuff")
    influx
        .query(
            `select * from "service.vector" where time > now() - ` + monitortime
        )
        .then((result) => {
            let count = result.length
            console.log("res1 ", result)
            // console.log("Json", jsonout)
            for (let i = 0; i < count; i++) {
                // console.log("result loop", result[i])
                var jsonstr = JSON.stringify(result[i])
                var jsonout = JSON.parse(jsonstr)
                // console.log("Json", jsonout)
                // console.log("Json 1 ", typeof jsonout)
                // console.log("Json 1 ", jsonout['message'])
                message_list = jsonout["message"].split(",")
                batteryPercent = message_list[6].split("=")[1]
                // console.log("Battery Percent", batteryPercent)
                patchInfluxResult.push(batteryPercent)
            }
            console.log("patchInfluxResult is", patchInfluxResult)
        })
        .then((result) => {
            influx_sql =
                `select * from "ecg.vector" where time > now() - ` + monitortime
            console.log(influx_sql)
            influx
                .query(influx_sql)
                .then((result) => {
                    let count = result.length
                    console.log("Test ECGCount is ", count)
                    for (let i = 0; i < count; i++) {
                        // console.log("ecgresult loop", result[i])
                        var jsonstr = JSON.stringify(result[i])
                        var jsonout = JSON.parse(jsonstr)
                        // console.log("ecgJson", jsonout)
                        // console.log("ecgJson 1 ", typeof jsonout)
                        // console.log("ecgJson 1 ", jsonout['message'])
                        message_list = JSON.parse(jsonout["message"])
                        // console.log("ECG Message List", message_list)
                        ecgList = message_list["ecg"]
                        hrList = message_list["hr"]
                        rrList = message_list["rr"]
                        // console.log("ECG List, HR List, RR List", ecgList, rrList)
                        patchEcgInfluxResult.push.apply(
                            patchEcgInfluxResult,
                            ecgList
                        )
                        // console.log("DONE LOOP - in still")
                        patchHRInfluxResult.push(hrList)
                        patchRRInfluxResult.push(rrList)
                        // patchEcgInfluxResult = (ecgList);
                        // console.log("DONE LOOP - in still")
                    }
                    // console.log("DONE LOOP")
                    patchEcgInfluxResult = patchEcgInfluxResult.slice(1, 3000)
                    // patchHRInfluxResult = patchHRInfluxResult.slice(1, 3000)
                    // patchRRInfluxResult = patchRRInfluxResult.slice(1, 3000)


                    console.log("patchEcgInfluxResult is", patchEcgInfluxResult)
                    console.log("patchHRInfluxResult is", patchHRInfluxResult)
                    console.log("patchRRInfluxResult is", patchRRInfluxResult)
                })

                .then((result) => {
                    console.log("In rendering now....")


                    return res.render("patchinventorydetails.ejs", {
                        dark: true,
                        title: "Patch Inventory Details",
                        breadcrumb: "Patch Inventory Details",

                        patchresult: patchInfluxResult,
                        ecgpatchresult: patchEcgInfluxResult,
                        rrpatchresult: patchRRInfluxResult,
                        hrpatchresult: patchHRInfluxResult,

                        hrmin: Math.min(...patchHRInfluxResult),
                        hrmax: Math.max(...patchHRInfluxResult),
                        hrcurr: patchHRInfluxResult[patchHRInfluxResult.length - 1],
                        rrmin: Math.min(...patchRRInfluxResult),
                        rrmax: Math.max(...patchRRInfluxResult),
                        rrcurr: patchRRInfluxResult[patchRRInfluxResult.length - 1],
                        battcurr: patchInfluxResult[patchInfluxResult.length - 1],
                    })
                })
        })
})

router.get("/map", function (req, res, next) {
    var currentPatient = patientDetailsMock.find((a) => a._id === req.query.id)
    verifySession(res, req.session)
    res.render("map.ejs", {
        dark: true,
        title: "Map",
        breadcrumb: "Map",
        patientDetails: patientDetailsMock,
        hospitalDetails: hospitalDetailsMock,
        currentPatient: currentPatient,
    })
})

router.get("/sample", function (req, res, next) {
    // verifySession(res, req.session)
    res.render("index3.ejs", {
        dark: true,
        title: "Sample Page",
        breadcrumb: "Sample Page",
    })
})

router.post("/dark", function (req, res, next) {
    verifySession(res, req.session)
    console.log("Dark Api is called", req.body['key'])
    res.json({
        dark: req.body["key"]
    })
    // Update the database with the status of the dark setting - use this value in temp storage of browser
    // Update the session array and use that info for that session type

})

//module.exports = router
app.use("/", router)
module.exports = app