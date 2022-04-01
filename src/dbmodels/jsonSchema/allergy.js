let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for allergy table",
    "$id": "allergy",
    "title": "allergy",
    "type": "object",
    "required": [
        "allergy_type",
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "string",
            "maxLength": 255
        },
        "allergy_type": {
            "type": "string",
            "maxLength": 255
        },
        "allergy_name": {
            "type": "string",
            "maxLength": 255
        },
        "reaction": {
            "type": "string",
            "maxLength": 255
        },
        "status": {
            "type": "string",
            "maxLength": 255
        },
        "date_from": {
            "type": ["string","null"],
            "default": null
        },
        "date_to": {
            "type":  ["string","null"],
            "default": null
        },
        "note": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "tenant_id": {
            "type": "string",
            "maxLength": 255
        },
        "allergy_uuid": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "allergy_type": {
            "$ref": "#/definitions/allergy_type"
        },
        "allergy_name": {
            "$ref": "#/definitions/allergy_name"
        },
        "reaction": {
            "$ref": "#/definitions/reaction"
        },
        "status": {
            "$ref": "#/definitions/status"
        },
        "date_from": {
            "$ref": "#/definitions/date_from"
        },
        "date_to": {
            "$ref": "#/definitions/date_to"
        },
        "note": {
            "$ref": "#/definitions/note"
        },
        "tenant_id": {
            "$ref": "#/definitions/tenant_id"
        },
        "allergy_uuid": {
            "$ref": "#/definitions/allergy_uuid"
        }
    }
}
module.exports = schema