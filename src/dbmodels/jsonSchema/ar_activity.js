let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for ar_activity table",
    "$id": "ar_activity",
    "title": "ar_activity",
    "type": "object",
    "required": [
        "pid",
        "encounter",
        "sequence_no",
        "code_type",
        "code",
        "modifier",
        "payer_type",
        "post_time",
        "post_user",
        "session_id",
        "memo",
        "pay_amount",
        "adj_amount",
        "modified_time",
        "follow_up",
        "account_code"
    ],
    "definitions": {
        "pid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "encounter": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "sequence_no": {
            "$comment": "primary key",
            "description": "Ar_activity sequence_no, incremented in code",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.2089258196146292e+24
        },
        "code_type": {
            "type": "string",
            "maxLength": 12
        },
        "code": {
            "description": "empty means claim level",
            "type": "string",
            "maxLength": 20
        },
        "modifier": {
            "type": "string",
            "maxLength": 12
        },
        "payer_type": {
            "description": "0=pt, 1=ins1, 2=ins2, etc",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "post_time": {
            "type": "string",
            "format": "date-time"
        },
        "post_user": {
            "description": "references users.id",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "session_id": {
            "description": "references ar_session.session_id",
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24
        },
        "memo": {
            "description": "adjustment reasons go here",
            "type": "string",
            "maxLength": 255
        },
        "pay_amount": {
            "description": "either pay or adj will always be 0",
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        },
        "adj_amount": {
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        },
        "modified_time": {
            "type": "string",
            "format": "date-time"
        },
        "follow_up": {
            "type": "string",
            "maxLength": 1
        },
        "follow_up_note": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "account_code": {
            "type": "string",
            "maxLength": 15
        },
        "reason_code": {
            "description": "Use as needed to show the primary payer adjustment reason code",
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "sequence_no": {
            "$ref": "#/definitions/sequence_no"
        },
        "code_type": {
            "$ref": "#/definitions/code_type"
        },
        "code": {
            "$ref": "#/definitions/code"
        },
        "modifier": {
            "$ref": "#/definitions/modifier"
        },
        "payer_type": {
            "$ref": "#/definitions/payer_type"
        },
        "post_time": {
            "$ref": "#/definitions/post_time"
        },
        "post_user": {
            "$ref": "#/definitions/post_user"
        },
        "session_id": {
            "$ref": "#/definitions/session_id"
        },
        "memo": {
            "$ref": "#/definitions/memo"
        },
        "pay_amount": {
            "$ref": "#/definitions/pay_amount"
        },
        "adj_amount": {
            "$ref": "#/definitions/adj_amount"
        },
        "modified_time": {
            "$ref": "#/definitions/modified_time"
        },
        "follow_up": {
            "$ref": "#/definitions/follow_up"
        },
        "follow_up_note": {
            "$ref": "#/definitions/follow_up_note"
        },
        "account_code": {
            "$ref": "#/definitions/account_code"
        },
        "reason_code": {
            "$ref": "#/definitions/reason_code"
        }
    }
}
 module.exports = schema