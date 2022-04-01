let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for ar_session table",
    "$id": "ar_session",
    "title": "ar_session",
    "type": "object",
    "required": [
        "session_id",
        "payer_id",
        "user_id",
        "closed",
        "reference",
        "pay_total",
        "created_time",
        "modified_time",
        "global_amount",
        "payment_type",
        "adjustment_code",
        "post_to_date",
        "patient_id",
        "payment_method"
    ],
    "definitions": {
        "session_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.2089258196146292e+24
        },
        "payer_id": {
            "description": "0=pt else references insurance_companies.id",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "user_id": {
            "description": "references users.id for session owner",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "closed": {
            "description": "0=no, 1=yes",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "reference": {
            "description": "check or EOB number",
            "type": "string",
            "maxLength": 255
        },
        "check_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "deposit_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "pay_total": {
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        },
        "created_time": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "modified_time": {
            "type": "string",
            "format": "date-time"
        },
        "global_amount": {
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        },
        "payment_type": {
            "type": "string",
            "maxLength": 50
        },
        "description": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "adjustment_code": {
            "type": "string",
            "maxLength": 50
        },
        "post_to_date": {
            "type": "string",
            "format": "date"
        },
        "patient_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "payment_method": {
            "type": "string",
            "maxLength": 25
        }
    },
    "properties": {
        "session_id": {
            "$ref": "#/definitions/session_id"
        },
        "payer_id": {
            "$ref": "#/definitions/payer_id"
        },
        "user_id": {
            "$ref": "#/definitions/user_id"
        },
        "closed": {
            "$ref": "#/definitions/closed"
        },
        "reference": {
            "$ref": "#/definitions/reference"
        },
        "check_date": {
            "$ref": "#/definitions/check_date"
        },
        "deposit_date": {
            "$ref": "#/definitions/deposit_date"
        },
        "pay_total": {
            "$ref": "#/definitions/pay_total"
        },
        "created_time": {
            "$ref": "#/definitions/created_time"
        },
        "modified_time": {
            "$ref": "#/definitions/modified_time"
        },
        "global_amount": {
            "$ref": "#/definitions/global_amount"
        },
        "payment_type": {
            "$ref": "#/definitions/payment_type"
        },
        "description": {
            "$ref": "#/definitions/description"
        },
        "adjustment_code": {
            "$ref": "#/definitions/adjustment_code"
        },
        "post_to_date": {
            "$ref": "#/definitions/post_to_date"
        },
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        },
        "payment_method": {
            "$ref": "#/definitions/payment_method"
        }
    }
}
 module.exports = schema