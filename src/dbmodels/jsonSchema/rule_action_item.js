let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for rule_action_item table",
    "$id": "rule_action_item",
    "title": "rule_action_item",
    "type": "object",
    "required": [
        "category",
        "item",
        "clin_rem_link",
        "custom_flag"
    ],
    "definitions": {
        "category": {
            "$comment": "primary key",
            "description": "Maps to list_options list rule_action_category",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "item": {
            "$comment": "primary key",
            "description": "Maps to list_options list rule_action",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "clin_rem_link": {
            "description": "Custom html link in clinical reminder widget",
            "type": "string",
            "maxLength": 255
        },
        "reminder_message": {
            "description": "Custom message in patient reminder",
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "custom_flag": {
            "description": "1 indexed to rule_patient_data, 0 indexed within main schema",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        }
    },
    "properties": {
        "category": {
            "$ref": "#/definitions/category"
        },
        "item": {
            "$ref": "#/definitions/item"
        },
        "clin_rem_link": {
            "$ref": "#/definitions/clin_rem_link"
        },
        "reminder_message": {
            "$ref": "#/definitions/reminder_message"
        },
        "custom_flag": {
            "$ref": "#/definitions/custom_flag"
        }
    }
}
 module.exports = schema