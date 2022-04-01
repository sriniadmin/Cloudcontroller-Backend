let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for employer_data table",
    "$id": "employer_data",
    "title": "employer_data",
    "type": "object",
    "required": [
        "id",
        "pid"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "street": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "postal_code": {
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
            "maxLength": 255,
            "default": null
        },
        "country": {
            "type": "string",
            "maxLength": 255,
            "default": null
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
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "street": {
            "$ref": "#/definitions/street"
        },
        "postal_code": {
            "$ref": "#/definitions/postal_code"
        },
        "city": {
            "$ref": "#/definitions/city"
        },
        "state": {
            "$ref": "#/definitions/state"
        },
        "country": {
            "$ref": "#/definitions/country"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        }
    }
}
 module.exports = schema