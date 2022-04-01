let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for payment_gateway_details table",
    "$id": "payment_gateway_details",
    "title": "payment_gateway_details",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "service_name": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "login_id": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "transaction_key": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "md5": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "service_name": {
            "$ref": "#/definitions/service_name"
        },
        "login_id": {
            "$ref": "#/definitions/login_id"
        },
        "transaction_key": {
            "$ref": "#/definitions/transaction_key"
        },
        "md5": {
            "$ref": "#/definitions/md5"
        }
    }
}
 module.exports = schema