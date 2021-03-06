//a-z standard packages
const express = require("express");
const got = require("got");
const router = express.Router();
const { systemAlertHandler } = require("../../dbcontrollers/systemAlert.controller")
const { systemStatusHandler } = require("../../dbcontrollers/systemAlertStatus.controller")
const { apiFinalProcess } = require("../../middleware/apiFinalResponse")

//a-z custom modules
const logger = require("../../config/logger");

//a-z module constants
const ALERTA = "http://" + process.env.ALERTA + ":8999/"; //XXX - move this to controllers
const ALERTS_CODE = require("../../lib/constants/AppEnum").ALERTS_CODE

const { dbOutput_JSON } = require("../../utils/dbUtils/dbUtils")
const patient_controller = require("../../dbcontrollers/patients.controller")
const db_get_patient_list = patient_controller.db_get_patient_list

async function processAlerts(alerts) {
	let generatedResponse = []
	for (let elem of alerts) {
		try {
			logger.debug("Alert detail URL: ", elem.href);
			let insertResponse = got(elem.href)
			generatedResponse.push(insertResponse)
		} catch (error) {
			logger.error(error);
		}
	}
	resp = await Promise.all(generatedResponse);
	return resp;// returns Promise, this is only done to await for Promise.All
}

async function getPatientInfo(req, res, pid, al) {
	let dBqueryParam = {}
	dBqueryParam.pid = pid;
	dBqueryParam.limit = 1;
	dBqueryParam.offset = 0;
	patients = null
	try {
		patients = await db_get_patient_list(req.userTenantId, req.userName, dBqueryParam)
		patients = dbOutput_JSON(patients)
		if (patients.length > 0) {
			if (al) {
				let _p = patients[0]
				al['pName'] = _p.title + ' ' + _p.fname + ' ' + _p.lname
				//al['pLocn'] = _p.bed
				al['mr'] = _p.med_record
			}
		}
		return patients[0]
	} catch (e) {
		req.apiRes = ALERTS_CODE["1"]
		logger.debug("Exception : %s", e)
		return null
	}
}

/**
 * @openapi
 *  /api/alerts/:
 *   get:
 *       tags:
 *         - Alerts
 *       summary: Alerts
 *       responses:
 *         '201':
 *           description: Alerts for the system and specific patient.
 *       parameters:
 *          - in: query
 *            name: limit
 *            default: 10
 *            schema:
 *               type: integer
 *            description: The number of items to return
 *          - in: query
 *            name: offset
 *            default: 0
 *            schema:
 *               type: integer
 *            description: The number of items to skip before starting to collect the result set
 *          - in: query
 *            name: pid
 *            schema:
 *               type: string
 *            description: PID as filter
 *          - in: query
 *            name: filter
 *            schema:
 *               type: string
 *            description: Filter for doctor's name.
 *          - in: query
 *            name: status
 *            schema:
 *               type: string
 *            description: Filter by alert status open/close.
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
 */
router.get("/", function (req, res, next) {
	logger.debug("Alerts Params", req.params);
	logger.debug("Alerts Query", req.query);

	(async () => {
		try {
			let query = ALERTA + 'alerts';
			let and = false
			let drFilter = undefined;
			let state = undefined;
			let pInfo = undefined

			if (req.query.hasOwnProperty('pid')) {
				query = query + '?resource=' + req.query.pid;
				and = true
				pInfo = await getPatientInfo(req, res, req.query.pid, null)
			}

			if (req.query.hasOwnProperty('limit')) {
				if (and) {
					query = query + '&'
				} else {
					query = query + '?'
				}
				query = query + 'page-size=' + req.query.limit;
				and = true
			}

			if (req.query.hasOwnProperty('offset')) {
				if (and) {
					query = query + '&'
				} else {
					query = query + '?'
				}
				let pageNum = parseInt(req.query.offset) + 1
				query = query + 'page=' + pageNum;
				and = true
			}

			if (req.query.hasOwnProperty('from')) {
				if (and) {
					query = query + '&'
				} else {
					query = query + '?'
				}
				query = query + 'from-date=' + req.query.from;
				and = true
			}

			if (req.query.hasOwnProperty('to')) {
				if (and) {
					query = query + '&'
				} else {
					query = query + '?'
				}
				query = query + 'to-date=' + req.query.to;
				and = true
			}

			if (req.query.hasOwnProperty('status')) {
				state = req.query.status
			}


			if (req.query.hasOwnProperty('filter')) {
				drFilter = req.query.filter
			}

			logger.debug("The alert query is", query);
			const response = await got(query);
			let resp = JSON.parse(response.body);
			let alertResp = {
				num: 0,
				status: "error",
				alerts: []
			};
			logger.debug("Alerts %d", resp.alerts.length);
			if (resp.alerts.length) {
				alertResp.num = resp.alerts.length;

				let promisesArray = [];
				for (let i = 0; i < resp.alerts.length; i++) {
					let v = resp.alerts[i]

					if (drFilter && !v.tags.includes(drFilter)) {
						alertResp.num = alertResp.num - 1
						continue
					}

					if (state && (state != v.status)) {
						alertResp.num = alertResp.num - 1
						continue
					}
					let al = {
						id: v.id,
						type: v.event,
						value: v.value,
						status: v.status,
						tags: v.tags,
						text: v.text,
						count: v.duplicateCount,
						firstRcvTm: v.createTime,
						lastRcvTm: v.lastReceiveTime
					};
					if (!req.query.hasOwnProperty('pid')) {
						al['pid'] = v.resource
						let patientInfo = getPatientInfo(req, res, v.resource, al)
						promisesArray.push(patientInfo)
					} else if (pInfo != undefined) {
						al['pName'] = pInfo.title + ' ' + pInfo.fname + ' ' + pInfo.lname
						al['mr'] = pInfo.med_record
					}
					alertResp.alerts.push(al);
				};
				try {
					let values = await Promise.all(promisesArray)
				} catch (err) {
					logger.error("Alert Status Promise All: ", err)
				}

				alertResp.status = "ok";
				return res.status(ALERTS_CODE["2"].HttpStatus).json({
					result: ALERTS_CODE["2"].Code,
					response: { "alerts": [alertResp] },
					error: {},
					privilege: {}
				})
			} else {
				logger.error("invalid request");
				return res.status(ALERTS_CODE["2"].HttpStatus).json({
					result: ALERTS_CODE["2"].Code,
					response: { "alerts": [alertResp] },
					error: {},
					privilege: {}
				})
			}
		} catch (err) {
			logger.debug(err);
			return res.status(ALERTS_CODE["1"].HttpStatus).json({
				result: ALERTS_CODE["1"].Code,
				response: {},
				error: { errMessage: ALERTS_CODE["1"].Message + err },
				privilege: {}
			})
		}
	})();
});

router.get("/:alert/status", function (req, res, next) {
	logger.debug("Alerts Params", req.params);
	logger.debug("Alerts Query", req.query);

	(async () => {
		try {
			if (req.params.alert) {
				let alertResp = {
					status: "error"
				};
				query = ALERTA + 'api/alert/' + req.params.alert;
				logger.debug(query);
				const response = await got(query);
				let v = JSON.parse(response.body);
				v = v['alert']
				let al = {
					id: v.id,
					pid: v.resource,
					type: v.event,
					value: v.value,
					status: v.status,
					tags: v.tags,
					text: v.text,
					count: v.duplicateCount,
					firstRcvTm: v.createTime,
					lastRcvTm: v.lastReceiveTime
				};
				alertResp['alert'] = al;
				alertResp.status = "ok";
				return res.status(ALERTS_CODE["2"].HttpStatus).json({
					result: ALERTS_CODE["2"].Code,
					response: { "alerts": [alertResp] },
					error: {},
					privilege: {}
				})
			}
		} catch (err) {
			logger.debug(error.response);
			return res.status(ALERTS_CODE["1"].HttpStatus).json({
				result: ALERTS_CODE["1"].Code,
				response: {},
				error: { errMessage: ALERTS_CODE["1"].Message + err },
				privilege: {}
			})
		}
	})();
})


router.post("/:alert/status", function (req, res, next) {
	logger.debug("Alerts Status Post Params", req.params);
	logger.debug("Alerts Status Post Query", req.query);
	logger.debug("Alerts Status Post Body", req.body);

	(async () => {
		try {
			if (req.params.alert) {
				let alertResp = {
					status: "error"
				};
				let query = ALERTA + 'alert/' + req.params.alert + '/status'
				logger.debug(query)
				const resp = await got.put(query, {
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(req.body)
				});
				logger.debug("Status Post Response", resp);
				alertResp.status = "ok";
				return res.status(ALERTS_CODE["2"].HttpStatus).json({
					result: ALERTS_CODE["2"].Code,
					response: { "alerts": [alertResp] },
					error: {},
					privilege: {}
				})
			}
		} catch (err) {
			logger.debug(err.response);
			return res.status(ALERTS_CODE["1"].HttpStatus).json({
				result: ALERTS_CODE["1"].Code,
				response: {},
				error: { errMessage: ALERTS_CODE["1"].Message + err },
				privilege: {}
			})
		}
	})();
})

router.post("/:alert/tag", function (req, res, next) {
	logger.debug("Alerts Tag Post Params", req.params);
	logger.debug("Alerts Tag Post Query", req.query);
	logger.debug("Alerts Tag Post Body", req.body);

	(async () => {
		try {
			if (req.params.alert) {
				let alertResp = {
					status: "error"
				};
				let query = ALERTA + 'alert/' + req.params.alert + '/tag'
				logger.debug(query)
				const resp = await got.put(query, {
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(req.body)
				});
				logger.debug("Status Tag Response", resp);
				alertResp.status = "ok";
				return res.status(ALERTS_CODE["2"].HttpStatus).json({
					result: ALERTS_CODE["2"].Code,
					response: { "alerts": [alertResp] },
					error: {},
					privilege: {}
				})
			}
		} catch (err) {
			logger.debug(err.response);
			return res.status(ALERTS_CODE["1"].HttpStatus).json({
				result: ALERTS_CODE["1"].Code,
				response: {},
				error: { errMessage: ALERTS_CODE["1"].Message + err },
				privilege: {}
			})
		}
	})();
})

/**
* @openapi
*  /api/alerts/info:
*   get:
*       tags:
*         - Alerts
*       summary: System Filter
*       responses:
*         '200':
*           description: Alerts for the system.
*       parameters:
*          - in: query
*            name: getAll
*            schema:
*               type: boolean
*            description: Fetch all alerts
*          - in: query
*            name: resource
*            schema:
*               type: string
*            description: Filter by resource
*          - in: query
*            name: group
*            schema:
*               type: string
*            description: Filter by group
*          - in: query
*            name: service
*            schema:
*               type: string
*            description: Filter by service
*          - in: query
*            name: severity
*            schema:
*               type: string
*            description: Filter by severity
*          - in: query
*            name: event
*            schema:
*               type: string
*            description: Filter by event
*          - in: query
*            name: origin
*            schema:
*               type: string
*            description: Filter by origin
*          - in: query
*            name: limit
*            schema:
*               type: integer
*            description: set page limit
*          - in: query
*            name: offset
*            schema:
*               type: integer
*            description: set page offset
*/

router.get("/info", systemAlertHandler, apiFinalProcess)

/**
* @openapi
*  /api/alerts/systemStatus:
*   post:
*       tags:
*         - Alerts
*       summary: System Filter
*       responses:
*         '200':
*           description: Alerts for the system.
*       parameters:
*          - in: query
*            name: id
*            schema:
*               type: string
*            description: id of the alert.
*          - in: query
*            name: status
*            schema:
*               type: string
*            description: new value for status.
*/

router.post("/systemStatus", systemStatusHandler, apiFinalProcess)

module.exports = router;
