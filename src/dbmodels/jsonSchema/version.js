let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for version table",
    "$id": "version",
    "title": "version",
    "type": "object",
    "required": [
        "v_major",
        "v_minor",
        "v_patch",
        "v_realpatch",
        "v_tag",
        "v_database",
        "v_acl"
    ],
    "definitions": {
        "v_major": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "v_minor": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "v_patch": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "v_realpatch": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "v_tag": {
            "type": "string",
            "maxLength": 31
        },
        "v_database": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "v_acl": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "v_major": {
            "$ref": "#/definitions/v_major"
        },
        "v_minor": {
            "$ref": "#/definitions/v_minor"
        },
        "v_patch": {
            "$ref": "#/definitions/v_patch"
        },
        "v_realpatch": {
            "$ref": "#/definitions/v_realpatch"
        },
        "v_tag": {
            "$ref": "#/definitions/v_tag"
        },
        "v_database": {
            "$ref": "#/definitions/v_database"
        },
        "v_acl": {
            "$ref": "#/definitions/v_acl"
        }
    }
}
 module.exports = schema