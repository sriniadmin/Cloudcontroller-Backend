let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for gacl_groups_axo_map table",
    "$id": "gacl_groups_axo_map",
    "title": "gacl_groups_axo_map",
    "type": "object",
    "required": [
        "group_id",
        "axo_id"
    ],
    "definitions": {
        "group_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "axo_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "group_id": {
            "$ref": "#/definitions/group_id"
        },
        "axo_id": {
            "$ref": "#/definitions/axo_id"
        }
    }
}
 module.exports = schema