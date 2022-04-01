let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_biometrics table",
    "$id": "form_eye_biometrics",
    "title": "form_eye_biometrics",
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
        "ODK1": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODK2": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODK2AXIS": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSK1": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSK2": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSK2AXIS": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODAXIALLENGTH": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSAXIALLENGTH": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODPDMeasured": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSPDMeasured": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODACD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSACD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODW2W": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSW2W": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODLT": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSLT": {
            "type": "string",
            "maxLength": 20,
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
        "ODK1": {
            "$ref": "#/definitions/ODK1"
        },
        "ODK2": {
            "$ref": "#/definitions/ODK2"
        },
        "ODK2AXIS": {
            "$ref": "#/definitions/ODK2AXIS"
        },
        "OSK1": {
            "$ref": "#/definitions/OSK1"
        },
        "OSK2": {
            "$ref": "#/definitions/OSK2"
        },
        "OSK2AXIS": {
            "$ref": "#/definitions/OSK2AXIS"
        },
        "ODAXIALLENGTH": {
            "$ref": "#/definitions/ODAXIALLENGTH"
        },
        "OSAXIALLENGTH": {
            "$ref": "#/definitions/OSAXIALLENGTH"
        },
        "ODPDMeasured": {
            "$ref": "#/definitions/ODPDMeasured"
        },
        "OSPDMeasured": {
            "$ref": "#/definitions/OSPDMeasured"
        },
        "ODACD": {
            "$ref": "#/definitions/ODACD"
        },
        "OSACD": {
            "$ref": "#/definitions/OSACD"
        },
        "ODW2W": {
            "$ref": "#/definitions/ODW2W"
        },
        "OSW2W": {
            "$ref": "#/definitions/OSW2W"
        },
        "ODLT": {
            "$ref": "#/definitions/ODLT"
        },
        "OSLT": {
            "$ref": "#/definitions/OSLT"
        }
    }
}
 module.exports = schema