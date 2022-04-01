let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for automatic_notification table",
    "$id": "automatic_notification",
    "title": "automatic_notification",
    "type": "object",
    "required": [
        "notification_id",
        "sms_gateway_type",
        "next_app_date",
        "next_app_time",
        "provider_name",
        "email_sender",
        "email_subject",
        "type",
        "notification_sent_date"
    ],
    "definitions": {
        "notification_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 549755813887
        },
        "sms_gateway_type": {
            "type": "string",
            "maxLength": 255
        },
        "next_app_date": {
            "type": "string",
            "format": "date"
        },
        "next_app_time": {
            "type": "string",
            "maxLength": 10
        },
        "provider_name": {
            "type": "string",
            "maxLength": 100
        },
        "message": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "email_sender": {
            "type": "string",
            "maxLength": 100
        },
        "email_subject": {
            "type": "string",
            "maxLength": 100
        },
        "type": {
            "type": "string",
            "enum": [
                "SMS",
                "Email"
            ],
            "default": "SMS"
        },
        "notification_sent_date": {
            "type": "string",
            "format": "date-time"
        }
    },
    "properties": {
        "notification_id": {
            "$ref": "#/definitions/notification_id"
        },
        "sms_gateway_type": {
            "$ref": "#/definitions/sms_gateway_type"
        },
        "next_app_date": {
            "$ref": "#/definitions/next_app_date"
        },
        "next_app_time": {
            "$ref": "#/definitions/next_app_time"
        },
        "provider_name": {
            "$ref": "#/definitions/provider_name"
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
        "notification_sent_date": {
            "$ref": "#/definitions/notification_sent_date"
        }
    }
}
 module.exports = schema