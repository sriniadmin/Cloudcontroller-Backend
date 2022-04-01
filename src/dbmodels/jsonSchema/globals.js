let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for globals table",
    "$id": "globals",
    "title": "globals",
    "type": "object",
    "required": [
        "gl_name",
        "gl_index",
        "gl_value"
    ],
    "definitions": {
        "gl_name": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 63,
            "minimum": 1
        },
        "gl_index": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "gl_value": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "gl_name": {
            "$ref": "#/definitions/gl_name"
        },
        "gl_index": {
            "$ref": "#/definitions/gl_index"
        },
        "gl_value": {
            "$ref": "#/definitions/gl_value"
        }
    }
}
 module.exports = schema