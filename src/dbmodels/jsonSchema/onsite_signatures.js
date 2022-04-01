let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for onsite_signatures table",
    "$id": "onsite_signatures",
    "title": "onsite_signatures",
    "type": "object",
    "required": [
        "id",
        "status",
        "type",
        "created",
        "lastmod",
        "activity",
        "signator",
        "sig_hash",
        "ip"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "status": {
            "type": "string",
            "maxLength": 128,
            "default": "waiting"
        },
        "type": {
            "type": "string",
            "maxLength": 128
        },
        "created": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "lastmod": {
            "type": "string",
            "format": "date-time"
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "encounter": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "activity": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "authorized": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "signator": {
            "type": "string",
            "maxLength": 255
        },
        "sig_image": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "signature": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "sig_hash": {
            "type": "string",
            "maxLength": 128
        },
        "ip": {
            "type": "string",
            "maxLength": 46
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "status": {
            "$ref": "#/definitions/status"
        },
        "type": {
            "$ref": "#/definitions/type"
        },
        "created": {
            "$ref": "#/definitions/created"
        },
        "lastmod": {
            "$ref": "#/definitions/lastmod"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "authorized": {
            "$ref": "#/definitions/authorized"
        },
        "signator": {
            "$ref": "#/definitions/signator"
        },
        "sig_image": {
            "$ref": "#/definitions/sig_image"
        },
        "signature": {
            "$ref": "#/definitions/signature"
        },
        "sig_hash": {
            "$ref": "#/definitions/sig_hash"
        },
        "ip": {
            "$ref": "#/definitions/ip"
        }
    }
}
 module.exports = schema