let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for therapy_groups table",
    "$id": "therapy_groups",
    "title": "therapy_groups",
    "type": "object",
    "required": [
        "group_id",
        "group_name",
        "group_start_date",
        "group_type",
        "group_participation",
        "group_status"
    ],
    "definitions": {
        "group_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "group_name": {
            "type": "string",
            "maxLength": 255
        },
        "group_start_date": {
            "type": "string",
            "format": "date"
        },
        "group_end_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "group_type": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "group_participation": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "group_status": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "group_notes": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "group_guest_counselors": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "group_id": {
            "$ref": "#/definitions/group_id"
        },
        "group_name": {
            "$ref": "#/definitions/group_name"
        },
        "group_start_date": {
            "$ref": "#/definitions/group_start_date"
        },
        "group_end_date": {
            "$ref": "#/definitions/group_end_date"
        },
        "group_type": {
            "$ref": "#/definitions/group_type"
        },
        "group_participation": {
            "$ref": "#/definitions/group_participation"
        },
        "group_status": {
            "$ref": "#/definitions/group_status"
        },
        "group_notes": {
            "$ref": "#/definitions/group_notes"
        },
        "group_guest_counselors": {
            "$ref": "#/definitions/group_guest_counselors"
        }
    }
}
 module.exports = schema