let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for valueset table",
    "$id": "valueset",
    "title": "valueset",
    "type": "object",
    "required": [
        "nqf_code",
        "code",
        "code_system",
        "valueset"
    ],
    "definitions": {
        "nqf_code": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 255,
            "minimum": 1
        },
        "code": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 255,
            "minimum": 1
        },
        "code_system": {
            "type": "string",
            "maxLength": 255
        },
        "code_type": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "valueset": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 255,
            "minimum": 1
        },
        "description": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "valueset_name": {
            "type": "string",
            "maxLength": 500,
            "default": null
        }
    },
    "properties": {
        "nqf_code": {
            "$ref": "#/definitions/nqf_code"
        },
        "code": {
            "$ref": "#/definitions/code"
        },
        "code_system": {
            "$ref": "#/definitions/code_system"
        },
        "code_type": {
            "$ref": "#/definitions/code_type"
        },
        "valueset": {
            "$ref": "#/definitions/valueset"
        },
        "description": {
            "$ref": "#/definitions/description"
        },
        "valueset_name": {
            "$ref": "#/definitions/valueset_name"
        }
    }
}
 module.exports = schema