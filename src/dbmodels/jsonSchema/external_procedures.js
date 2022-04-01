let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for external_procedures table",
    "$id": "external_procedures",
    "title": "external_procedures",
    "type": "object",
    "required": [
        "ep_id"
    ],
    "definitions": {
        "ep_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "ep_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "ep_code_type": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ep_code": {
            "type": "string",
            "maxLength": 9,
            "default": null
        },
        "ep_pid": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "ep_encounter": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "ep_code_text": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "ep_facility_id": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ep_external_id": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "ep_id": {
            "$ref": "#/definitions/ep_id"
        },
        "ep_date": {
            "$ref": "#/definitions/ep_date"
        },
        "ep_code_type": {
            "$ref": "#/definitions/ep_code_type"
        },
        "ep_code": {
            "$ref": "#/definitions/ep_code"
        },
        "ep_pid": {
            "$ref": "#/definitions/ep_pid"
        },
        "ep_encounter": {
            "$ref": "#/definitions/ep_encounter"
        },
        "ep_code_text": {
            "$ref": "#/definitions/ep_code_text"
        },
        "ep_facility_id": {
            "$ref": "#/definitions/ep_facility_id"
        },
        "ep_external_id": {
            "$ref": "#/definitions/ep_external_id"
        }
    }
}
 module.exports = schema