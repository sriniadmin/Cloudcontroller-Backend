let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for prices table",
    "$id": "prices",
    "title": "prices",
    "type": "object",
    "required": [
        "pr_id",
        "pr_selector",
        "pr_level",
        "pr_price"
    ],
    "definitions": {
        "pr_id": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 11,
            "minimum": 1
        },
        "pr_selector": {
            "$comment": "primary key",
            "description": "template selector for drugs, empty for codes",
            "type": "string",
            "maxLength": 255,
            "minimum": 1
        },
        "pr_level": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "pr_price": {
            "description": "price in local currency",
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        }
    },
    "properties": {
        "pr_id": {
            "$ref": "#/definitions/pr_id"
        },
        "pr_selector": {
            "$ref": "#/definitions/pr_selector"
        },
        "pr_level": {
            "$ref": "#/definitions/pr_level"
        },
        "pr_price": {
            "$ref": "#/definitions/pr_price"
        }
    }
}
 module.exports = schema