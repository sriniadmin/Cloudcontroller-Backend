var express = require("express")
var router = express.Router()
// const logger = require("../../config/logger")
var log4js = require('log4js');
log4js.configure('./src/config/log4js-config.json');
const logger = log4js.getLogger('liveapidata');
const klogger = log4js.getLogger('liveapi');
const rlogger = log4js.getLogger('liveapiReg');

const patient_controller = require("../../dbcontrollers/patients.controller")
const redisClient = require("../../external_services/redis/cache_service/redis_client")
const { otpverify } = require("../../../src/business_logic/routes/patient")
const db_patient_exist = patient_controller.db_patient_exist
const db_check_patient_exist = patient_controller.db_check_patient_exist
const { db_patch_exist } = require("../../dbcontrollers/patch.controller")
const { db_get_patch_map_list, clear_command,
    update_keepalive } =
    require("../../dbcontrollers/patch_patient.controller")

const { PATIENT_CODE, INTERNAL_CODE } = require("../../lib/constants/AppEnum")

const global_variable = require('../../../globle-config/global-variable');
/**
 * @openapi
 *  components:
 *   schemas:
 *    gateway_config:
 *     type: object
 *     properties:
 *       patientUUID:
 *         type: string
 *         default: ""
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    gateway_keepalive:
 *     type: object
 *     properties:
 *       patientUUID:
 *         type: string
 *         default: ""
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    discovered_devices:
 *     type: object
 *     properties:
 *       Devices:
 *         type: string
 *         default: ""
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    gateway_register:
 *     type: object
 *     properties:
 *       userOTP:
 *         type: string
 *         default: ""
 */

/**
 * @openapi
 *  /liveapi/gateway/push_data:
 *   post:
 *       tags:
 *         - Gateway
 *       summary: Receive data from gateway - like watch, mobile , band etc
 *       requestBody:
 *         description: Receive data from gateway - like watch, mobile , band etc
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/gateway_config'
 *       responses:
 *         '201':
 *           description: User  Information is added.
 */

//TODO: Make it Http1.1

router.post("/push_data", async function (req, res, next) {
    logger.debug("Kafka received data is ", req.body["patientUUID"])
    const { Kafka } = require("kafkajs")
    const clientId = "my-app"
    const brokers = [process.env.KAFKA_BROKER + ":9092"]
    const topic = req.body["patientUUID"]
    const kafka = new Kafka({ clientId, brokers }) // This should be a pool to send TODO
    logger.debug("Created kakfa handle", req.body)
    let producer
    try {
        producer = kafka.producer()
        logger.debug("Created kakfa handle sending", producer)
    } catch (error) {
        logger.debug("Kafka Creation failed", error)
    }

    var sendMessage = async () => {
        // try {
        await producer.connect()
        await producer.send({
            topic: topic,
            messages: [{ key: "spo2", value: JSON.stringify(req.body) }],
        })
        await producer.disconnect()


        //Passing data to UI via socket.io
        const data = {
            time: new Date(),
            originalUrl: req.originalUrl,
            body: req.body

        }
        global_variable?.socket?.emit('SENSOR_LOG', data)

        // }
        // catch(error) {
        //   logger.debug("Error in Sending message in Ka",error)
        //   await producer.disconnect()
        // }
    }
    logger.debug("Kakfa Send message")
    try {
        sendMessage()
    } catch (error) {
        logger.debug("Error in Sending message in Ka", error)
        await producer.disconnect()
    }
    logger.debug("Kakfa Sent Message")
    return res.status(200).json({ pushData: "Success" })
})

/**
 * @openapi
 *  /liveapi/gateway/discovered_devices:
 *   post:
 *       tags:
 *         - Gateway
 *       summary: Discovered_devices from the gateway
 *       requestBody:
 *         description: Discovered_devices from the gateway - like watch, mobile , band etc
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/discovered_devices'
 *       responses:
 *         '201':
 *           description: User  Information is added.
 */

router.post("/discovered_devices", async function (req, res, next) {
    logger.debug("Gateway discovered_devices data is ", req.body)
    return res.status(200).json({ discovered_devices: "Success" })
})

function get_sensor_type(devices){
    klogger.debug("Get Sensor for ", devices)
    if(devices.includes('ECG')) // VivaLnk ECG
        return "ECG_VIVA"
    if (devices.includes('BP5S')) // Ihealth BP
        return "BP_VIVA"
    if (devices.includes('emp')) // VivaLnk Temp
        return "TEMP_VIVA"
    if (devices.includes('O2')) // Viatom_VivaLnk SPo2
        return "O2_VIVA"
    if (devices.includes('DS')) // Digital Scale
        return "DS_USD"
    if (devices.includes('Bluetooth')) // USD BP
        return "BP_USD"    
}

function parseDiscover(disData, devType) {
    // Format :1642076086#ECGRec_202016/C740057__FC:B8:D6:74:4C:1C#BP5S 11070__00:4D:32:0E:D2:69
    // 1642076041___#ECGRec_202016/C740057--FC:B8:D6:74:4C:1CStatus:false___#BP5S_004D320ED269--00:4D:32:0E:D2:69Status:true___Temp--C01.00005501
    if(!disData)
        return {}
    
    disData = disData.split("#")
    let distime = disData[0]
    let disDevices = []
    let discoverDevices = {}
    if (devType == "alpha")
        disData = disData[0].split("___")
    else
        disData = disData.slice(1)
    disData.forEach(element => {
        let devices
        if (devType == "VivaLnk") {
            devices = element.split("--")
        } 
        if (devType == "alpha") {
            devices = element.split("--")
        } 
        if (devType == "BLE") {
            devices = element.split("__")
        }
         
        let type = get_sensor_type(devices[0])
        let sn = devices[1]
        
        let disObj = {
            "type" : type,
            "sn" : sn
        }
        disDevices.push(disObj)
    });
    discoverDevices["time"] = distime
    discoverDevices["devices"] = disDevices
    return discoverDevices
}

// TODO - NOT NEEDED Function
 function parseConnected(conData) {
    let conDevices = {}
    return conData
}


/**
 * @openapi
 *  /liveapi/gateway/gateway_keepalive:
 *   post:
 *       tags:
 *         - Gateway
 *       summary: keepalive from the gateway
 *       requestBody:
 *         description: Keepalive from the gateway - like watch, mobile , band etc
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/gateway_keepalive'
 *       responses:
 *         '201':
 *           description: User  Information is added.
 */


router.post("/gateway_keepalive", async function (req, res, next) {
    klogger.debug("Gateway Keepalive received data is ", req.body["patientUUID"])
    klogger.debug("Gateway Keepalive received data is ", req.body)
    let resp = {
    }
    // let resp = { Keepalive: "Success" }
    let pid = req.body['patientUUID']
    let keepaliveHistory = {}
    let discoverHistory = {}
    let connectedGw = []
    if(!req.body['connectedDevices'] || !req.body['patientUUID']){
        return res.status(470).json({
            status: '407',
            messages: 'connectedDevices, patientUUID are required'
        })
    }
    deviceListFromGateway = req.body['connectedDevices']
    let softkill = false
    // try{
    //     if (deviceListFromGateway) {
    //         deviceListFromGateway.forEach(patch => {
    //             if (patch['type'] == 'ds' && patch['connected'] == 'false') {
    //                 patch_serial = patch['serial_no']
    //                 // ble_scan_time = Date.parse(req.body['bleLastScanTime']) //Epoch time
    //                 // const dateToday = new Date()
    //                 // currEpoch = Date.parse(dateToday)
    //                 // if ( currEpoch-ble_scan_time > )
    //                 // 1643217183#SWAN__01:B6:EC:BB:0C:C9__RSSI:-62
    //                 ble_devices = req.body['discovered_ble']
    //                 if(ble_devices.includes(patch_serial)) {
    //                     if (new Date().getMinutes() % 5 == 0) {
    //                         softkill = True
    //                     }
    //                  } else {
    //                     if (new Date().getMinutes() % 4 == 0) {
    //                         softkill = True
    //                     }
    //                  }
    //         }
    //     })
    //  } }
    // catch (error){
    //     klogger.debug("DS - softkill failed -- workaround failed")
    // }
    
	let    deviceDiscoveredListFromGateway = {}
    try {
        if (req.body.hasOwnProperty("discovered")) {
            alpha = parseDiscover(req.body['discovered'], "alpha")
            deviceDiscoveredListFromGateway["ALPHA"] = alpha
        }
        if (req.body.hasOwnProperty("discovered_ble")) {
            bleDisc = parseDiscover(req.body['discovered_ble'], "BLE")
            deviceDiscoveredListFromGateway["BLE"] = bleDisc
        }
        if (req.body.hasOwnProperty("discovered_viva")) {
            vivaDisc = parseDiscover(req.body['discovered_viva'], "VivaLnk")
            deviceDiscoveredListFromGateway["VIVA"] = vivaDisc
        }
        
        
        connectedGw = parseConnected(deviceListFromGateway)
        klogger.debug("discovered device", deviceDiscoveredListFromGateway)
    } catch ( error) {
        console.log(error)
        klogger.debug("discovered device", req.body['discovered'], req.body['discovered_ble'], req.body['discovered_viva'], error )
    }
    let promises = []
    let tenant_id 
   
    //TODO discoveredDevices needs to be checked and the mysql DB for each of the patch should be 
    // updated with the battery details etc - Better to come up with the JSON model for this.

    await db_check_patient_exist(pid)
        .then((patientResp) => {
            klogger.debug("The patient info is : ", patientResp[pid])
            tenant_id = patientResp['tenant_id']
        })

    if ( (typeof deviceListFromGateway !=='string') && (deviceListFromGateway.length > 0)) {
        for (let i = 0; i < deviceListFromGateway.length; i++) {
            sn_no = deviceListFromGateway[i]['serial_no']
            klogger.debug("SN of keepalive : ", sn_no)
            promises.push(
                db_get_patch_map_list(tenant_id, "", {
                    sn: sn_no
                })
            )
            // get the values of the keepalive and config change status and command from gateway device
            // Update the threads, version etc  from the Keepalive message.
        }
        await Promise.all(promises).then(async (patch_patient_list) => {
            klogger.debug(
                "THE  PATCH PATIENT LIST IS",
                patch_patient_list.length
            )
            let command, keepaliveTime
            for (let i = 0; i < patch_patient_list.length; i++) {

                if (patch_patient_list[i].length == 0) {
                    klogger.debug(
                        "THE  PATCH serial LIST IS Empty", i,
                        patch_patient_list[i][0]
                    )
                    continue
                }
                keepaliveHistory[patch_patient_list[i][0]['patches.patch_serial']] = patch_patient_list[i][0].keepaliveHistory
                discoverHistory[patch_patient_list[i][0]['patches.patch_serial']] = patch_patient_list[i][0].discoverDevices
                if (patch_patient_list[i][0].keepaliveTime !== undefined) {
                    keepaliveTime = patch_patient_list[i][0].keepaliveTime
                    resp['KeepaliveTime'] = keepaliveTime
                }
                if (patch_patient_list[i][0].command !== undefined) {
                    command = patch_patient_list[i][0].command
                    resp['Command'] = command
                }
                if (softkill !== undefined) {
                    resp['Command'] = 'softkill'
                }
            }
        })

        klogger.debug("The response for keepalive is", resp, keepaliveHistory.length)
        // clear the command from the patch_patient_map table for that specific gateway device
        promises = []
        for (let i = 0; i < deviceListFromGateway.length; i++) {
            sn_no = deviceListFromGateway[i]['serial_no']
            klogger.debug("Clearing the commands", sn_no)
            promises.push(
                clear_command(tenant_id, {
                    pid: pid
                })
            )
        }
        await Promise.all(promises).then(async (clear_command_list) => {
            klogger.debug("The commands are cleared : ", clear_command_list)

        })

        promises = []
        try {
            for (let i = 0; i < deviceListFromGateway.length; i++) {
                sn_no = deviceListFromGateway[i]['serial_no']
                typeDevice = deviceListFromGateway[i]['type']
                klogger.debug("Updaing keepalive data the commands", sn_no, typeDevice)
                if (typeDevice == 'gateway') {
                    let dateNow = Date()
    
                    let keepaliveGw = []
                    let discoverGw = []
    
                    let discoverData = {}
                    klogger.debug("Gateway selected commands", sn_no, typeDevice, dateNow)
                    if (keepaliveHistory[sn_no]) {
                        keepaliveGw = keepaliveHistory[sn_no]
                        if (discoverHistory[sn_no]) {
                            try {
                                discoverGw = discoverHistory[sn_no]["devices"]["discover"]
                            } catch (err) {
                                klogger("Resetting the Discoveries to Empty", err)
                                discoverGw = []
                            }
    
                        }
    
                    }
                    klogger.debug("keepalive Gw output", discoverGw)
                    // klogger.debug("keepalive Gw output",keepaliveGw)
                    // let keys = []
                    // for (var key in keepaliveGw) keys.push(Object.keys(keepaliveGw[key]))
                    // klogger.debug("keepalive data  time ", keys)
    
                    keepaliveGw.splice(0, 0, { [dateNow]: req.body });
                    keepaliveGw = keepaliveGw.slice(0, 40)
                    if (Object.getOwnPropertyNames(deviceDiscoveredListFromGateway).length > 0) {
                        deviceDiscoveredListFromGateway["GATEWAY"] = sn_no
    
                        if (discoverGw && discoverGw.length > 0) {
                            discoverGw.splice(0, 0, { [dateNow]: deviceDiscoveredListFromGateway });
                            discoverGw = discoverGw.slice(0, 3)
                        } else {
                            discoverGw = []
                            discoverGw.push({ [dateNow]: deviceDiscoveredListFromGateway })
                        }
    
                        klogger.debug("Updating Gateway discovered devices", discoverGw)
                    }
                    discoverData["cloudstatus"] = dateNow
    
                    let devicesKeep = {
                        "discover": discoverGw,
                        "connected": connectedGw
                    }
                    discoverData["devices"] = devicesKeep
                    // discoverData["devices"].push(devicesKeep)
    
                    promises.push(
                        update_keepalive(tenant_id, {
                            pid: pid,
                            sn: sn_no,
                            keepaliveData: keepaliveGw,
                            discoverData: discoverData
                        })
                    )
                }
    
            }
            await Promise.all(promises).then(async (keepalive_list) => {
                klogger.debug("The keepalive data is updated : ", keepalive_list)
    
            })
        } catch (error) {
            console.log(error)
        }
    }
    else{
        resp.response = 'Invalid data of connectedDevices'
    }
    // the response from the keepalive should be stored in keepalive_history - as last 50 entries only
    
    klogger.debug("The keepalive response is", resp)
    resp
       return res.status(200).json(resp)
})




/**
 * @openapi
 *  /liveapi/gateway/gateway_register:
 *   post:
 *       tags:
 *         - Gateway
 *       summary: Register a new gateway - like watch, mobile , band etc
 *       requestBody:
 *         description: Register a new gateway - like watch, mobile , band etc
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/gateway_register'
 *       responses:
 *         '201':
 *           description: User  Information is added.
 */



router.post("/gateway_register", async function (req, res, next) {
    rlogger.debug("gateway register req info ", req.body, req.headers)
    let tenant_id = req.body.tenant_id
    watch_OTP = req.body["userOTP"]
    watch_imei = req.body["IMEI"]
    oldPid = req.body["pid"]
    rlogger.debug("Patient OTP is" ,req.body, watch_OTP, typeof watch_OTP, oldPid, watch_imei)
    let otpVal
    if(watch_OTP) {
        otpVal = await otpverify(watch_OTP)
        // rlogger.debug("THE OTPVAL PID IS", otpVal)
        if (!otpVal) {
            rlogger.debug("THE OTP DOES NOT MATCH")
            res.status(470).json({ error: "Please provide the valid OTP" });
            return next()
        }
    } else if (watch_imei) {
        let params={}
        params['sn'] = watch_imei
        otpVal = await db_get_patch_map_list(tenant_id,"",params)
        rlogger.debug("THE IMEIVAL PID IS", otpVal)
        if (!otpVal) {
            logger.debug("THE IMEI DOES NOT MATCH")
            res.status(470).json({ error: "Please provide the valid IMEI" });
            return next()
        }
        if(otpVal.length > 0) {
            otpVal = otpVal[0]["pid"]
        }
            
        rlogger.debug("THE IMEIVAL PID IS", otpVal)
    } else {
        // This is when the newConfig is sent to Gateway as part of keepalive
        // The gateway would kill itself and send the oldPid back as part of register message
        // The next steps remain same of fetching the patient details and getting the new config to gateway
        otpVal = oldPid
    }
    db_patient_exist(tenant_id, otpVal)
        .then(async (patients) => {
            rlogger.debug("Success: Patient list is " + JSON.stringify(patients))
            tenant_id = patients.tenant_id
            let promises = []
            promises.push(
                db_get_patch_map_list(tenant_id, {
                    limit: 100,
                    offset: 0,
                    pid: patients.pid,
                })
            )
            await Promise.all(promises).then(async (patch_patient_list) => {

                patch_patient_list = patch_patient_list[0]

                let index = 0
                promises = []
                promises.push(db_patch_exist(tenant_id, patch_patient_list[0]))
                await Promise.all(promises).then((patch_device_info_list) => {

                    let device_list = []
                    for (
                        index = 0;
                        //index1 < patch_device_info_list.length;
                        index < patch_patient_list.length;
                        index++
                    ) {
                        let temp_device = {}

                        // rlogger.debug("Patch", patch_patient_list[index])
                        temp_device["type"] =
                            patch_patient_list[index].patches[0]["patch_type"]
                        temp_device["serial_no"] =
                            patch_patient_list[index].patches[0]["patch_serial"]
                        temp_device["mac_address"] =
                            patch_patient_list[index].patches[0]["patch_mac"]
                        temp_device["config"] = patch_patient_list[index].config
                        device_list.push(temp_device)
                    }
                    return res.status(200).json({
                        result: "success",
                        device_count: patch_patient_list[0].length,
                        devices: device_list,
                        patientUUID: patients["pid"],
                        tenant: tenant_id,                        
                    })
                })
            })
        })
        .catch((err) => {
            rlogger.debug("Patient list error " + err)
            return res.status(PATIENT_CODE["1"].HttpStatus).json({
                result: PATIENT_CODE["1"].Code,
                response: {},
                error: { errMessage: PATIENT_CODE["1"].Message },
                privilege: {},
            })
        })
})

module.exports = router
