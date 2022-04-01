let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for notification_settings table",
    "$id": "notification_settings",
    "title": "notification_settings",
    "type": "object",
    "required": [
        "SettingsId",
        "Send_SMS_Before_Hours",
        "Send_Email_Before_Hours",
        "SMS_gateway_username",
        "SMS_gateway_password",
        "SMS_gateway_apikey",
        "type"
    ],
    "definitions": {
        "SettingsId": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 8388607
        },
        "Send_SMS_Before_Hours": {
            "type": "integer",
            "minimum": -8388608,
            "maximum": 8388607
        },
        "Send_Email_Before_Hours": {
            "type": "integer",
            "minimum": -8388608,
            "maximum": 8388607
        },
        "SMS_gateway_username": {
            "type": "string",
            "maxLength": 100
        },
        "SMS_gateway_password": {
            "type": "string",
            "maxLength": 100
        },
        "SMS_gateway_apikey": {
            "type": "string",
            "maxLength": 100
        },
        "type": {
            "type": "string",
            "maxLength": 50
        }
    },
    "properties": {
        "SettingsId": {
            "$ref": "#/definitions/SettingsId"
        },
        "Send_SMS_Before_Hours": {
            "$ref": "#/definitions/Send_SMS_Before_Hours"
        },
        "Send_Email_Before_Hours": {
            "$ref": "#/definitions/Send_Email_Before_Hours"
        },
        "SMS_gateway_username": {
            "$ref": "#/definitions/SMS_gateway_username"
        },
        "SMS_gateway_password": {
            "$ref": "#/definitions/SMS_gateway_password"
        },
        "SMS_gateway_apikey": {
            "$ref": "#/definitions/SMS_gateway_apikey"
        },
        "type": {
            "$ref": "#/definitions/type"
        }
    }
}
 module.exports = schema