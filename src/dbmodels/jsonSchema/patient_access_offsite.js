let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for patient_access_offsite table",
    "$id": "patient_access_offsite",
    "title": "patient_access_offsite",
    "type": "object",
    "required": [
        "id",
        "pid",
        "portal_username",
        "portal_pwd"
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
            "maximum": 7.307508186654515e+47
        },
        "portal_username": {
            "type": "string",
            "maxLength": 100
        },
        "portal_pwd": {
            "type": "string",
            "maxLength": 100
        },
        "portal_pwd_status": {
            "description": "0=>Password Created Through Demographics by The provider or staff. Patient Should Change it at first time it.1=>Pwd updated or created by patient itself",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "authorize_net_id": {
            "description": "authorize.net profile id",
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "portal_relation": {
            "type": "string",
            "maxLength": 100,
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
        "authorize_net_id": {
            "$ref": "#/definitions/authorize_net_id"
        },
        "portal_relation": {
            "$ref": "#/definitions/portal_relation"
        }
    }
}
 module.exports = schema