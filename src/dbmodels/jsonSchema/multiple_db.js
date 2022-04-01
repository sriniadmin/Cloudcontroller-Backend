let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for multiple_db table",
    "$id": "multiple_db",
    "title": "multiple_db",
    "type": "object",
    "required": [
        "id",
        "namespace",
        "username",
        "dbname",
        "host",
        "port",
        "date"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "namespace": {
            "type": "string",
            "maxLength": 255
        },
        "username": {
            "type": "string",
            "maxLength": 255
        },
        "password": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "dbname": {
            "type": "string",
            "maxLength": 255
        },
        "host": {
            "type": "string",
            "maxLength": 255,
            "default": "localhost"
        },
        "port": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "date": {
            "type": "string",
            "default": "current_timestamp()"
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "namespace": {
            "$ref": "#/definitions/namespace"
        },
        "username": {
            "$ref": "#/definitions/username"
        },
        "password": {
            "$ref": "#/definitions/password"
        },
        "dbname": {
            "$ref": "#/definitions/dbname"
        },
        "host": {
            "$ref": "#/definitions/host"
        },
        "port": {
            "$ref": "#/definitions/port"
        },
        "date": {
            "$ref": "#/definitions/date"
        }
    }
}
 module.exports = schema