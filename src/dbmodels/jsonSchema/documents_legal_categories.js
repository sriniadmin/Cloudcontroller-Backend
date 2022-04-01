let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for documents_legal_categories table",
    "$id": "documents_legal_categories",
    "title": "documents_legal_categories",
    "type": "object",
    "required": [
        "dlc_id",
        "dlc_category_type",
        "dlc_category_name"
    ],
    "definitions": {
        "dlc_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.2089258196146292e+24
        },
        "dlc_category_type": {
            "description": "1 category 2 subcategory",
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24
        },
        "dlc_category_name": {
            "type": "string",
            "maxLength": 45
        },
        "dlc_category_parent": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        }
    },
    "properties": {
        "dlc_id": {
            "$ref": "#/definitions/dlc_id"
        },
        "dlc_category_type": {
            "$ref": "#/definitions/dlc_category_type"
        },
        "dlc_category_name": {
            "$ref": "#/definitions/dlc_category_name"
        },
        "dlc_category_parent": {
            "$ref": "#/definitions/dlc_category_parent"
        }
    }
}
 module.exports = schema