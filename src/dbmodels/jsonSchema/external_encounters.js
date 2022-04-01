let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for external_encounters table",
    "$id": "external_encounters",
    "title": "external_encounters",
    "type": "object",
    "required": [
        "ee_id"
    ],
    "definitions": {
        "ee_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "ee_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "ee_pid": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "ee_provider_id": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ee_facility_id": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ee_encounter_diagnosis": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ee_external_id": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "ee_id": {
            "$ref": "#/definitions/ee_id"
        },
        "ee_date": {
            "$ref": "#/definitions/ee_date"
        },
        "ee_pid": {
            "$ref": "#/definitions/ee_pid"
        },
        "ee_provider_id": {
            "$ref": "#/definitions/ee_provider_id"
        },
        "ee_facility_id": {
            "$ref": "#/definitions/ee_facility_id"
        },
        "ee_encounter_diagnosis": {
            "$ref": "#/definitions/ee_encounter_diagnosis"
        },
        "ee_external_id": {
            "$ref": "#/definitions/ee_external_id"
        }
    }
}
 module.exports = schema