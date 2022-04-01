let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for notification_log table",
    "$id": "notification_log",
    "title": "notification_log",
    "type": "object",
    "required": [
        "iLogId",
        "pid",
        "sms_gateway_type",
        "smsgateway_info",
        "email_sender",
        "email_subject",
        "type",
        "pc_eventDate",
        "pc_endDate",
        "pc_startTime",
        "pc_endTime",
        "dSentDateTime"
    ],
    "definitions": {
        "iLogId": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "pc_eid": {
            "type": "integer",
            "minimum": 0,
            "maximum": 3.094850098213451e+26,
            "default": null
        },
        "sms_gateway_type": {
            "type": "string",
            "maxLength": 50
        },
        "smsgateway_info": {
            "type": "string",
            "maxLength": 255
        },
        "message": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "email_sender": {
            "type": "string",
            "maxLength": 255
        },
        "email_subject": {
            "type": "string",
            "maxLength": 255
        },
        "type": {
            "type": "string",
            "enum": [
                "SMS",
                "Email"
            ]
        },
        "patient_info": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "pc_eventDate": {
            "type": "string",
            "format": "date"
        },
        "pc_endDate": {
            "type": "string",
            "format": "date"
        },
        "pc_startTime": {
            "type": "string",
            "format": "time"
        },
        "pc_endTime": {
            "type": "string",
            "format": "time"
        },
        "dSentDateTime": {
            "type": "string",
            "format": "date-time"
        }
    },
    "properties": {
        "iLogId": {
            "$ref": "#/definitions/iLogId"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "pc_eid": {
            "$ref": "#/definitions/pc_eid"
        },
        "sms_gateway_type": {
            "$ref": "#/definitions/sms_gateway_type"
        },
        "smsgateway_info": {
            "$ref": "#/definitions/smsgateway_info"
        },
        "message": {
            "$ref": "#/definitions/message"
        },
        "email_sender": {
            "$ref": "#/definitions/email_sender"
        },
        "email_subject": {
            "$ref": "#/definitions/email_subject"
        },
        "type": {
            "$ref": "#/definitions/type"
        },
        "patient_info": {
            "$ref": "#/definitions/patient_info"
        },
        "pc_eventDate": {
            "$ref": "#/definitions/pc_eventDate"
        },
        "pc_endDate": {
            "$ref": "#/definitions/pc_endDate"
        },
        "pc_startTime": {
            "$ref": "#/definitions/pc_startTime"
        },
        "pc_endTime": {
            "$ref": "#/definitions/pc_endTime"
        },
        "dSentDateTime": {
            "$ref": "#/definitions/dSentDateTime"
        }
    }
}
 module.exports = schema