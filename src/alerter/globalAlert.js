const axios = require('axios')
const logger = require('../config/logger')
require('dotenv').config()

const alerter = async ({ url, resource, event, environment, severity, correlate, status, service, group,
    value, text, tags, attributes, origin, type, createTime, timeout, rawData } = {}) => {

    let arguments = {}
    let customUrl = url || `http://${process.env.ALERTA}:8999/alert`
    let response

    //Check parameters and append to data dictionary if they exist
    if (resource) {
        arguments.resource = resource
    }
    else {
        logger.debug('error : resource is required')
        return
    }
    if (event) {
        arguments.event = event
    }
    else {
        logger.debug('error : event is required')
        return
    }
    if (environment) {
        arguments.environment = environment
    }
    else {
        logger.debug('error : environment is required')
        return
    }
    if (service) {
        arguments.service = service
    }
    else {
        logger.debug('error : service is required')
        return
    }
    { severity && (arguments.severity = severity) }
    { correlate && (arguments.correlate = correlate) }
    { status && (arguments.status = status) }
    { group && (arguments.group = group) }
    { value && (arguments.value = value) }
    { text && (arguments.text = text) }
    { tags && (arguments.tags = tags) }
    { attributes && (arguments.attributes = attributes) }
    { origin && (arguments.origin = origin) }
    { type && (arguments.type = type) }
    { createTime && (arguments.createTime = createTime) }
    { timeout && (arguments.timeout = timeout) }
    { rawData && (arguments.rawData = rawData) }

    // logger.debug(arguments)

    //Pass in data to dataString 
    const headers = {
        'Content-type': 'application/json'
    }

    let dataString = JSON.stringify(arguments);

    // logger.debug(dataString)

    var options = {
        method: 'post',
        url: customUrl,
        headers: headers,
        data: dataString
    };

    response = await axios(options)

    // logger.debug(JSON.stringify({
    //     "options": options,
    //     "Status Code": response.status,
    //     "Message": "Alert Created",
    //     "Response": response.data
    // }, null, 2))

    // logger.debug(JSON.stringify({
    //     "Description": arguments.text,
    //     "Alert Resource": arguments.resource,
    //     "Event Name": arguments.event,
    //     "Service": arguments.service
    // }, null, 2))

    // logger.debug(JSON.stringify(response.data, null, 2))

    return response.data
}

module.exports = alerter