let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for product_registration table",
    "$id": "product_registration",
    "title": "product_registration",
    "type": "object",
    "required": [
        "registration_id"
    ],
    "definitions": {
        "registration_id": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 36,
            "minimum": 1
        },
        "email": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "opt_out": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        }
    },
    "properties": {
        "registration_id": {
            "$ref": "#/definitions/registration_id"
        },
        "email": {
            "$ref": "#/definitions/email"
        },
        "opt_out": {
            "$ref": "#/definitions/opt_out"
        }
    }
}
 module.exports = schema