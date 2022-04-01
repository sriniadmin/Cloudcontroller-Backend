let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for rule_filter table",
    "$id": "rule_filter",
    "title": "rule_filter",
    "type": "object",
    "required": [
        "id",
        "include_flag",
        "required_flag",
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
        "include_flag": {
            "description": "0 is exclude and 1 is include",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "required_flag": {
            "description": "0 is required and 1 is optional",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "method": {
            "description": "Maps to list_options list rule_filters",
            "type": "string",
            "maxLength": 31
        },
        "method_detail": {
            "description": "Maps to list_options lists rule__intervals",
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
        "include_flag": {
            "$ref": "#/definitions/include_flag"
        },
        "required_flag": {
            "$ref": "#/definitions/required_flag"
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