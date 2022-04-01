let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for layout_group_properties table",
    "$id": "layout_group_properties",
    "title": "layout_group_properties",
    "type": "object",
    "required": [
        "grp_form_id",
        "grp_group_id",
        "grp_title",
        "grp_subtitle",
        "grp_mapping",
        "grp_seq",
        "grp_activity",
        "grp_repeats",
        "grp_columns",
        "grp_size",
        "grp_issue_type",
        "grp_aco_spec",
        "grp_services",
        "grp_products",
        "grp_diags"
    ],
    "definitions": {
        "grp_form_id": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "grp_group_id": {
            "$comment": "primary key",
            "description": "empty when representing the whole form",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "grp_title": {
            "description": "descriptive name of the form or group",
            "type": "string",
            "maxLength": 63
        },
        "grp_subtitle": {
            "description": "for display under the title",
            "type": "string",
            "maxLength": 63
        },
        "grp_mapping": {
            "description": "the form category",
            "type": "string",
            "maxLength": 31
        },
        "grp_seq": {
            "description": "optional order within mapping",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "grp_activity": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "grp_repeats": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "grp_columns": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "grp_size": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "grp_issue_type": {
            "type": "string",
            "maxLength": 75
        },
        "grp_aco_spec": {
            "type": "string",
            "maxLength": 63
        },
        "grp_services": {
            "type": "string",
            "maxLength": 4095
        },
        "grp_products": {
            "type": "string",
            "maxLength": 4095
        },
        "grp_diags": {
            "type": "string",
            "maxLength": 4095
        }
    },
    "properties": {
        "grp_form_id": {
            "$ref": "#/definitions/grp_form_id"
        },
        "grp_group_id": {
            "$ref": "#/definitions/grp_group_id"
        },
        "grp_title": {
            "$ref": "#/definitions/grp_title"
        },
        "grp_subtitle": {
            "$ref": "#/definitions/grp_subtitle"
        },
        "grp_mapping": {
            "$ref": "#/definitions/grp_mapping"
        },
        "grp_seq": {
            "$ref": "#/definitions/grp_seq"
        },
        "grp_activity": {
            "$ref": "#/definitions/grp_activity"
        },
        "grp_repeats": {
            "$ref": "#/definitions/grp_repeats"
        },
        "grp_columns": {
            "$ref": "#/definitions/grp_columns"
        },
        "grp_size": {
            "$ref": "#/definitions/grp_size"
        },
        "grp_issue_type": {
            "$ref": "#/definitions/grp_issue_type"
        },
        "grp_aco_spec": {
            "$ref": "#/definitions/grp_aco_spec"
        },
        "grp_services": {
            "$ref": "#/definitions/grp_services"
        },
        "grp_products": {
            "$ref": "#/definitions/grp_products"
        },
        "grp_diags": {
            "$ref": "#/definitions/grp_diags"
        }
    }
}
 module.exports = schema