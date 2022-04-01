let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for rule_target table",
    "$id": "rule_target",
    "title": "rule_target",
    "type": "object",
    "required": [
        "id",
        "group_id",
        "include_flag",
        "required_flag",
        "method",
        "value",
        "interval"
    ],
    "definitions": {
        "id": {
            "description": "Maps to the id column in the clinical_rules table",
            "type": "string",
            "maxLength": 31
        },
        "group_id": {
            "description": "Contains group id to identify collection of targets in a rule",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
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
            "description": "Maps to list_options list rule_targets",
            "type": "string",
            "maxLength": 31
        },
        "value": {
            "description": "Data is dependent on the method",
            "type": "string",
            "maxLength": 255
        },
        "interval": {
            "description": "Only used in interval entries",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "group_id": {
            "$ref": "#/definitions/group_id"
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
        "value": {
            "$ref": "#/definitions/value"
        },
        "interval": {
            "$ref": "#/definitions/interval"
        }
    }
}
 module.exports = schema