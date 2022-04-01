let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_vitals table",
    "$id": "form_eye_vitals",
    "title": "form_eye_vitals",
    "type": "object",
    "required": [
        "id",
        "IOPTIME",
        "ODIOPPOST",
        "OSIOPPOST",
        "ODIOPTARGET",
        "OSIOPTARGET"
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
        "alert": {
            "type": "string",
            "maxLength": 3,
            "default": "yes"
        },
        "oriented": {
            "type": "string",
            "maxLength": 3,
            "default": "TPP"
        },
        "confused": {
            "type": "string",
            "maxLength": 3,
            "default": "nml"
        },
        "ODIOPAP": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSIOPAP": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODIOPTPN": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSIOPTPN": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODIOPFTN": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSIOPFTN": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "IOPTIME": {
            "type": "string",
            "format": "time"
        },
        "ODIOPPOST": {
            "type": "string",
            "maxLength": 10
        },
        "OSIOPPOST": {
            "type": "string",
            "maxLength": 10
        },
        "IOPPOSTTIME": {
            "type": "string",
            "format": "time",
            "default": null
        },
        "ODIOPTARGET": {
            "type": "string",
            "maxLength": 10
        },
        "OSIOPTARGET": {
            "type": "string",
            "maxLength": 10
        },
        "AMSLEROD": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "AMSLEROS": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "ODVF1": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "ODVF2": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "ODVF3": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "ODVF4": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "OSVF1": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "OSVF2": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "OSVF3": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "OSVF4": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
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
        "alert": {
            "$ref": "#/definitions/alert"
        },
        "oriented": {
            "$ref": "#/definitions/oriented"
        },
        "confused": {
            "$ref": "#/definitions/confused"
        },
        "ODIOPAP": {
            "$ref": "#/definitions/ODIOPAP"
        },
        "OSIOPAP": {
            "$ref": "#/definitions/OSIOPAP"
        },
        "ODIOPTPN": {
            "$ref": "#/definitions/ODIOPTPN"
        },
        "OSIOPTPN": {
            "$ref": "#/definitions/OSIOPTPN"
        },
        "ODIOPFTN": {
            "$ref": "#/definitions/ODIOPFTN"
        },
        "OSIOPFTN": {
            "$ref": "#/definitions/OSIOPFTN"
        },
        "IOPTIME": {
            "$ref": "#/definitions/IOPTIME"
        },
        "ODIOPPOST": {
            "$ref": "#/definitions/ODIOPPOST"
        },
        "OSIOPPOST": {
            "$ref": "#/definitions/OSIOPPOST"
        },
        "IOPPOSTTIME": {
            "$ref": "#/definitions/IOPPOSTTIME"
        },
        "ODIOPTARGET": {
            "$ref": "#/definitions/ODIOPTARGET"
        },
        "OSIOPTARGET": {
            "$ref": "#/definitions/OSIOPTARGET"
        },
        "AMSLEROD": {
            "$ref": "#/definitions/AMSLEROD"
        },
        "AMSLEROS": {
            "$ref": "#/definitions/AMSLEROS"
        },
        "ODVF1": {
            "$ref": "#/definitions/ODVF1"
        },
        "ODVF2": {
            "$ref": "#/definitions/ODVF2"
        },
        "ODVF3": {
            "$ref": "#/definitions/ODVF3"
        },
        "ODVF4": {
            "$ref": "#/definitions/ODVF4"
        },
        "OSVF1": {
            "$ref": "#/definitions/OSVF1"
        },
        "OSVF2": {
            "$ref": "#/definitions/OSVF2"
        },
        "OSVF3": {
            "$ref": "#/definitions/OSVF3"
        },
        "OSVF4": {
            "$ref": "#/definitions/OSVF4"
        }
    }
}
 module.exports = schema