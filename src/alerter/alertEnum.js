require('dotenv').config()

let SYSTEM_ALERT_CODE = {
    "1": {
        resource: 'system',
        event: 'eventname',
        environment: 'Production',
        service: [
            "live247.ai"
        ],
        text: `description`,
        severity: 'normal',
        group: 'web'
    }
}

module.exports = SYSTEM_ALERT_CODE
