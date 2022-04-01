let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for product_warehouse table",
    "$id": "product_warehouse",
    "title": "product_warehouse",
    "type": "object",
    "required": [
        "pw_drug_id",
        "pw_warehouse"
    ],
    "definitions": {
        "pw_drug_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "pw_warehouse": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "pw_min_level": {
            "type": "number"
        },
        "pw_max_level": {
            "type": "number"
        }
    },
    "properties": {
        "pw_drug_id": {
            "$ref": "#/definitions/pw_drug_id"
        },
        "pw_warehouse": {
            "$ref": "#/definitions/pw_warehouse"
        },
        "pw_min_level": {
            "$ref": "#/definitions/pw_min_level"
        },
        "pw_max_level": {
            "$ref": "#/definitions/pw_max_level"
        }
    }
}
 module.exports = schema