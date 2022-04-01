 let schema={
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for users_secure table",
    "$id": "users_secure",
    "title": "users_secure",
    "type": "object",
    "required": [
        "username",
        "password"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "username": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "password": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "salt": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_update": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "password_history1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "salt_history1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "password_history2": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "salt_history2": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_challenge_response": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "login_work_area": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "login_fail_counter": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "email": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "role": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "tenant": {
          "type": "string",
          "maxLength": 255
        },
        "fname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "lname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "username": {
            "$ref": "#/definitions/username"
        },
        "password": {
            "$ref": "#/definitions/password"
        },
        "salt": {
            "$ref": "#/definitions/salt"
        },
        "last_update": {
            "$ref": "#/definitions/last_update"
        },
        "password_history1": {
            "$ref": "#/definitions/password_history1"
        },
        "salt_history1": {
            "$ref": "#/definitions/salt_history1"
        },
        "password_history2": {
            "$ref": "#/definitions/password_history2"
        },
        "salt_history2": {
            "$ref": "#/definitions/salt_history2"
        },
        "last_challenge_response": {
            "$ref": "#/definitions/last_challenge_response"
        },
        "login_work_area": {
            "$ref": "#/definitions/login_work_area"
        },
        "login_fail_counter": {
            "$ref": "#/definitions/login_fail_counter"
        },
        "email": {
            "$ref": "#/definitions/email"
        },
        "role": {
            "$ref": "#/definitions/role"
        },
        "tenant": {
            "$ref": "#/definitions/tenant"
        },
        "fname": {
            "$ref": "#/definitions/fname"
        },
        "lname": {
            "$ref": "#/definitions/lname"
        }
    }
}

module.exports=schema;
