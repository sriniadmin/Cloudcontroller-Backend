let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for ccda_field_mapping table",
    "$id": "ccda_field_mapping",
    "title": "ccda_field_mapping",
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
        "table_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "ccda_field": {
            "type": "string",
            "maxLength": 100,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "table_id": {
            "$ref": "#/definitions/table_id"
        },
        "ccda_field": {
            "$ref": "#/definitions/ccda_field"
        }
    }
}
 module.exports = schema