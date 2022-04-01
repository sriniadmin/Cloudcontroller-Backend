let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for pnotes table",
    "$id": "pnotes",
    "title": "pnotes",
    "type": "object",
    "required": [
        "id",
        "message_status"
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
        "body": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "groupname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "activity": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "authorized": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "title": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "assigned_to": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "deleted": {
            "description": "flag indicates note is deleted",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "message_status": {
            "type": "string",
            "maxLength": 20,
            "default": "New"
        },
        "portal_relation": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "is_msg_encrypted": {
            "description": "Whether messsage encrypted 0-Not encrypted, 1-Encrypted",
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767
        },
        "update_by": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "update_date": {
            "type": "string",
            "format": "date-time",
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
        "body": {
            "$ref": "#/definitions/body"
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
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "authorized": {
            "$ref": "#/definitions/authorized"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "assigned_to": {
            "$ref": "#/definitions/assigned_to"
        },
        "deleted": {
            "$ref": "#/definitions/deleted"
        },
        "message_status": {
            "$ref": "#/definitions/message_status"
        },
        "portal_relation": {
            "$ref": "#/definitions/portal_relation"
        },
        "is_msg_encrypted": {
            "$ref": "#/definitions/is_msg_encrypted"
        },
        "update_by": {
            "$ref": "#/definitions/update_by"
        },
        "update_date": {
            "$ref": "#/definitions/update_date"
        }
    }
}
 module.exports = schema