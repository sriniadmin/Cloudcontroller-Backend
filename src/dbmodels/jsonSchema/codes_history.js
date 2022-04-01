let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for codes_history table",
    "$id": "codes_history",
    "title": "codes_history",
    "type": "object",
    "required": [
        "log_id"
    ],
    "definitions": {
        "log_id": {
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
        "code": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "modifier": {
            "type": "string",
            "maxLength": 12,
            "default": null
        },
        "active": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "diagnosis_reporting": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "financial_reporting": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "category": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "code_type_name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "code_text": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "code_text_short": {
            "type": "string",
            "maxLength": 24,
            "default": null
        },
        "prices": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "action_type": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "update_by": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "log_id": {
            "$ref": "#/definitions/log_id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "code": {
            "$ref": "#/definitions/code"
        },
        "modifier": {
            "$ref": "#/definitions/modifier"
        },
        "active": {
            "$ref": "#/definitions/active"
        },
        "diagnosis_reporting": {
            "$ref": "#/definitions/diagnosis_reporting"
        },
        "financial_reporting": {
            "$ref": "#/definitions/financial_reporting"
        },
        "category": {
            "$ref": "#/definitions/category"
        },
        "code_type_name": {
            "$ref": "#/definitions/code_type_name"
        },
        "code_text": {
            "$ref": "#/definitions/code_text"
        },
        "code_text_short": {
            "$ref": "#/definitions/code_text_short"
        },
        "prices": {
            "$ref": "#/definitions/prices"
        },
        "action_type": {
            "$ref": "#/definitions/action_type"
        },
        "update_by": {
            "$ref": "#/definitions/update_by"
        }
    }
}
 module.exports = schema