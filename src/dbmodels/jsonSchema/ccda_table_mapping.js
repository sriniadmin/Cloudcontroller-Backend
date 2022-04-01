let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for ccda_table_mapping table",
    "$id": "ccda_table_mapping",
    "title": "ccda_table_mapping",
    "type": "object",
    "required": [
        "id",
        "deleted",
        "timestamp"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "ccda_component": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "ccda_component_section": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "form_dir": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "form_type": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327,
            "default": null
        },
        "form_table": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "user_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "deleted": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "timestamp": {
            "type": "string",
            "default": "current_timestamp()"
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "ccda_component": {
            "$ref": "#/definitions/ccda_component"
        },
        "ccda_component_section": {
            "$ref": "#/definitions/ccda_component_section"
        },
        "form_dir": {
            "$ref": "#/definitions/form_dir"
        },
        "form_type": {
            "$ref": "#/definitions/form_type"
        },
        "form_table": {
            "$ref": "#/definitions/form_table"
        },
        "user_id": {
            "$ref": "#/definitions/user_id"
        },
        "deleted": {
            "$ref": "#/definitions/deleted"
        },
        "timestamp": {
            "$ref": "#/definitions/timestamp"
        }
    }
}
 module.exports = schema