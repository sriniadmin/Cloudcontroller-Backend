let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for lang_definitions table",
    "$id": "lang_definitions",
    "title": "lang_definitions",
    "type": "object",
    "required": [
        "def_id",
        "cons_id",
        "lang_id"
    ],
    "definitions": {
        "def_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "cons_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "lang_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "definition": {
            "type": "string",
            "maxLength": 16777215,
            "default": null
        }
    },
    "properties": {
        "def_id": {
            "$ref": "#/definitions/def_id"
        },
        "cons_id": {
            "$ref": "#/definitions/cons_id"
        },
        "lang_id": {
            "$ref": "#/definitions/lang_id"
        },
        "definition": {
            "$ref": "#/definitions/definition"
        }
    }
}
 module.exports = schema