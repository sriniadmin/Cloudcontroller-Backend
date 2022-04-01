let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for onsite_online table",
    "$id": "onsite_online",
    "title": "onsite_online",
    "type": "object",
    "required": [
        "hash",
        "ip",
        "last_update",
        "username"
    ],
    "definitions": {
        "hash": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 32,
            "minimum": 1
        },
        "ip": {
            "type": "string",
            "maxLength": 15
        },
        "last_update": {
            "type": "string",
            "format": "date-time"
        },
        "username": {
            "type": "string",
            "maxLength": 64
        },
        "userid": {
            "type": "integer",
            "minimum": 0,
            "maximum": 3.094850098213451e+26,
            "default": null
        }
    },
    "properties": {
        "hash": {
            "$ref": "#/definitions/hash"
        },
        "ip": {
            "$ref": "#/definitions/ip"
        },
        "last_update": {
            "$ref": "#/definitions/last_update"
        },
        "username": {
            "$ref": "#/definitions/username"
        },
        "userid": {
            "$ref": "#/definitions/userid"
        }
    }
}
 module.exports = schema