let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for log_comment_encrypt table",
    "$id": "log_comment_encrypt",
    "title": "log_comment_encrypt",
    "type": "object",
    "required": [
        "id",
        "log_id",
        "encrypt",
        "version"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "log_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "encrypt": {
            "type": "string",
            "enum": [
                "Yes",
                "No"
            ],
            "default": "No"
        },
        "checksum": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "version": {
            "description": "0 for mycrypt and 1 for openssl",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "log_id": {
            "$ref": "#/definitions/log_id"
        },
        "encrypt": {
            "$ref": "#/definitions/encrypt"
        },
        "checksum": {
            "$ref": "#/definitions/checksum"
        },
        "version": {
            "$ref": "#/definitions/version"
        }
    }
}
 module.exports = schema