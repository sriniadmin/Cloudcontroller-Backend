let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for lang_languages table",
    "$id": "lang_languages",
    "title": "lang_languages",
    "type": "object",
    "required": [
        "lang_id",
        "lang_code"
    ],
    "definitions": {
        "lang_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "lang_code": {
            "type": "string",
            "maxLength": 2
        },
        "lang_description": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "lang_is_rtl": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        }
    },
    "properties": {
        "lang_id": {
            "$ref": "#/definitions/lang_id"
        },
        "lang_code": {
            "$ref": "#/definitions/lang_code"
        },
        "lang_description": {
            "$ref": "#/definitions/lang_description"
        },
        "lang_is_rtl": {
            "$ref": "#/definitions/lang_is_rtl"
        }
    }
}
 module.exports = schema