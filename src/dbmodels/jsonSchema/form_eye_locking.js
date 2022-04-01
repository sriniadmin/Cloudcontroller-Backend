let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_locking table",
    "$id": "form_eye_locking",
    "title": "form_eye_locking",
    "type": "object",
    "required": [
        "id",
        "LOCKEDDATE"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "description": "Links to forms.form_id",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "IMP": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "PLAN": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "Resource": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "Technician": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "LOCKED": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "LOCKEDDATE": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "LOCKEDBY": {
            "type": "string",
            "maxLength": 50,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "IMP": {
            "$ref": "#/definitions/IMP"
        },
        "PLAN": {
            "$ref": "#/definitions/PLAN"
        },
        "Resource": {
            "$ref": "#/definitions/Resource"
        },
        "Technician": {
            "$ref": "#/definitions/Technician"
        },
        "LOCKED": {
            "$ref": "#/definitions/LOCKED"
        },
        "LOCKEDDATE": {
            "$ref": "#/definitions/LOCKEDDATE"
        },
        "LOCKEDBY": {
            "$ref": "#/definitions/LOCKEDBY"
        }
    }
}
 module.exports = schema