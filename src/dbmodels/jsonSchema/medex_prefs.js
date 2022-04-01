let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for medex_prefs table",
    "$id": "medex_prefs",
    "title": "medex_prefs",
    "type": "object",
    "required": [
        "PHONE_country_code",
        "MedEx_lastupdated"
    ],
    "definitions": {
        "MedEx_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "ME_username": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "ME_api_key": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ME_facilities": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "ME_providers": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "ME_hipaa_default_override": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "PHONE_country_code": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "MSGS_default_yes": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "POSTCARDS_local": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "POSTCARDS_remote": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "LABELS_local": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "LABELS_choice": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "combine_time": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "postcard_top": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "status": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "MedEx_lastupdated": {
            "type": "string",
            "default": "current_timestamp()"
        }
    },
    "properties": {
        "MedEx_id": {
            "$ref": "#/definitions/MedEx_id"
        },
        "ME_username": {
            "$ref": "#/definitions/ME_username"
        },
        "ME_api_key": {
            "$ref": "#/definitions/ME_api_key"
        },
        "ME_facilities": {
            "$ref": "#/definitions/ME_facilities"
        },
        "ME_providers": {
            "$ref": "#/definitions/ME_providers"
        },
        "ME_hipaa_default_override": {
            "$ref": "#/definitions/ME_hipaa_default_override"
        },
        "PHONE_country_code": {
            "$ref": "#/definitions/PHONE_country_code"
        },
        "MSGS_default_yes": {
            "$ref": "#/definitions/MSGS_default_yes"
        },
        "POSTCARDS_local": {
            "$ref": "#/definitions/POSTCARDS_local"
        },
        "POSTCARDS_remote": {
            "$ref": "#/definitions/POSTCARDS_remote"
        },
        "LABELS_local": {
            "$ref": "#/definitions/LABELS_local"
        },
        "LABELS_choice": {
            "$ref": "#/definitions/LABELS_choice"
        },
        "combine_time": {
            "$ref": "#/definitions/combine_time"
        },
        "postcard_top": {
            "$ref": "#/definitions/postcard_top"
        },
        "status": {
            "$ref": "#/definitions/status"
        },
        "MedEx_lastupdated": {
            "$ref": "#/definitions/MedEx_lastupdated"
        }
    }
}
 module.exports = schema