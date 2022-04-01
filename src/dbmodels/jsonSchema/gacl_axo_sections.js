let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for gacl_axo_sections table",
    "$id": "gacl_axo_sections",
    "title": "gacl_axo_sections",
    "type": "object",
    "required": [
        "id",
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
            "maxLength": 230
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