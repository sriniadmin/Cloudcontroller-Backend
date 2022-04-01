let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for calendar_external table",
    "$id": "calendar_external",
    "title": "calendar_external",
    "type": "object",
    "required": [
        "id",
        "date",
        "description"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "date": {
            "type": "string",
            "format": "date"
        },
        "description": {
            "type": "string",
            "maxLength": 45
        },
        "source": {
            "type": "string",
            "maxLength": 45,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "description": {
            "$ref": "#/definitions/description"
        },
        "source": {
            "$ref": "#/definitions/source"
        }
    }
}
 module.exports = schema