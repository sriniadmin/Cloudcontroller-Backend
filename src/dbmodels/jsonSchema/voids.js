let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for voids table",
    "$id": "voids",
    "title": "voids",
    "type": "object",
    "required": [
        "void_id",
        "patient_id",
        "encounter_id",
        "what_voided",
        "date_voided",
        "user_id",
        "amount1",
        "amount2"
    ],
    "definitions": {
        "void_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "patient_id": {
            "description": "references patient_data.pid",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "encounter_id": {
            "description": "references form_encounter.encounter",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "what_voided": {
            "description": "checkout,receipt and maybe other options later",
            "type": "string",
            "maxLength": 31
        },
        "date_original": {
            "description": "time of original action that is now voided",
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "date_voided": {
            "description": "time of void action",
            "type": "string",
            "format": "date-time"
        },
        "user_id": {
            "description": "references users.id",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "amount1": {
            "description": "for checkout,receipt total voided adjustments",
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        },
        "amount2": {
            "description": "for checkout,receipt total voided payments",
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        },
        "other_info": {
            "description": "for checkout,receipt the old invoice refno",
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "void_id": {
            "$ref": "#/definitions/void_id"
        },
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        },
        "encounter_id": {
            "$ref": "#/definitions/encounter_id"
        },
        "what_voided": {
            "$ref": "#/definitions/what_voided"
        },
        "date_original": {
            "$ref": "#/definitions/date_original"
        },
        "date_voided": {
            "$ref": "#/definitions/date_voided"
        },
        "user_id": {
            "$ref": "#/definitions/user_id"
        },
        "amount1": {
            "$ref": "#/definitions/amount1"
        },
        "amount2": {
            "$ref": "#/definitions/amount2"
        },
        "other_info": {
            "$ref": "#/definitions/other_info"
        }
    }
}
 module.exports = schema