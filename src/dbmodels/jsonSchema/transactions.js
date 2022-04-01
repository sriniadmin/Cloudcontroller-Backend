let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for transactions table",
    "$id": "transactions",
    "title": "transactions",
    "type": "object",
    "required": [
        "id",
        "title",
        "user",
        "groupname"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "title": {
            "type": "string",
            "maxLength": 255
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 255
        },
        "groupname": {
            "type": "string",
            "maxLength": 255
        },
        "authorized": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "groupname": {
            "$ref": "#/definitions/groupname"
        },
        "authorized": {
            "$ref": "#/definitions/authorized"
        }
    }
}
 module.exports = schema