let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for batchcom table",
    "$id": "batchcom",
    "title": "batchcom",
    "type": "object",
    "required": [
        "id",
        "patient_id",
        "sent_by",
        "msg_date_sent"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "patient_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "sent_by": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "msg_type": {
            "type": "string",
            "maxLength": 60,
            "default": null
        },
        "msg_subject": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "msg_text": {
            "type": "string",
            "maxLength": 16777215,
            "default": null
        },
        "msg_date_sent": {
            "type": "string",
            "format": "date-time",
            "default": "0000-00-00 00:00:00"
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        },
        "sent_by": {
            "$ref": "#/definitions/sent_by"
        },
        "msg_type": {
            "$ref": "#/definitions/msg_type"
        },
        "msg_subject": {
            "$ref": "#/definitions/msg_subject"
        },
        "msg_text": {
            "$ref": "#/definitions/msg_text"
        },
        "msg_date_sent": {
            "$ref": "#/definitions/msg_date_sent"
        }
    }
}
 module.exports = schema