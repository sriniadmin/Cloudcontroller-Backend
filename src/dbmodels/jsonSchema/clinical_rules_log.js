let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for clinical_rules_log table",
    "$id": "clinical_rules_log",
    "title": "clinical_rules_log",
    "type": "object",
    "required": [
        "id",
        "pid",
        "uid",
        "category"
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
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "uid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "category": {
            "description": "An example category is clinical_reminder_widget",
            "type": "string",
            "maxLength": 255
        },
        "value": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "new_value": {
            "type": "string",
            "maxLength": 65535,
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
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "uid": {
            "$ref": "#/definitions/uid"
        },
        "category": {
            "$ref": "#/definitions/category"
        },
        "value": {
            "$ref": "#/definitions/value"
        },
        "new_value": {
            "$ref": "#/definitions/new_value"
        }
    }
}
 module.exports = schema