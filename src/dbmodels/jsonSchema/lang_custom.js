let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for lang_custom table",
    "$id": "lang_custom",
    "title": "lang_custom",
    "type": "object",
    "required": [
        "lang_description",
        "lang_code"
    ],
    "definitions": {
        "lang_description": {
            "type": "string",
            "maxLength": 100
        },
        "lang_code": {
            "type": "string",
            "maxLength": 2
        },
        "constant_name": {
            "type": "string",
            "maxLength": 16777215,
            "default": null
        },
        "definition": {
            "type": "string",
            "maxLength": 16777215,
            "default": null
        }
    },
    "properties": {
        "lang_description": {
            "$ref": "#/definitions/lang_description"
        },
        "lang_code": {
            "$ref": "#/definitions/lang_code"
        },
        "constant_name": {
            "$ref": "#/definitions/constant_name"
        },
        "definition": {
            "$ref": "#/definitions/definition"
        }
    }
}
 module.exports = schema