const checkRedisCache =
  require("../../external_services/redis/cache_service/redis_client").checkRedisCache
const logger = require("../../config/logger")

const MOCK_SCHEMA = require("../mock/trendMock").MOCK_SCHEMA

function getEwsScore(healthScoreObj) {
  // https://www.mdcalc.com/national-early-warning-score-news#next-steps
  const {
    hr,
    rr,
    temp,
    spo2,
    pain
  } = healthScoreObj


  const healthIssues = {
    HEART: "HEART",
    SPo2: "SPo2",
    Temp: "Temp",
    Lungs: "Lungs",
  }
  let ewsObj = {}
  let ewsType = {}
  let ews = 0
  if(hr == -1) {
    ews = -1
  } else if (hr < 40 || hr > 130) {
    ews += 3
    ewsType[healthIssues["HEART"]] = 3
  } else if (hr < 50 || hr > 111) {
    ews += 2
    ewsType[healthIssues["HEART"]] = 2
  } else if (hr > 91) {
    ews += 1
    ewsType[healthIssues["HEART"]] = 1
  }
  if (rr == -1) {
    ews = -1
  } else if (rr < 8 || rr > 25) {
    ews += 3
    ewsType[healthIssues["Lungs"]] = 3
  } else if (rr > 21) {
    ews += 2
    ewsType[healthIssues["Lungs"]] = 2
  } else if (rr < 12) {
    ews += 1
    ewsType[healthIssues["Lungs"]] = 1
  }
  if (temp == -1) {
    ews = -1
  } else if (temp < 95) {
    ews += 3
    ewsType[healthIssues["Temp"]] = 3
  } else if (temp < 97) {
    ews += 1
    ewsType[healthIssues["Temp"]] = 1
  } else if (temp > 103) {
    ews += 2
    ewsType[healthIssues["Temp"]] = 2
  } else if (temp > 100) {
    ews += 1
    ewsType[healthIssues["Temp"]] = 1
  }
  if (spo2 == -1) {
    ews = -1
  } else if (spo2 < 91) {
    ews += 3
    ewsType[healthIssues["SPo2"]] = 3
  } else if (spo2 < 93) {
    ews += 2
    ewsType[healthIssues["SPo2"]] = 2
  } else if (spo2 < 95) {
    ews += 1
    ewsType[healthIssues["SPo2"]] = 1
  }
  logger.debug("EWS score is ", ews, ewsType)
  ewsObj = {
    ews: ews,
    ewsType: ewsType
  }
  return ewsObj
}

async function patchTransform(patch_ref) {
  logger.debug("Patch Transformer called for structuring the data", patch_ref)
  let bundle = true
  let temp_patch_group = ''
  let patches
  //let patch_ref= {}
  if (patch_ref.length < 1) {
    // patch_ref['bundle'] = false
    return patch_ref
  }
  if (patch_ref.length == 1) {
    patch_ref['bundle'] = false
    return patch_ref
  }
  logger.debug("The patches error are ", patch_ref)
  if (patch_ref[0]["patches"].length == 0) {
    throw new Error("Patch info is not present for the patient")
  }
  let patch_group = patch_ref[0]["patches"][0]['patch_group_id']
  for (let i = 1; i < patch_ref.length; i++) {
    temp_patch_group = patch_ref[i]["patches"][0]['patch_group_id']
    // logger.debug("The Patch Group for %d is %s - First Group is %s", i, temp_patch_group, patch_group)
    if (temp_patch_group != patch_group || (!patch_group)) {
      bundle = false
      break
    }
  }
  for (let i = 0; i < patch_ref.length; i++) {
    patch_ref[i]['bundle'] = bundle
  }
}


function get_healthscoreObj(baseLinePid) {
  let HR = -1
  let RR = -1
  let Temp = -1
  let SPo2 = -1
  let motion = -1
  let Pain = -1
  let EWSBase = -1
  let PR = -1
  let PI = -1
  let Bat_ecg = -1
  let Bat_spo2 = -1
  let Bat_temp = -1
  let Bat_gw = -1
  let BPS = -1
  let BPD = -1
  let DS = -1
  let SUGAR = -1
  let lastLiveEcgTime=-1
  let lastLiveSpo2Time=-1
  let lastLiveDSTime=-1
  let lastLiveBPTime=-1
  let lastUpdatedLiveTime=-1
  let lastUpdatedTrendTime=-1
  let lastUpdatedLiveTemperatureTime = -1
  
  // Live Score & Trends are updated
  // logger.debug("The Baseline PID is",baseLinePid)
  baseLinePid = baseLinePid['pid']
  logger.debug("Consolidating HealthScoreObj for ews_map", baseLinePid)
  // BP Specific Calculation - From baseliner
  // livebps = livebp / 256
  // livebpd = livebpd % 256
  baseLinePid['livebps'] = baseLinePid['livebp'] / 256
  baseLinePid['livebpd'] = baseLinePid['livebp'] % 256

  // Last Live values
  if (baseLinePid['lastUpdatedLiveEcgTime'] != 0)
    baseLinePid['lastUpdatedLiveEcgTime'] = new Date(baseLinePid['lastUpdatedLiveEcgTime'] * 1000)
  if (baseLinePid['lastUpdatedLiveSpo2Time'] != 0)
    baseLinePid['lastUpdatedLiveSpo2Time'] = new Date(baseLinePid['lastUpdatedLiveSpo2Time'] * 1000)
  if (baseLinePid['lastUpdatedLiveDSTime'] != 0)
    baseLinePid['lastUpdatedLiveDSTime'] = new Date(baseLinePid['lastUpdatedLiveWeightTime'] * 1000)
  if (baseLinePid['lastUpdatedLiveBPTime'] != 0)
    baseLinePid['lastUpdatedLiveBPTime'] = new Date(baseLinePid['lastUpdatedLiveBPTime'] * 1000)
  if (baseLinePid['lastUpdatedLiveTemperatureTime'] != 0)
    baseLinePid['lastUpdatedLiveTemperatureTime'] = new Date(baseLinePid['lastUpdatedLiveTemperatureTime'] * 1000)
  if (baseLinePid['lastUpdatedLiveTime'] != 0) 
    baseLinePid['lastUpdatedLiveTime'] = new Date(baseLinePid['lastUpdatedLiveTime'] * 1000)
  if (baseLinePid['lastUpdatedTrendTime'] != 0)
    baseLinePid['lastUpdatedTrendTime'] = new Date(baseLinePid['lastUpdatedTrendTime'] * 1000)

  

  // logger.debug("The Baseline outside PID is", baseLinePid)
  baseLinePid['livehr'] >= 999 ? baseLinePid['livehr'] = -1 : baseLinePid['livehr'];
  baseLinePid['livebps'] >= 999 ? baseLinePid['livebps'] = -1 : baseLinePid['livebps'];
  baseLinePid['livebpd'] >= 999 ? baseLinePid['bplivebpd'] = -1 : baseLinePid['livebpd'];
  baseLinePid['liveweight'] >= 999 ? baseLinePid['liveweight'] = -1 : baseLinePid['liveweight'];
  baseLinePid['livesugar'] >= 999 ? baseLinePid['livesugar'] = -1 : baseLinePid['livesugar'];

  baseLinePid['ews'] >= 999 ? baseLinePid['ews'] = -1 : baseLinePid['ews'];
  baseLinePid['liverr'] >= 999 ? baseLinePid['liverr'] = -1 : baseLinePid['liverr'];
  baseLinePid['livespo2'] >= 250 ? baseLinePid['livespo2'] = -1 : baseLinePid['livespo2'];
  baseLinePid['livepr'] >= 999 ? baseLinePid['livepr'] = -1 : baseLinePid['livepr'];
  baseLinePid['livepi'] >= 999 ? baseLinePid['livepi'] = -1 : baseLinePid['livepi'];
  baseLinePid['livetemperature'] >= 999 ? baseLinePid['livetemperature'] = -1 : (baseLinePid['livetemperature'] * (9 / 5)) + 32;
  baseLinePid['batteryEcg'] >= 999 ? baseLinePid['batteryEcg'] = -1 : baseLinePid['batteryEcg'];
  baseLinePid['batteryGw'] >= 999 ? baseLinePid['batteryGw'] = -1 : baseLinePid['batteryGw'];
  baseLinePid['batteryTemp'] >= 999 ? baseLinePid['batteryTemp'] = -1 : baseLinePid['batteryTemp'];
  baseLinePid['batterySpo2'] >= 999 ? baseLinePid['batterySpo2'] = -1 : baseLinePid['batterySpo2'];

  baseLinePid['livehr'] <= -1 ? baseLinePid['livehr'] = -1 : baseLinePid['livehr'];
  baseLinePid['livebps'] <= -1 ? baseLinePid['livebps'] = -1 : baseLinePid['livebps'];
  baseLinePid['livebpd'] <= -1 ? baseLinePid['bplivebpd'] = -1 : baseLinePid['livebpd'];
  baseLinePid['liveweight'] <= -1 ? baseLinePid['liveweight'] = -1 : baseLinePid['liveweight'];
  baseLinePid['livesugar'] <= -1 ? baseLinePid['livesugar'] = -1 : baseLinePid['livesugar'];
  baseLinePid['ews'] <= -1 ? baseLinePid['ews'] = -1 : baseLinePid['ews'];
  baseLinePid['liverr'] <= -1 ? baseLinePid['liverr'] = -1 : baseLinePid['liverr'];
  baseLinePid['livespo2'] <= -1 ? baseLinePid['livespo2'] = -1 : baseLinePid['livespo2'];
  baseLinePid['livepr'] <= -1 ? baseLinePid['livepr'] = -1 : baseLinePid['livepr'];
  baseLinePid['livepi'] <= -1 ? baseLinePid['livepi'] = -1 : baseLinePid['livepi'];
  baseLinePid['livetemperature'] <= -1 ? baseLinePid['livetemperature'] = -1 : (baseLinePid['livetemperature'] * (9 / 5)) + 32;
  baseLinePid['batteryEcg'] <= -1 ? baseLinePid['batteryEcg'] = -1 : baseLinePid['batteryEcg'];
  baseLinePid['batteryGw'] <= -1 ? baseLinePid['batteryGw'] = -1 : baseLinePid['batteryGw'];
  baseLinePid['batteryTemp'] <= -1 ? baseLinePid['batteryTemp'] = -1 : baseLinePid['batteryTemp'];
  baseLinePid['batterySpo2'] <= -1 ? baseLinePid['batterySpo2'] = -1 : baseLinePid['batterySpo2'];

  baseLinePid['livehr'] ? baseLinePid['livehr'] : baseLinePid['livehr'] = -1;
  baseLinePid['livebps'] ? baseLinePid['livebps'] : baseLinePid['livebps'] = -1;
  baseLinePid['livebpd'] ? baseLinePid['bplivebpd'] : baseLinePid['livebpd'] = -1;
  baseLinePid['liveweight'] ? baseLinePid['liveweight'] : baseLinePid['liveweight'] = -1;
  baseLinePid['livesugar'] ? baseLinePid['livesugar'] : baseLinePid['livesugar'] = -1;
  baseLinePid['liverr'] ? baseLinePid['liverr'] : baseLinePid['liverr'] = -1;
  baseLinePid['livespo2'] ? baseLinePid['livespo2'] : baseLinePid['livespo2'] = -1;
  baseLinePid['livepr'] ? baseLinePid['livepr'] : baseLinePid['livepr'] = -1;
  baseLinePid['livepi'] ? baseLinePid['livepi'] : baseLinePid['livepi'] = -1;
  baseLinePid['livetemperature'] > 0 ? baseLinePid['livetemperature'] = (baseLinePid['livetemperature'] * (9 / 5)) + 32 : baseLinePid['livetemperature'] = -1;
  baseLinePid['batteryEcg'] ? baseLinePid['batteryEcg'] : baseLinePid['batteryEcg'] = -1;
  baseLinePid['batteryGw'] ? baseLinePid['batteryGw'] : baseLinePid['batteryGw'] = -1;
  baseLinePid['batteryTemp'] ? baseLinePid['batteryTemp'] : baseLinePid['batteryTemp'] = -1;
  baseLinePid['batterySpo2'] ? baseLinePid['batterySpo2'] : baseLinePid['batterySpo2'] = -1;
  baseLinePid['ews'] ? baseLinePid['ews'] : baseLinePid['ews'] = -1;


  // EWSBase = parseFloat(baseLinePid['ews']).toFixed(2)
  HR = parseFloat(baseLinePid['livehr']).toFixed(0)
  BPS = parseFloat(baseLinePid['livebps']).toFixed(0)
  BPD = parseFloat(baseLinePid['livebpd']).toFixed(0)
  SUGAR = parseFloat(baseLinePid['livesugar']).toFixed(0)
  DS = parseFloat(baseLinePid['liveweight']).toFixed(2)
  RR = parseFloat(baseLinePid['liverr']).toFixed(0)
  SPo2 = parseFloat(baseLinePid['livespo2']).toFixed(0)
  PI = parseFloat(baseLinePid['livepr']).toFixed(2)
  PR = parseFloat(baseLinePid['livepi']).toFixed(2)
  Temp = parseFloat(baseLinePid['livetemperature']).toFixed(2)
  EWSBase = baseLinePid['ews']
  Bat_ecg = parseFloat(baseLinePid['batteryEcg']).toFixed(0)
  Bat_spo2 = parseFloat(baseLinePid['batteryGw']).toFixed(0)
  Bat_temp = parseFloat(baseLinePid['batteryTemp']).toFixed(0)
  Bat_gw = parseFloat(baseLinePid['batterySpo2']).toFixed(0)
  lastLiveEcgTime = baseLinePid['lastUpdatedLiveEcgTime'] > 0 ? baseLinePid['lastUpdatedLiveEcgTime'] : baseLinePid['lastUpdatedLiveEcgTime'] = -1
  lastLiveSpo2Time = baseLinePid['lastUpdatedLiveSpo2Time'] > 0 ? baseLinePid['lastUpdatedLiveSpo2Time'] : baseLinePid['lastUpdatedLiveSpo2Time'] = -1
  lastLiveDSTime = baseLinePid['lastUpdatedLiveDSTime'] > 0 ? baseLinePid['lastUpdatedLiveDSTime'] : baseLinePid['lastUpdatedLiveDSTime'] = -1
  lastLiveBPTime = baseLinePid['lastUpdatedLiveBPTime'] > 0 ? baseLinePid['lastUpdatedLiveBPTime'] : baseLinePid['lastUpdatedLiveBPTime'] = -1
  lastUpdatedLiveTemperatureTime = baseLinePid['lastUpdatedLiveTemperatureTime'] > 0 ? baseLinePid['lastUpdatedLiveTemperatureTime'] : baseLinePid['lastUpdatedLiveTemperatureTime'] = -1
  
  lastUpdatedLiveTime = baseLinePid['lastUpdatedLiveTime'] > 0 ? baseLinePid['lastUpdatedLiveTime'] : baseLinePid['lastUpdatedLiveTime'] = -1
  lastUpdatedTrendTime = baseLinePid['lastUpdatedTrendTime'] > 0 ? baseLinePid['lastUpdatedTrendTime'] : baseLinePid['lastUpdatedTrendTime'] = -1

  let healthScoreObj = {
    hr: HR,
    rr: RR,
    temp: Temp,
    spo2: SPo2,
    pain: Pain,
    motion: motion,
    ews: EWSBase,
    bps: BPS,
    bpd: BPD,
    sugar: SUGAR,
    ds: DS,
    lastLiveEcgTime: lastLiveEcgTime,
    lastLiveSpo2Time: lastLiveSpo2Time,
    lastLiveDSTime: lastLiveDSTime,
    lastLiveBPTime: lastLiveBPTime,
    lastUpdatedTrendTime: lastUpdatedTrendTime,
    lastUpdatedLiveTime: lastUpdatedLiveTime,
    lastUpdatedLiveTemperatureTime: lastUpdatedLiveTemperatureTime
  }
  logger.debug("The Ewsmap healthScoreObj is", healthScoreObj)
  return healthScoreObj
}

async function genPatientRespData(patients) {
  let listPatient = []
  let promises = []
  let index = 0
  let baselineResult = patients[0]['baselineResult'] // Temp fix
  delete patients[0]['baselineResult']
  // logger.debug("The baseline values ", baselineResult)
  if (!baselineResult || baselineResult.length < 1) {
    logger.error("Baseline Result is empty - Which is very bad - will be sending -1 for everything", baselineResult)
    return listPatient
  }
  for (let patient of patients) {
    // tempPatient = patient
    index += 1
    promises = []
    let tempPatient = {}
    // logger.debug("patient is ", patient)
    let patch_ref = patient.patch_patient_maps || ""
    let location_ref = patient.location || ""
    
    tempPatient["demographic_map"] = patient
    let updated_patch_ref = patchTransform(patch_ref)
    tempPatient["patient_patch_map"] = updated_patch_ref
    tempPatient["location_map"] = location_ref
    let HealthStates = {
      "-1": "Unknown",
      0: "Healthy",
      10: "Low",
      30: "Medium",
      60: "High",
      80: "CRITICAL",
    }
    
    pid = patient["pid"]
    
    //  Base Line Logic
    function getBaseLine(pid, baselineResult) {
      if (!baselineResult instanceof Array){
        return { "status": false }
    }
      for (let i = 0 ; i < baselineResult.length; i++) {
        if (baselineResult[i]["patientUUID"] == pid){
          // logger.debug("The baseline matched", pid, baselineResult[i])
          return { 'pid': baselineResult[i], "status":true}
        }
      }
      return {"status":false}
    }

    
    let healthScoreObj = {}
    let baseLinePid = getBaseLine(pid, baselineResult)
    if (baseLinePid["status"]) {
      healthScoreObj = get_healthscoreObj(baseLinePid)
    }

    
    // logger.debug("Baseline values are", HR, RR, Temp, SPo2, motion, Pain)
    let state = null
    let stateScore = -1
    

    let EWS = healthScoreObj['ews'] 
    logger.debug("EWSBASE is ",EWS)
    if (EWS > 4) {
      state = HealthStates[80]
      stateScore = 80
    } else if (EWS > 3) {
      state = HealthStates[60]
      stateScore = 60
    } else if (EWS > 2) {
      state = HealthStates[30]
      stateScore = 30
    } else if (EWS > 1) {
      state = HealthStates[10]
      stateScore = 10
    } else {
      state = HealthStates["-1"]
      stateScore = "-1"
    }

    
    // Trend Mock Data
    let patientTrendData = []
    let endDate = null
    let startDate = baseLinePid['lastUpdatedLiveTime']*1000

    for (const property in MOCK_SCHEMA) {
      let trendData = {}
      trendData[property] = get_trend_data(property, startDate, endDate, baseLinePid)
      patientTrendData.push(trendData)
    }
    let consolidatedTrendsbyDT = {}
    for (let ind = 0; ind < patientTrendData.length; ind++) {
      let typeTrend = Object.keys(patientTrendData[ind])[0]
      let typeTrendData = patientTrendData[ind][typeTrend]
      for (let i = 0; i < typeTrendData.length; i++) {
        let dateVal = new Date(typeTrendData[i]['date'])
        // logger.debug("trend time is ", dateVal, typeof (dateVal), String(dateVal))
        if (!(dateVal in consolidatedTrendsbyDT))
          consolidatedTrendsbyDT[dateVal] = {}
        consolidatedTrendsbyDT[dateVal][typeTrend] = typeTrendData[i]['value']
      }
    }
    // logger.debug("The  Trend full list is", JSON.stringify(patientTrendData), JSON.stringify(consolidatedTrendsbyDT))
    
    tempPatient["consolidated_trend_map"] = consolidatedTrendsbyDT
    // logger.debug("The Mock Trend full list is", patientTrendData)
    tempPatient["trend_map"] = patientTrendData

    tempPatient["ews_map"] = healthScoreObj

    tempPatient["PatientState"] = {
      state: state,
      stateScore: stateScore,
      EWS: EWS,

    }
    // EWSType: EWSObj["ewsType"],
    listPatient.push(tempPatient)
  }
  return listPatient
}


function get_trend_data(vitalType, startDate, endDate,  baselineResult, type=0) {
  // logger.debug("Trend Mock Data", startDate, endDate, baselineResult)
  let vitalTrendScore = []
  let dates_completed = []
  let tempVitalType = MOCK_SCHEMA[vitalType]['backend_name']
  let tempVitalfloat = MOCK_SCHEMA[vitalType]['float']
  if (baselineResult[tempVitalType] === undefined)
    return []
  let tempTrendCount = (baselineResult[tempVitalType]).length
  logger.debug('THE TEMP TREND COUNT IS',tempTrendCount)
  // logger.debug("The Trend Count length of vital type %s is %s", vitalType, tempTrendCount, baselineResult[vitalType])
  // logger.debug('THE BASE LINE RESULT IS',baselineResult)
  // logger.debug('THE BASE LINE RESULT OF VITAL TYPE IS',baselineResult[vitalType])
  // logger.debug('THE BASE LINE RESULT OF TEMPVITAL TYPE IS',baselineResult[tempVitalType])

  let _time = new Date(startDate)
  _time = _time.getTime() + 15 * 60 * 1000
  _time = new Date(_time)
  if (tempTrendCount < 1)
    return [{
      "date": _time,
      "value": -1
    }]
  let _time1
  // logger.debug("Time is ",_time, startDate)
  // logger.debug("n time is", _time.getTime())
  if (baselineResult.hasOwnProperty('trendbp')) {
    baselineResult['trendbps'] = []
    baselineResult['trendbpd'] = []
    for (let ind = 0; ind < baselineResult['trendbp'].length; ind++) {

      let bps = parseFloat(baselineResult['trendbp'][ind]['valFloat'] / 256).toFixed(0)
      let bpd = parseFloat(baselineResult['trendbp'][ind]['valFloat'] % 256).toFixed(0)
      timeStamp = baselineResult['trendbp'][ind]['timeStamp']
      // logger.debug("BPS BPD", bps, bpd)
      baselineResult['trendbps'].push({ "valInt": bps, 'valFloat': bps, "timeStamp": timeStamp })
      baselineResult['trendbpd'].push({ "valInt": bpd, 'valFloat': bpd, "timeStamp": timeStamp })
    }
  }
 
  for (let i = 0; i < tempTrendCount; i++) {
    let vitalTempDict = {}
    // logger.debug("New Baseliner Value of i ", i, baselineResult[tempVitalType][tempTrendCount - (i + 1)])

    // Now we get the time from baseliner - so we can comment this
    // _time = _time.getTime() - 15 * 60 * 1000
    // _time = new Date(_time)
    // _time1 = _time.getMonth() + '-' + _time.getDate() + '-' + _time.getYear()
    // vitalTempDict["date"] = _time


    _valInt = baselineResult[tempVitalType][tempTrendCount - (i + 1)]["valInt"]
    _valFloat = baselineResult[tempVitalType][tempTrendCount - (i + 1)]["valFloat"]
    _timeStamp = baselineResult[tempVitalType][tempTrendCount - (i + 1)]["timeStamp"]

    vitalTempDict["date"] = new Date(_timeStamp * 1000)
    
    // if (baselineResult[tempVitalType][tempTrendCount - (i + 1)] >= 999 || baselineResult[tempVitalType][tempTrendCount - (i + 1)] <= -1) {
    //   vitalTempDict["value"] = -1
    // }
    if (_valInt >= 999 || _valInt <= -1 || _valFloat >= 999 || _valFloat <= -1 ) {
      vitalTempDict["value"] = -1
    } 
    
    else
      if (tempVitalfloat) {
        if (tempVitalType == 'trendtemperature') {
          baselineResult[tempVitalType][tempTrendCount - (i + 1)] = (_valFloat * (9 / 5)) + 32
        } else {
          baselineResult[tempVitalType][tempTrendCount - (i + 1)] = _valFloat
        }
        
        vitalTempDict["value"] = parseFloat(baselineResult[tempVitalType][tempTrendCount - (i + 1)]).toFixed(2);
      } else {
        baselineResult[tempVitalType][tempTrendCount - (i + 1)] = _valInt
        vitalTempDict["value"] = parseFloat(baselineResult[tempVitalType][tempTrendCount - (i + 1)]).toFixed(0);
      }

    if (!(_time1 in dates_completed) && type != 0) {
      vitalTrendScore.push(vitalTempDict)
      dates_completed.push(_time1)
    } else if(type == 0 ) {
      vitalTrendScore.push(vitalTempDict)
    }
    
  }
  return vitalTrendScore;
}

// The below functions are not used any more - used for Mock
function randomDate(start, end) {
  return new Date(
    start.getTime() +
    Math.random() * (end.getTime() - start.getTime())
  )
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

// time addition is in hours
Date.prototype.addTime = function (time) {
  var date = new Date(this.valueOf())
  date.setTime(date.getTime() + time)
  return date
}

// This is Mock Data 
//  This is currently Mock function which generates
// the Mock data for the trend for each type
// the graph data would consist of
// chart.data = [{
//       "date": "2012-01-01",
//       "value": 8
//   }, {
//       "date": "2012-01-02",
//       "value": 10
//   }];
// start_date == "06/30/2000"
function mock_get_trend_data(vitalType, startDate, endDate, trendsCount = 0) {
  logger.debug("Trend Mock Data", startDate, endDate, baselineResult)
  let vitalTrendScore = []
  min = MOCK_SCHEMA[vitalType]["min"]
  max = MOCK_SCHEMA[vitalType]["max"]
  var date1 = new Date(startDate)
  let tempDate1 = date1
  var date2 = new Date(endDate)
  var DifferenceInTime = date2.getTime() - date1.getTime()
  // To calculate the no. of days between two dates
  var DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24)
  let tempTrendCount = DifferenceInDays
  logger.debug("The days difference is ", DifferenceInDays)
  if (trendsCount != 0 && DifferenceInDays == 0) {
    tempTrendCount = trendsCount
  } else if (DifferenceInDays == 0) {
    tempTrendCount = 7
  }
  logger.debug("The tempTrendCount is ", tempTrendCount)
  for (let i = 0; i < tempTrendCount; i++) {
    let vitalTempDict = {}
    let value = Math.floor(Math.random() * (max - min + 1)) + min
    if (DifferenceInDays == 0) {
      let tempDateTime = tempDate1.addTime(3600000 * 3) //  apprx 3 hours
      logger.debug("The tempDateTime is ", tempDateTime)
      tempDate1 = tempDateTime
      vitalTempDict["date"] = tempDateTime
    } else {
      let tempDateTime = tempDate1.addDays(1)
      tempDate1 = tempDateTime
      logger.debug("The tempDateTime is ", tempDateTime)
      vitalTempDict["date"] = tempDateTime
    }
    vitalTempDict["value"] = value
    logger.debug("The Temp vital dict is", vitalTempDict)
    vitalTrendScore.push(vitalTempDict)
  }
  return vitalTrendScore
}

module.exports = {
  getEwsScore,
  genPatientRespData,
  get_trend_data,
  get_healthscoreObj
}
