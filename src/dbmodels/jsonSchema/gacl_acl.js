let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for gacl_acl table",
    "$id": "gacl_acl",
    "title": "gacl_acl",
    "type": "object",
    "required": [
        "id",
        "section_value",
        "allow",
        "enabled",
        "updated_date"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "section_value": {
            "type": "string",
            "maxLength": 150,
            "default": "system"
        },
        "allow": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "enabled": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "return_value": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "note": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "updated_date": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "section_value": {
            "$ref": "#/definitions/section_value"
        },
        "allow": {
            "$ref": "#/definitions/allow"
        },
        "enabled": {
            "$ref": "#/definitions/enabled"
        },
        "return_value": {
            "$ref": "#/definitions/return_value"
        },
        "note": {
            "$ref": "#/definitions/note"
        },
        "updated_date": {
            "$ref": "#/definitions/updated_date"
        }
    }
}
 module.exports = schema