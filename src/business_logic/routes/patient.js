
const otplib = require("otplib")
const lodash = require("lodash")
const { totp } = otplib
totp.options = {
    digits: 4,
}
const logger = require("../../config/logger")
const sequelizeDB = require("../../config/emrmysqldb")

const {
    client,
    updateRedisCache,
} = require("../../external_services/redis/cache_service/redis_client")
const redisClient = client
logger.log("REDIS CLIENT IS", redisClient)

const { dbOutput_JSON } = require("../../utils/dbUtils/dbUtils")
require("dotenv").config({ path: __dirname + "/../../.env" })
const {
    getEwsScore,
    genPatientRespData,
    get_trend_data,
    get_healthscoreObj
} = require("../../utils/vitalAnalytics/ews")
// const {
//     db_create_user_tenant,
//     db_get_user_tenant,
// } = require("../../dbcontrollers/user_tenant.controller")
const patientRegisterGRPC =
    require("../../external_services/grpc/kafka_service").patientRegisterGRPC
const patientDetailsGRPC =
    require("../../external_services/grpc/kafka_service").patientDetailsGRPC
const influxGetEcgData =
    require("../../external_services/grpc/kafka_service").influxGetEcgData

const patientInventoryGRPC =
    require("../../external_services/grpc/kafka_service").patientInventory

const roles = require("../../roles/roles")

const schemaValidator = require("../../dbmodels/jsonSchema/schemaValidator")
const MOCK_SCHEMA = require("../../utils/mock/trendMock").MOCK_SCHEMA
const SCHEMA_CODE = require("../../lib/constants/AppEnum").SCHEMA_CODE
const JSON_SCHEMA_CODE = require("../../lib/constants/AppEnum").JSON_SCHEMA_CODE
const UUID_CONST = require("../../lib/constants/AppEnum").UUID_CONST

const getUUID = require("../../lib/system/uuidSystem").getUUID

const PATIENT_CODE = require("../../lib/constants/AppEnum").PATIENT_CODE
const PATCH_CODE = require("../../lib/constants/AppEnum").PATCH_CODE
const LOCATION_CODE = require("../../lib/constants/AppEnum").LOCATION_CODE
const ASSOCIATE_CODE = require("../../lib/constants/AppEnum").ASSOCIATE_CODE
const PATCH_PATIENT_MAP_CODE =
    require("../../lib/constants/AppEnum").PATCH_PATIENT_MAP_CODE

const TENANT_CODE = require("../../lib/constants/AppEnum").TENANT_CODE
const TRANSACTION_CODE = require("../../lib/constants/AppEnum").TRANSACTION_CODE

const patient_controller = require("../../dbcontrollers/patients.controller")
const tenant_db_controller = require("../../dbcontrollers/tenant.controller")
const db_get_tenant_id = tenant_db_controller.db_get_tenant_id
const db_create_patient = patient_controller.db_create_patient
const db_get_patient_list = patient_controller.db_get_patient_list
const db_patient_exist = patient_controller.db_patient_exist
const db_update_patient = patient_controller.db_update_patient
const db_delete_patient = patient_controller.db_delete_patient
const db_patient_count = patient_controller.db_patient_count
const db_med_record_exist = patient_controller.db_med_record_exist
const db_bulk_create_patient = patient_controller.db_bulk_create_patient
const db_patient_info = patient_controller.db_patient_info
const db_disable_patient = patient_controller.db_disable_patient
const db_edit_patient = patient_controller.db_edit_patient
const db_add_new_patient = patient_controller.db_add_new_patient

const { db_get_patient_details, db_get_patient_inventory, db_update_patient_associated_list } = patient_controller

const {
    db_get_ews_list,
    db_create_ews,
    db_update_ews,
} = require("../../dbcontrollers/ews.controller")
const {
    db_create_patch,
    db_update_patch,
    db_patch_exist,
    db_check_patch_exist,
    db_get_patch,
    db_update_patch_register
} = require("../../dbcontrollers/patch.controller")
const {
    db_create_patch_associate,
    db_update_patch_associate,
    db_get_patch_map_list,
    db_delete_patch_patient_map,
    db_create_patch_associate_one,
    db_get_patch_map_detail,
    db_delete_patch_associated,
    db_get_patch_associated,
    db_delete_each_device,

    clear_command,
} = require("../../dbcontrollers/patch_patient.controller")

//Notes
const {
    db_create_notes,
    db_get_notes_list,
    db_update_notes,
} = require("../../dbcontrollers/note.controller")
//Location
const {
    db_get_location_list,
    db_create_patient_location,
    db_get_patient_location_list,
    db_location_exist,
    db_location_count,
} = require("../../dbcontrollers/location.controller")
//Vitals
const vital_controller = require("../../dbcontrollers/vital.controller")
const db_get_vital_list = vital_controller.db_get_vital_list
const db_create_vital = vital_controller.db_create_vital
const db_update_vital = vital_controller.db_update_vital

// allergy
const {
    db_get_allergy_list,
    db_create_allergy,
    db_update_allergy,
} = require("../../dbcontrollers/allergy.controller")

// medical history
const {
    db_get_medical_history_list,
    db_create_medical_history,
    db_update_medical_history,
} = require("../../dbcontrollers/medical_history.controller")

const {
    db_get_practictioner_list,
    db_create_practictioner,
} = require("../../dbcontrollers/practictioner.controller")

//Vital threshold
const {
    db_create_vital_threshold,
    db_get_vital_threshold_list,
} = require("../../dbcontrollers/vital_threshold.controller")

const {
    db_get_prescription_list,
    db_create_prescription,
    db_update_prescription,
} = require("../../dbcontrollers/prescription.controller")

const {
    db_get_appointment_list,
    db_create_appointment,
} = require("../../dbcontrollers/appointment.controller")

const {
    db_get_user_patient_map_list,
    db_create_user_patient_map,
} = require("../../dbcontrollers/user_patient_map.controller")
const {
    PRESCRIPTION_CODE,
    PRAC_CODE,
    VITAL_CODE,
    EWS_CODE,
    DEBOARD_PATIENT_CODE,
    ALLERGY_CODE,
    MEDICAL_HISTORY_CODE,
    PROCEDURE_CODE,
} = require("../../lib/constants/AppEnum")

const {
    db_create_patient_medication,
} = require("../../dbcontrollers/patient_medication.controller")
const {
    influxGetReportData,
} = require("../../external_services/grpc/kafka_service")

const {
    db_get_patient_report,
    db_create_patient_report,
} = require("../../dbcontrollers/patient_report.controller")
const {
    db_create_procedure,
    db_get_procedure_list,
    db_update_procedure,
} = require("../../dbcontrollers/procedure.controller")
const report = require("../../dbmodels/sequelizeEMRModels/report")
const { db_create_user, db_update_patient_user } = require("../../dbcontrollers/user.controller")
const { createPatch } = require("../../middleware/rbac")

const { v1: uuid } = require('uuid')
const alerter = require('../../alerter/globalAlert')
const alertEnum = require('../../alerter/alertEnum')


// const {
//     client,
// } = require("../../external_services/redis/cache_service/redis_client")

let AlertThresholdsDict = {
    BPS: {
        sev1_above: { min: 170, max: 300 },
        sev2_above: { min: 150, max: 169 },
        sev3_above: { min: 135, max: 149 },
    },
    BPD: {
        sev1_above: { min: 120, max: 300 },
        sev2_above: { min: 100, max: 119 },
        sev3_above: { min: 90, max: 99 },
    },
    RR: {
        sev1_above: { min: 40, max: 50 },
        sev2_above: { min: 35, max: 39 },
        sev3_above: { min: 32, max: 34 },
        sev1_below: { min: 5, max: 10 },
        sev2_below: { min: 11, max: 16 },
        sev3_below: { min: 17, max: 19 },
    },
    HR: {
        sev1_above: { min: 170, max: 300 },
        sev2_above: { min: 150, max: 169 },
        sev3_above: { min: 135, max: 149 },
    },
    Temp: {
        sev1_above: { min: 170, max: 300 },
        sev2_above: { min: 150, max: 169 },
        sev3_above: { min: 135, max: 149 },
    },
    SPo2: {
        sev1_above: { min: 0, max: 85 },
        sev2_above: { min: 85, max: 92 },
        sev3_above: { min: 93, max: 95 },
    },
    DS: {
        sev1_above: { min: 170, max: 300 },
        sev2_above: { min: 150, max: 169 },
        sev3_above: { min: 135, max: 149 },
    },
    Glucometer: {
        sev1_above: { min: 170, max: 300 },
        sev2_above: { min: 150, max: 169 },
        sev3_above: { min: 135, max: 149 },
    },
}

function validate_patient_exist(patient, req) {
    if (!patient) {
        logger.debug("Patient %s does not exist", patient)
        req.apiRes = PATIENT_CODE["5"]
        req.apiRes["error"] = {
            error: "Patient does not exist :" + patient,
        }
        return false
    }
    return true
}

function validate_location_exist(location, req) {
    if (!location) {
        logger.debug("LOCATION %s does not exist", location)
        req.apiRes = LOCATION_CODE["5"]
        req.apiRes["error"] = {
            error: "Location does not exist :" + location,
        }
        return false
    }
    return true
}

// If the input is filter = "a=1&b=2&c=3"
// same string does not exist is the assumption
// subfilter is 'c' - then it returns { c : 3 }
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

// The below functions are Route Specific for Patients

async function registerPatientInventory(req, res, next) {
    //async function patientInventory(req, res, next) {
    logger.debug("Patient Inventory Invoked")
    let username = req.userName
    let tenant_id = req.query.tenant_id
    let pid = req.query.pid

    let filter_flag = false
    logger.debug("Query, Params ", req.query, req.params)
    let totalCount = 0
    try {
        if (pid) {
            logger.debug("Sud Patient Inventory Updated registry - Specific Patient ", pid)
            // TODO -- change the tenantID -- for inject - swagger update
            msg = {
                UuidPatient: pid,
                Method: "CREATE",
                UuidTenant: tenant_id,
                Thresholds: AlertThresholdsDict,
                FrequencySetting: 1800,
            }

            await patientKafkaRegister(msg)
        } else {
            let newtotalCount = await db_patient_count(tenant_id)
            totalCount != newtotalCount
                ? logger.debug(
                    "Total Count in DB and Baseliner are different ",
                    totalCount,
                    newtotalCount
                )
                : totalCount
            if (totalCount == 0) {
                totalCount = dbOutput_JSON(newtotalCount)
            }
            for (let i = 0; i < newtotalCount; i++) {
                logger.debug("Sud: I value is ", i)
                req.query.offset = i // As the pid count changes
                req.query.limit = 10
                i = i + 9
                patients = await db_get_patient_list(tenant_id, username, req.query)
                patients = dbOutput_JSON(patients)

                patients.forEach(async (element) => {
                    pid = element["pid"]
                    msg = {
                        UuidPatient: pid,
                        Method: "CREATE",
                        UuidTenant: tenant_id,
                        Thresholds: AlertThresholdsDict,
                        FrequencySetting: 1800,
                    }

                    await patientKafkaRegister(msg)
                })
                logger.debug("Sud Patient Inventory Updated registry ", patients)
            }
        }
        logger.debug("Patient Inventory Updated registry ")
        req.apiRes = PATIENT_CODE["7"]
        logger.debug("Patient Inventory Updated registry ", req.apiRes)
        req.apiRes["resp"] = {
            errMessage: "Patient Inventory updated queue system",
        }
        return next()
    } catch (err) {
        logger.debug("Patient Inventory Fetch Error " + err)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient Inventory Fetch Error",
        }
        return next()
    }
}

//VALIDATED
// async function patientInventory(req, res, next) {?
//     // logger.debug("Patient Inventory Invoked")
//     // let username = req.userName
//     let username = 'doctor'
//     let tenant_id = req.body.tenantId
//     let filter_flag = false
//     // logger.debug("Query, Params ", req.query, req.params)
//     // req.query.location_uuid = getFilter(req.query.filter, "location_uuid")[
//     //     "location_uuid"
//     // ]
//     // req.query.fname = getFilter(req.query.filter, "fname")["fname"]
//     // req.query.lname = getFilter(req.query.filter, "lname")["lname"]
//     // req.query.prac = getFilter(req.query.filter, "prac_uuid")["prac_uuid"]
//     // req.query.med_record = getFilter(req.query.filter, "med_red")["med_red"]
//     // req.query.status = getFilter(req.query.filter, "status")["status"]
//     // req.query.discharge_date = getFilter(req.query.filter, "discharge_date")[
//     //     "discharge_date"
//     // ]
//     // if (!req.query.duration) {
//     //     req.query.duration = 3
//     // }

//     // if (
//     //     req.query.location_uuid ||
//     //     req.query.fname ||
//     //     req.query.lname ||
//     //     req.query.prac ||
//     //     req.query.med_record ||
//     //     req.query.status ||
//     //     req.query.discharge_date
//     // ) {
//     //     filter_flag = true
//     // }

//     // logger.debug("The params are ", req.query)
//     let patients,
//         totalCount = 0,
//         listPatient = []
//     let status, patientList
//     let baselineResult
//     let tempbaselineResult = []
//     let currentIdx = -1
//     if (req.query.currentIdx && req.query.currentIdx != -1) {
//         req.query.offset=req.query.currentIdx
//     }
//     //
//     if (!filter_flag) {
//         try {
//             patientInventoryJSON = {
//                 limit: parseInt(req.query.limit),
//                 offset: parseInt(req.query.offset),
//                 duration: parseInt(req.query.duration),
//                 tenantUUID: tenant_id,
//             }
//             logger.debug("the GRPC Calling limit,offset,duration are", patientInventoryJSON)
            
//             baselineResult = await patientInventoryGRPC(patientInventoryJSON)
//             // logger.debug("The patientList GRPC is ", baselineResult)
//             tempbaselineResult = baselineResult["result"]["trndsPtnt"]
//             if (parseInt(baselineResult["status"]) != 0) {
//                 // patientList will be loaded with error
//                 logger.error("Patient List from GRPC is errored")
//                 // req.apiRes = PATIENT_CODE["1"]
//                 // req.apiRes["error"] = {
//                 //     errMessage: "Patient Inventory Fetch Error RPC " + JSON.stringify(baselineResult)
//                 // }
//                 // return next()
//             }
//         } catch (err) {
//             logger.debug("Patient Inventory Fetch Error GRPC " + err)
//             // req.apiRes = PATIENT_CODE["1"]
//             // req.apiRes["error"] = {
//             //     errMessage: "Patient Inventory Fetch Error RPC",
//             // }
//             // return next()
//         }
//         let pidlist = []
//         try {
//             pidlist = baselineResult["result"]["trndsPtnt"]
//                 .map((x) => x["patientUUID"])
//                 .filter((item) => item !== undefined && item !== null)
//             totalCount = baselineResult["result"]["numPatients"]
//         } catch (error) {
//             logger.debug("Pid List failed.. Sorting based on Name")
//         }
//         // logger.debug("The Total Count, pidlist is ", totalCount, pidlist)
//         if (pidlist.length > 0) {
//             req.query["pidlist"] = pidlist
//         } else {
//             logger.error(
//                 "The Baseline Provided info has no patients - Something went really wrong",
//                 baselineResult["result"]
//             )
//         }

//         try {
//             // req.query.offset = 0
//             logger.debug("the querty pidlist is", pidlist.length.toString())
//             // logger.debug("the query for patients is", req.query)
//             patients = await db_get_patient_list(tenant_id, username, req)
//             let newtotalCount = await db_patient_count(tenant_id)
//             patients = dbOutput_JSON(patients)
//             totalCount != newtotalCount
//                 ? logger.debug(
//                     "Total Count in DB and Baseliner are different ",
//                     totalCount,
//                     newtotalCount
//                 )
//                 : totalCount

//             if (totalCount == 0) {
//                 totalCount = dbOutput_JSON(newtotalCount)
//             }
//         } catch (err) {
//             logger.debug("Patient Inventory Fetch Error " + err)
//             req.apiRes = PATIENT_CODE["1"]
//             req.apiRes["error"] = {
//                 errMessage: "Patient Inventory Fetch Error",
//             }
//             return next()
//         }
//     } else {
//         // This logic is for filtered patients from UI and getting the trend for each of those patient separately
//         logger.debug("Filter Logic is called", tenant_id, username, req.query)
//         try {
//             // req.query.pagesize should be say unlimited so we get all the patient of that filter
//             // and then pass to the trend to get that values
//             curr_limit = req.query.limit
//             req.query.limit = 10000 // 10K max patients as of now in single tenant:-)
//             patients = await db_get_patient_list(tenant_id, username, req)
//             req.query.limit = curr_limit
//             let newtotalCount = await db_patient_count(tenant_id)
//             patients = dbOutput_JSON(patients)
//             // logger.debug('the filter is called with the patients', Object.keys(patients))
//             let pidArray = []
           
//             patients.map((item) => {
//                 pidArray.push(item.pid)
//             })
//             logger.debug('the pid array is ', pidArray) //this gives the patient pid 
//             // let redisResponse
//             // let redisSortKey
//             // let currentDate = new Date()
//             // logger.debug('current date is', currentDate)
//             // currentDate = new Date().toISOString()
//             // logger.debug('new current date is', currentDate)
//             // redisResponse = updateRedisCache("sort_pid", pidArray)
//             // pidArray.map((item) => {
//             //     logger.debug('the pid array item is', item)
//             //     redisSortKey = updateRedisCache("sort_key", "sort" + "_" + item + "_" + currentDate)
//             //     logger.debug('the redis sort key is', redisSortKey)

//             // })

          

//             patientInventoryJSON = {
//                 limit: parseInt(req.query.limit),
//                 offset: parseInt(req.query.offset),
//                 duration: parseInt(req.query.duration),
//                 tenantUUID: tenant_id,
//                 patientUUIDList: pidArray
//             }
//             logger.debug("the GRPC Calling in else limit,offset,duration are", patientInventoryJSON)
            
//             baselineResult = await patientInventoryGRPC(patientInventoryJSON)
//             tempbaselineResult = baselineResult["result"]["trndsPtnt"]
//             // currentIdx = baselineResult["result"]['currentIdx']

//             // logger.debug("Baseliner Result is ", baselineResult)
//             // if (parseInt(baselineResult["status"]) != 0) {
//             //     // patientList will be loaded with error
//             //     logger.error("Patient List from GRPC is errored")
//             //     // req.apiRes = PATIENT_CODE["1"]
//             //     // req.apiRes["error"] = {
//             //     //     errMessage: "Patient Inventory Fetch Error RPC " + JSON.stringify(baselineResult)
//             //     // }
//             //     // return next()
//             // }
//             // let pidlist = []
//             // try {
//             //     pidlist = baselineResult["result"]["trndsPtnt"]
//             //         .map((x) => x["patientUUID"])
//             //         .filter((item) => item !== undefined && item !== null)
//             //     // pidlist = []
//             //     totalCount = baselineResult["result"]["numPatients"] // This gives total patients without pid filter
//             //     // So the above totalCount is wrong for pageNo display
//             //     totalCount = pidArray.length
//             // } catch (error) {
//             //     logger.debug("Pid List failed.. Sorting based on Name")
//             // }
//             // // logger.debug("The Total Count, pidlist is ", totalCount, pidlist)
//             // if (pidlist.length > 0) {
//             //     req.query["pidlist"] = pidlist
//             // } else {
//             //     logger.error(
//             //         "The Baseline Provided info has no patients - Something went really wrong",
//             //         baselineResult["result"]
//             //     )
//             // }

//             try {
//                 req.query.offset = 0
//                 // logger.debug("the querty pidlist is", pidlist.length.toString())
//                 // logger.debug("the query for patients is", req.query)
//                 // patients = await db_get_patient_list(tenant_id, username, req.query)
//                 // let newtotalCount = await db_patient_count(tenant_id)
//                 // patients = dbOutput_JSON(patients)
//                 totalCount != newtotalCount
//                     ? logger.debug(
//                         "Total Count in DB and Baseliner are different ",
//                         totalCount,
//                         newtotalCount
//                     )
//                     : totalCount

//                 if (totalCount == 0) {
//                     totalCount = dbOutput_JSON(newtotalCount)
//                 }
//             } catch (err) {
//                 console.log(erre)
//                 logger.debug("Patient Inventory Fetch Error " + err)
//                 req.apiRes = PATIENT_CODE["1"]
//                 req.apiRes["error"] = {
//                     errMessage: "Patient Inventory Fetch Error",
//                 }
//                 return next()
//             }
//         } catch (err) {
//             logger.debug("Patient Inventory Fetch Error " + err)
//             req.apiRes = PATIENT_CODE["1"]
//             req.apiRes["error"] = {
//                 errMessage: "Patient Inventory Fetch Error",
//             }
//             return next()
//         }
        
     
//     }
//     // Formating the data function
//     try {
//         // logger.debug("Patients are",patients)
//         logger.debug("Patients are", patients.length)
//         // if (patients.length > 0) {
           
//         //     // var temp_new_patients = lodash.intersectionWith(patients, tempbaselineResult, function (o1, o2) {
//         //     //     console.log('OOO1', o1, o2)
//         //     //     return o1['pid'] === o2['patientUUID']
//         //     // });
//         //     var temp_new_patients = lodash.intersectionWith(patients, tempbaselineResult, lodash.isEqual);
            
//         //     logger.debug("Patients are", temp_new_patients.length)
//         //     temp_new_patients[0]["baselineResult"] = tempbaselineResult // Temp way of doing it
//         //     listPatient = await genPatientRespData(temp_new_patients) // This function needs to be Optimized
//         // }
//     } catch (err) {
//         logger.debug("Patient Historical Info error " + err)
//         req.apiRes = PATIENT_CODE["1"]
//         req.apiRes["error"] = {
//             errMessage: "Patient Trend Fetch Error",
//         }
//         return next()
//     }

//     // This block is for pushing all the PID to GRPC - when grpc service has gone down
//     // for (let i = 0; i < patients.length; i++) {
//     //     logger.debug("In the patient grpc", patients[i]["pid"])
//     //     patientRegisterGRPC({
//     //         patientUUID: patients[i]["pid"],
//     //     })
//     // }

//     logger.debug("All Success in Patient Inventory")
//     req.apiRes = PATIENT_CODE["2"]
//     req.apiRes["response"] = {
//         patients: patients,
//         count: patients.length,
//         patientTotalCount: totalCount,
//         // currentIdx: currentIdx
//     }
//     return next()
// }

// bulk patient creation
async function createPatientInBulk(req, res, next) {
    let payload = req.body
    let rejectedPatientData = []
    let acceptedPatientData = []

    // traverse through each patient to verify schema
    // store accepted Patient to push them to DB
    // store rejected Patients to notify the user
    for (patient of payload) {
        // logger.debug("checking iterator", patient.demographic_map)

        if (!patient.demographic_map) {
            req.apiRes = PATIENT_CODE["4"]
            req.apiRes.Details = "data format invalid"
            return next()
        }

        let validationData = { body: patient } // schemaValidator validates req.body under the hood
        let validation = schemaValidator.validate_schema(
            validationData,
            SCHEMA_CODE["customPatientMap"]
        )
        logger.debug(
            `status of schema validation for ${patient.demographic_map.med_record} is ${validation["status"]}`
        )

        if (!validation.status) {
            patient.rejectionReason = validation.error
            rejectedPatientData.push(patient)
            continue
        }

        //  checking for duplicate medical record
        //  reject patients with duplicate medical record and
        //  add all others to accepted patient data
        let medRecordPresent
        try {
            medRecordPresent = await db_med_record_exist(
                patient.demographic_map.med_record
            )
            logger.debug("Med Record exists?", !!medRecordPresent)
            if (!medRecordPresent) {
                uuidDict = {
                    uuidType: UUID_CONST["patient"],
                    tenantID: patient.demographic_map.tenant_id,
                }

                try {
                    // pass undefined transaction as getUUID method needs
                    //  transaction under the hood but passing real transaction here was causing
                    //  transaction commit failure
                    let uuid = await getUUID(uuidDict, {
                        transaction: undefined,
                    })
                    patient.demographic_map.pid = uuid
                } catch (err) {
                    // return error response
                    logger.error("couldn't allocate PID to patient", err)
                    req.apiRes = PATIENT_CODE["4"]
                    req.apiRes.Details = err
                    next()
                }
                acceptedPatientData.push(patient.demographic_map)
            } else {
                // add rejectionReason as duplicate medical record
                patient.rejectionReason = [
                    {
                        message: "Duplicate Medical Record",
                    },
                ]
                rejectedPatientData.push(patient)
                logger.debug("rejected due to duplicate medical record")
            }
        } catch (err) {
            logger.debug(
                "Rejected patient with medical record number :",
                patient.demographic_map.med_record
            )
            logger.debug(
                "Reason: Unable to validate medical record number ->",
                err
            )
            patient.rejectionReason = [
                {
                    message: "Unable to verify medical record",
                },
            ]
            rejectedPatientData.push(patient)
        }
        // return filterReturnState;
    }
    logger.info(
        `uploading ${acceptedPatientData.length} out of ${payload.length} patients to DB.`
    )
    try {
        result = await sequelizeDB.transaction(async (t) => {
            return db_bulk_create_patient(acceptedPatientData, t)
        })
        logger.debug("result after bulk create :", result)
    } catch (err) {
        logger.error("bulk commit failed :", err)
        req.apiRes = PATIENT_CODE["4"]
        req.apiRes["error"] = "Process failed"
        next()
    }

    req.apiRes = PATIENT_CODE["3"]
    req.apiRes["response"] = {
        acceptedPatients: acceptedPatientData,
        rejectedPatients: rejectedPatientData,
    }
    return next()
}

// Validated
async function deletePatient(req, res, next) {
    const t = await sequelizeDB.transaction()
    let { demographic_map } = req.body
    logger.debug("User info is ", req.userEmail, req.userRole, req.params)
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        req.apiRes = PATIENT_CODE["3"]
        req.apiRes["error"] = {
            errMessage: "Patient is not existing",
            given_pid,
        }
        return next()
    }
    try {
        result = await sequelizeDB.transaction(async function (t) {
            return db_delete_patient(given_pid, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        logger.debug("Exception : %s PID %s", error, given_pid)
        req.apiRes = TRANSACTION_CODE["3"]
        req.apiRes["error"] = {
            errMessage: "Patient - Delete failed ",
        }
        return next()
    }

    respResult = result
    req.apiRes = TRANSACTION_CODE["2"]
    req.apiRes["response"] = {}

    return next()
}

// Validated
async function getUserPatientMap(req, res, next) {
    logger.debug("User info is ", req.userEmail, req.userRole, req.params)
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist, Practictioner
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient -Check failed ",
        }
        return next()
    }
    req.query.pid = req.params.pid
    try {
        Practictioner = await db_get_user_patient_map_list(
            tenant_id,
            username,
            req.query
        )
    } catch (e) {
        req.apiRes = PATIENT_CODE["1"]
        logger.debug("Exception : %s", e)
        return next()
    }
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        Practictioner: Practictioner,
        count: Practictioner.length,
    }
    return next()
}

async function grpcCall(given_pid, duration, tenant_id) {
    let baselineResult
    let tempbaselineResult = []
    try {
        patientInventoryJSON = {
            pid: given_pid,
            duration: duration,
            tenantUUID: tenant_id,
        }
        logger.debug("Patient GRPC calling.. ", tenant_id)
        // baselineResult = await patientDetailsGRPC(patientInventoryJSON)

        baselineResult = {"status":1,"result":{"code":14,"details":"Name resolution failed for target dns:sensor_consumer:9010","metadata":{}}}

        // logger.debug("The patientList GRPC is ", baselineResult)
        tempbaselineResult = [baselineResult["result"]]
        tempbaselineResult[0]["patientUUID"] = given_pid
        if (parseInt(baselineResult["status"]) != 0) {
            // patientList will be loaded with error
            logger.error("Patient List from GRPC is errored")
            // req.apiRes = PATIENT_CODE["1"]
            // req.apiRes["error"] = {
            //     errMessage: "Patient Inventory Fetch Error RPC " + JSON.stringify(baselineResult)
            // }
            // return next()
        }
    } catch (err) {
        logger.debug("Patient Inventory Fetch Error GRPC " + err)
        // req.apiRes = PATIENT_CODE["1"]
        // req.apiRes["error"] = {
        //     errMessage: "Patient Inventory Fetch Error RPC",
        // }
        // return next()
    }
    let pidlist = []
    try {
        pidlist = [baselineResult["result"]]
            .map((x) => x["patientUUID"])
            .filter((item) => item !== undefined && item !== null)
        pidlist = [given_pid]
    } catch (error) {
        logger.debug("Pid List failed.. Sorting based on Name")
    }
    if (pidlist.length > 0) {
        logger.debug("Pid list is ", pidlist.length)
    } else {
        logger.error(
            "The Baseline Provided info has no patients - Something went really wrong",
            baselineResult
        )
    }
    return { pidlist: pidlist, baselineResult: tempbaselineResult }
}

async function patientList(req, res, next) {
    let data = []
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
    } catch (error) {
        console.log(error)
    }
    return next()
}
// Validated
async function getPatientDetail(req, res, next) {
    // This API gets the username and tenant and other HTTP Headers info
    // let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.query.tenantId
    // let patient_exist, patients_list
    let duration = 3
    // // let duration = req.query.duration
    // let baseLineDict
    // try {
    //     patient_exist = await db_patient_exist(tenant_id, given_pid)
    //     if (!validate_patient_exist(patient_exist, req)) return next()
    // } catch (error) {
    //     logger.debug("Exception : %s PID %s", error, given_pid)
    //     req.apiRes = PATIENT_CODE["1"]
    //     req.apiRes["error"] = {
    //         errMessage: "Patient - Check failed",
    //     }
    //     return next()
    // }
    // let query_param = {
    //     ...req.params,
    //     ...req.query,
    // }
    try {
        baseLineDict = await grpcCall(given_pid, duration, tenant_id)
        logger.debug("BASELINE DICT", baseLineDict)
        req.query["pidlist"] = baseLineDict["pidlist"]
    } catch (error) {
        logger.debug("Error in GRPC Call is ", error)
    }
    try {
        patients_list = await db_get_patient_details(req.params.pid)
    } catch (e) {
        req.apiRes = PATIENT_CODE["1"]
        logger.debug("Exception : %s", e)
        return next()
    }
    // patients_list = JSON.stringify(patients_list)
    // patients_list = JSON.parse(patients_list)

    // let patients = patients_list
    //let patch_ref = patients["patch_patient_map"]
    //let location_ref = patients["location"]
    patients_list["baselineResult"] = baseLineDict["baselineResult"]
    let listPatient = await genPatientRespData([patients_list])
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        patient: listPatient[0]
    }
    return next()
}

async function patientKafkaRegister(msg) {
    logger.debug("Kafka Test")
    const { Kafka } = require("kafkajs")
    const clientId = "my-app"
    const brokers = [process.env.KAFKA_BROKER + ":9092"]
    // const topic = req.body["patientUUID"]
    const kafka = new Kafka({ clientId, brokers }) // This should be a pool to send TODO
    logger.debug("Created kakfa handle", kafka)
    let producer
    try {
        producer = kafka.producer()
        console.log('PRODUCER',producer)
        logger.debug("Created kakfa handle sending", producer)
    } catch (error) {
        logger.debug("Kafka Creation failed", error)
    }

    var sendMessage = async () => {
        await producer.connect()
        await producer.send({
            topic: "patientDiscovery",
            messages: [
                {
                    key: "patientDiscovery",
                    value: JSON.stringify({
                        UuidPatient: msg["UuidPatient"],
                        Method: msg["Method"],
                        Bps: msg["Bps"],
                        Bpd: msg["Bpd"],
                        UuidTenant: msg["UuidTenant"],
                            
                        Thresholds: AlertThresholdsDict,
                        FrequencySetting: 1800,
                    }),
                },
            ],
        })
        await producer.disconnect()
    }

    logger.debug("Kakfa Send message")
    try {
        sendMessage()
    } catch (error) {
        logger.debug("Error in Sending message in Ka", error)
        await producer.disconnect()
    }
    logger.debug("Kakfa Sent Message")
}

// Validated
async function createPatient(req, res, next) {
    const t = await sequelizeDB.transaction()

    let tenant_id = req.body.tenantId
    logger.debug('the tenant id , while creating patient is', tenant_id)
    let tenant_name = req.userTenant
    logger.debug('the tenant name is', tenant_name)
    let result
    let { demographic_map } = req.body
    //username and password to be introduced
    logger.debug("the req body is", demographic_map)
    let {
        fname,
        lname,
        pid,
        med_record,
        email,
        city,
        state,
        phone_contact,
        title,
        DOB,
    } = demographic_map
    logger.debug("fname is", fname)

    let alertEventId = uuid()
    let createPatientAlert = alertEnum['1']

    createPatientAlert['event'] = `create patient id:${alertEventId}`
    createPatientAlert['text'] = `Patient ${fname} ${lname} added`
    createPatientAlert['service'] = [`${req.userTenant}`]

    let passwordValue = Math.random().toString(36).slice(-10);
    if (process.env.MODE == "Debug") {
        passwordValue = "admin123"
    }
    if (!email) {
        email = fname + DOB + '@' + tenant_name
        logger.debug("Email is", email)
    }

    let user_data = {
        fname: fname,
        lname: lname,
        title: title,
        phone: phone_contact,
        role: "Patient",
        tenant_id: tenant_id,
        password: passwordValue,
        username: email,
        email: email, //ADMIN@EDMOHOSPITAL.COM -->
        //city:city,
        //state:state
    }

    let patch_data = [
        {
            patch_type: "gateway",
            patch_name: "gateway",
            patch_uuid: "QUIRHEJFWUINQOBO39",
            patch_status: "Virtual",
            patch_group_id: "12345",
            patch_mac: "54321",
            patch_bluetooth: 234,
            patch_sensor_id: "QWERTY1234",
            patch_serial: "virual123456",
            tenant_id: tenant_id,
            pid: "0",
            patch_state: "active",
        },
    ]

    let patch_patient_map_data = [
        {
            patch_uuid: "Patch_UUID",
            duration: "14",
            id: 1,
            tenant_id: tenant_id,
            command: "discover",
            keepaliveHistory: {},
            config: [
                {
                    sample_freq: "30s",
                    sample_count: "30",
                    stop_sample: "0",
                },
            ],
            pid: "0",
        },
    ]

    let user_tenant_data = [{
    }]

    logger.debug("MED RECORD IS", med_record)
    //    let medRecord_exist
    //JSON SCHEMA VALIDATION

    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["customPatientMap"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            isExist: false,
            error: "ERROR IN SCHEMA VALIDATION",
        }
        return next()
    }

    let medRecord_exist = await db_med_record_exist(med_record)
    logger.debug("THE MED RECORD FUNCTION IS", medRecord_exist)
    if (medRecord_exist) {
        req.apiRes = PATIENT_CODE["6"]
        req.apiRes["error"] = {
            isExist: true,
            error: "MEDICAL RECORD NUMBER ALREADY EXISTS:" + med_record,
        }
        return next()
    }
    logger.debug("the med record exist is", medRecord_exist)

    uuidDict = {
        uuidType: UUID_CONST["patient"],
        tenantID: tenant_id,
    }
    uuidDictUser = {
        uuidType: UUID_CONST["user"],
        tenantID: tenant_id,
    }
    uuidDictPatch = {
        uuidType: UUID_CONST["patch"],
        tenantID: tenant_id,
    }

    let uuidUser = await getUUID(uuidDictUser, { transaction: t })
    logger.debug("the user uuid in patient data is", uuidUser)

    let uuidPatch = await getUUID(uuidDictPatch, { transaction: t })
    logger.debug("the patch uuid in patient data is", uuidPatch)

    try {
        result = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result) //new pid
            demographic_map["pid"] = uuid_result
            return db_create_patient(tenant_id, demographic_map, {
                transaction: t,
            }).then((patient_data) => {
                logger.debug(
                    "the patient data is",
                    patient_data,
                    patient_data.dataValues.pid
                )
                logger.debug(
                    "the patient data pid  is",
                    patient_data.dataValues.pid
                )
                user_data["pid"] = patient_data.dataValues.pid
                logger.debug("the user pid is", user_data["pid"])
                user_data["user_uuid"] = uuidUser

                // return db_create_user(tenant_id, user_data, {
                //     transaction: t,
                // }).then((user_data) => {
                //     logger.debug("the user data is", user_data.dataValues.pid)
                //     patch_data[0]["patch_uuid"] = uuidPatch
                //     patch_data[0]["patch_group_id"] = uuidPatch
                //     patch_data[0]["patch_serial"] = user_data.dataValues.pid
                //     const params = {
                //         actionType: '',
                //         data: patch_data,
                //         tenantId: tenant_id
                //     }
                //     return db_create_patch(tenant_id, params, {
                //         transaction: t,
                //     })
                //         .then((patch_info) => {
                //             logger.debug('the patch information is', patch_info)
                //             logger.debug('the patch uuid and patch pid is', patch_info[0])
                //             logger.debug('the patch info uuid is', patch_info[0].dataValues.patch_uuid)
                //             patch_patient_map_data[0]['patch_uuid'] = patch_info[0].dataValues.patch_uuid
                //             patch_patient_map_data[0]['pid'] = patch_info[0].dataValues.patch_serial
                //             patch_patient_map_data[0]['tenant_id'] = tenant_id
                //             let given_pid = patch_info[0].dataValues.patch_serial
                //             return db_create_patch_associate(tenant_id, patch_patient_map_data, given_pid, {
                //                 transaction: t
                //             }).then((patch_patient_info) => {
                //                 logger.debug('the patch patient info is', patch_patient_info)
                //                 user_tenant_data[0]['user_uuid'] = uuidUser
                //                 user_tenant_data[0]['tenant_id'] = tenant_id
                //                 user_tenant_data[0]['role'] = 'Patient'
                //                 user_tenant_data[0]['tenant_name'] = tenant_name
                //                 // return db_create_user_tenant(tenant_id, user_tenant_data, {
                //                 //     transaction: t
                //                 // })
                //             })
                //         })
                // })
            })
        })
    } catch (err) {
        console.log('BUG:', err)
        logger.debug("User Create error " + err)
        req.apiRes = PATIENT_CODE["4"]
        req.apiRes["error"] = {
            isExist: false,
            error: "ERROR IN CREATE PATIENT" + err,
        }
        return next()
    }
    logger.debug("Result  is" + result)
    // respResult = dbOutput_JSON(result)
    respResult = req.body
    // patientRegisterGRPC({
    //     patientUUID: req.body["demographic_map"]["pid"],
    // })
    msg = {
        UuidPatient: req.body["demographic_map"]["pid"],
        Method: "CREATE",
        UuidTenant: tenant_id,
        Thresholds: AlertThresholdsDict,
        FrequencySetting: 1800,
    }
    patientKafkaRegister(msg)
    logger.debug("THE REDIS RESPONSE  IS", demographic_map["pid"])
    try {
        redisResponse = updateRedisCache(
            "patientDetails",
            demographic_map["pid"],
            { fname: fname, lname: lname, med_redord: med_record }
        ) //adds fname,lname to redis
    } catch (error) {
        logger.debug("The error in updating Redis Cache", error)
    }

    try {
        let response = await alerter(createPatientAlert)
        logger.debug(`alertResponse : ${response}`)
    }
    catch (err) {
        logger.debug(`Alert ERROR : ${err.message}`)
    }

    req.apiRes = PATIENT_CODE["3"]
    req.apiRes["response"] = {
        patient_data: respResult,
        count: respResult.length,
    }
    return next()
}

// Validated
async function updatePatient(req, res, next) {
    const t = await sequelizeDB.transaction()
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let result
    let { demographic_map } = req.body
    let {
        fname,
        lname,
        pid,
        med_record,
        email,
        city,
        state,
        phone_contact,
        title,
        DOB,
    } = demographic_map

    //alert setup
    let alertEventId = uuid()
    let dischargePatientAlert = alertEnum['1']
    dischargePatientAlert['event'] = `discharge patient id:${alertEventId}`
    dischargePatientAlert['text'] = `Patient ${fname} ${lname} discharged`
    dischargePatientAlert['service'] = [`${req.userTenant}`]

    logger.debug('the fname in the user body is', fname, lname)
    let user_data = {
        fname: fname,
        lname: lname,
        title: title,
        phone: phone_contact,
        role: "Patient",
        tenant_id: tenant_id,
        username: email,
        email: email
    }
    logger.debug('the user data is', user_data)
    //req.body = demographic_map
    logger.debug("THe USER UPDATE BODY IS", demographic_map)
    logger.debug("User info is ", req.userEmail, req.userRole, req.params)
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
        result = await sequelizeDB.transaction(function (t) {
            if (demographic_map["discharge_date"]) {
                logger.debug(
                    "the discharge date update is",
                    demographic_map["discharge_date"]
                )
                demographic_map["status"] = "Discharged"
            }
            return db_update_patient(tenant_id, demographic_map, given_pid, {
                transaction: t,
            }).then((patient_info) => {
                logger.debug('the patient info is', patient_info) //we have to update on the pid
                return db_update_patient_user(tenant_id, user_data, given_pid, {
                    transaction: t
                })
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["8"]
        req.apiRes["error"] = {
            errMessage: "Error in Updating the Patient Details",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = PATIENT_CODE["7"]

    if (demographic_map['discharge_date'] !== null ) {
        try {
            let response = await alerter(dischargePatientAlert)
            logger.debug(`alertResponse : ${response}`)
        }
        catch (err) {
            logger.debug(`Alert ERROR : ${err.message}`)
        }
    }

    req.apiRes["response"] = {
        patient_data: respResult,
        count: respResult.length,
    }

    return next()
}

// Validated
async function createPatientPatchMap(req, res, next) {
    //if the pid in the patch map of a specific patch is 0 , then dis-associate happens
    //if the pid in the patch map of a specific patch is pid , then associate happens

    let patch_map = req.body
    let given_pid = patch_map.pid
    let tenant_id = patch_map.tenantId
    let patient_exist
    let result
    const t = await sequelizeDB.transaction()
    // let patientInfo
    // // let patchInfo

    // //alert setup
    // try {
    //     patientInfo = await db_patient_info(given_pid)
    // } catch (err) {
    //     logger.debug('ERROR : ', err.message)
    // }

    // try {
    //     patchInfo = await db_get_patch(tenant_id, req.body.list[0]['patch_uuid'])
    //     patchInfo = JSON.parse(JSON.stringify(patchInfo))['patch_name']
    // } catch (err) {
    //     logger.debug('ERROR : ', err.message)
    // }

    // let { fname, lname } = JSON.parse(JSON.stringify(patientInfo, null, 2))

    // let alertEventId = uuid()

    // let createPatientPatchAlert = alertEnum['1']
    // createPatientPatchAlert['event'] = `create patient patch map id:${alertEventId}`
    // createPatientPatchAlert['text'] = `${patchInfo} patch associated for ${fname} ${lname}`
    // createPatientPatchAlert['service'] = [`${req.userTenant}`]

    //JSON SCHEMA VALIDATION
    // let schema_status = schemaValidator.validate_schema(?
    //     [req],
    //     SCHEMA_CODE["patchPatientMap"]
    // )
    // if (!schema_status["status"]) {
    //     req.apiRes = JSON_SCHEMA_CODE["1"]
    //     req.apiRes["error"] = {
    //         error: "Schema Validation Failed ",
    //     }
    //     return next()
    // }

    logger.debug("PATIENT EXIST CHECK")
    patient_exist = await db_patient_exist(tenant_id, given_pid)
    logger.debug("THIS IS IN PATIENT EXIST FUNCTION", patient_exist)
    if (!patient_exist) {
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            error: "PATIENT DOES NOT  EXISTS :",
        }
        return next()
    }

    patch_exist = await db_check_patch_exist(tenant_id, patch_map.list)
    logger.debug("THIS IS IN PATCH EXIST FUNCTION", patch_exist)
    if (!patch_exist) {
        req.apiRes = PATCH_CODE["5"]
        req.apiRes["error"] = {
            error: "PATCH DOES NOT EXIST :",
        }
        return next()
    }

    //  for (let i = 0; i < patch_exist.length; i++) {
    //     logger.debug("patch info is ", patch_exist[i])
    //     if (patch_exist[i].length == 0) {
    //         logger.debug("Patch does not exist", given_pid)
    //         req.apiRes = PATCH_CODE["5"]
    //         return next()
    //     }
    //      patch_map[i]["config"] = [{ "sample_freq": "30", "sample_count": "1", "stop_sample": "undefined" }]
    //      patch_map[i]["command"] = "clearPatient"
    //      patch_map[i]["keepaliveTime"] = "30"
    // }


    try {
        result = await sequelizeDB.transaction( async function (t) {
            // logger.debug(
            //     "THE GIVEN PID IS",
            //     given_pid,
            //     patch_map["pid"],
            //     patch_map[0]["pid"]
            // )
            if (patch_map["pid"] != "0") patch_map["pid"] = given_pid

            let list = []
            let associated_list = req.body.associated_list
            if(associated_list.length > 0){
                (associated_list).forEach(obj => {
                    if(obj !== req.body.list[0].type_device){
                        list.push(obj)
                    }
                });
            }
            list.push(req.body.list[0].type_device)
            await db_update_patient_associated_list({pid: given_pid, associated_list: JSON.stringify(list)})

            
            return await db_create_patch_associate_one(tenant_id, patch_map.list, given_pid, {
                transaction: t,
            })
        })
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATCH_CODE["4"]
        req.apiRes["error"] = {
            errMessage: "Patch create failure ",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = PATCH_CODE["3"]
    req.apiRes["response"] = {
        patch_data: respResult,
        count: respResult.length,
    }

    // TODO - Validate the first time patient patch is associated or re-boarded into the system
    // the CREATE is sent to kafka
    // msg = {
    //     UuidPatient: given_pid,
    //     Method: "CREATE",
    //     UuidTenant: "tenantb653407c-aefe-4c7b-afb0-05149343de80",
    //     Thresholds: AlertThresholdsDict,
    //     FrequencySetting: 1800,
    // }
    // await patientKafkaRegister(msg)

    // try {
    //     let response = await alerter(createPatientPatchAlert)
    //     logger.debug(`alertResponse : ${response}`)
    // }
    // catch (err) {
    //     logger.debug(`Alert ERROR : ${err.message}`)
    // }

    return next()
}

async function updatePatientPatchMap(req, res, next) {
    let patch_map = req.body
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let result
    logger.debug("THE PATCH PUT MAP PID IS", patch_map[0]["pid"], patch_map)
    const t = await sequelizeDB.transaction()

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
        patch_exist = await db_patch_exist(tenant_id, patch_map)
    } catch (e) {
        req.apiRes = PATCH_CODE["5"]
        logger.debug("Exception : %s", e)
        return next()
    }

    for (let i = 0; i < patch_exist.length; i++) {
        logger.debug("patch info is ", patch_exist[i])
        if (patch_exist[i].length == 0) {
            logger.debug("Patch does not exist", given_pid)
            req.apiRes = PATCH_CODE["5"]
            return next()
        }
    }

    try {
        result = await sequelizeDB.transaction(function (t) {
            return db_update_patch_associate(tenant_id, patch_map, given_pid, {
                transaction: t,
            })
        })
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATCH_CODE["4"]
        req.apiRes["error"] = {
            errMessage: "Patch create failure ",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = PATCH_CODE["3"]
    req.apiRes["response"] = {
        patch_data: respResult,
        count: respResult.length,
    }
    return next()
}

// Validated
async function getPatientPatch(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    // let patient_exist, patch_patient_map
    // try {
    //     patient_exist = await db_patient_exist(tenant_id, given_pid)
    //     if (!validate_patient_exist(patient_exist, req)) return next()
    // } catch (error) {
    //     logger.debug("Exception : %s PID %s", error, given_pid)
    //     logger.debug("The error in catch is ", error)
    //     req.apiRes = PATIENT_CODE["1"]
    //     req.apiRes["error"] = {
    //         errMessage: "Patient - ",
    //     }
    //     return next()
    // }
    req.query.pid = req.params.pid
    try {
        // patch_patient_map = await db_get_patch_map_list(req)
        patch_patient_map = await db_get_patch_map_detail(req)
        req.apiRes = PATIENT_CODE["2"]
        req.apiRes["response"] = {
            patch_patient_map: patch_patient_map,
            count: patch_patient_map.length,
        }

        next()
    } catch (e) {
        console.log(e)
        req.apiRes = PATIENT_CODE["1"]
        // logger.debug("Exception : %s", e)
        return next()
    }
}
// Validated
async function getPatientSensorData(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist, patient_sensor_data
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient - Check failed",
        }
        return next()
    }

    req.query.pid = req.params.pid
    req.query.tenant_id = tenant_id
    // get_influx_redis_sensor_data(req.query)
    // TODO : Change this to sensor data
    // logger.debug(influxGetEcgData(given_pid, req.query.start, req.query.stop))
    let resPromis = influxGetEcgData(
        given_pid,
        req.query.start,
        req.query.stop,
        req.query.motion,
        req.query.limit
    )
    logger.debug("Prom is ", resPromis, req.query)
    try {
        patient_sensor_data = await resPromis
    } catch (e) {
        req.apiRes = PATIENT_CODE["1"]
        logger.debug("Exception : %s", e)
        return next()
    }
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        patient_sensor_data: patient_sensor_data,
        count: patient_sensor_data.length,
    }
    next()
}

function getotp(secret) {
    try {
        let token = totp.generate(secret)
        logger.debug("the token in OTP  is", token)
        redisClient.set(token, secret)
        redisClient.expire(token, 60)
        return token
        // const isValid = totp.verify({ token, secret });
        // logger.debug("the verify is", isValid);
    } catch (err) {
        // Possible errors
        // - options validation
        // - "Invalid input - it is not base32 encoded string" (if thiry-two is used)
        logger.debug(err)
    }
}

function otpverifyredis(key) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }
            if (val == null) {
                resolve(null)
                return
            }

            try {
                resolve(JSON.parse(val))
            } catch (ex) {
                resolve(val)
            }
        })
    })
}

async function otpverify(key) {
    let otpVal = await otpverifyredis(key)
    logger.debug("THE OTPVAL IS", otpVal)
    if (otpVal) {
        return otpVal.split("_")[0]
    } else return false
}



// Validated
async function getPatientOTP(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist, patients
    let secret = given_pid + "_" + process.env.SECRET_KEY
    logger.debug("THE SECRET KEY IS", secret)
    let otpvalue = getotp(secret)
    logger.debug("THE OTP VALUE IS", otpvalue)
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient - Check failed",
        }
        return next()
    }
    let query_param = {
        ...req.params,
        ...req.query,
    }
    req.query.pid = req.params.pid
    try {
        patients = await db_get_patient_list(tenant_id, username, query_param)
    } catch (e) {
        req.apiRes = PATIENT_CODE["1"]
        logger.debug("Exception : %s", e)
        return next()
    }
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        // otp: [patients[0]["id"]],
        otp: [otpvalue],
        fname: patients[0]["fname"],
        lname: patients[0]["lname"],
        count: 1,
    }
    next()
}

// Validated
async function createPatientNotes(req, res, next) {
    let notes_data = req.body
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let result

    const t = await sequelizeDB.transaction()
    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["notesSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
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
            errMessage: "Patient Does Not Exist ",
        }
        return next()
    }
    uuidDictNote = {
        uuidType: UUID_CONST["note"],
        tenantID: 0,
    }
    // logger.debug("THE UUID DICT IS", uuidDict["uuidType"])
    logger.debug("NOTES IS", notes_data)
    try {
        result = await sequelizeDB.transaction(async function (t) {
            let uuid_note_result = await getUUID(uuidDictNote, {
                transaction: t,
            })
            notes_data["note_uuid"] = uuid_note_result
            notes_data["pid"] = given_pid
            notes_data["tenant_id"] = tenant_id
            return db_create_notes(tenant_id, notes_data, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        logger.debug("The error in notes create  is ", error)
        req.apiRes["error"] = {
            errMessage: "ERROR IN CREATING THE NOTES ",
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

// Validated
async function getPatientNotes(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist, notes
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient - check failed",
        }
        return next()
    }
    req.query.pid = req.params.pid
    try {
        notes = await db_get_notes_list(tenant_id, username, req.query)
    } catch (e) {
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = "Patient Notes cannot be fetched"
        logger.debug("Exception Notes: %s", e)
        return next()
    }
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        notes: notes,
        count: notes.length,
    }
    next()
}

// Validated

async function createPatientLocation(req, res, next) {
    const t = await sequelizeDB.transaction()
    let location_data = req.body
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let username = req.userName
    let patient_exist
    let result
    let used_bed_location_data = {}
    location_uuid = location_data["location_uuid"]
    logger.debug('the location uuid is', location_uuid)
    req.query = {
        pid: given_pid,
        limit: 1,
        offset: 0,
    }
    let report_data
    let report_generated = false
    try {
        logger.debug("INSIDE TRY REPORT FUNCTION")
        report_data = await getPatientReportTrend(req)
        logger.debug("THE REPORT DATA IS", report_data, typeof report_data)
        report_key = Object.keys(
            report_data["trend_map"]["consolidated_trend_map"]
        )[0]
        report_data =
            report_data["trend_map"]["consolidated_trend_map"][report_key]
        report_data["temperature"] = report_data["temp"]
        report_data["respiration"] = report_data["rr"]
        report_data["pulse"] = report_data["hr"]
        report_data["bps"] = report_data["bps"]
        report_data["bpd"] = report_data["bpd"]
        logger.debug(
            "THE  FINAL REPORT DATA IS",
            report_data,
            typeof report_data
        )
        report_generated = true
        logger.debug("AFTER TRY REPORT FUNCTION")
    } catch (err) {
        req.apiRes["error"] = {
            errMessage: "Unable to fetch the report for the patient with pid",
            given_pid,
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
            errMessage: "Patient Does not exist",
        }
        return next()
    }

    try {
        location_exist = await db_location_exist(location_uuid)
        if (!validate_location_exist(location_exist, req)) return next()
    } catch (error) {
        logger.debug("Location uuid does not exist", error, given_pid)
        req.apiRes = LOCATION_CODE["5"]
        req.apiRes["error"] = {
            errMessage: "Location Does not exist",
        }
        return next()
    }
    location_data["pid"] = given_pid
    const promises = []
    try {
        promises.push(
            sequelizeDB.transaction(function (t) {
                location_data["vital_report_details"] = [report_data]
                return db_create_patient_location(tenant_id, location_data, {
                    transaction: t,
                })
            })
        )
    } catch (error) {
        logger.debug("The error in catch is ", error)
        req.apiRes = LOCATION_CODE["4"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN CREATING THE LOCATION ",
        }
        return next()
    }
    //respResult = dbOutput_JSON(result);
    respResult = req.body
    req.apiRes = LOCATION_CODE["3"]
    req.apiRes["response"] = {
        location_data: respResult,
        count: respResult.length,
    }
    return next()
}

async function getPatientLocation(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist, locations
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
    req.query.pid = req.params.pid

    try {
        locations = await db_get_patient_location_list(
            tenant_id,
            username,
            req.query
        )
    } catch (e) {
        req.apiRes = LOCATION_CODE["1"]
        logger.debug("Exception Location: %s", e)
        return next()
    }
    req.apiRes = LOCATION_CODE["2"]
    req.apiRes["response"] = {
        locations: locations,
        count: locations.length,
    }
    return next()
}

async function createPatientVital(req, res, next) {
    const t = await sequelizeDB.transaction()
    let vital_data = req.body
    logger.debug("THE VITAL BODY IS", vital_data)
    given_pid = req.params.pid
    tenant_id = req.userTenantId
    let result
    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["vitalsSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
        }
        return next()
    }
    uuidDict = { uuidType: UUID_CONST["vital"], tenantID: 0 }
    try {
        result = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            vital_data["vital_uuid"] = uuid_result
            vital_data["tenant_id"] = tenant_id
            vital_data["pid"] = given_pid
            return db_create_vital(tenant_id, vital_data, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            error: "Creation of Vitals failed :" + error,
        }
        return next()
    }
    logger.debug("Result is", result)
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = TRANSACTION_CODE["0"]
    req.apiRes["response"] = {
        vital_data: respResult,
        count: respResult.length,
    }
    //TODO: Add the logic to send to the sensor consumer here
    // TODO: Make it Modular code as library reusable for any other purpose
    const { Kafka } = require("kafkajs")
    const clientId = "my-app"
    const brokers = [process.env.KAFKA_BROKER + ":9092"]
    const topic = given_pid
    const kafka = new Kafka({ clientId, brokers }) // This should be a pool to send TODO
    logger.debug("Created kakfa handle", kafka)
    let producer
    try {
        producer = kafka.producer()
        logger.debug("Created kakfa handle sending", producer)
    } catch (error) {
        logger.debug("Kafka Creation failed", error)
    }
    let jsonVitalData = {
        height: respResult["height"],
        weight: respResult["weight"],
        spo2: respResult["spo2"],
        pulse: respResult["pulse"],
        rr: respResult["respiration"],
        bpd: respResult["bpd"],
        bps: respResult["bps"],
        painIdx: respResult["pain_index"],
        temperature: respResult["temperature"],
    }
    let jsonVitals = {
        DeviceType: "Manual",
        vitalData: jsonVitalData,
        PatientUUID: topic,
    }
    var sendMessage = async () => {
        // try {
        await producer.connect()
        await producer.send({
            topic: topic,
            messages: [{ key: "spo2", value: jsonVitals }],
        })
        await producer.disconnect()
    }
    logger.debug("Kakfa Send message")
    try {
        sendMessage()
    } catch (error) {
        //TODO: Need to have a retry or some other way this data is sent to sensor_consumer - if things fail
        logger.debug("Error in Sending message in Kafka", error)
        await producer.disconnect()
    }
    // End of Kafka Send
    return next()
}

// Validated
async function getPatientVital(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let vitals
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
    req.query.pid = req.params.pid
    try {
        vitals = await db_get_vital_list(tenant_id, username, req.query)
    } catch (e) {
        req.apiRes = VITAL_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE VITALS",
        }
        return next()
    }
    req.apiRes = VITAL_CODE["2"]
    req.apiRes["response"] = {
        vitals: vitals,
        count: vitals.length,
    }
    res.response(req.apiRes)
    return next()
}

// Validated
async function updatePatientVital(req, res, next) {
    const t = await sequelizeDB.transaction()
    let vital_map = req.body

    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["vitalsSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
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
        result = await sequelizeDB.transaction(async function (t) {
            return db_update_vital(tenant_id, vital_map, given_pid, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN UPDATING THE PATIENT VITAL ",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        patient_data: respResult,
        count: respResult.length,
    }
    return next()
}

async function createPatientAllergy(req, res, next) {
    const t = await sequelizeDB.transaction()
    let allergy_data = req.body
    logger.debug("THE ALLERGY BODY IS", allergy_data)
    given_pid = req.params.pid
    tenant_id = req.userTenantId
    let result
    uuidDict = { uuidType: UUID_CONST["allergy"], tenantID: 0 }

    //JSON SCHEMA LOGIC
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["allergySchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
        }
        return next()
    }

    try {
        result = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            allergy_data["allergy_uuid"] = uuid_result
            allergy_data["tenant_id"] = tenant_id
            allergy_data["pid"] = given_pid
            return db_create_allergy(tenant_id, allergy_data, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            error: "Creation of Allergy failed :" + error,
        }
        return next()
    }
    logger.debug("Result is", result)
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = TRANSACTION_CODE["0"]
    req.apiRes["response"] = {
        allergy_data: respResult,
        count: respResult.length,
    }
    return next()
}

// Validated
async function getPatientAllergy(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let allergy_list
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
    req.query.pid = req.params.pid
    try {
        allergy_list = await db_get_allergy_list(tenant_id, username, req.query)
    } catch (e) {
        req.apiRes = ALLERGY_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE ALLERGY",
        }
        return next()
    }
    req.apiRes = ALLERGY_CODE["2"]
    req.apiRes["response"] = {
        allergy_list: allergy_list,
        count: allergy_list.length,
    }
    res.response(req.apiRes)
    return next()
}

// Validated
async function updatePatientAllergy(req, res, next) {
    const t = await sequelizeDB.transaction()
    let allergy_map = req.body

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
            error: "Schema Validation Failed ",
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
        result = await sequelizeDB.transaction(async function (t) {
            return db_update_allergy(tenant_id, allergy_map, given_pid, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN UPDATING THE ALLERGY VITAL ",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        allergy_data: respResult,
        count: respResult.length,
    }
    return next()
}

async function createPatientMedicalHistory(req, res, next) {
    const t = await sequelizeDB.transaction()
    let medical_history_data = req.body
    logger.debug("THE MEDICAL HISTORY BODY IS", medical_history_data)
    given_pid = req.params.pid
    tenant_id = req.userTenantId
    let result
    uuidDict = { uuidType: UUID_CONST["medicalhistory"], tenantID: 0 }

    // //JSON SCHEMA LOGIC
    // let schema_status = schemaValidator.validate_schema(
    //     req,
    //     SCHEMA_CODE["medicalHistorySchema"]
    // )
    // if (!schema_status["status"]) {
    //     req.apiRes = JSON_SCHEMA_CODE["1"]
    //     req.apiRes["error"] = {
    //         error: "Schema Validation Failed ",
    //     }
    //     return next()
    // }

    try {
        result = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            medical_history_data["medical_history_uuid"] = uuid_result
            medical_history_data["tenant_id"] = tenant_id
            medical_history_data["pid"] = given_pid
            return db_create_medical_history(tenant_id, medical_history_data, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            error: "Creation of Medical History failed :" + error,
        }
        return next()
    }
    logger.debug("Result is", result)
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = TRANSACTION_CODE["0"]
    req.apiRes["response"] = {
        medical_history_data: respResult,
        count: respResult.length,
    }
    return next()
}

// Validated
async function getPatientMedicalHistory(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let medical_history_list
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
    req.query.pid = req.params.pid
    try {
        medical_history_list = await db_get_medical_history_list(
            tenant_id,
            username,
            req.query
        )
    } catch (e) {
        req.apiRes = MEDICAL_HISTORY_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE ALLERGY",
        }
        return next()
    }
    req.apiRes = MEDICAL_HISTORY_CODE["2"]
    req.apiRes["response"] = {
        medical_history_list: medical_history_list,
        count: medical_history_list.length,
    }
    res.response(req.apiRes)
    return next()
}

// Validated
async function updatePatientMedicalHistory(req, res, next) {
    const t = await sequelizeDB.transaction()
    let medical_history_map = req.body

    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist

    // //JSON SCHEMA LOGIC
    // let schema_status = schemaValidator.validate_schema(
    //     req,
    //     SCHEMA_CODE["medicalHistorySchema"]
    // )
    // if (!schema_status["status"]) {
    //     req.apiRes = JSON_SCHEMA_CODE["1"]
    //     req.apiRes["error"] = {
    //         error: "Schema Validation Failed ",
    //     }
    //     return next()
    // }

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
        result = await sequelizeDB.transaction(async function (t) {
            return db_update_medical_history(
                tenant_id,
                medical_history_map,
                given_pid,
                {
                    transaction: t,
                }
            )
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN UPDATING THE MEDICAL HISTORY",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        medical_history_data: respResult,
        count: respResult.length,
    }
    return next()
}

// Validated
async function createPatientPractitioner(req, res, next) {
    let practictioner_data = req.body
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let result
    const t = await sequelizeDB.transaction()
    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["pracPatientMapSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
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
            errMessage: " PATIENT DOES NOT EXIST ",
        }
        return next()
    }
    practictioner_data["pid"] = given_pid
    try {
        result = await sequelizeDB.transaction(async function (t) {
            return db_create_practictioner(tenant_id, practictioner_data, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = PRAC_CODE["4"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN CREATING THE PATIENT PRACTICTIONER - ",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = PRAC_CODE["3"]
    req.apiRes["response"] = {
        patient_data: respResult,
        count: respResult.length,
    }
    return next()
}

// Validated
async function getPatientPractitioner(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
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
    req.query.pid = req.params.pid

    let pracs
    try {
        pracs = await db_get_practictioner_list(tenant_id, username, req.query)
    } catch (e) {
        req.apiRes = PRAC_CODE["1"]
        req.apiRes["error"] = "Getting Practictioner info Patient failed "
        logger.debug("Error in Practitioner")
        return next()
    }
    req.apiRes = PRAC_CODE["2"]
    req.apiRes["response"] = {
        pracs: pracs,
        count: pracs.length,
    }
    return next()
}

// Validated
async function createPatientVitalThreshold(req, res, next) {
    let vital_threshold_data = req.body
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let result
    const t = await sequelizeDB.transaction()
    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["vitalthresholdMapSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed",
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
        result = await sequelizeDB.transaction(async function (t) {
            vital_threshold_data["tenant_uuid"] = tenant_id
            vital_threshold_data["pid"] = given_pid
            return db_create_vital_threshold(tenant_id, vital_threshold_data, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        logger.debug("ERROR IN CREATING VITAL THRESHOLD" + error)
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

//report Generator
async function getPatientDeboardReport(req, res, next) {
    await reportGenerator(req)
}

async function reportGenerator(req) {
    req.query.pid = req.params.pid
    logger.debug("the query pid is", req.query.pid)

    let reportOrder = [
        "vital_threshold",
        "practictioner",
        "vital",
        "location_map",
        "notes",
        "patch_map",
        "demographic_map",
        "trend_map",
    ]
    //logger.debug('ADMISSION DATE IS',[reportOrder[6]][0]["demographic_map"])
    let username = req.userName
    logger.debug("THE USER NAME IS", username)
    let given_pid = req.params.pid
    logger.debug("THE GIVEN PID IS", given_pid, typeof given_pid)
    let tenant_id = req.userTenantId
    logger.debug("the tenant id is", tenant_id)
    if (!req.query.duration) {
        req.query.duration = 6
    }
    // let duration = 6
    let duration = parseInt(req.query.duration)
    logger.debug("THE DURATION IS", duration)
    logger.debug("THE LIMIT IS", req.query.limit)
    logger.debug("THE QUERY IS", req.query)
    let patient_exist
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient - Check failed",
        }
        return next()
    }
    const promises = []
    const length = 1
    let query_param = {
        ...req.params,
        ...req.query,
    }
    let reportResult = {}
    // let admission_date = reportResult[reportOrder[6]][0]["demographic_map"]["admission_date"]
    for (let i = 0; i < length; i++) {
        promises.push(
            db_get_vital_threshold_list(tenant_id, username, req.query)
        )
        promises.push(db_get_practictioner_list(tenant_id, username, req.query))
        promises.push(db_get_vital_list(tenant_id, username, req.query))
        promises.push(db_get_location_list(tenant_id, username, req.query))
        promises.push(db_get_notes_list(tenant_id, username, req.query))
        promises.push(db_get_patch_map_list(tenant_id, username, req.query))
        promises.push(db_patient_exist(tenant_id, given_pid))
    }
    logger.debug("the promises are", JSON.stringify(promises))
    logger.debug("promises are", promises)
    let promise_result
    try {
        promise_result = await Promise.all(promises)
        logger.debug("promise result", promise_result[6]["admission_date"])
    } catch (error) {
        // Throw error
        logger.debug(
            "Promises unfilled for the patient " + given_pid + " " + error
        )
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = "Exception in Complete Promises Fetch"
        logger.debug("Exception : Complete Promises Fetch %s", error)
        return next()
    }
    let today = new Date()
    logger.debug("TODAY DATE IS", today)
    let current_date = new Date().toISOString()
    logger.debug("THE CURRENT DATE IS", current_date)

    let fd = today.getTime()
    logger.debug("THE FD DATE IS", fd)

    let admission_date = promise_result[6]["admission_date"]
    logger.debug("ADMISSION_DATE IS", admission_date)
    admission_date = new Date(admission_date).toISOString()
    logger.debug("the admission date is", admission_date)

    let resReport = await influxGetReportData(
        given_pid,
        admission_date,
        current_date
    )
    logger.debug("Prom is ", resReport, admission_date, today)
    let patient_report_data

    try {
        patient_report_data = await resReport
        logger.debug("PATIENT REPORT DATA", patient_report_data)
    } catch (e) {
        req.apiRes = PATIENT_CODE["1"]
        logger.debug("Exception : %s", e)
        return next()
    }


    let baseLineDict
    let startDate, endDate
    let tempPatient = {}
    let patientTrendData = []
    let patients_list = []
    for (const property in MOCK_SCHEMA) {
        let trendData = {}
        logger.debug("The MOCK Schema property is", property)
        let tempData = []
        for (const per_day_data in patient_report_data) {
            logger.debug(
                "TEMP TREND ",
                patient_report_data[per_day_data]["lastUpdatedLiveTime"] * 1000,
                patient_report_data[per_day_data]
            )
            let tempTrendData = get_trend_data(
                property,
                patient_report_data[per_day_data]["lastUpdatedLiveTime"] * 1000,
                endDate,
                patient_report_data[per_day_data],
                1
            )
            if (tempTrendData[0]) tempData.push(tempTrendData[0])
        }

        logger.debug("The Mock Trend Data is ", property, trendData[property])
        trendData[property] = tempData
        logger.debug(
            "After The Mock Trend Data is ",
            property,
            trendData[property]
        )
        patientTrendData.push(trendData)
    }
    logger.debug(
        "The Mock Trend full list is",
        JSON.stringify(patientTrendData)
    )
    promise_result.push(patientTrendData)
    let patient_demographic = JSON.stringify(promise_result[6])
    patient_demographic = JSON.parse(patient_demographic)
    logger.debug(
        "Promise result is ",
        patient_demographic,
        patient_demographic[0]
    )
    let tempPatientDemo = patient_demographic
    try {
        patients_list.push(patient_demographic)
        patients_list[0]["baselineResult"] = patient_report_data
        patient_demographic = await genPatientRespData([patient_demographic])
    } catch (error) {
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = "Exception in Trend Fetch"
        logger.debug("Exception : Trend Fetch %s", error)
        return next()
    }
    promise_result[6] = patient_demographic
    for (let i = 0; i < promise_result.length; i++) {
        reportResult[reportOrder[i]] = promise_result[i]
    }
    let reportText = ""
    logger.debug("The value of Demographicis ", reportResult[reportOrder[6]])
    let newReportText = "No Reports available for the Patient"

    if (reportResult[reportOrder[6]][0]) {
        reportResult[reportOrder[6]][0]["trend_map"] = patientTrendData

        //TODO: CURRENT YEAR
        let _name = reportResult[reportOrder[6]][0]["demographic_map"]["lname"],
            _age =
                2021 -
                reportResult[reportOrder[6]][0]["demographic_map"]["DOB"].split(
                    "-"
                )[0]
        logger.debug("The value of Demographicis ", _name, _age)
        let _sex = reportResult[reportOrder[6]][0]["demographic_map"]["sex"],
            _hr = reportResult[reportOrder[6]][0]["ews_map"]["hr"]
        let _rr = reportResult[reportOrder[6]][0]["ews_map"]["rr"],
            _temperature = reportResult[reportOrder[6]][0]["ews_map"]["temp"]
        let _spo2 = reportResult[reportOrder[6]][0]["ews_map"]["spo2"],
            _ews = reportResult[reportOrder[6]][0]["PatientState"]["EWS"]
        let _patientStatus =
            reportResult[reportOrder[6]][0]["PatientState"]["state"]

        function between(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        let _count = between(1, 12)

        //reportText = `Patient  ${_name} aged ${_age} years whose gender is ${_sex} has developed a Cardiovascular issue.${""} There are a total of ${_count} alerts for abnormal heart rate, first of which was recorded on May 24.${""} ${_name}'s vitals are as follows:${""} Heart Rate : ${_hr}${""} Respiration Rate : ${_rr}${""} Temperature :  ${_temperature}${""} Spo2 : ${_spo2}.${""} ${_name}'s EWS score is ${_ews}  and is ${_patientStatus}.`
        reportText = `Patient  ${_name} aged ${_age} years whose gender is ${_sex}.${""} There are a total of ${_count} alerts for abnormal heart rate, first of which was recorded.${""} ${_name}'s vitals are as follows:${""} Heart Rate : ${_hr}${""} Respiration Rate : ${_rr}${""} Temperature :  ${_temperature}${""} Spo2 : ${_spo2}.${""} ${_name}'s EWS score is ${_ews}  and is ${_patientStatus}.`
        newReportText = reportText.replace(/[\r\n]+/g, " ")

        logger.debug("Text Speed Response is ", reportText, newReportText)
    } else {
        reportResult[reportOrder[6]] = []
        reportResult[reportOrder[6]][0] = {}
        reportResult[reportOrder[6]][0]["demographic_map"] = tempPatientDemo
    }
    return {
        report: reportResult,
        reportText: newReportText,
        count: reportResult.length,
    }
}

// Validated
async function getPatientVitalThreashold(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
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
    let vitalth
    req.query.pid = req.params.pid
    try {
        vitalth = await db_get_vital_threshold_list(
            tenant_id,
            username,
            req.query
        )
    } catch (e) {
        req.apiRes = VITAL_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE VITALS",
        }
        return next()
    }
    req.apiRes = VITAL_CODE["2"]
    req.apiRes["response"] = {
        vitalth: vitalth,
        count: vitalth.length,
    }
    return next()
}




// Validated
async function getPatientReport(req, res, next) {
    req.query.pid = req.params.pid
    logger.debug("the query pid is", req.query.pid)

    let reportOrder = [
        "vital_threshold",
        "practictioner",
        "vital",
        "location_map",
        "notes",
        "patch_map",
        "demographic_map",
        "trend_map",
    ]
    logger.debug(" PATIENT STATUS IS", [reportOrder[6]][0]["demographic_map"])
    logger.debug(
        " REPORT ORDER STATUS IS",
        reportOrder,
        JSON.stringify(reportOrder)
    )

    //logger.debug('ADMISSION DATE IS',[reportOrder[6]][0]["demographic_map"])
    let username = req.userName
    logger.debug("THE USER NAME IS", username)
    let given_pid = req.params.pid
    logger.debug("THE GIVEN PID IS", given_pid, typeof given_pid)
    let tenant_id = req.userTenantId
    logger.debug("the tenant id is", tenant_id)
    if (!req.query.duration) {
        req.query.duration = 6
    }
    // let duration = 6
    let duration = parseInt(req.query.duration)
    logger.debug("THE DURATION IS", duration)
    logger.debug("THE LIMIT IS", req.query.limit)
    logger.debug("THE QUERY IS", req.query)
    let patient_exist
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient - Check failed",
        }
        return next()
    }
    const promises = []
    const length = 1
    let query_param = {
        ...req.params,
        ...req.query,
    }
    let reportResult = {}
    // let admission_date = reportResult[reportOrder[6]][0]["demographic_map"]["admission_date"]
    for (let i = 0; i < length; i++) {
        promises.push(
            db_get_vital_threshold_list(tenant_id, username, req.query)
        )
        promises.push(db_get_practictioner_list(tenant_id, username, req.query))
        promises.push(db_get_vital_list(tenant_id, username, req.query))
        promises.push(db_get_location_list(tenant_id, username, req.query))
        promises.push(db_get_notes_list(tenant_id, username, req.query))
        promises.push(db_get_patch_map_list(tenant_id, username, req.query))
        promises.push(db_patient_exist(tenant_id, given_pid))
    }
    logger.debug("the promises are", JSON.stringify(promises))
    logger.debug("promises are", promises)
    let promise_result
    try {
        promise_result = await Promise.all(promises)
        logger.debug("promise result", promise_result[6]["admission_date"])
    } catch (error) {
        // Throw error
        logger.debug(
            "Promises unfilled for the patient " + given_pid + " " + error
        )
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = "Exception in Complete Promises Fetch"
        logger.debug("Exception : Complete Promises Fetch %s", error)
        return next()
    }
    logger.debug("the patient status is", promise_result[6]["status"])
    let patientStatus = promise_result[6]["status"]
    logger.debug("THE PATIENT STATUS", patientStatus)
    // if (patientStatus == "Deboarded") {
    //     //this is for deboarded report

    // }
    let today = new Date()
    logger.debug("TODAY DATE IS", today)
    let current_date = new Date().toISOString()
    logger.debug("THE CURRENT DATE IS", current_date)

    let fd = new Date()
    logger.debug("THE FD DATE IS", fd)

    let admission_date = promise_result[6]["admission_date"]
    start_date = fd.setDate(fd.getDate() - 10);
    logger.debug("ADMISSION_DATE IS", admission_date)
    start_date = new Date(start_date).toISOString()
    logger.debug("the start date is", start_date)

    let resReport = await influxGetReportData(
        given_pid,
        start_date,
        current_date
    )
    logger.debug("Prom is ", resReport, start_date, today)
    let patient_report_data

    try {
        patient_report_data = await resReport
        logger.debug("PATIENT REPORT DATA", patient_report_data)
    } catch (e) {
        req.apiRes = PATIENT_CODE["1"]
        logger.debug("Exception : %s", e)
        return next()
    }

    let baseLineDict
    let startDate, endDate
    let tempPatient = {}
    let patientTrendData = []
    let patients_list = []
    for (const property in MOCK_SCHEMA) {
        let trendData = {}
        logger.debug("The MOCK Schema property is", property)
        let tempData = []
        for (const per_day_data in patient_report_data) {
            // logger.debug(
            //     "TEMP TREND ",
            //     patient_report_data[per_day_data]["lastUpdatedLiveTime"] * 1000,
            //     patient_report_data[per_day_data]
               
            // )
           
             let tempTrendData = get_trend_data(
                property,
                patient_report_data[per_day_data]["lastUpdatedLiveTime"] * 1000,
                endDate,
                patient_report_data[per_day_data],
                1
            )
            if (tempTrendData[0]) tempData.push(tempTrendData[0])
        }

        // trendData[property] = get_trend_data(property, startDate, endDate)
        logger.debug("The Mock Trend Data is ", property, trendData[property])
        // trendData[property] = [trendData[property][0]]
        trendData[property] = tempData
        // logger.debug(
        //     "After The Mock Trend Data is ",
        //     property,
        //     trendData[property]
        // )
        patientTrendData.push(trendData)
    }
    logger.debug(
        "The Mock Trend full list is",
        JSON.stringify(patientTrendData)
    )
    promise_result.push(patientTrendData)
    let patient_demographic = JSON.stringify(promise_result[6])
    patient_demographic = JSON.parse(patient_demographic)
    logger.debug(
        "Promise result is ",
        patient_demographic,
        patient_demographic[0]
    )
    let tempPatientDemo = patient_demographic
    try {
        patients_list.push(patient_demographic)
        // patients_list[0]["baselineResult"] = baseLineDict["baselineResult"]
        patients_list[0]["baselineResult"] = patient_report_data
        patient_demographic = await genPatientRespData([patient_demographic])
    } catch (error) {
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = "Exception in Trend Fetch"
        logger.debug("Exception : Trend Fetch %s", error)
        return next()
    }
    promise_result[6] = patient_demographic
    for (let i = 0; i < promise_result.length; i++) {
        reportResult[reportOrder[i]] = promise_result[i]
    }
    let reportText = ""
    logger.debug("The value of Demographicis ", reportResult[reportOrder[6]])
    let newReportText = "No Reports available for the Patient"

    if (reportResult[reportOrder[6]][0]) {
        reportResult[reportOrder[6]][0]["trend_map"] = patientTrendData
        let _name = reportResult[reportOrder[6]][0]["demographic_map"]["lname"],
            _age =
                2021 -
                reportResult[reportOrder[6]][0]["demographic_map"]["DOB"].split(
                    "-"
                )[0]
        logger.debug("The value of Demographicis ", _name, _age)
        let _sex = reportResult[reportOrder[6]][0]["demographic_map"]["sex"],
            _hr = reportResult[reportOrder[6]][0]["ews_map"]["hr"]
        let _rr = reportResult[reportOrder[6]][0]["ews_map"]["rr"],
            _temperature = reportResult[reportOrder[6]][0]["ews_map"]["temp"]
        let _spo2 = reportResult[reportOrder[6]][0]["ews_map"]["spo2"],
            _ews = reportResult[reportOrder[6]][0]["PatientState"]["EWS"]
        let _patientStatus =
            reportResult[reportOrder[6]][0]["PatientState"]["state"]

        function between(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        let _count = between(1, 12)

        //reportText = `Patient  ${_name} aged ${_age} years whose gender is ${_sex} has developed a Cardiovascular issue.${""} There are a total of ${_count} alerts for abnormal heart rate, first of which was recorded on May 24.${""} ${_name}'s vitals are as follows:${""} Heart Rate : ${_hr}${""} Respiration Rate : ${_rr}${""} Temperature :  ${_temperature}${""} Spo2 : ${_spo2}.${""} ${_name}'s EWS score is ${_ews}  and is ${_patientStatus}.`
        reportText = `Patient  ${_name} aged ${_age} years whose gender is ${_sex}.${""} There are a total of ${_count} alerts for abnormal heart rate, first of which was recorded.${""} ${_name}'s vitals are as follows:${""} Heart Rate : ${_hr}${""} Respiration Rate : ${_rr}${""} Temperature :  ${_temperature}${""} Spo2 : ${_spo2}.${""} ${_name}'s EWS score is ${_ews}  and is ${_patientStatus}.`
        newReportText = reportText.replace(/[\r\n]+/g, " ")

        logger.debug("Text Speed Response is ", reportText, newReportText)
    } else {
        reportResult[reportOrder[6]] = []
        reportResult[reportOrder[6]][0] = {}
        reportResult[reportOrder[6]][0]["demographic_map"] = tempPatientDemo
    }
    await reportGenerator(req)
    // Clean up with real data - No Mock should be present
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        report: reportResult,
        reportText: newReportText,
        count: reportResult.length,
    }

    return next()
}

async function getPatientReportTrend(req) {
    logger.debug("Trend info is ", req.userEmail, req.userRole, req.params)
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    if (!req.query.duration) {
        req.query.duration = 3
    }
    // let duration = 3
    let duration = parseInt(req.query.duration)
    let patient_exist
    let baseLineDict
    let startDate, endDate
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient -Check failed ",
        }
        return next()
    }

    let tempPatient = {}
    let patientTrendData = []

    try {
        baseLineDict = await grpcCall(given_pid, duration, tenant_id)
        logger.debug("BASELINE DICT", baseLineDict)
        req.query["pidlist"] = baseLineDict["pidlist"]
        baseLineDict["baselineResult"][0]["lastUpdatedLiveTime"] == null
            ? (startDate = Date())
            : (startDate =
                baseLineDict["baselineResult"][0]["lastUpdatedLiveTime"] *
                1000)

        // startDate = baseLineDict['baselineResult'][0]['lastUpdatedLiveTime'] * 1000
    } catch (error) {
        logger.debug("Error in GRPC Call is ", error)
    }
    baseLineDict["baselineResult"][0]["pid"] = baseLineDict["baselineResult"][0]
    logger.debug("NewBaseliner ", baseLineDict["baselineResult"][0])
    tempPatient["ews_map"] = get_healthscoreObj(baseLineDict["baselineResult"][0])
    for (const property in MOCK_SCHEMA) {
        let trendData = {}
        logger.debug("The  Schema property is", property)
        trendData[property] = get_trend_data(
            property,
            startDate,
            endDate,
            baseLineDict["baselineResult"][0]
        )
        logger.debug("The  Trend Data is ", property, trendData[property])
        patientTrendData.push(trendData)
    }

    let consolidatedTrendsbyDT = {}
    for (let ind = 0; ind < patientTrendData.length; ind++) {
        let typeTrend = Object.keys(patientTrendData[ind])[0]
        let typeTrendData = patientTrendData[ind][typeTrend]
        for (let i = 0; i < typeTrendData.length; i++) {
            let dateVal = new Date(typeTrendData[i]["date"])
            // logger.debug(
            //     "trend time is ",
            //     dateVal,
            //     typeof dateVal,
            //     String(dateVal)
            // )
            if (!(dateVal in consolidatedTrendsbyDT))
                consolidatedTrendsbyDT[dateVal] = {}
            consolidatedTrendsbyDT[dateVal][typeTrend] =
                typeTrendData[i]["value"]
        }
    }
    logger.debug(
        "The  Trend full list is",
        JSON.stringify(patientTrendData),
        JSON.stringify(consolidatedTrendsbyDT)
    )
    tempPatient["trend_map"] = patientTrendData
    tempPatient["consolidated_trend_map"] = consolidatedTrendsbyDT
    logger.debug("THE TEMP PATIENT", tempPatient)
    return {
        trend_map: tempPatient,
        count: tempPatient.length,
        patientUUID: given_pid,
    }
}

// Validated
async function getPatientTrend(req, res, next) {
    logger.debug("Trend info is ", req.userEmail, req.userRole, req.params)
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    if (!req.query.duration) {
        req.query.duration = 3
    }
    // let duration = 3
    let duration = parseInt(req.query.duration)
    let patient_exist
    let baseLineDict
    let startDate, endDate
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient -Check failed ",
        }
        return next()
    }

    let tempPatient = {}
    let patientTrendData = []

    try {
        baseLineDict = await grpcCall(given_pid, duration, tenant_id)
        logger.debug("BASELINE DICT", baseLineDict)
        req.query["pidlist"] = baseLineDict["pidlist"]
        baseLineDict["baselineResult"][0]["lastUpdatedLiveTime"] == null
            ? (startDate = Date())
            : (startDate =
                baseLineDict["baselineResult"][0]["lastUpdatedLiveTime"] *
                1000)

        // startDate = baseLineDict['baselineResult'][0]['lastUpdatedLiveTime'] * 1000
    } catch (error) {
        logger.debug("Error in GRPC Call is ", error)
    }
    baseLineDict["baselineResult"][0]["pid"] = baseLineDict["baselineResult"][0]
    logger.debug("NewBaseliner ", baseLineDict["baselineResult"][0])
    tempPatient["ews_map"] = get_healthscoreObj(baseLineDict["baselineResult"][0])
    for (const property in MOCK_SCHEMA) {
        let trendData = {}
        logger.debug("The  Schema property is", property)
        trendData[property] = get_trend_data(
            property,
            startDate,
            endDate,
            baseLineDict["baselineResult"][0]
        )
        logger.debug("The  Trend Data is ", property, trendData[property])
        patientTrendData.push(trendData)
    }
    let consolidatedTrendsbyDT = {}
    for (let ind = 0; ind < patientTrendData.length; ind++) {
        let typeTrend = Object.keys(patientTrendData[ind])[0]
        let typeTrendData = patientTrendData[ind][typeTrend]
        for (let i = 0; i < typeTrendData.length; i++) {
            let dateVal = new Date(typeTrendData[i]["date"])
            logger.debug(
                "trend time is ",
                dateVal,
                typeof dateVal,
                String(dateVal)
            )
            if (!(dateVal in consolidatedTrendsbyDT))
                consolidatedTrendsbyDT[dateVal] = {}
            consolidatedTrendsbyDT[dateVal][typeTrend] =
                typeTrendData[i]["value"]
        }
    }
    logger.debug(
        "The  Trend full list is",
        JSON.stringify(patientTrendData),
        JSON.stringify(consolidatedTrendsbyDT)
    )

    tempPatient["trend_map"] = patientTrendData
    tempPatient["consolidated_trend_map"] = consolidatedTrendsbyDT
    let promises = []
    promises.push(
        db_get_vital_threshold_list(tenant_id, username, {
            limit: 1,
            offset: 0,
            pid: given_pid,
        })
    )
    promises.push(
        db_get_vital_list(tenant_id, username, {
            limit: 1,
            offset: 0,
            pid: given_pid,
        })
    )
    logger.debug("THE PROMISES ARRAY IS", JSON.stringify(promises))
    await Promise.all(promises).then(async (vital_threshold_list) => {
        logger.debug(
            "the vital threshold patient list is ",
            JSON.stringify(vital_threshold_list)
        )
        tempPatient["vitals_threshold"] = vital_threshold_list[0]
        logger.debug(
            "THE VITALS THRESHOLD LIST IS",
            tempPatient["vitals_threshold"]
        )
        tempPatient["vitals"] = vital_threshold_list[1]
        logger.debug("THE VITALS THRESHOLD LIST IS", tempPatient["vitals"])

        await getPatientReportTrend(req)

        // respResult = req.body
        req.apiRes = PATIENT_CODE["2"]
        req.apiRes["response"] = {
            trend_map: tempPatient,
            count: tempPatient.length,
            patientUUID: given_pid,
        }
        return next()
    })
}

function clone(a) {
    return JSON.parse(JSON.stringify(a))
}

// Validated
async function createPatientPrescription(req, res, next) {
    let prescription_data = req.body
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let newDrug = req.body.drug
    logger.debug("the new drug is", newDrug)
    let result
    const t = await sequelizeDB.transaction()
    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["prescriptionsSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
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

    const promises = []
    uuidDict = {
        uuidType: UUID_CONST["prescription"],
        tenantID: tenant_id,
    }
    try {
        let group_id = ""

        let drugInfo = prescription_data["drug"]
        let temp_prescription_data = clone(prescription_data)
        logger.debug(
            "the prescription body is",
            temp_prescription_data,
            typeof temp_prescription_data
        )
        logger.debug(
            "Prescription drug is ",
            prescription_data["drug"],
            prescription_data["drug"].length
        )
        promises.push(
            sequelizeDB.transaction(async function (t) {
                let uuid_result = await getUUID(uuidDict, { transaction: t })
                temp_prescription_data["prescription_uuid"] = uuid_result
                logger.debug(
                    "the precription uuid is",
                    temp_prescription_data["prescription_uuid"]
                )
                temp_prescription_data["tenant_uuid"] = tenant_id
                temp_prescription_data["pid"] = given_pid
                logger.debug(
                    "the final prescription body is",
                    temp_prescription_data
                )
                logger.debug("The uuid result is", uuid_result)
                logger.debug("the prescription data is", temp_prescription_data)
                return db_create_prescription(
                    tenant_id,
                    temp_prescription_data,
                    {
                        transaction: t,
                    }
                )
            })
        )

        logger.debug("After slice, prescription_data is", promises)
        await Promise.all(promises).then(async (prescription_data) => {
            const promises_new = []
            for (let i = 0; i < prescription_data.length; i++) {
                logger.debug(
                    "RESULT prescription_data is",
                    dbOutput_JSON(prescription_data[i])
                )
            }
        })
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in  prescription catch is ", error)
        req.apiRes = PRESCRIPTION_CODE["4"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN CREATING THE PRESCRIPTION",
        }
        return next()
    }

    // respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = PRESCRIPTION_CODE["3"]
    req.apiRes["response"] = {
        patient_data: respResult,
        count: respResult.length,
    }
    return next()
}

// Validated
async function updatePatientPrescription(req, res, next) {
    logger.debug("patient prescripton update")
    if (false) {
        // Update of the Prescrition should not be allowed
        return
    }
    const t = await sequelizeDB.transaction()
    logger.debug("this is prescription update")
    let prescription_data = req.body
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["prescriptionsSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
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
        for (let i = 0; i < prescription_data.length; i++) {
            promises.push(
                (result = await sequelizeDB.transaction(function (t) {
                    return db_update_prescription(
                        tenant_id,
                        prescription_data[i],
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

// Validated
async function getPatientPrescription(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist, prescriptions
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["5"]
        req.apiRes["error"] = {
            errMessage: "PATIENT DOES NOT EXIST ",
        }
        return next()
    }

    req.query.pid = req.params.pid
    let finalPrescrition = []
    try {
        prescriptions = await db_get_prescription_list(
            tenant_id,
            username,
            req.query
        )
        let prescriptionUUID = {}
        for (let i = 0; i < prescriptions.length; i++) {
            if (
                Object.keys(prescriptionUUID).includes(
                    prescriptions[i]["prescription_uuid"]
                )
            ) {
                prescriptionUUID[prescriptions[i]["prescription_uuid"]][
                    "drug"
                ].push(prescriptions[i]["drug"][0])
            } else {
                prescriptionUUID[prescriptions[i]["prescription_uuid"]] =
                    prescriptions[i]
            }
        }
        for (const [key, value] of Object.entries(prescriptionUUID)) {
            finalPrescrition.push(value)
        }
    } catch (e) {
        req.apiRes = PRESCRIPTION_CODE["2"]
        logger.debug("Exception : %s PID %s", e, given_pid)
        req.apiRes["error"] = {
            errMessage: "ERROR IN FETCHING THE PRESCRIPTION ",
        }
        return next()
    }
    req.apiRes = PRESCRIPTION_CODE["2"]
    req.apiRes["response"] = {
        prescriptions: finalPrescrition,
        count: finalPrescrition.length,
    }

    return next()
}

// EWS
async function getEws(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist, ews
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["5"]
        req.apiRes["error"] = {
            errMessage: "PATIENT DOES NOT EXIST ",
        }
        return next()
    }

    req.query.pid = req.params.pid
    try {
        ews = await db_get_ews_list(tenant_id, username, req.query)
    } catch (e) {
        req.apiRes = EWS_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN FETCHING THE EWS INFORMATION ",
        }
        return next()
    }
    req.apiRes = EWS_CODE["2"]
    req.apiRes["response"] = {
        ewsList: ews,
        count: ews.length,
    }

    return next()
}

async function createEws(req, res, next) {
    let ews_data = req.body
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let ews
    const t = await sequelizeDB.transaction()
    //JSON SCHEMA VALIDATION
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["ewsTableSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
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
        ews = await sequelizeDB.transaction(function (t) {
            ews_data["pid"] = given_pid
            return db_create_ews(tenant_id, ews_data, {
                transaction: t,
            })
        })
    } catch (error) {
        logger.debug("THE EWS CREATE ERROR IS ", error)
        req.apiRes = EWS_CODE["4"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN CREATING THE EWS INFORMATION",
        }
        return next()
    }
    req.apiRes = EWS_CODE["3"]
    req.apiRes["response"] = {
        ewsList: [ews],
        count: ews.length,
    }
    return next()
}

// Validated
async function createUserPatientMap(req, res, next) {
    const t = await sequelizeDB.transaction()
    let user_patient_map_data = req.body
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let result
    let patient_exist
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["UserPatientMapSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
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
            errMessage: "Patient Does Not Exist",
        }
        return next()
    }
    uuidDict = {
        uuidType: UUID_CONST["user"],
        tenantID: 0,
    }
    try {
        result = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, {
                transaction: t,
            })
            logger.debug("The uuid result is", uuid_result)
            user_patient_map_data["user_uuid"] = uuid_result
            user_patient_map_data["pid"] = given_pid
            return db_create_user_patient_map(
                tenant_id,
                user_patient_map_data,
                {
                    transaction: t,
                }
            )
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            error: "Creation of User to patient map failed :" + error,
        }
        next()
    }
    logger.debug("The Result is ", result)
    respResult = dbOutput_JSON(result)
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        patient_data: respResult,
        count: respResult.length,
    }
    return next()
}

// Not for Alpha
async function getPatientAppointment(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
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

    req.query.pid = req.params.pid
    let appointments
    try {
        appointments = await db_get_appointment_list(
            tenant_id,
            username,
            req.query
        )
    } catch (error) {
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            error: "Appointment  Inventory failure" + error,
        }
        return next()
    }
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        appointments: appointments,
        count: appointments.length,
    }

    next()
}

async function createPatientAppointment(req, res, next) {
    const t = await sequelizeDB.transaction()
    let appointment_data = req.body
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let schema_status = schemaValidator.validate_schema(
        req,
        SCHEMA_CODE["AppointmentSchema"]
    )
    if (!schema_status["status"]) {
        req.apiRes = JSON_SCHEMA_CODE["1"]
        req.apiRes["error"] = {
            error: "Schema Validation Failed ",
        }
        return next()
    }

    let patient_exist
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

    uuidDict = {
        uuidType: UUID_CONST["tenant"],
        tenantID: 0,
    }
    try {
        let result = await sequelizeDB.transaction(function (t) {
            return getUUID(uuidDict, {
                transaction: t,
            }).then((uuid_result) => {
                logger.debug("The uuid result is", uuid_result)
                appointment_data["tenant_uuid"] = uuid_result
                appointment_data["pid"] = given_pid
                return db_create_appointment(tenant_id, appointment_data, {
                    transaction: t,
                })
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient - ",
        }
        return next()
    }
    respResult = req.body
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        patient_data: respResult,
        count: respResult.length,
    }
    return next()
}

async function createPatientMedication(req, res, next) {
    tenant_id = req.userTenantId
    given_pid = req.params.pid
    logger.debug("The GIVEN PID IS", given_pid)
    const t = await sequelizeDB.transaction()
    var patient_medication_data = req.body
    let medication
    let patient_exist
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "Patient - Does Not Exist",
        }
        return next()
    }
    try {
        medication = await sequelizeDB.transaction(async function (t) {
            patient_medication_data["pid"] = given_pid
            return db_create_patient_medication(
                tenant_id,
                patient_medication_data,
                {
                    transaction: t,
                }
            )
        })
    } catch (err) {
        logger.debug("USER Create error " + err)
        req.apiRes = PATIENT_CODE["4"]
        req.apiRes["error"] = {
            error: "Creation of Patient Medication failed :" + err,
        }
        return next()
    }
    logger.debug("Patient Medication  is" + medication)
    req.apiRes = PATIENT_CODE["3"]
    req.apiRes["response"] = {
        patientMedicationData: medication,
        count: medication.length,
    }
    res.response(req.apiRes)
    return next()
}

async function deboardPatientPatch(req, res, next) {
    logger.debug("the query  is", req.query)
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    req.query = {
        limit: 1,
        offset: 0,
        filter: 0,
    }
    patient_data = {
        status: "Deboarded",
    }
    patch_data = {
        pid: given_pid,
        command: "clearPatient",
    }

    let patientInfo
    try {
        patientInfo = await db_patient_info(given_pid)
    } catch (err) {
        logger.debug('Fetch Patient ERROR : ', err.message)
    }

    let { fname, lname } = JSON.parse(JSON.stringify(patientInfo[0], null, 2))

    let alertEventId = uuid()

    let deboardPatientPatchAlert = alertEnum['1']
    deboardPatientPatchAlert['event'] = `deboard patient patch map id:${alertEventId}`
    deboardPatientPatchAlert['text'] = `${fname} ${lname} deboarded`
    deboardPatientPatchAlert['service'] = [`${req.userTenant}`]

    logger.debug("the patient data is", patient_data)
    let report_data
    let report_generated = false
    try {
        logger.debug("INSIDE TRY REPORT FUNCTION")
        report_data = await reportGenerator(req)
        logger.debug("THE REPORT DATA IS", report_data, typeof report_data)
        report_generated = true
        logger.debug("AFTER TRY REPORT FUNCTION")
    } catch (err) {
        req.apiRes["error"] = {
            errMessage: "Unable to fetch the report for the patient with pid",
            given_pid,
        }
        return next()
    }

    deboard_patient_report_data = {
        tenant_id: tenant_id,
        pid: given_pid,
    }
    const promises = []
    logger.debug("THE REPORT GENERATOR IS", report_generated)

    if (report_generated) {
        logger.debug("after report function")

        // TODO Generate the Report and store all of that in Database...including trends etc
        // If successful then only remove the patches else throw an error
        const t = await sequelizeDB.transaction()
        let patient_exist
        logger.debug("AFTER REPORT GENERATED")
        try {
            patient_exist = await db_patient_exist(tenant_id, given_pid)
            if (!validate_patient_exist(patient_exist, req)) return next()
        } catch (error) {
            logger.debug("Exception : %s PID %s", error, given_pid)
            req.apiRes = PATIENT_CODE["3"]
            req.apiRes["error"] = {
                errMessage: "Patient does not exist",
                given_pid,
            }
            return next()
        }
        //transaction
        try {
            promises.push(
                sequelizeDB.transaction(function (t) {
                    return db_delete_patch_patient_map(given_pid, {
                        transaction: t,
                    }).then((pat_data) => {
                        patient_data["status"] = "Deboarded"
                        return db_update_patient(
                            tenant_id,
                            patient_data,
                            given_pid,
                            {
                                transaction: t,
                            }
                        ).then((patient_report_data) => {
                            logger.debug(
                                "THE PATIENT REPORT DATA IS",
                                patient_report_data
                            )
                            deboard_patient_report_data["report_json"] =
                                report_data
                            return db_create_patient_report(
                                tenant_id,
                                deboard_patient_report_data,
                                { transaction: t }
                            )
                        })
                    })
                })
            )
        } catch (error) {
            req.apiRes = TRANSACTION_CODE["1"]
            logger.debug("Exception : %s PID %s", error, given_pid)
            req.apiRes = PATCH_PATIENT_MAP_CODE["6"]
            req.apiRes["error"] = {
                errMessage: "Failure in deboarding the patch for the patient ",
            }
            return next()
        }
        //respResult = result
        patientReport = report_data
        req.apiRes = PATCH_PATIENT_MAP_CODE["5"]
        req.apiRes["response"] = {}
        //  Deleting the Patient PID from the Baseliner/Trend
        msg = {
            UuidPatient: given_pid,
            Method: "DELETE",
            UuidTenant: "tenantb653407c-aefe-4c7b-afb0-05149343de80",
            Thresholds: AlertThresholdsDict,
            FrequencySetting: 1800,
        }
        await patientKafkaRegister(msg)
        try {
            let response = await alerter(deboardPatientPatchAlert)
            logger.debug(`alertResponse : ${response}`)
        }
        catch (err) {
            logger.debug(`Alert ERROR : ${err.message}`)
        }
        return next()
    }
}

async function getDeboardReport(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist, patient_report
    try {
        patient_exist = await db_patient_exist(tenant_id, given_pid)
        if (!validate_patient_exist(patient_exist, req)) return next()
    } catch (error) {
        logger.debug("Exception : %s PID %s", error, given_pid)
        logger.debug("The error in catch is ", error)
        req.apiRes = PATIENT_CODE["5"]
        req.apiRes["error"] = {
            errMessage: "PATIENT DOES NOT EXIST ",
        }
        return next()
    }
    req.query.pid = req.params.pid

    try {
        patient_report = await db_get_patient_report(tenant_id, req.query)
        logger.debug("the patient report is", patient_report)
        logger.debug("ONLY REPORT JSON IS", patient_report["report_json"])
        logger.debug(
            "ONLY REPORT 2 JSON IS",
            patient_report[0].report_json.report.report
        )
    } catch (e) {
        req.apiRes = DEBOARD_PATIENT_CODE["1"]
        req.apiRes["error"] = {
            errMessage:
                "ERROR IN FETCHING THE DEBOARDED PATIENT REPORT INFORMATION ",
        }
        return next()
    }
    req.apiRes = DEBOARD_PATIENT_CODE["2"]
    req.apiRes["response"] = {
        report: patient_report[0].report_json.report,
        count: patient_report.length,
    }

    return next()
}

async function createPatientProcedure(req, res, next) {
    const t = await sequelizeDB.transaction()
    let procedure_data = req.body
    logger.debug("THE PROCEDURE BODY IS", procedure_data)
    given_pid = req.params.pid
    tenant_id = req.userTenantId
    let result

    uuidDict = { uuidType: UUID_CONST["procedure"], tenantID: 0 }
    try {
        result = await sequelizeDB.transaction(async function (t) {
            let uuid_result = await getUUID(uuidDict, { transaction: t })
            logger.debug("The uuid result is", uuid_result)
            procedure_data["procedure_uuid"] = uuid_result
            procedure_data["tenant_id"] = tenant_id
            procedure_data["pid"] = given_pid
            return db_create_procedure(tenant_id, procedure_data, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            error: "Creation of Procedure failed :" + error,
        }
        return next()
    }
    logger.debug("Result is", result)
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = TRANSACTION_CODE["0"]
    req.apiRes["response"] = {
        procedure_data: respResult,
        count: respResult.length,
    }
    return next()
}

// Validated
async function getPatientProcedure(req, res, next) {
    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist
    let procedure_list
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
    req.query.pid = req.params.pid
    try {
        procedure_list = await db_get_procedure_list(
            tenant_id,
            username,
            req.query
        )
    } catch (e) {
        req.apiRes = PROCEDURE_CODE["1"]
        req.apiRes["error"] = {
            error: "ERROR IN FETCHING THE PROCEDURE",
        }
        return next()
    }
    req.apiRes = PROCEDURE_CODE["2"]
    req.apiRes["response"] = {
        procedure_list: procedure_list,
        count: procedure_list.length,
    }
    res.response(req.apiRes)
    return next()
}

// Validated
async function updatePatientProcedure(req, res, next) {
    const t = await sequelizeDB.transaction()
    let procedure_map = req.body
    logger.debug("the procedure uuid is", procedure_map["procedure_uuid"])

    let username = req.userName
    let given_pid = req.params.pid
    let tenant_id = req.userTenantId
    let patient_exist

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
        result = await sequelizeDB.transaction(async function (t) {
            return db_update_procedure(tenant_id, procedure_map, given_pid, {
                transaction: t,
            })
        })
    } catch (error) {
        req.apiRes = TRANSACTION_CODE["1"]
        req.apiRes["error"] = {
            errMessage: "ERROR IN UPDATING THE PROCEDURE",
        }
        return next()
    }
    respResult = dbOutput_JSON(result)
    respResult = req.body
    req.apiRes = PATIENT_CODE["2"]
    req.apiRes["response"] = {
        procedure_data: respResult,
        count: respResult.length,
    }
    return next()
}

async function getPatientInventory(req, res, next) {
    let given_pid = req.body.pid
    let tenant_id = req.body.tenantId
    let duration = 3

    try {
        const patients_list = await db_get_patient_inventory(req.body)
        const baseLineDict = await grpcCall(given_pid, duration, tenant_id)
        // const totalCount = await db_patient_count(tenant_id)

        let data = []
        for (const obj of patients_list.data) {
            obj["baselineResult"] = baseLineDict["baselineResult"]
            const patient = await genPatientRespData([obj])
            data.push(patient[0])
        }
        req.apiRes = PATIENT_CODE["2"]
        req.apiRes["response"] = {
            patients: data,
            count: data.length, 
            patientTotalCount: patients_list.count
        }
    } catch (error) {
        console.log(error)
        req.apiRes = PATIENT_CODE["1"]
        logger.debug("Exception : %s", error)
        return next()
    }
    return next()
}

async function patientActions(req, res, next) {
    if(req.body.action === 'unassociate'){
        return unassociatePatient(req, res, next)
    }

    return disablePatient(req, res, next)
}

async function disablePatient(req, res, next) {
    let data
    try {
        data = await db_disable_patient(req.body)
        if(data[0][0] === 1){
            //chnage process later
            let list = []
            const associated_patches = await db_get_patch_associated(req.body)
            if(associated_patches.length > 0){
                associated_patches.forEach(obj => {
                    list.push(obj.dataValues.patch_uuid)
                });
                await db_delete_patch_associated(req.body)
            }
            await db_update_patch_register(list)
            req.apiRes = PATIENT_CODE["9"]
            req.apiRes["response"] = { delete: true }
        }
        else{
            req.apiRes = PATIENT_CODE["10"]
            req.apiRes["response"] = { delete: false }
        }
    } catch (error) {
        console.log(error)
        req.apiRes = PATIENT_CODE["11"]
        req.apiRes["error"] = { error: error.message }
        res.response(req.apiRes)
        return next()
    }
    res.response(req.apiRes)
    return next()
}

async function unassociatePatient(req, res, next) {
    try {
        let list = []
        let associated_list = req.body.associated_list
        if(associated_list.length > 0){
            (associated_list).forEach(obj => {
                if(obj !== req.body.type_device){
                    list.push(obj)
                }
            });
            await db_update_patient_associated_list({pid: req.body.pid, associated_list: JSON.stringify(list)})
        }

        await db_delete_each_device(req.body)
        await db_update_patch_register([req.body.patch_uuid])
        req.apiRes = ASSOCIATE_CODE["1"]
        req.apiRes["response"] = { unassociate: true }
    } catch (error) {
        console.log(error)
        req.apiRes = ASSOCIATE_CODE["0"]
        req.apiRes["error"] = { error: error.message }
        res.response(req.apiRes)
        return next()
    }
    res.response(req.apiRes)
    return next()
}

async function editPatient(req, res, next) {
    try {
        await db_edit_patient(req.body)
        req.apiRes = PATIENT_CODE["7"]
        req.apiRes["response"] = req.body
    } catch (error) {
        console.log(error)
        req.apiRes = PATIENT_CODE["8"]
        req.apiRes["error"] = { error: error.message }
        res.response(req.apiRes)
        return next()
    }
    res.response(req.apiRes)
    return next()
}

async function addNewPatient(req, res, next) {
    try {
        const medical_record = await db_med_record_exist(req.body.med_record)
        if (medical_record) {
            req.apiRes = PATIENT_CODE["6"]
            req.apiRes["error"] = {
                isExist: true,
                error: "MEDICAL RECORD NUMBER ALREADY EXISTS:" + req.body.med_record,
            }
            res.response(req.apiRes)
            return next()
        }

        let uuidDict = {
            uuidType: UUID_CONST["patient"],
            tenantID: req.body.tenantId,
        }
        req.body.pid = await getUUID(uuidDict, { transaction: await sequelizeDB.transaction() })

        await db_add_new_patient(req.body)
        req.apiRes = PATIENT_CODE["3"]
        req.apiRes["response"] = { patient_data: req.body }
    } catch (error) {
        console.log(error)
        req.apiRes = PATIENT_CODE["4"]
        req.apiRes["error"] = { error: error.message }
        res.response(req.apiRes)
        return next()
    }
    res.response(req.apiRes)
    return next()
}


module.exports = {
    createPatientInBulk,
    // patientInventory,
    deletePatient,
    getUserPatientMap,
    getPatientDetail,
    createPatient,
    updatePatient,
    createPatientPatchMap,
    getPatientPatch,
    getPatientSensorData,
    getPatientOTP,
    createPatientNotes,
    getPatientNotes,
    createPatientLocation,
    getPatientLocation,
    createPatientVital,
    getPatientVital,
    updatePatientVital,
    createPatientPractitioner,
    getPatientPractitioner,
    createPatientVitalThreshold,
    getPatientVitalThreashold,
    getPatientReport,
    getPatientTrend,
    createPatientPrescription,
    updatePatientPrescription,
    getPatientPrescription,
    createPatientAppointment,
    getPatientAppointment,
    createUserPatientMap,
    getEws,
    createEws,
    createPatientMedication,
    updatePatientPatchMap,
    getotp,
    otpverify,
    getPatientDeboardReport,
    createPatientAllergy,
    getPatientAllergy,
    updatePatientAllergy,
    createPatientMedicalHistory,
    getPatientMedicalHistory,
    updatePatientMedicalHistory,
    deboardPatientPatch,
    getDeboardReport,
    createPatientProcedure,
    getPatientProcedure,
    updatePatientProcedure,
    registerPatientInventory,
    getPatientInventory,
    patientActions,
    editPatient,
    addNewPatient
}
