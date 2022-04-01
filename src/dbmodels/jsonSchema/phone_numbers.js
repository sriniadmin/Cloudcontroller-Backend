let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for phone_numbers table",
    "$id": "phone_numbers",
    "title": "phone_numbers",
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
        "country_code": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "area_code": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "prefix": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "number": {
            "type": "string",
            "maxLength": 4,
            "default": null
        },
        "type": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
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
        "country_code": {
            "$ref": "#/definitions/country_code"
        },
        "area_code": {
            "$ref": "#/definitions/area_code"
        },
        "prefix": {
            "$ref": "#/definitions/prefix"
        },
        "number": {
            "$ref": "#/definitions/number"
        },
        "type": {
            "$ref": "#/definitions/type"
        },
        "foreign_id": {
            "$ref": "#/definitions/foreign_id"
        }
    }
}
 module.exports = schema