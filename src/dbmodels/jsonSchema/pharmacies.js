let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for pharmacies table",
    "$id": "pharmacies",
    "title": "pharmacies",
    "type": "object",
    "required": [
        "id",
        "transmit_method"
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
        "transmit_method": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "email": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ncpdp": {
            "type": "integer",
            "minimum": -3.961408125713217e+28,
            "maximum": 3.961408125713217e+28,
            "default": null
        },
        "npi": {
            "type": "integer",
            "minimum": -3.961408125713217e+28,
            "maximum": 3.961408125713217e+28,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "transmit_method": {
            "$ref": "#/definitions/transmit_method"
        },
        "email": {
            "$ref": "#/definitions/email"
        },
        "ncpdp": {
            "$ref": "#/definitions/ncpdp"
        },
        "npi": {
            "$ref": "#/definitions/npi"
        }
    }
}
 module.exports = schema