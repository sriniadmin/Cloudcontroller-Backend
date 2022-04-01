let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for lbt_data table",
    "$id": "lbt_data",
    "title": "lbt_data",
    "description": "contains all data from layout-based transactions",
    "type": "object",
    "required": [
        "form_id",
        "field_id"
    ],
    "definitions": {
        "form_id": {
            "$comment": "primary key",
            "description": "references transactions.id",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
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
            "maxLength": 65535,
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