let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for modules_settings table",
    "$id": "modules_settings",
    "title": "modules_settings",
    "type": "object",
    "required": [],
    "definitions": {
        "mod_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "fld_type": {
            "description": "1=>ACL,2=>preferences,3=>hooks",
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327,
            "default": null
        },
        "obj_name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "menu_name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "path": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "mod_id": {
            "$ref": "#/definitions/mod_id"
        },
        "fld_type": {
            "$ref": "#/definitions/fld_type"
        },
        "obj_name": {
            "$ref": "#/definitions/obj_name"
        },
        "menu_name": {
            "$ref": "#/definitions/menu_name"
        },
        "path": {
            "$ref": "#/definitions/path"
        }
    }
}
 module.exports = schema