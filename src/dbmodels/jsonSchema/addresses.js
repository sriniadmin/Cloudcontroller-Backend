let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for addresses table",
    "$id": "addresses",
    "title": "addresses",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "line1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "line2": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "city": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "state": {
            "type": "string",
            "maxLength": 35,
            "default": null
        },
        "zip": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "plus_four": {
            "type": "string",
            "maxLength": 4,
            "default": null
        },
        "country": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "foreign_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "line1": {
            "$ref": "#/definitions/line1"
        },
        "line2": {
            "$ref": "#/definitions/line2"
        },
        "city": {
            "$ref": "#/definitions/city"
        },
        "state": {
            "$ref": "#/definitions/state"
        },
        "zip": {
            "$ref": "#/definitions/zip"
        },
        "plus_four": {
            "$ref": "#/definitions/plus_four"
        },
        "country": {
            "$ref": "#/definitions/country"
        },
        "foreign_id": {
            "$ref": "#/definitions/foreign_id"
        }
    }
}
 module.exports = schema