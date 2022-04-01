let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for direct_message_log table",
    "$id": "direct_message_log",
    "title": "direct_message_log",
    "type": "object",
    "required": [
        "id",
        "msg_type",
        "msg_id",
        "sender",
        "recipient",
        "create_ts",
        "status"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "msg_type": {
            "description": "S=sent,R=received",
            "type": "string",
            "maxLength": 1
        },
        "msg_id": {
            "type": "string",
            "maxLength": 127
        },
        "sender": {
            "type": "string",
            "maxLength": 255
        },
        "recipient": {
            "type": "string",
            "maxLength": 255
        },
        "create_ts": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "status": {
            "description": "Q=queued,D=dispatched,R=received,F=failed",
            "type": "string",
            "maxLength": 1
        },
        "status_info": {
            "type": "string",
            "maxLength": 511,
            "default": null
        },
        "status_ts": {
            "type": "string",
            "default": null
        },
        "patient_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "user_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "msg_type": {
            "$ref": "#/definitions/msg_type"
        },
        "msg_id": {
            "$ref": "#/definitions/msg_id"
        },
        "sender": {
            "$ref": "#/definitions/sender"
        },
        "recipient": {
            "$ref": "#/definitions/recipient"
        },
        "create_ts": {
            "$ref": "#/definitions/create_ts"
        },
        "status": {
            "$ref": "#/definitions/status"
        },
        "status_info": {
            "$ref": "#/definitions/status_info"
        },
        "status_ts": {
            "$ref": "#/definitions/status_ts"
        },
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        },
        "user_id": {
            "$ref": "#/definitions/user_id"
        }
    }
}
 module.exports = schema