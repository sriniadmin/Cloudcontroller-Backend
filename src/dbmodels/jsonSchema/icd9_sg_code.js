let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for icd9_sg_code table",
    "$id": "icd9_sg_code",
    "title": "icd9_sg_code",
    "type": "object",
    "required": [
        "sg_id"
    ],
    "definitions": {
        "sg_id": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.461501637330903e+48
        },
        "sg_code": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "formatted_sg_code": {
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
        "sg_id": {
            "$ref": "#/definitions/sg_id"
        },
        "sg_code": {
            "$ref": "#/definitions/sg_code"
        },
        "formatted_sg_code": {
            "$ref": "#/definitions/formatted_sg_code"
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