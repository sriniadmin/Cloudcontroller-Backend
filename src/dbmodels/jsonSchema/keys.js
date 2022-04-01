let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for keys table",
    "$id": "keys",
    "title": "keys",
    "type": "object",
    "required": [
        "id",
        "name"
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
            "maxLength": 20
        },
        "value": {
            "type": "string",
            "maxLength": 65535,
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
        "value": {
            "$ref": "#/definitions/value"
        }
    }
}
 module.exports = schema