let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for categories_to_documents table",
    "$id": "categories_to_documents",
    "title": "categories_to_documents",
    "type": "object",
    "required": [
        "category_id",
        "document_id"
    ],
    "definitions": {
        "category_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "document_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "category_id": {
            "$ref": "#/definitions/category_id"
        },
        "document_id": {
            "$ref": "#/definitions/document_id"
        }
    }
}
 module.exports = schema