let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for enc_category_map table",
    "$id": "enc_category_map",
    "title": "enc_category_map",
    "type": "object",
    "required": [
        "rule_enc_id",
        "main_cat_id"
    ],
    "definitions": {
        "rule_enc_id": {
            "description": "encounter id from rule_enc_types list in list_options",
            "type": "string",
            "maxLength": 31
        },
        "main_cat_id": {
            "description": "category id from event category in openemr_postcalendar_categories",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "rule_enc_id": {
            "$ref": "#/definitions/rule_enc_id"
        },
        "main_cat_id": {
            "$ref": "#/definitions/main_cat_id"
        }
    }
}
 module.exports = schema