let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for patient_access_onsite table",
    "$id": "patient_access_onsite",
    "title": "patient_access_onsite",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "portal_username": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "portal_pwd": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "portal_pwd_status": {
            "description": "0=>Password Created Through Demographics by The provider or staff. Patient Should Change it at first time it.1=>Pwd updated or created by patient itself",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "portal_salt": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "portal_login_username": {
            "description": "User entered username",
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "portal_onetime": {
            "type": "string",
            "maxLength": 255,
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
        "portal_username": {
            "$ref": "#/definitions/portal_username"
        },
        "portal_pwd": {
            "$ref": "#/definitions/portal_pwd"
        },
        "portal_pwd_status": {
            "$ref": "#/definitions/portal_pwd_status"
        },
        "portal_salt": {
            "$ref": "#/definitions/portal_salt"
        },
        "portal_login_username": {
            "$ref": "#/definitions/portal_login_username"
        },
        "portal_onetime": {
            "$ref": "#/definitions/portal_onetime"
        }
    }
}
 module.exports = schema