let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for gacl_axo_groups table",
    "$id": "gacl_axo_groups",
    "title": "gacl_axo_groups",
    "type": "object",
    "required": [
        "id",
        "parent_id",
        "lft",
        "rgt",
        "name",
        "value"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "parent_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "lft": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "rgt": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "name": {
            "type": "string",
            "maxLength": 255
        },
        "value": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 150,
            "minimum": 1
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "parent_id": {
            "$ref": "#/definitions/parent_id"
        },
        "lft": {
            "$ref": "#/definitions/lft"
        },
        "rgt": {
            "$ref": "#/definitions/rgt"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "value": {
            "$ref": "#/definitions/value"
        }
    }
}
 module.exports = schema