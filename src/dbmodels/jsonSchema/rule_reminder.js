let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for rule_reminder table",
    "$id": "rule_reminder",
    "title": "rule_reminder",
    "type": "object",
    "required": [
        "id",
        "method",
        "method_detail",
        "value"
    ],
    "definitions": {
        "id": {
            "description": "Maps to the id column in the clinical_rules table",
            "type": "string",
            "maxLength": 31
        },
        "method": {
            "description": "Maps to list_options list rule_reminder_methods",
            "type": "string",
            "maxLength": 31
        },
        "method_detail": {
            "description": "Maps to list_options list rule_reminder_intervals",
            "type": "string",
            "maxLength": 31
        },
        "value": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "method": {
            "$ref": "#/definitions/method"
        },
        "method_detail": {
            "$ref": "#/definitions/method_detail"
        },
        "value": {
            "$ref": "#/definitions/value"
        }
    }
}
 module.exports = schema