let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for gacl_axo_groups_map table",
    "$id": "gacl_axo_groups_map",
    "title": "gacl_axo_groups_map",
    "type": "object",
    "required": [
        "acl_id",
        "group_id"
    ],
    "definitions": {
        "acl_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "group_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "acl_id": {
            "$ref": "#/definitions/acl_id"
        },
        "group_id": {
            "$ref": "#/definitions/group_id"
        }
    }
}
 module.exports = schema