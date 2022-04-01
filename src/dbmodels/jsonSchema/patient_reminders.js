let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for patient_reminders table",
    "$id": "patient_reminders",
    "title": "patient_reminders",
    "type": "object",
    "required": [
        "id",
        "active",
        "reason_inactivated",
        "due_status",
        "pid",
        "category",
        "item",
        "voice_status",
        "sms_status",
        "email_status",
        "mail_status"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "active": {
            "description": "1 if active and 0 if not active",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "date_inactivated": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "reason_inactivated": {
            "description": "Maps to list_options list rule_reminder_inactive_opt",
            "type": "string",
            "maxLength": 31
        },
        "due_status": {
            "description": "Maps to list_options list rule_reminder_due_opt",
            "type": "string",
            "maxLength": 31
        },
        "pid": {
            "description": "id from patient_data table",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "category": {
            "description": "Maps to the category item in the rule_action_item table",
            "type": "string",
            "maxLength": 31
        },
        "item": {
            "description": "Maps to the item column in the rule_action_item table",
            "type": "string",
            "maxLength": 31
        },
        "date_created": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "date_sent": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "voice_status": {
            "description": "0 if not sent and 1 if sent",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "sms_status": {
            "description": "0 if not sent and 1 if sent",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "email_status": {
            "description": "0 if not sent and 1 if sent",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "mail_status": {
            "description": "0 if not sent and 1 if sent",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "active": {
            "$ref": "#/definitions/active"
        },
        "date_inactivated": {
            "$ref": "#/definitions/date_inactivated"
        },
        "reason_inactivated": {
            "$ref": "#/definitions/reason_inactivated"
        },
        "due_status": {
            "$ref": "#/definitions/due_status"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "category": {
            "$ref": "#/definitions/category"
        },
        "item": {
            "$ref": "#/definitions/item"
        },
        "date_created": {
            "$ref": "#/definitions/date_created"
        },
        "date_sent": {
            "$ref": "#/definitions/date_sent"
        },
        "voice_status": {
            "$ref": "#/definitions/voice_status"
        },
        "sms_status": {
            "$ref": "#/definitions/sms_status"
        },
        "email_status": {
            "$ref": "#/definitions/email_status"
        },
        "mail_status": {
            "$ref": "#/definitions/mail_status"
        }
    }
}
 module.exports = schema