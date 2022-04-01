let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for extended_log table",
    "$id": "extended_log",
    "title": "extended_log",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "event": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "recipient": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "description": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "patient_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "event": {
            "$ref": "#/definitions/event"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "recipient": {
            "$ref": "#/definitions/recipient"
        },
        "description": {
            "$ref": "#/definitions/description"
        },
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        }
    }
}
 module.exports = schema