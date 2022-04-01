let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_mag_impplan table",
    "$id": "form_eye_mag_impplan",
    "title": "form_eye_mag_impplan",
    "type": "object",
    "required": [
        "id",
        "form_id",
        "pid",
        "title"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "form_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "title": {
            "type": "string",
            "maxLength": 255
        },
        "code": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "codetype": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "codedesc": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "codetext": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "plan": {
            "type": "string",
            "maxLength": 3000,
            "default": null
        },
        "PMSFH_link": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "IMPPLAN_order": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "form_id": {
            "$ref": "#/definitions/form_id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "code": {
            "$ref": "#/definitions/code"
        },
        "codetype": {
            "$ref": "#/definitions/codetype"
        },
        "codedesc": {
            "$ref": "#/definitions/codedesc"
        },
        "codetext": {
            "$ref": "#/definitions/codetext"
        },
        "plan": {
            "$ref": "#/definitions/plan"
        },
        "PMSFH_link": {
            "$ref": "#/definitions/PMSFH_link"
        },
        "IMPPLAN_order": {
            "$ref": "#/definitions/IMPPLAN_order"
        }
    }
}
 module.exports = schema