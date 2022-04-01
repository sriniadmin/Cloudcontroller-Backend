let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for rule_patient_data table",
    "$id": "rule_patient_data",
    "title": "rule_patient_data",
    "type": "object",
    "required": [
        "id",
        "pid",
        "category",
        "item",
        "complete",
        "result"
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
        "pid": {
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
        },
        "complete": {
            "description": "Maps to list_options list yesno",
            "type": "string",
            "maxLength": 31
        },
        "result": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "category": {
            "$ref": "#/definitions/category"
        },
        "item": {
            "$ref": "#/definitions/item"
        },
        "complete": {
            "$ref": "#/definitions/complete"
        },
        "result": {
            "$ref": "#/definitions/result"
        }
    }
}
 module.exports = schema