let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for rule_action table",
    "$id": "rule_action",
    "title": "rule_action",
    "type": "object",
    "required": [
        "id",
        "group_id",
        "category",
        "item"
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
        "category": {
            "description": "Maps to the category item in the rule_action_item table",
            "type": "string",
            "maxLength": 31
        },
        "item": {
            "description": "Maps to the item column in the rule_action_item table",
            "type": "string",
            "maxLength": 31
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "group_id": {
            "$ref": "#/definitions/group_id"
        },
        "category": {
            "$ref": "#/definitions/category"
        },
        "item": {
            "$ref": "#/definitions/item"
        }
    }
}
 module.exports = schema