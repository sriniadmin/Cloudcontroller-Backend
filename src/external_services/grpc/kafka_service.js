const { sensorClient, baselineClient } = require('./grpc_lib')

const logger = require("../../config/logger")

const { InfluxDB, FluxTableMetaData } = require('@influxdata/influxdb-client')
const INFLUX_SERVER = process.env.INFLUX_SERVER
const INFLUX_SERVER_PORT = process.env.INFLUX_SERVER_PORT

const token = process.env.INFLUX_TOKEN
const org = "test_org"
const url = "http://" + INFLUX_SERVER + ":" + INFLUX_SERVER_PORT



function patientRegisterGRPC(grpcJSONObj) {
    patientUUID = grpcJSONObj["patientUUID"]
    tenantUUID = grpcJSONObj["tenantUUID"]
    let newPatient = {
        patientUUID: patientUUID,
        tenantUUID: tenantUUID
    }
    logger.debug('The PATIENT UUID IS', patientUUID)

    sensorClient.RegisterPatient(newPatient, (error, patient) => {
        if (!error) {
            logger.debug('successfully created topic ', patientUUID)
            logger.debug(patient)
        } else {
            logger.error("Register Patient to GRPC failed ", error)
        }
    })
}

async function patientInventory(patientInventoryJSON) {
    pgNumEntries = patientInventoryJSON["limit"]
    pgIdx = patientInventoryJSON["offset"]
    duration = patientInventoryJSON["duration"] ? patientInventoryJSON["duration"] : 3
    tenantUUID = patientInventoryJSON["tenantUUID"]
    duration = 3
    patientUUIDList = patientInventoryJSON["patientUUIDList"]
    let newPatientInventory = {
        pgNumEntries: pgNumEntries-1,
        pgIdx: pgIdx,
        duration: duration,
        tenantUUID: tenantUUID,
        patientUUIDList: patientUUIDList
    }
    logger.debug('The PATIENT  IS', newPatientInventory)
    return new Promise((resolve, reject) => {
        baselineClient.GetSortedTrendsPatient(newPatientInventory, (error, patientList) => {
            if (!error) {
                logger.debug('successfully fetched patient Inventory ')
                // logger.debug(patientList)
                let tempOut = { 'status':0,'result': patientList }
                resolve(tempOut)
                // return { '0': patientList }
            } else {
                logger.error("GetSortedTrendsPatient  to GRPC failed ", error)
                let tempOut = { 'status': 1, 'result': error }
                resolve(tempOut)
                // return { '1': error }
            }
        })
    })
}

async function patientDetailsGRPC(patientDetailJSON) {
    let newPatientInventory = {
        patientUUID: patientDetailJSON['pid'],
        duration: 3,
        tenantUUID: patientDetailJSON['tenantUUID'],
    }
    logger.debug('The PATIENT  IS', newPatientInventory)
    return new Promise((resolve, reject) => {
        baselineClient.GetTrendsPatient(newPatientInventory, (error, patientList) => {
            if (!error) {
                logger.debug('successfully fetched patient details ')
                // logger.debug(patientList)
                let tempOut = { 'status': 0, 'result': patientList }
                resolve(tempOut)
                // return { '0': patientList }
            } else {
                logger.error("GetTrendsPatient  to GRPC failed ", error)
                let tempOut = { 'status': 1, 'result': error }
                resolve(tempOut)
                // return { '1': error }
            }
        })
    })
}


function patientDeRegisterGRPC(grpcJSONObj) {
    patientUUID = grpcJSONObj["patientUUID"]
    let newPatient = {
        patientUUID: patientUUID,
    }

    sensorClient.DeRegisterPatient(newPatient, (error, patient) => {
        if (!error) {
            logger.debug('successfully deleted patient topic ', patientUUID)
            logger.debug(patient)
        } else {
            logger.error("DeRegister Patient to GRPC failed ", error)
        }
    })
}


function influxGetEcgData(pid, start, stop, motion, limit) {

        const queryApi = new InfluxDB({url, token}).getQueryApi(org) // TODO : Can this be connection pool ?
        // motion can be 0 to 3 
        // 0 ->  motion ; 1 ->  standing; 2-> bending ; 3-> sleeping;
        let motionStr = ''
        if (motion && motion != -1) {
                motionStr = '|> filter(fn: (r) => r.motion == '+motion+')'
        }
        
        let limitStr = motionStr+''
        if (limit != undefined) {
                limitStr=limitStr + ' |> limit(n:'+limit+')'
        } else {
          limitStr = limitStr + ' |> limit(n:10)'
        }

        let range = 'range(start: ' + start + ')'
        if (stop && stop != 0) {
                range = 'range(start: ' + start +', stop: ' + stop + ')'
        }

        const fluxQuery =
        'from(bucket:"emr_dev") |>' + range + '|> filter(fn: (r) => r._measurement == "'+pid+'_ecg" ) |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")'+limitStr
        logger.debug("The fluxQuery is ",fluxQuery)
        let out = new Array();
        // Execute query and receive table metadata and rows.
        // https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/
        return new Promise( (resolve, reject) => {
          queryApi.queryRows(fluxQuery, {
          next(row, tableMeta) {

                const o = tableMeta.toObject(row)
                logger.debug(o)
                let oj = {
                    time: o._time,
                    ecg: o.ecg,
                    motion: o.motion,
                    hrMin: o.hrMin,
                    hrMax: o.hrMax,
                    avgRR: o.AvgRR,
                    spo2: o.spo2,
                    temperature: o.temperature,
                    pi: o.pi,
                    pr: o.pr
                }                //oF = JSON.stringify(o, null, 2)
                out.push(oj)
            },
            error(error) {
                logger.debug(error)
                logger.debug('\nFinished ERROR')
            },
            complete() {
                // console.log(out)
                resolve(out)
                logger.debug('\nFinished SUCCESS')
            },
        })
    })
    // return out
}



function influxGetReportData(pid, start, stop) {

    const queryApi = new InfluxDB({ url, token }).getQueryApi(org) // TODO : Can this be connection pool ?
    // motion can be 0 to 3 
    // 0 ->  motion ; 1 ->  standing; 2-> bending ; 3-> sleeping;
    

    let range = 'range(start: ' + start + ')'
    if (stop && stop != 0) {
        range = 'range(start: ' + start + ', stop: ' + stop + ')'
    }

    const fluxQuery =
        // 'from(bucket:"emr_dev") |>' + range + '|> filter(fn: (r) => r._measurement == "' + pid + '_ecg" ) |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")' + limitStr
    'from(bucket:"emr_dev") |>'  + range + ' |> filter(fn: (r) => r._measurement == "' + pid + '")'
    logger.debug("The fluxQuery is ", fluxQuery,queryApi)
    let out = new Array();
    let array=[]
    // Execute query and receive table metadata and rows.
    // https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/
    return new Promise((resolve, reject) => {
        queryApi.queryRows(fluxQuery, {
            next(row, tableMeta) {

                const o = tableMeta.toObject(row)
                //array=[]
                logger.debug(o)
                // logger.debug('the values are',o['_value'],typeof(o['_value'],o['_value']["liverr"]))
                // logger.debug('THE LIVE RR VALUE IS',o['_value']["liverr"],o._livetemperature)
                // logger.debug('the  JSON values are',JSON.parse(JSON.stringify(o['_value'])))


                // array.push(o['_value'])
                // logger.debug('THE ARRAY IS',array)
                // logger.debug('THE ARRAY VALUES ARE',array[1],array['liverr'])
                //logger.debug('THE LIVERR VALUE IS',o['_value']['_liverr'],o['liverr'],o._liverr,o['liverr'],o['_liverr'])
                ////New
                let epoch_time = new Date(o._time).getTime() / 1000

                let oj = {   // Fix this JSON
                    time: o._time,
                    lastUpdatedTrendTime: epoch_time,
                    lastUpdatedLiveTime: epoch_time,
                    patientUUID: pid,
                    liverr: [],
                    livehr: [],
                    trendhr: [],
                    livespo2: [],
                    livetemperature: [],
                    livepi: [],
                    livepr: [],
                    trendrr: [],
                    trendspo2: [],
                    trendews: [],
                    trendpi: [],
                    trendpr: [],
                    trendtemperature: [],
                }        
                let z = o['_value']
                z = [{ "valInt": z, 'valFloat': z, "timeStamp": epoch_time }]
                switch (o['_field']) {
                    
                    case 'SPO2':{
                        oj['livespo2'] = z
                        oj['trendspo2'] = z
                        out.push(oj)
                        break
                    }

                    case 'PR': {
                        oj['livepr'] = z
                        oj['trendpr'] = z
                        out.push(oj)
                        break
                    }
                    case 'TEMPERATURE' : {
                        oj['livetemperature'] = z
                        oj['trendtemperature'] = z
                        out.push(oj)
                        break
                    }     
                }
                // let y = x.replace(/\\n/g, '')
                // logger.debug('THE Y VALUE IS',y)
                // let z = JSON.parse(y)
                // logger.debug('THE FINAL VALUE IS',z,z.liverr)
                // let oj = {   // Fix this JSON
                //     time: o._time,
                //     lastUpdatedTrendTime: z.lastUpdatedTrendTime,
                //     lastUpdatedLiveTime: z.lastUpdatedLiveTime,
                //     patientUUID: pid,
                //     liverr: z.liverr,
                //     livehr: z.livehr,
                //     trendhr: z.trendhr,
                //     livespo2: z.livespo2,
                //     livetemperature: z.livetemperature,
                //     livepi: z.livepi,
                //     livepr: z.livepr,
                //     trendrr: z.trendrr,
                //     trendspo2: z.trendspo2,
                //     trendews: z.trendews,
                //     trendpi: z.trendpi,
                //     trendpr: z.trendpr,
                //     trendtemperature: z.trendtemperature,
                // }          
             
                // out.push(oj)
            },
            error(error) {
                logger.debug(error)
                logger.debug('\nReport Finished ERROR')
            },
            complete() {
                // console.log(out)
                resolve(out)
                logger.debug('\nReport Finished SUCCESS')
            },
        })
    })
    // return out
}

// influxGetEcgData('patientcaa36e30-6f0a-4758-9dbd-e9e4a569d2ea', '2020-10-06T18:53:10Z', '2020-10-06T18:53:21Z')


module.exports = { patientRegisterGRPC, patientDeRegisterGRPC, influxGetEcgData, patientInventory, patientDetailsGRPC, influxGetReportData }
