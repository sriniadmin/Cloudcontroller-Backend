let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_mag_wearing table",
    "$id": "form_eye_mag_wearing",
    "title": "form_eye_mag_wearing",
    "type": "object",
    "required": [
        "id",
        "ENCOUNTER",
        "FORM_ID",
        "PID",
        "RX_NUMBER"
    ],
    "definitions": {
        "id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "ENCOUNTER": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "FORM_ID": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "PID": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "RX_NUMBER": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "ODSPH": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODCYL": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODAXIS": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSSPH": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSCYL": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSAXIS": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODMIDADD": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSMIDADD": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODADD": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSADD": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODVA": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSVA": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODNEARVA": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSNEARVA": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODHPD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODHBASE": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODVPD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODVBASE": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODSLABOFF": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODVERTEXDIST": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSHPD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSHBASE": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSVPD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSVBASE": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSSLABOFF": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSVERTEXDIST": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODMPDD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODMPDN": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSMPDD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSMPDN": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "BPDD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "BPDN": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "LENS_MATERIAL": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "LENS_TREATMENTS": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "RX_TYPE": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "COMMENTS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "ENCOUNTER": {
            "$ref": "#/definitions/ENCOUNTER"
        },
        "FORM_ID": {
            "$ref": "#/definitions/FORM_ID"
        },
        "PID": {
            "$ref": "#/definitions/PID"
        },
        "RX_NUMBER": {
            "$ref": "#/definitions/RX_NUMBER"
        },
        "ODSPH": {
            "$ref": "#/definitions/ODSPH"
        },
        "ODCYL": {
            "$ref": "#/definitions/ODCYL"
        },
        "ODAXIS": {
            "$ref": "#/definitions/ODAXIS"
        },
        "OSSPH": {
            "$ref": "#/definitions/OSSPH"
        },
        "OSCYL": {
            "$ref": "#/definitions/OSCYL"
        },
        "OSAXIS": {
            "$ref": "#/definitions/OSAXIS"
        },
        "ODMIDADD": {
            "$ref": "#/definitions/ODMIDADD"
        },
        "OSMIDADD": {
            "$ref": "#/definitions/OSMIDADD"
        },
        "ODADD": {
            "$ref": "#/definitions/ODADD"
        },
        "OSADD": {
            "$ref": "#/definitions/OSADD"
        },
        "ODVA": {
            "$ref": "#/definitions/ODVA"
        },
        "OSVA": {
            "$ref": "#/definitions/OSVA"
        },
        "ODNEARVA": {
            "$ref": "#/definitions/ODNEARVA"
        },
        "OSNEARVA": {
            "$ref": "#/definitions/OSNEARVA"
        },
        "ODHPD": {
            "$ref": "#/definitions/ODHPD"
        },
        "ODHBASE": {
            "$ref": "#/definitions/ODHBASE"
        },
        "ODVPD": {
            "$ref": "#/definitions/ODVPD"
        },
        "ODVBASE": {
            "$ref": "#/definitions/ODVBASE"
        },
        "ODSLABOFF": {
            "$ref": "#/definitions/ODSLABOFF"
        },
        "ODVERTEXDIST": {
            "$ref": "#/definitions/ODVERTEXDIST"
        },
        "OSHPD": {
            "$ref": "#/definitions/OSHPD"
        },
        "OSHBASE": {
            "$ref": "#/definitions/OSHBASE"
        },
        "OSVPD": {
            "$ref": "#/definitions/OSVPD"
        },
        "OSVBASE": {
            "$ref": "#/definitions/OSVBASE"
        },
        "OSSLABOFF": {
            "$ref": "#/definitions/OSSLABOFF"
        },
        "OSVERTEXDIST": {
            "$ref": "#/definitions/OSVERTEXDIST"
        },
        "ODMPDD": {
            "$ref": "#/definitions/ODMPDD"
        },
        "ODMPDN": {
            "$ref": "#/definitions/ODMPDN"
        },
        "OSMPDD": {
            "$ref": "#/definitions/OSMPDD"
        },
        "OSMPDN": {
            "$ref": "#/definitions/OSMPDN"
        },
        "BPDD": {
            "$ref": "#/definitions/BPDD"
        },
        "BPDN": {
            "$ref": "#/definitions/BPDN"
        },
        "LENS_MATERIAL": {
            "$ref": "#/definitions/LENS_MATERIAL"
        },
        "LENS_TREATMENTS": {
            "$ref": "#/definitions/LENS_TREATMENTS"
        },
        "RX_TYPE": {
            "$ref": "#/definitions/RX_TYPE"
        },
        "COMMENTS": {
            "$ref": "#/definitions/COMMENTS"
        }
    }
}
 module.exports = schema