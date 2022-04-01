let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for lists_touch table",
    "$id": "lists_touch",
    "title": "lists_touch",
    "type": "object",
    "required": [
        "pid",
        "type"
    ],
    "definitions": {
        "pid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "type": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 255,
            "minimum": 1
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        }
    },
    "properties": {
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "type": {
            "$ref": "#/definitions/type"
        },
        "date": {
            "$ref": "#/definitions/date"
        }
    }
}
 module.exports = schema