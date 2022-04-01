let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for modules_hooks_settings table",
    "$id": "modules_hooks_settings",
    "title": "modules_hooks_settings",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "mod_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "enabled_hooks": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "attached_to": {
            "type": "string",
            "maxLength": 45,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "mod_id": {
            "$ref": "#/definitions/mod_id"
        },
        "enabled_hooks": {
            "$ref": "#/definitions/enabled_hooks"
        },
        "attached_to": {
            "$ref": "#/definitions/attached_to"
        }
    }
}
 module.exports = schema