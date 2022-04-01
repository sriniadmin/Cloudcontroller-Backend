let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for openemr_modules table",
    "$id": "openemr_modules",
    "title": "openemr_modules",
    "type": "object",
    "required": [
        "pn_id",
        "pn_type",
        "pn_regid",
        "pn_admin_capable",
        "pn_user_capable",
        "pn_state"
    ],
    "definitions": {
        "pn_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 3.094850098213451e+26
        },
        "pn_name": {
            "type": "string",
            "maxLength": 64,
            "default": null
        },
        "pn_type": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "pn_displayname": {
            "type": "string",
            "maxLength": 64,
            "default": null
        },
        "pn_description": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "pn_regid": {
            "type": "integer",
            "minimum": 0,
            "maximum": 3.094850098213451e+26
        },
        "pn_directory": {
            "type": "string",
            "maxLength": 64,
            "default": null
        },
        "pn_version": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "pn_admin_capable": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "pn_user_capable": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "pn_state": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        }
    },
    "properties": {
        "pn_id": {
            "$ref": "#/definitions/pn_id"
        },
        "pn_name": {
            "$ref": "#/definitions/pn_name"
        },
        "pn_type": {
            "$ref": "#/definitions/pn_type"
        },
        "pn_displayname": {
            "$ref": "#/definitions/pn_displayname"
        },
        "pn_description": {
            "$ref": "#/definitions/pn_description"
        },
        "pn_regid": {
            "$ref": "#/definitions/pn_regid"
        },
        "pn_directory": {
            "$ref": "#/definitions/pn_directory"
        },
        "pn_version": {
            "$ref": "#/definitions/pn_version"
        },
        "pn_admin_capable": {
            "$ref": "#/definitions/pn_admin_capable"
        },
        "pn_user_capable": {
            "$ref": "#/definitions/pn_user_capable"
        },
        "pn_state": {
            "$ref": "#/definitions/pn_state"
        }
    }
}
 module.exports = schema