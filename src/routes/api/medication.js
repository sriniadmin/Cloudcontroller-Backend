//a-z standard packages
const cron = require('node-cron');
const express = require("express");
const router = express.Router();

//a-z custom modules
const logger = require("../../config/logger");
const redisClient = require("../../external_services/redis/cache_service/redis_client")

//a-z module constants
const {
    db_get_prescription_list,
    db_create_prescription,
    db_update_prescription,
} = require("../../dbcontrollers/prescription.controller")
const medSchedCtrlr = require("../../dbcontrollers/medsched.controller")
const { dbOutput_JSON } = require("../../utils/dbUtils/dbUtils")
const tenant_db_controller = require("../../dbcontrollers/tenant.controller")
const db_get_tenant_list = tenant_db_controller.db_get_tenant_list
const patient_controller = require("../../dbcontrollers/patients.controller")
const db_get_patient_list = patient_controller.db_get_patient_list
const sequelizeDB = require("../../config/emrmysqldb")

const MEDSCHED_CODE = require("../../lib/constants/AppEnum").MEDSCHED_CODE


async function getGenericReq(req) {
    let tenantId = null
    let userName = null

    if (req) {
        tenantId = req.userTenantId
        userName = req.userName
        if (req.query) {
            if (req.query.hasOwnProperty('limit')) {
                params.limit = req.query.limit
            }

            if (req.query.hasOwnProperty('offset')) {
                params.offset = req.query.offset
            }
        }

        if (req.params) {
            if (req.params.hasOwnProperty('pid')) {
                params.pid = req.params.pid
            }

            if (req.params.hasOwnProperty('filter')) {
                params.filter = req.params.filter
            }
        }
    } else {
        req = {}
    }

    if (!tenantId) {
        tenantList = await db_get_tenant_list(null, null)
        logger.debug(tenantList[0])
        req.userTenantId = tenantList[0].tenant_uuid
    }

    /* 
    if (!userName) {
        // xxx - ugliness - username is not used
        req.userName = 'doctor@demohospital.com'
    }*/

    return req
}

async function getPatientInfo(req, res, pid, medSched) {
    let dBqueryParam = {}
    dBqueryParam.pid = pid;
    dBqueryParam.limit = 1;
    dBqueryParam.offset = 0;
    let patients = null
    let pInfo = null

    req = await getGenericReq(req)

    try {
        patients = await db_get_patient_list(req.userTenantId, null, dBqueryParam)
        patients = dbOutput_JSON(patients)
        if (medSched) {
            if (patients.length > 0) {
                let _p = patients[0]
                medSched[pid].pName = _p.title + ' ' + _p.fname + ' ' + _p.lname
                //al['pLocn'] = _p.bed
                medSched[pid].mr = _p.med_record
                //logger.debug("Patient Details: ", medSched[pid].pName, medSched[pid].mr)
            }
        }
        return patients[0]
    } catch (e) {
        logger.debug("Exception : %s", e)
        return null
    }
}

async function getMedicationInfo(req) {
    // let tenantId = null
    // let username = null
    // let pid = null
    // let params = {}

    // params.limit = undefined
    // params.offset = undefined
    // params.filter = undefined
    // params.pid = undefined

    // if (req) {
    //     logger.debug('getMedicationInfo :', req.params)

    //     tenantId = req.userTenantId
    //     username = req.userName
    //     if (req.query) {
    //         if (req.query.hasOwnProperty('limit')) {
    //             params.limit = req.query.limit
    //         }

    //         if (req.query.hasOwnProperty('offset')) {
    //             params.offset = req.query.offset
    //         }
    //     }

    //     if (req.params) {
    //         if (req.params.hasOwnProperty('pid')) {
    //             params.pid = req.params.pid
    //         }

    //         if (req.params.hasOwnProperty('filter')) {
    //             params.filter = req.params.filter
    //         }
    //     }
    // }

    // if (!tenantId) {
    //     tenantList = await db_get_tenant_list(null, null)
    //     logger.debug(tenantList[0])
    //     tenantId = tenantList[0].tenant_uuid
    // }

    // prescriptions = null
    // try {
    //     prescriptions = await db_get_prescription_list(
    //         tenantId,
    //         username,
    //         params
    //     )
    //     //logger.debug(prescriptions)
    // } catch (e) {
    //     logger.debug("Exception : %s PID %s", e, pid)
    // }
    return []
}

/* Move to common library file */
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

async function medSchedAdminInfo(prsc_id, filter, medSchedInfo) {
    let schedInfo = null

    try {
        schedInfo = await medSchedCtrlr.findAll(prsc_id, filter)
        schedInfo.forEach(element => {
            let dtHr = element.createdAt.getHours()
            if (dtHr >= 0 && dtHr < 12) {
                medSchedInfo.today_administered_morning = element.createdAt
            } else if (dtHr >= 12 && dtHr < 18) {
                medSchedInfo.today_administered_noon = element.createdAt
            } else {
                medSchedInfo.today_administered_evening = element.createdAt
            }
        })
    } catch (err) {
        console.log("Medication Schedule Info Error :", err)
    }

    return schedInfo
}

/*
 * RGHV - there is undesired ugliness in this function owing to the
 * absence of standarization of "occurrence". Code is handling the 
 * different formats for now. However, this needs to be remedied.
 */
async function medScheduleUpdate(req, res) {
    try {
        let redisResponse = {}
        let medMorning = {}
        let medNoon = {}
        let medEvening = {}
        let promisesArray = []
        let promisesArrayPrsc = []
        let patientInfo = null
        let tenant = req.userTenant.toLowerCase()

        logger.debug("Medication schedule updating...")

        medInfo = await getMedicationInfo(req)
        //logger.debug("FROM DATABASE", medInfo)

        //medInfo.forEach(element => {
        for (let i = 0; i < medInfo.length; i++) {
            element = medInfo[i]
            const pid = element.pid
            let medSchedFilter = {}
            //let from = new Date('2021-08-10')
            //let to = new Date('2021-08-10')
            let from = new Date()
            let to = new Date()
            to.setHours(from.getHours() + 24)
            medSchedFilter.from = formatDate(from)
            medSchedFilter.to = formatDate(to)

            //element.drug.forEach(drug => {
            for (let j = 0; j < element.drug.length; j++) {
                let drug = element.drug[j]
                drug.prsc_id = element.id
                drug.prsc_uuid = element.prescription_uuid
                drug.start_date = element.date_added
                drug.end_date = element.end_date

                schedInfo = await medSchedAdminInfo(drug.prsc_id, medSchedFilter, drug)
                promisesArrayPrsc.push(schedInfo)

                if (drug.hasOwnProperty('dosage_morning') && drug['dosage_morning']) {
                    if (medMorning.hasOwnProperty(pid)) {
                        medMorning[pid].drugs.push(drug)
                    } else {
                        medMorning[pid] = {}
                        medMorning[pid].drugs = new Array(drug)
                        patientInfo = getPatientInfo(req, res, pid, medMorning)
                        promisesArray.push(patientInfo)
                    }
                }

                if (drug.hasOwnProperty('dosage_afternoon') && drug['dosage_afternoon']) {
                    if (medNoon.hasOwnProperty(pid)) {
                        medNoon[pid].drugs.push(drug)
                    } else {
                        medNoon[pid] = {}
                        medNoon[pid].drugs = new Array(drug)
                        patientInfo = getPatientInfo(req, res, pid, medNoon)
                        promisesArray.push(patientInfo)
                    }
                }

                if (drug.hasOwnProperty('dosage_afternoon') && drug['dosage_afternoon']) {
                    if (medEvening.hasOwnProperty(pid)) {
                        medEvening[pid].drugs.push(drug)
                    } else {
                        medEvening[pid] = {}
                        medEvening[pid].drugs = new Array(drug)
                        patientInfo = getPatientInfo(req, res, pid, medEvening)
                        promisesArray.push(patientInfo)
                    }
                }
            }
            try {
                let values = await Promise.all(promisesArrayPrsc)
            } catch (err) {
                logger.error("MedSched Prsc Promise All: ", err)
            }
        }
        try {
            let values = await Promise.all(promisesArray)
        } catch (err) {
            logger.error("MedSched Promise All: ", err)
        }

        redisResponse = await redisClient.updateRedisCache('medSched', 'medSchedMorning'+tenant, medMorning)
        //logger.debug("Morning", medMorning, redisResponse)
        redisResponse = await redisClient.updateRedisCache('medSched', 'medSchedNoon'+tenant, medNoon)
        //logger.debug("Noon", medNoon, redisResponse)
        redisResponse = await redisClient.updateRedisCache('medSched', 'medSchedEvening'+tenant, medEvening)
        //logger.debug("Evening", medEvening, redisResponse)
    } catch (e) {
        logger.debug("Exception : %s", e)
    }
}

/**
 * @openapi
 *  /api/medication/:
 *   get:
 *       tags:
 *         - MedSched
 *       summary: Medication Schedule
 *       responses:
 *         '200':
 *           description: Medication Schedule for a patient.
 *       parameters:
 *          - in: path
 *            name: pid
 *            schema:
 *               type: string
 *            description: PID as filter
 *          - in: query
 *            name: period
 *            default: morning
 *            schema:
 *               type: string
 *            description: Period can be one of morning/noon/evening.
 *          - in: query
 *            name: from
 *            schema:
 *               type: string
 *            description: From time.
 *          - in: query
 *            name: to
 *            schema:
 *               type: string
 *            description: To time.
 *          - in: query
 *            name: refresh
 *            schema:
 *               type: integer
 *            description: Refresh the backend cache
 */
router.get("/:pid?", async function (req, res, next) {
    let tenant = req.userTenant.toLowerCase()
    logger.debug("MedSched Params", req.params);
    logger.debug("MedSched Query", req.query);
    logger.debug("MedSched Tenant", tenant)

    let medSched = undefined
    let redisResponse = undefined

    try {
        if (req.query.hasOwnProperty('refresh')) {
            logger.debug("Refresh requested...")
            await medScheduleUpdate()
        }

        if (req.query.hasOwnProperty('period')) {
            switch (req.query.period) {
                case 'morning':
                    redisResponse = await redisClient.checkRedisCache('medSched', 'medSchedMorning'+tenant);
                    break
                case 'noon':
                    redisResponse = await redisClient.checkRedisCache('medSched', 'medSchedNoon'+tenant);
                    break
                case 'evening':
                    redisResponse = await redisClient.checkRedisCache('medSched', 'medSchedEvening'+tenant);
            }
        }

        if (redisResponse) {
            logger.debug("Check Redis Cache Done", medSched)
            if (redisResponse['status']) {
                logger.debug("Cache found")
                medSched = redisResponse['response']
                //logger.debug("Cached output", medSched)
            }
        }

        logger.debug(req.params.hasOwnProperty('pid'), !!medSched)
        if (req.params.hasOwnProperty('pid') && !!medSched) {
            let pid = req.params.pid
            logger.debug(medSched.hasOwnProperty(pid), pid != undefined)
            if (medSched.hasOwnProperty(pid) && pid != undefined) {
                logger.debug("Updating MedSched to only ", pid)
                medSched = medSched[pid]
            }
        }

        if ((req.query.hasOwnProperty('from') || req.query.hasOwnProperty('to'))
            && medSched) {
            pMedSched = {};
            logger.debug("Pruing to specified time window")
            logger.debug(req.query.hasOwnProperty('from'))
            logger.debug(req.query.hasOwnProperty('to'))
            for (const [key, value] of Object.entries(medSched)) {
                let pid = key

                for (let i = 0; i < value['drugs'].length; i++) {
                    let drug = value['drugs'][i]
                    let dtStart = new Date(drug.start_date)
                    let dtEnd = new Date(drug.end_date)

                    if (req.query.hasOwnProperty('from') && req.query.hasOwnProperty('to')) {
                        let dtFrom = new Date(req.query.from)
                        let dtTo = new Date(req.query.to)
                        //logger.debug("FROM", dtFrom, dtStart, (+dtFrom >= +dtStart), (+dtFrom <= +dtEnd))
                        //logger.debug("TO", dtTo, dtEnd, (+dtTo >= +dtStart), (+dtTo <= +dtEnd))
                        if (((+dtFrom >= +dtStart) && (+dtFrom <= +dtEnd)) || ((+dtTo >= +dtStart) && (+dtTo <= +dtEnd))) {
                            if (pMedSched.hasOwnProperty(pid)) {
                                pMedSched[pid].drugs.push(drug)
                            } else {
                                pMedSched[pid] = {}
                                pMedSched[pid].drugs = new Array(drug)
                                pMedSched[pid].pName = value.pName
                                pMedSched[pid].mr = value.mr
                            }
                        }
                        continue
                    }


                    if (req.query.hasOwnProperty('from')) {
                        let dtFrom = new Date(req.query.from)
                        //logger.debug("FROM", dtFrom, dtStart, dtEnd, (+dtFrom >= +dtStart), (+dtFrom <= +dtEnd))
                        if ((+dtFrom >= +dtStart) && (+dtFrom <= +dtEnd)) {
                            if (pMedSched.hasOwnProperty(pid)) {
                                pMedSched[pid].drugs.push(drug)
                            } else {
                                pMedSched[pid] = {}
                                pMedSched[pid].drugs = new Array(drug)
                                pMedSched[pid].pName = value.pName
                                pMedSched[pid].mr = value.mr                            }
                        }
                        continue
                    }

                    if (req.query.hasOwnProperty('to')) {
                        let dtTo = new Date(req.query.to)
                        logger.debug("TO", dtTo, dtEnd, (dtTo >= dtStart), (dtTo <= dtEnd))
                        if ((+dtTo >= +dtStart) && (+dtTo <= +dtEnd)) {
                            if (pMedSched.hasOwnProperty(pid)) {
                                pMedSched[pid].drugs.push(drug)
                            } else {
                                pMedSched[pid] = {}
                                pMedSched[pid].drugs = new Array(drug)
                                pMedSched[pid].pName = value.pName
                                pMedSched[pid].mr = value.mr                            }
                        }
                        continue
                    }
                }
            }
            medSched = pMedSched
        }

        if (medSched) {
            res.status(MEDSCHED_CODE["SUCCESS"].HttpStatus).json({
                result: MEDSCHED_CODE["SUCCESS"].Code,
                response: { "schedule": medSched },
                error: {},
                privilege: {}
            })
        } else {
            res.status(MEDSCHED_CODE['FAILURE'].HttpStatus).json({
                result: MEDSCHED_CODE['FAILURE'].Code,
                response: { "schedule": {} },
                error: {},
                privilege: {}
            })
        }
    } catch (e) {
        logger.debug("Exception : %s", e)
    }
    next()
})

/**
 * @openapi
 *  /api/medication/prescription/:
 *   get:
 *       tags:
 *         - MedSched
 *       summary: Medication Prescription Schedule
 *       responses:
 *         '200':
 *           description: Medication Schedule for a patient.
 *       parameters:
 *          - in: path
 *            name: prsc_id
 *            schema:
 *               type: string
 *            description: Prescription Id
 */
router.get("/prescription/:prsc_id", async function (req, res, next) {
    logger.debug("MedSched Prescription Params", req.params);
    logger.debug("MedSched Prescription Query", req.query);

    let medSched = undefined

    req.params.filter = {}

    if (req.query.hasOwnProperty('from')) {
        req.params.filter.from = req.query.from
    }

    if (req.query.hasOwnProperty('to')) {
        req.params.filter.to = req.query.to
    }

    if (req.params.hasOwnProperty('prsc_id')) {
        let prsc_id = req.params.prsc_id
        req.params.filter.prsc_id = prsc_id
        try {
            let medInfo = await getMedicationInfo(req)
            medSched = new Array()
            medInfo.forEach(element => {
                element.drug.forEach(drug => {
                    logger.debug(element.medscheds.createdAt, element.medscheds.endedAt)
                    drug.createdAt = element.medscheds.createdAt
                    drug.endedAt = element.medscheds.endedAt
                    let dtHr = drug.createdAt.getHours()

                    if (dtHr >= 0 && dtHr < 12) {
                        drug.administered_morning = drug.createdAt
                    } else if (dtHr >= 12 && dtHr < 18) {
                        drug.administered_noon = drug.createdAt
                    } else {
                        drug.administered_evening = drug.createdAt
                    }
                    medSched.push(drug)
                })
            })
        } catch (e) {
            logger.debug("Exception : %s", e)
        }
    }

    if (medSched) {
        res.status(MEDSCHED_CODE["SUCCESS"].HttpStatus).json({
            result: MEDSCHED_CODE["SUCCESS"].Code,
            response: { "schedule": medSched },
            error: {},
            privilege: {}
        })
    } else {
        res.status(MEDSCHED_CODE['FAILURE'].HttpStatus).json({
            result: MEDSCHED_CODE['FAILURE'].Code,
            response: { "schedule": medSched },
            error: {},
            privilege: {}
        })
    }
})

/**
 * @openapi
 *  /api/medication/prescription/:
 *   post:
 *       tags:
 *         - MedSched
 *       summary: Medication Prescription Schedule
 *       responses:
 *         '200':
 *           description: Medication Schedule for a patient.
 *       parameters:
 *          - in: path
 *            name: prsc_id
 *            schema:
 *               type: string
 *            description: Prescription Id
 */
router.post('/prescription/:prsc_id?', function (req, res, next) {
    logger.debug("MedSched POST Params", req.params);
    logger.debug("MedSched POST Query", req.query);

    let body = req.body
    let promises = new Array()
    let prscIdList = new Array()

    let response = "FAILURE"

    if (req.params.hasOwnProperty('prsc_id') && req.params.prsc_id != undefined) {
        prscIdList.push(req.params.prsc_id)
    } else if (body) {
        if (body.hasOwnProperty('prsc_id')) {
            prscIdList.push(...body.prsc_id)
        }
    }

    if (prscIdList.length) {
        prscIdList.forEach(prsc_id => {
            let medSchedObj = medSchedCtrlr.MedSchedObj

            medSchedObj.prescription_id = prsc_id
            logger.debug("Inserting Entry: ", medSchedObj)

            try {
                promises.push(medSchedCtrlr.create(medSchedObj))
            } catch (e) {
                logger.debug("Error creating MedSched presription entry :", e)
            }

            /* XXX - this is expensive; need to redesign this post alpha */
            medScheduleUpdate(req, res)
        })

        try {
            Promise.all(promises)
            response = "SUCCESS"
        } catch (e) {
            logger.debug("POST prescription Error %s", e)
        }
    }

    res.status(MEDSCHED_CODE[response].HttpStatus).json({
        result: MEDSCHED_CODE[response].Code,
        response: { 'prsc_id': prscIdList },
        error: {},
        privilege: {}
    })

    next()
})

/**
 * @openapi
 *  /api/medication/prescription/:
 *   put:
 *       tags:
 *         - MedSched
 *       summary: Medication Prescription Schedule
 *       responses:
 *         '200':
 *           description: Medication Schedule for a patient.
 *       parameters:
 *          - in: path
 *            name: prsc_id
 *            schema:
 *               type: string
 *            description: Prescription Id
 */
router.put('/prescription/:prsc_id', async function (req, res, next) {
    logger.debug("PUT MedSched Params", req.params);
    logger.debug("PUT MedSched Query", req.query);

    medSchedId = req.params.prsc_id

    let medSchedObj = medSchedCtrlr.MedSchedObj

    medSchedObj.endedAt = Date.now()
    logger.debug("MedSched Updating Entry: ", medSchedObj)

    try {
        await sequelizeDB.transaction((t) => {
            medSchedCtrlr.update(medSchedId, medSchedObj, {
                transaction: t
            })
        })
    } catch (e) {
        logger.debug("PUT MedSched Error %s", e)
    }

    res.status(MEDSCHED_CODE["SUCCESS"].HttpStatus).json({
        result: MEDSCHED_CODE["SUCCESS"].Code,
        response: {},
        error: {},
        privilege: {}
    })

    next()
})

async function runMedCron() {

    let tenantList = [] 

    try {
        tenantList = await db_get_tenant_list(null, null)
    } catch(e) {
        logger.debug('MedSched Cron Unable to tenantlist : %s', e)
    }
    
    for (let i = 0; i < tenantList.length; i++) { 
        (async () => {
            let req = {}
            req.userTenant = tenantList[i].tenant_name
            req.userTenantId = tenantList[i].tenant_uuid
            //console.log("MedSched Run Update", req)
            try {
                await medScheduleUpdate(req)
            } catch (e) {
                logger.debug('MedSched Cron Unable to update : %s', e)
            }
        })();
    }
    cron.schedule('0 0 */1 * * *', async () => {
        logger.debug('running every 60 minutes');
        for (let i = 0; i < tenantList.length; i++) { 
            (async () => {
                let req = {}
                req.userTenant = tenantList[i].tenant_name
                req.userTenantId = tenantList[i].tenant_uuid
                try {
                    await medScheduleUpdate(req)
                } catch (e) {
                    logger.debug('MedSched Cron Unable to update : %s', e)
                }
            })();
        }
    });
}

module.exports = {
    medRouter: router,
    medCron: runMedCron
}
