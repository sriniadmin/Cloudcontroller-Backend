let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for gacl_axo_map table",
    "$id": "gacl_axo_map",
    "title": "gacl_axo_map",
    "type": "object",
    "required": [
        "acl_id",
        "section_value",
        "value"
    ],
    "definitions": {
        "acl_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "section_value": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 150,
            "minimum": 1,
            "default": "0"
        },
        "value": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 150,
            "minimum": 1
        }
    },
    "properties": {
        "acl_id": {
            "$ref": "#/definitions/acl_id"
        },
        "section_value": {
            "$ref": "#/definitions/section_value"
        },
        "value": {
            "$ref": "#/definitions/value"
        }
    }
}
 module.exports = schema