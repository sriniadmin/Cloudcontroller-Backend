let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for medex_outgoing table",
    "$id": "medex_outgoing",
    "title": "medex_outgoing",
    "type": "object",
    "required": [
        "msg_uid",
        "msg_pid",
        "msg_pc_eid",
        "campaign_uid",
        "msg_date",
        "msg_type"
    ],
    "definitions": {
        "msg_uid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "msg_pid": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "msg_pc_eid": {
            "type": "string",
            "maxLength": 11
        },
        "campaign_uid": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "msg_date": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "msg_type": {
            "type": "string",
            "maxLength": 50
        },
        "msg_reply": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "msg_extra_text": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "medex_uid": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        }
    },
    "properties": {
        "msg_uid": {
            "$ref": "#/definitions/msg_uid"
        },
        "msg_pid": {
            "$ref": "#/definitions/msg_pid"
        },
        "msg_pc_eid": {
            "$ref": "#/definitions/msg_pc_eid"
        },
        "campaign_uid": {
            "$ref": "#/definitions/campaign_uid"
        },
        "msg_date": {
            "$ref": "#/definitions/msg_date"
        },
        "msg_type": {
            "$ref": "#/definitions/msg_type"
        },
        "msg_reply": {
            "$ref": "#/definitions/msg_reply"
        },
        "msg_extra_text": {
            "$ref": "#/definitions/msg_extra_text"
        },
        "medex_uid": {
            "$ref": "#/definitions/medex_uid"
        }
    }
}
 module.exports = schema