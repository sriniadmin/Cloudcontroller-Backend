let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for lang_constants table",
    "$id": "lang_constants",
    "title": "lang_constants",
    "type": "object",
    "required": [
        "cons_id"
    ],
    "definitions": {
        "cons_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "constant_name": {
            "type": "string",
            "maxLength": 16777215,
            "default": null
        }
    },
    "properties": {
        "cons_id": {
            "$ref": "#/definitions/cons_id"
        },
        "constant_name": {
            "$ref": "#/definitions/constant_name"
        }
    }
}
 module.exports = schema