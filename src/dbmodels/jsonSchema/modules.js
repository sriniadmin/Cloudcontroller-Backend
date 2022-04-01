let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for modules table",
    "$id": "modules",
    "title": "modules",
    "type": "object",
    "required": [
        "mod_id",
        "mod_name",
        "mod_directory",
        "mod_parent",
        "mod_type",
        "mod_active",
        "mod_ui_name",
        "mod_relative_link",
        "mod_ui_order",
        "mod_ui_active",
        "mod_description",
        "mod_nick_name",
        "mod_enc_menu",
        "directory",
        "date"
    ],
    "definitions": {
        "mod_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "mod_name": {
            "type": "string",
            "maxLength": 64,
            "default": "0"
        },
        "mod_directory": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 64,
            "minimum": 1
        },
        "mod_parent": {
            "type": "string",
            "maxLength": 64
        },
        "mod_type": {
            "type": "string",
            "maxLength": 64
        },
        "mod_active": {
            "type": "integer",
            "minimum": 0,
            "maximum": 256
        },
        "mod_ui_name": {
            "type": "string",
            "maxLength": 20
        },
        "mod_relative_link": {
            "type": "string",
            "maxLength": 64
        },
        "mod_ui_order": {
            "type": "integer",
            "minimum": -8388608,
            "maximum": 8388607
        },
        "mod_ui_active": {
            "type": "integer",
            "minimum": 0,
            "maximum": 256
        },
        "mod_description": {
            "type": "string",
            "maxLength": 255
        },
        "mod_nick_name": {
            "type": "string",
            "maxLength": 25
        },
        "mod_enc_menu": {
            "type": "string",
            "maxLength": 10,
            "default": "no"
        },
        "permissions_item_table": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "directory": {
            "type": "string",
            "maxLength": 255
        },
        "date": {
            "type": "string",
            "format": "date-time"
        },
        "sql_run": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "type": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        }
    },
    "properties": {
        "mod_id": {
            "$ref": "#/definitions/mod_id"
        },
        "mod_name": {
            "$ref": "#/definitions/mod_name"
        },
        "mod_directory": {
            "$ref": "#/definitions/mod_directory"
        },
        "mod_parent": {
            "$ref": "#/definitions/mod_parent"
        },
        "mod_type": {
            "$ref": "#/definitions/mod_type"
        },
        "mod_active": {
            "$ref": "#/definitions/mod_active"
        },
        "mod_ui_name": {
            "$ref": "#/definitions/mod_ui_name"
        },
        "mod_relative_link": {
            "$ref": "#/definitions/mod_relative_link"
        },
        "mod_ui_order": {
            "$ref": "#/definitions/mod_ui_order"
        },
        "mod_ui_active": {
            "$ref": "#/definitions/mod_ui_active"
        },
        "mod_description": {
            "$ref": "#/definitions/mod_description"
        },
        "mod_nick_name": {
            "$ref": "#/definitions/mod_nick_name"
        },
        "mod_enc_menu": {
            "$ref": "#/definitions/mod_enc_menu"
        },
        "permissions_item_table": {
            "$ref": "#/definitions/permissions_item_table"
        },
        "directory": {
            "$ref": "#/definitions/directory"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "sql_run": {
            "$ref": "#/definitions/sql_run"
        },
        "type": {
            "$ref": "#/definitions/type"
        }
    }
}
 module.exports = schema