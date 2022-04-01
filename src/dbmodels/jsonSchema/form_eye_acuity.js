let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_acuity table",
    "$id": "form_eye_acuity",
    "title": "form_eye_acuity",
    "type": "object",
    "required": [
        "id",
        "LIODVA",
        "LIOSVA"
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
        "SCODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "SCOSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "PHODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "PHOSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLOSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MROSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "SCNEARODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "SCNEAROSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRNEARODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRNEAROSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "GLAREODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "GLAREOSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "GLARECOMMENTS": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ARODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "AROSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CRODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CROSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLODVA1": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLOSVA1": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "PAMODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "PAMOSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "LIODVA": {
            "type": "string",
            "maxLength": 25
        },
        "LIOSVA": {
            "type": "string",
            "maxLength": 25
        },
        "WODVANEAR": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSVANEARCC": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "BINOCVA": {
            "type": "string",
            "maxLength": 25,
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
        "SCODVA": {
            "$ref": "#/definitions/SCODVA"
        },
        "SCOSVA": {
            "$ref": "#/definitions/SCOSVA"
        },
        "PHODVA": {
            "$ref": "#/definitions/PHODVA"
        },
        "PHOSVA": {
            "$ref": "#/definitions/PHOSVA"
        },
        "CTLODVA": {
            "$ref": "#/definitions/CTLODVA"
        },
        "CTLOSVA": {
            "$ref": "#/definitions/CTLOSVA"
        },
        "MRODVA": {
            "$ref": "#/definitions/MRODVA"
        },
        "MROSVA": {
            "$ref": "#/definitions/MROSVA"
        },
        "SCNEARODVA": {
            "$ref": "#/definitions/SCNEARODVA"
        },
        "SCNEAROSVA": {
            "$ref": "#/definitions/SCNEAROSVA"
        },
        "MRNEARODVA": {
            "$ref": "#/definitions/MRNEARODVA"
        },
        "MRNEAROSVA": {
            "$ref": "#/definitions/MRNEAROSVA"
        },
        "GLAREODVA": {
            "$ref": "#/definitions/GLAREODVA"
        },
        "GLAREOSVA": {
            "$ref": "#/definitions/GLAREOSVA"
        },
        "GLARECOMMENTS": {
            "$ref": "#/definitions/GLARECOMMENTS"
        },
        "ARODVA": {
            "$ref": "#/definitions/ARODVA"
        },
        "AROSVA": {
            "$ref": "#/definitions/AROSVA"
        },
        "CRODVA": {
            "$ref": "#/definitions/CRODVA"
        },
        "CROSVA": {
            "$ref": "#/definitions/CROSVA"
        },
        "CTLODVA1": {
            "$ref": "#/definitions/CTLODVA1"
        },
        "CTLOSVA1": {
            "$ref": "#/definitions/CTLOSVA1"
        },
        "PAMODVA": {
            "$ref": "#/definitions/PAMODVA"
        },
        "PAMOSVA": {
            "$ref": "#/definitions/PAMOSVA"
        },
        "LIODVA": {
            "$ref": "#/definitions/LIODVA"
        },
        "LIOSVA": {
            "$ref": "#/definitions/LIOSVA"
        },
        "WODVANEAR": {
            "$ref": "#/definitions/WODVANEAR"
        },
        "OSVANEARCC": {
            "$ref": "#/definitions/OSVANEARCC"
        },
        "BINOCVA": {
            "$ref": "#/definitions/BINOCVA"
        }
    }
}
 module.exports = schema