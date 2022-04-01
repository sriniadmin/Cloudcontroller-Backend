let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_external table",
    "$id": "form_eye_external",
    "title": "form_eye_external",
    "type": "object",
    "required": [
        "id"
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
        "RUL": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LUL": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "RLL": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LLL": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "RBROW": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LBROW": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "RMCT": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LMCT": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "RADNEXA": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LADNEXA": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "RMRD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "LMRD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "RLF": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "LLF": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "RVFISSURE": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "LVFISSURE": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ODHERTEL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSHERTEL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "HERTELBASE": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "RCAROTID": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LCAROTID": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "RTEMPART": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LTEMPART": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "RCNV": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LCNV": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "RCNVII": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LCNVII": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "EXT_COMMENTS": {
            "type": "string",
            "maxLength": 65535,
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
        "RUL": {
            "$ref": "#/definitions/RUL"
        },
        "LUL": {
            "$ref": "#/definitions/LUL"
        },
        "RLL": {
            "$ref": "#/definitions/RLL"
        },
        "LLL": {
            "$ref": "#/definitions/LLL"
        },
        "RBROW": {
            "$ref": "#/definitions/RBROW"
        },
        "LBROW": {
            "$ref": "#/definitions/LBROW"
        },
        "RMCT": {
            "$ref": "#/definitions/RMCT"
        },
        "LMCT": {
            "$ref": "#/definitions/LMCT"
        },
        "RADNEXA": {
            "$ref": "#/definitions/RADNEXA"
        },
        "LADNEXA": {
            "$ref": "#/definitions/LADNEXA"
        },
        "RMRD": {
            "$ref": "#/definitions/RMRD"
        },
        "LMRD": {
            "$ref": "#/definitions/LMRD"
        },
        "RLF": {
            "$ref": "#/definitions/RLF"
        },
        "LLF": {
            "$ref": "#/definitions/LLF"
        },
        "RVFISSURE": {
            "$ref": "#/definitions/RVFISSURE"
        },
        "LVFISSURE": {
            "$ref": "#/definitions/LVFISSURE"
        },
        "ODHERTEL": {
            "$ref": "#/definitions/ODHERTEL"
        },
        "OSHERTEL": {
            "$ref": "#/definitions/OSHERTEL"
        },
        "HERTELBASE": {
            "$ref": "#/definitions/HERTELBASE"
        },
        "RCAROTID": {
            "$ref": "#/definitions/RCAROTID"
        },
        "LCAROTID": {
            "$ref": "#/definitions/LCAROTID"
        },
        "RTEMPART": {
            "$ref": "#/definitions/RTEMPART"
        },
        "LTEMPART": {
            "$ref": "#/definitions/LTEMPART"
        },
        "RCNV": {
            "$ref": "#/definitions/RCNV"
        },
        "LCNV": {
            "$ref": "#/definitions/LCNV"
        },
        "RCNVII": {
            "$ref": "#/definitions/RCNVII"
        },
        "LCNVII": {
            "$ref": "#/definitions/LCNVII"
        },
        "EXT_COMMENTS": {
            "$ref": "#/definitions/EXT_COMMENTS"
        }
    }
}
 module.exports = schema