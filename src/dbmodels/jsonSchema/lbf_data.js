let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for lbf_data table",
    "$id": "lbf_data",
    "title": "lbf_data",
    "description": "contains all data from layout-based forms",
    "type": "object",
    "required": [
        "form_id",
        "field_id"
    ],
    "definitions": {
        "form_id": {
            "$comment": "primary key",
            "description": "references forms.form_id",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "field_id": {
            "$comment": "primary key",
            "description": "references layout_options.field_id",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "field_value": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        }
    },
    "properties": {
        "form_id": {
            "$ref": "#/definitions/form_id"
        },
        "field_id": {
            "$ref": "#/definitions/field_id"
        },
        "field_value": {
            "$ref": "#/definitions/field_value"
        }
    }
}
 module.exports = schema