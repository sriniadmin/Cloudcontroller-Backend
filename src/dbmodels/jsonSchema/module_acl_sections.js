let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for module_acl_sections table",
    "$id": "module_acl_sections",
    "title": "module_acl_sections",
    "type": "object",
    "required": [],
    "definitions": {
        "section_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "section_name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "parent_section": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "section_identifier": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "module_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        }
    },
    "properties": {
        "section_id": {
            "$ref": "#/definitions/section_id"
        },
        "section_name": {
            "$ref": "#/definitions/section_name"
        },
        "parent_section": {
            "$ref": "#/definitions/parent_section"
        },
        "section_identifier": {
            "$ref": "#/definitions/section_identifier"
        },
        "module_id": {
            "$ref": "#/definitions/module_id"
        }
    }
}
 module.exports = schema