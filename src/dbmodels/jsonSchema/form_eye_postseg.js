let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_postseg table",
    "$id": "form_eye_postseg",
    "title": "form_eye_postseg",
    "type": "object",
    "required": [
        "id",
        "DIL_RISKS",
        "WETTYPE",
        "ATROPINE",
        "CYCLOMYDRIL",
        "TROPICAMIDE",
        "CYCLOGYL",
        "NEO25"
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
        "ODDISC": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSDISC": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODCUP": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSCUP": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODMACULA": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSMACULA": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODVESSELS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSVESSELS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODVITREOUS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSVITREOUS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODPERIPH": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSPERIPH": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODCMT": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSCMT": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "RETINA_COMMENTS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "DIL_RISKS": {
            "type": "string",
            "maxLength": 2,
            "default": "on"
        },
        "DIL_MEDS": {
            "type": "string",
            "maxLength": 16777215,
            "default": null
        },
        "WETTYPE": {
            "type": "string",
            "maxLength": 10
        },
        "ATROPINE": {
            "type": "string",
            "maxLength": 25
        },
        "CYCLOMYDRIL": {
            "type": "string",
            "maxLength": 25
        },
        "TROPICAMIDE": {
            "type": "string",
            "maxLength": 25
        },
        "CYCLOGYL": {
            "type": "string",
            "maxLength": 25
        },
        "NEO25": {
            "type": "string",
            "maxLength": 25
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "ODDISC": {
            "$ref": "#/definitions/ODDISC"
        },
        "OSDISC": {
            "$ref": "#/definitions/OSDISC"
        },
        "ODCUP": {
            "$ref": "#/definitions/ODCUP"
        },
        "OSCUP": {
            "$ref": "#/definitions/OSCUP"
        },
        "ODMACULA": {
            "$ref": "#/definitions/ODMACULA"
        },
        "OSMACULA": {
            "$ref": "#/definitions/OSMACULA"
        },
        "ODVESSELS": {
            "$ref": "#/definitions/ODVESSELS"
        },
        "OSVESSELS": {
            "$ref": "#/definitions/OSVESSELS"
        },
        "ODVITREOUS": {
            "$ref": "#/definitions/ODVITREOUS"
        },
        "OSVITREOUS": {
            "$ref": "#/definitions/OSVITREOUS"
        },
        "ODPERIPH": {
            "$ref": "#/definitions/ODPERIPH"
        },
        "OSPERIPH": {
            "$ref": "#/definitions/OSPERIPH"
        },
        "ODCMT": {
            "$ref": "#/definitions/ODCMT"
        },
        "OSCMT": {
            "$ref": "#/definitions/OSCMT"
        },
        "RETINA_COMMENTS": {
            "$ref": "#/definitions/RETINA_COMMENTS"
        },
        "DIL_RISKS": {
            "$ref": "#/definitions/DIL_RISKS"
        },
        "DIL_MEDS": {
            "$ref": "#/definitions/DIL_MEDS"
        },
        "WETTYPE": {
            "$ref": "#/definitions/WETTYPE"
        },
        "ATROPINE": {
            "$ref": "#/definitions/ATROPINE"
        },
        "CYCLOMYDRIL": {
            "$ref": "#/definitions/CYCLOMYDRIL"
        },
        "TROPICAMIDE": {
            "$ref": "#/definitions/TROPICAMIDE"
        },
        "CYCLOGYL": {
            "$ref": "#/definitions/CYCLOGYL"
        },
        "NEO25": {
            "$ref": "#/definitions/NEO25"
        }
    }
}
 module.exports = schema