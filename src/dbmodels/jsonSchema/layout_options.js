let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for layout_options table",
    "$id": "layout_options",
    "title": "layout_options",
    "type": "object",
    "required": [
        "form_id",
        "field_id",
        "group_id",
        "title",
        "seq",
        "data_type",
        "uor",
        "fld_length",
        "max_length",
        "list_id",
        "titlecols",
        "datacols",
        "default_value",
        "edit_options",
        "fld_rows",
        "list_backup_id",
        "source"
    ],
    "definitions": {
        "form_id": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "field_id": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "group_id": {
            "type": "string",
            "maxLength": 31
        },
        "title": {
            "type": "string",
            "maxLength": 63
        },
        "seq": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "data_type": {
            "type": "integer",
            "minimum": -8388608,
            "maximum": 8388607
        },
        "uor": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "fld_length": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "max_length": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "list_id": {
            "type": "string",
            "maxLength": 100
        },
        "titlecols": {
            "type": "integer",
            "minimum": -8388608,
            "maximum": 8388607
        },
        "datacols": {
            "type": "integer",
            "minimum": -8388608,
            "maximum": 8388607
        },
        "default_value": {
            "type": "string",
            "maxLength": 255
        },
        "edit_options": {
            "type": "string",
            "maxLength": 36
        },
        "description": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "fld_rows": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "list_backup_id": {
            "type": "string",
            "maxLength": 100
        },
        "source": {
            "description": "F=Form, D=Demographics, H=History, E=Encounter",
            "type": "string",
            "maxLength": 1,
            "default": "F"
        },
        "conditions": {
            "description": "serialized array of skip conditions",
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "validation": {
            "type": "string",
            "maxLength": 100,
            "default": null
        }
    },
    "properties": {
        "form_id": {
            "$ref": "#/definitions/form_id"
        },
        "field_id": {
            "$ref": "#/definitions/field_id"
        },
        "group_id": {
            "$ref": "#/definitions/group_id"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "seq": {
            "$ref": "#/definitions/seq"
        },
        "data_type": {
            "$ref": "#/definitions/data_type"
        },
        "uor": {
            "$ref": "#/definitions/uor"
        },
        "fld_length": {
            "$ref": "#/definitions/fld_length"
        },
        "max_length": {
            "$ref": "#/definitions/max_length"
        },
        "list_id": {
            "$ref": "#/definitions/list_id"
        },
        "titlecols": {
            "$ref": "#/definitions/titlecols"
        },
        "datacols": {
            "$ref": "#/definitions/datacols"
        },
        "default_value": {
            "$ref": "#/definitions/default_value"
        },
        "edit_options": {
            "$ref": "#/definitions/edit_options"
        },
        "description": {
            "$ref": "#/definitions/description"
        },
        "fld_rows": {
            "$ref": "#/definitions/fld_rows"
        },
        "list_backup_id": {
            "$ref": "#/definitions/list_backup_id"
        },
        "source": {
            "$ref": "#/definitions/source"
        },
        "conditions": {
            "$ref": "#/definitions/conditions"
        },
        "validation": {
            "$ref": "#/definitions/validation"
        }
    }
}
 module.exports = schema