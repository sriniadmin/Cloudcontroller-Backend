let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for icd10_reimbr_dx_9_10 table",
    "$id": "icd10_reimbr_dx_9_10",
    "title": "icd10_reimbr_dx_9_10",
    "type": "object",
    "required": [
        "map_id"
    ],
    "definitions": {
        "map_id": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.461501637330903e+48
        },
        "code": {
            "type": "string",
            "maxLength": 8,
            "default": null
        },
        "code_cnt": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "ICD9_01": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "ICD9_02": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "ICD9_03": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "ICD9_04": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "ICD9_05": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "ICD9_06": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "active": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "revision": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "map_id": {
            "$ref": "#/definitions/map_id"
        },
        "code": {
            "$ref": "#/definitions/code"
        },
        "code_cnt": {
            "$ref": "#/definitions/code_cnt"
        },
        "ICD9_01": {
            "$ref": "#/definitions/ICD9_01"
        },
        "ICD9_02": {
            "$ref": "#/definitions/ICD9_02"
        },
        "ICD9_03": {
            "$ref": "#/definitions/ICD9_03"
        },
        "ICD9_04": {
            "$ref": "#/definitions/ICD9_04"
        },
        "ICD9_05": {
            "$ref": "#/definitions/ICD9_05"
        },
        "ICD9_06": {
            "$ref": "#/definitions/ICD9_06"
        },
        "active": {
            "$ref": "#/definitions/active"
        },
        "revision": {
            "$ref": "#/definitions/revision"
        }
    }
}
 module.exports = schema