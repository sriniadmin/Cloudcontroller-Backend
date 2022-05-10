var express = require("express")
var router = express.Router()
const logger = require("../../config/logger")
const patient_controller = require("../../dbcontrollers/patients.controller")
const db_patient_exist = patient_controller.db_patient_exist
const {
    db_patch_exist,
} = require("../../dbcontrollers/patch.controller")
const db_get_patch_map_list = require("../../dbcontrollers/patch_patient.controller").db_get_patch_map_list

const PATIENT_CODE = require("../../lib/constants/AppEnum").PATIENT_CODE

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

// Make it Http1.1



router.post("/push_dataee", async function (req, res, next) {

    logger.debug("Kafka received data is ", req.body["patientUUID"])
      const { Kafka } = require("kafkajs")
      const clientId = "my-app"
      const brokers = [process.env.KAFKA_BROKER+":9092"]
      const topic = req.body["patientUUID"]
      const kafka = new Kafka({ clientId, brokers }) // This should be a pool to send TODO
  logger.debug("Created kakfa handle", req.body)
  let producer;
    try{

      producer = kafka.producer()
      logger.debug("Created kakfa handle sending", producer)
    }
    catch(error) {
      logger.debug("Kafka Creation failed", error)
    }
      
      var sendMessage = async () => {
        // try {
          await producer.connect()
          await producer.send({
            topic: topic,
            messages: [
              { key: 'spo2', value: JSON.stringify(req.body) },
            ],
          })
          await producer.disconnect()

        // }
        // catch(error) {
        //   logger.debug("Error in Sending message in Ka",error)
        //   await producer.disconnect()
        // }
          
      }
      logger.debug("Kakfa Send message")
      try {
        sendMessage();
      }
      catch(error ) {
           logger.debug("Error in Sending message in Ka",error)
          await producer.disconnect()
      }
      logger.debug("Kakfa Sent Message")
  return res.status(200).json({ "pushData": "Success" })
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
  return res.status(200).json({ "discovered_devices": "Success" })
})


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
  logger.debug("Gateway Keepalive received data is ", req.body["patientUUID"])
  return res.status(200).json({"Keepalive":"Success",
      "versionName": "999.0.0",
      "versionCode": "998",
      "apkUrl": "https://mbhospital.live247.ai/mobileApk/rn-update-apk-example-3.0.1.apk",
      "forceUpdate": true
 })
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


router.post("/gateway_registeree", function (req, res, next) {
    logger.debug("gateway register req info ", req.body , req.headers)
    let tenant_id = null
    watch_OTP = req.body["userOTP"]
    logger.debug("Patient OTP is"+watch_OTP)
    db_patient_exist(tenant_id, watch_OTP,type='id')
    .then(async (patients) => {
        logger.debug("Success: Patient list is " + JSON.stringify(patients))
        tenant_id = patients.tenant_id
        let promises = []
        promises.push(db_get_patch_map_list(tenant_id, '', {'limit':100,'offset':0,'pid':patients.pid}))
        await Promise.all(promises).then(async (patch_patient_list) => {
            logger.debug("the patch patient list is ", patch_patient_list)
            let index = 0
            promises = []
            promises.push(db_patch_exist(tenant_id, patch_patient_list[0]))
            await Promise.all(promises).then((patch_device_info_list) => {
              patch_device_info_list = patch_device_info_list[0]
              logger.debug("The Patch Devices are ", patch_device_info_list)
              let device_list = []
              for (index=0; index<patch_device_info_list.length; index++) {
                let temp_device = {}
                logger.debug("Patch", patch_device_info_list[index])
                temp_device['type'] = patch_device_info_list[index][0].patch_type
                temp_device['serial_no'] = patch_device_info_list[index][0].patch_serial
                temp_device['sample_freq'] = '30s'
                temp_device['sample_count'] = 30
                temp_device['stop_sample'] = 0
                logger.debug("The Device is", temp_device)
                device_list.push(temp_device)
              }
              return res.status(200).json(
                {
                  "result":"success",
                  "device_count" : patch_patient_list[0].length,
                  "devices":device_list,
                  "patientUUID":patients["pid"]
                }
              );
            })
        })
    })
    .catch((err) => {
        logger.debug("Patient list error " + err)
        return res.status(PATIENT_CODE["1"].HttpStatus).json({
            result: PATIENT_CODE["1"].Code,
            response: {},
            error: {errMessage: PATIENT_CODE["1"].Message},
            privilege: {}
        })
    })
})

module.exports = router
