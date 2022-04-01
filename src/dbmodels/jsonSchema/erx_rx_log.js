let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for erx_rx_log table",
    "$id": "erx_rx_log",
    "title": "erx_rx_log",
    "type": "object",
    "required": [
        "id",
        "prescription_id",
        "date",
        "time",
        "code"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "prescription_id": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "date": {
            "type": "string",
            "maxLength": 25
        },
        "time": {
            "type": "string",
            "maxLength": 15
        },
        "code": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "status": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "message_id": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "read": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "prescription_id": {
            "$ref": "#/definitions/prescription_id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "time": {
            "$ref": "#/definitions/time"
        },
        "code": {
            "$ref": "#/definitions/code"
        },
        "status": {
            "$ref": "#/definitions/status"
        },
        "message_id": {
            "$ref": "#/definitions/message_id"
        },
        "read": {
            "$ref": "#/definitions/read"
        }
    }
}
 module.exports = schema