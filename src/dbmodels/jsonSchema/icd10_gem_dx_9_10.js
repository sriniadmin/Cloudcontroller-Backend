let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for icd10_gem_dx_9_10 table",
    "$id": "icd10_gem_dx_9_10",
    "title": "icd10_gem_dx_9_10",
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
        "dx_icd9_source": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "dx_icd10_target": {
            "type": "string",
            "maxLength": 7,
            "default": null
        },
        "flags": {
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
        "dx_icd9_source": {
            "$ref": "#/definitions/dx_icd9_source"
        },
        "dx_icd10_target": {
            "$ref": "#/definitions/dx_icd10_target"
        },
        "flags": {
            "$ref": "#/definitions/flags"
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