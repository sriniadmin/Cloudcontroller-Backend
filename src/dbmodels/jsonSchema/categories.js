let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for categories table",
    "$id": "categories",
    "title": "categories",
    "type": "object",
    "required": [
        "id",
        "parent",
        "lft",
        "rght",
        "aco_spec"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "value": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "parent": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "lft": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "rght": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "aco_spec": {
            "type": "string",
            "maxLength": 63,
            "default": "patients|docs"
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "value": {
            "$ref": "#/definitions/value"
        },
        "parent": {
            "$ref": "#/definitions/parent"
        },
        "lft": {
            "$ref": "#/definitions/lft"
        },
        "rght": {
            "$ref": "#/definitions/rght"
        },
        "aco_spec": {
            "$ref": "#/definitions/aco_spec"
        }
    }
}
 module.exports = schema