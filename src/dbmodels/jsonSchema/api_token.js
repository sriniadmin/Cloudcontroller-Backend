let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for api_token table",
    "$id": "api_token",
    "title": "api_token",
    "type": "object",
    "required": [
        "id",
        "user_id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "user_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "token": {
            "type": "string",
            "maxLength": 256,
            "default": null
        },
        "token_auth_salt": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "token_auth": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "expiry": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "email": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "user_id": {
            "$ref": "#/definitions/user_id"
        },
        "token": {
            "$ref": "#/definitions/token"
        },
        "token_auth_salt": {
            "$ref": "#/definitions/token_auth_salt"
        },
        "token_auth": {
            "$ref": "#/definitions/token_auth"
        },
        "expiry": {
            "$ref": "#/definitions/expiry"
        },
        "email": {
            "$ref": "#/definitions/email"
        }
    }
}
 module.exports = schema