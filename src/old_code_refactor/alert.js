const { 
    db_get_alert_data, 
    db_count_alert_data,
    db_edit_alert_data,
    db_add_alert_note
} = require("../dbcontrollers/alert_data.controller")

const {
    ALERT_CODE
} = require("../lib/constants/AppEnum")
const user_controller = require("../dbcontrollers/user.controller")
const db_get_user_profile = user_controller.db_get_user_profile

async function getAlertData(req, res, next) {
    try {
        const data = await db_get_alert_data(req.query)

        const count = await db_count_alert_data(req.query)
        req.apiRes = ALERT_CODE["0"]
        req.apiRes["response"] = { 
            data: data, 
            count: count
        }
    } catch (error) {
        console.log(error)
        req.apiRes = ALERT_CODE["1"]
        req.apiRes["error"] = { error: error }
    }
    return responseAPI(res, req.apiRes)
}


async function editAlertData(req, res, next) {
    try {
        if(!req.body.pratitioner){
            req.body.pratitioner = null
            req.body.isAttended = 'attended'
        }
        await db_edit_alert_data(req.body)
        req.apiRes = ALERT_CODE["0"]
        req.apiRes["response"] = { 
            data: req.body
        }
    } catch (error) {
        console.log(error)
        req.apiRes = ALERT_CODE["1"]
        req.apiRes["error"] = { error: error }
    }
    return responseAPI(res, req.apiRes)
}


async function addAlertNote(req, res, next) {
    try {
        await db_add_alert_note(req.body)
        const user = await db_get_user_profile({user_uuid: req.body.userUuid})
        req.apiRes = ALERT_CODE["0"]
        req.apiRes["response"] = { 
            data: user
        }
    } catch (error) {
        console.log(error)
        req.apiRes = ALERT_CODE["1"]
        req.apiRes["error"] = { error: error }
    }
    return responseAPI(res, req.apiRes)
}


module.exports = {
    getAlertData,
    editAlertData,
    addAlertNote
}
