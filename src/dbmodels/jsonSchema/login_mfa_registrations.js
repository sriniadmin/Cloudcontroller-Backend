let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for login_mfa_registrations table",
    "$id": "login_mfa_registrations",
    "title": "login_mfa_registrations",
    "type": "object",
    "required": [
        "user_id",
        "name",
        "method",
        "var1",
        "var2"
    ],
    "definitions": {
        "user_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "name": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 30,
            "minimum": 1
        },
        "last_challenge": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "method": {
            "description": "Q&A, U2F, TOTP etc.",
            "type": "string",
            "maxLength": 31
        },
        "var1": {
            "description": "Question, U2F registration etc.",
            "type": "string",
            "maxLength": 4096
        },
        "var2": {
            "description": "Answer etc.",
            "type": "string",
            "maxLength": 256
        }
    },
    "properties": {
        "user_id": {
            "$ref": "#/definitions/user_id"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "last_challenge": {
            "$ref": "#/definitions/last_challenge"
        },
        "method": {
            "$ref": "#/definitions/method"
        },
        "var1": {
            "$ref": "#/definitions/var1"
        },
        "var2": {
            "$ref": "#/definitions/var2"
        }
    }
}
 module.exports = schema