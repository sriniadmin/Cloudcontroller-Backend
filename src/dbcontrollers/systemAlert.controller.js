const axios = require('axios')
require('dotenv').config()

async function systemAlertHandler(req, res, next) {
    let options = {
        method: 'get',
    }
    let response
    let ALERTA = "http://" + process.env.ALERTA + ":8999/"

    let queryObj = req.query
    let and = false
    try {
        //functionality to get all alerts
        if (queryObj.getAll) {
            options.url = `${ALERTA}alerts`
        }

        //functionality to get alerts based on filter
        if (queryObj.resource) {
            options.url = `${ALERTA}alerts?resource=${queryObj.resource}`
            and = true
        }
        if (queryObj.group) {
            if (and) {
                options.url += `&group=${queryObj.group}`
            }
            else {
                options.url = `${ALERTA}alerts?group=${queryObj.group}`
                and = true
            }
        }
        if (queryObj.service) {
            if (and) {
                options.url += `&service=${queryObj.service}`
            }
            else {
                options.url = `${ALERTA}alerts?service=${queryObj.service}`
                and = true
            }
        }
        if (queryObj.severity) {
            if (and) {
                options.url += `&severity=${queryObj.severity}`
            }
            else {
                options.url = `${ALERTA}alerts?severity=${queryObj.severity}`
                and = true
            }
        }
        if (queryObj.event) {
            if (and) {
                options.url += `&event=${queryObj.event}`
            }
            else {
                options.url = `${ALERTA}alerts?event=${queryObj.event}`
                and = true
            }
        }
        if (queryObj.origin) {
            if (and) {
                options.url += `&origin=${queryObj.origin}`
            }
            else {
                options.url = `${ALERTA}alerts?origin=${queryObj.origin}`
                and = true
            }
        }
        if (queryObj.limit) {
            if (and) {
                options.url += `&page-size=${queryObj.limit}`
            }
            else {
                options.url += `?page-size=${queryObj.limit}`
            }

        }
        if (queryObj.offset) {
            if (and) {
                options.url += `&page=${queryObj.offset}`
            }
            else {
                options.url += `?page=${queryObj.offset}`
            }
        }

        //utility parameters
        if (and) {
            options.url += `&sort-by=createTime`
        }
        else {
            options.url += `?sort-by=createTime`
        }


        response = await axios(options)
        // alertText = response.data['alerts'][0]['text']
        // console.log(alertText)
        res.status(200)
        // res.send(JSON.stringify(alertText, null, 2))
        res.send(JSON.stringify(response.data, null, 2))
    }
    catch (err) {
        res.send(err.message)
        console.log(err.message)
        return next()
    }
}

module.exports = { systemAlertHandler }