let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for misc_address_book table",
    "$id": "misc_address_book",
    "title": "misc_address_book",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "fname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "mname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "lname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "street": {
            "type": "string",
            "maxLength": 60,
            "default": null
        },
        "city": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "state": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "zip": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "phone": {
            "type": "string",
            "maxLength": 30,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "fname": {
            "$ref": "#/definitions/fname"
        },
        "mname": {
            "$ref": "#/definitions/mname"
        },
        "lname": {
            "$ref": "#/definitions/lname"
        },
        "street": {
            "$ref": "#/definitions/street"
        },
        "city": {
            "$ref": "#/definitions/city"
        },
        "state": {
            "$ref": "#/definitions/state"
        },
        "zip": {
            "$ref": "#/definitions/zip"
        },
        "phone": {
            "$ref": "#/definitions/phone"
        }
    }
}
 module.exports = schema