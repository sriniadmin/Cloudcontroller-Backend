let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for clinical_plans_rules table",
    "$id": "clinical_plans_rules",
    "title": "clinical_plans_rules",
    "type": "object",
    "required": [
        "plan_id",
        "rule_id"
    ],
    "definitions": {
        "plan_id": {
            "$comment": "primary key",
            "description": "Unique and maps to list_options list clinical_plans",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "rule_id": {
            "$comment": "primary key",
            "description": "Unique and maps to list_options list clinical_rules",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        }
    },
    "properties": {
        "plan_id": {
            "$ref": "#/definitions/plan_id"
        },
        "rule_id": {
            "$ref": "#/definitions/rule_id"
        }
    }
}
 module.exports = schema