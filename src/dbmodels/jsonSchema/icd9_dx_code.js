let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for icd9_dx_code table",
    "$id": "icd9_dx_code",
    "title": "icd9_dx_code",
    "type": "object",
    "required": [
        "dx_id"
    ],
    "definitions": {
        "dx_id": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.461501637330903e+48
        },
        "dx_code": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "formatted_dx_code": {
            "type": "string",
            "maxLength": 6,
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
        "dx_id": {
            "$ref": "#/definitions/dx_id"
        },
        "dx_code": {
            "$ref": "#/definitions/dx_code"
        },
        "formatted_dx_code": {
            "$ref": "#/definitions/formatted_dx_code"
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