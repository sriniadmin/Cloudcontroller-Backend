let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for icd10_pcs_order_code table",
    "$id": "icd10_pcs_order_code",
    "title": "icd10_pcs_order_code",
    "type": "object",
    "required": [
        "pcs_id"
    ],
    "definitions": {
        "pcs_id": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.461501637330903e+48
        },
        "pcs_code": {
            "type": "string",
            "maxLength": 7,
            "default": null
        },
        "valid_for_coding": {
            "type": "string",
            "maxLength": 1,
            "default": null
        },
        "short_desc": {
            "type": "string",
            "maxLength": 60,
            "default": null
        },
        "long_desc": {
            "type": "string",
            "maxLength": 300,
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
        "pcs_id": {
            "$ref": "#/definitions/pcs_id"
        },
        "pcs_code": {
            "$ref": "#/definitions/pcs_code"
        },
        "valid_for_coding": {
            "$ref": "#/definitions/valid_for_coding"
        },
        "short_desc": {
            "$ref": "#/definitions/short_desc"
        },
        "long_desc": {
            "$ref": "#/definitions/long_desc"
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