let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for onsite_mail table",
    "$id": "onsite_mail",
    "title": "onsite_mail",
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
        "owner": {
            "type": "string",
            "maxLength": 128,
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
        "header": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "title": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "body": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "recipient_id": {
            "type": "string",
            "maxLength": 128,
            "default": null
        },
        "recipient_name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "sender_id": {
            "type": "string",
            "maxLength": 128,
            "default": null
        },
        "sender_name": {
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
        "delete_date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "mtype": {
            "type": "string",
            "maxLength": 128,
            "default": null
        },
        "message_status": {
            "type": "string",
            "maxLength": 20,
            "default": "New"
        },
        "mail_chain": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "reply_mail_chain": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "is_msg_encrypted": {
            "description": "Whether messsage encrypted 0-Not encrypted, 1-Encrypted",
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "owner": {
            "$ref": "#/definitions/owner"
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
        "header": {
            "$ref": "#/definitions/header"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "body": {
            "$ref": "#/definitions/body"
        },
        "recipient_id": {
            "$ref": "#/definitions/recipient_id"
        },
        "recipient_name": {
            "$ref": "#/definitions/recipient_name"
        },
        "sender_id": {
            "$ref": "#/definitions/sender_id"
        },
        "sender_name": {
            "$ref": "#/definitions/sender_name"
        },
        "assigned_to": {
            "$ref": "#/definitions/assigned_to"
        },
        "deleted": {
            "$ref": "#/definitions/deleted"
        },
        "delete_date": {
            "$ref": "#/definitions/delete_date"
        },
        "mtype": {
            "$ref": "#/definitions/mtype"
        },
        "message_status": {
            "$ref": "#/definitions/message_status"
        },
        "mail_chain": {
            "$ref": "#/definitions/mail_chain"
        },
        "reply_mail_chain": {
            "$ref": "#/definitions/reply_mail_chain"
        },
        "is_msg_encrypted": {
            "$ref": "#/definitions/is_msg_encrypted"
        }
    }
}
 module.exports = schema