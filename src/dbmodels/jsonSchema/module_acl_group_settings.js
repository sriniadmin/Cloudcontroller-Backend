let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for module_acl_group_settings table",
    "$id": "module_acl_group_settings",
    "title": "module_acl_group_settings",
    "type": "object",
    "required": [
        "module_id",
        "group_id",
        "section_id"
    ],
    "definitions": {
        "module_id": {
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
        },
        "section_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "allowed": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        }
    },
    "properties": {
        "module_id": {
            "$ref": "#/definitions/module_id"
        },
        "group_id": {
            "$ref": "#/definitions/group_id"
        },
        "section_id": {
            "$ref": "#/definitions/section_id"
        },
        "allowed": {
            "$ref": "#/definitions/allowed"
        }
    }
}
 module.exports = schema