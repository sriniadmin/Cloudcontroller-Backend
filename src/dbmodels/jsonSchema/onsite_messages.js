let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for onsite_messages table",
    "$id": "onsite_messages",
    "title": "onsite_messages",
    "description": "Portal messages",
    "type": "object",
    "required": [
        "id",
        "username",
        "ip",
        "date",
        "recip_id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "username": {
            "type": "string",
            "maxLength": 64
        },
        "message": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "ip": {
            "type": "string",
            "maxLength": 15
        },
        "date": {
            "type": "string",
            "format": "date-time"
        },
        "sender_id": {
            "description": "who sent id",
            "type": "string",
            "maxLength": 64,
            "default": null
        },
        "recip_id": {
            "description": "who to id array",
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "username": {
            "$ref": "#/definitions/username"
        },
        "message": {
            "$ref": "#/definitions/message"
        },
        "ip": {
            "$ref": "#/definitions/ip"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "sender_id": {
            "$ref": "#/definitions/sender_id"
        },
        "recip_id": {
            "$ref": "#/definitions/recip_id"
        }
    }
}
 module.exports = schema