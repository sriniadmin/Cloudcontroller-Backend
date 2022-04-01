let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for esign_signatures table",
    "$id": "esign_signatures",
    "title": "esign_signatures",
    "type": "object",
    "required": [
        "id",
        "tid",
        "table",
        "uid",
        "datetime",
        "is_lock",
        "hash",
        "signature_hash"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "tid": {
            "description": "Table row ID for signature",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "table": {
            "description": "table name for the signature",
            "type": "string",
            "maxLength": 255
        },
        "uid": {
            "description": "user id for the signing user",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "datetime": {
            "description": "datetime of the signature action",
            "type": "string",
            "format": "date-time"
        },
        "is_lock": {
            "description": "sig, lock or amendment",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "amendment": {
            "description": "amendment text, if any",
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "hash": {
            "description": "hash of signed data",
            "type": "string",
            "maxLength": 255
        },
        "signature_hash": {
            "description": "hash of signature itself",
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "tid": {
            "$ref": "#/definitions/tid"
        },
        "table": {
            "$ref": "#/definitions/table"
        },
        "uid": {
            "$ref": "#/definitions/uid"
        },
        "datetime": {
            "$ref": "#/definitions/datetime"
        },
        "is_lock": {
            "$ref": "#/definitions/is_lock"
        },
        "amendment": {
            "$ref": "#/definitions/amendment"
        },
        "hash": {
            "$ref": "#/definitions/hash"
        },
        "signature_hash": {
            "$ref": "#/definitions/signature_hash"
        }
    }
}
 module.exports = schema