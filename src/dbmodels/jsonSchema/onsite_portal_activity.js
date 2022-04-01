let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for onsite_portal_activity table",
    "$id": "onsite_portal_activity",
    "title": "onsite_portal_activity",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "patient_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "activity": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "require_audit": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "pending_action": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "action_taken": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "status": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "narrative": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "table_action": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "table_args": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "action_user": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "action_taken_time": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "checksum": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "require_audit": {
            "$ref": "#/definitions/require_audit"
        },
        "pending_action": {
            "$ref": "#/definitions/pending_action"
        },
        "action_taken": {
            "$ref": "#/definitions/action_taken"
        },
        "status": {
            "$ref": "#/definitions/status"
        },
        "narrative": {
            "$ref": "#/definitions/narrative"
        },
        "table_action": {
            "$ref": "#/definitions/table_action"
        },
        "table_args": {
            "$ref": "#/definitions/table_args"
        },
        "action_user": {
            "$ref": "#/definitions/action_user"
        },
        "action_taken_time": {
            "$ref": "#/definitions/action_taken_time"
        },
        "checksum": {
            "$ref": "#/definitions/checksum"
        }
    }
}
 module.exports = schema