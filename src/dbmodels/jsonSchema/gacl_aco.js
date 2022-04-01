let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for gacl_aco table",
    "$id": "gacl_aco",
    "title": "gacl_aco",
    "type": "object",
    "required": [
        "id",
        "section_value",
        "value",
        "order_value",
        "name",
        "hidden"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "section_value": {
            "type": "string",
            "maxLength": 150,
            "default": "0"
        },
        "value": {
            "type": "string",
            "maxLength": 150
        },
        "order_value": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "name": {
            "type": "string",
            "maxLength": 255
        },
        "hidden": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "section_value": {
            "$ref": "#/definitions/section_value"
        },
        "value": {
            "$ref": "#/definitions/value"
        },
        "order_value": {
            "$ref": "#/definitions/order_value"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "hidden": {
            "$ref": "#/definitions/hidden"
        }
    }
}
 module.exports = schema