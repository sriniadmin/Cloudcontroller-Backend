let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for groups table",
    "$id": "groups",
    "title": "groups",
    "type": "object",
    "required": [
        "id"
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
            "maxLength": 4294967295,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 4294967295,
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
        "user": {
            "$ref": "#/definitions/user"
        }
    }
}
 module.exports = schema