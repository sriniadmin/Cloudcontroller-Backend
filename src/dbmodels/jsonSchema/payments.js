let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for payments table",
    "$id": "payments",
    "title": "payments",
    "type": "object",
    "required": [
        "id",
        "pid",
        "dtime",
        "encounter",
        "amount1",
        "amount2",
        "posted1",
        "posted2"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "dtime": {
            "type": "string",
            "format": "date-time"
        },
        "encounter": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "method": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "source": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "amount1": {
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        },
        "amount2": {
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        },
        "posted1": {
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        },
        "posted2": {
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "dtime": {
            "$ref": "#/definitions/dtime"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "method": {
            "$ref": "#/definitions/method"
        },
        "source": {
            "$ref": "#/definitions/source"
        },
        "amount1": {
            "$ref": "#/definitions/amount1"
        },
        "amount2": {
            "$ref": "#/definitions/amount2"
        },
        "posted1": {
            "$ref": "#/definitions/posted1"
        },
        "posted2": {
            "$ref": "#/definitions/posted2"
        }
    }
}
 module.exports = schema