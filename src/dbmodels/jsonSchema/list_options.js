let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for list_options table",
    "$id": "list_options",
    "title": "list_options",
    "type": "object",
    "required": [
        "list_id",
        "option_id",
        "title",
        "seq",
        "is_default",
        "option_value",
        "mapping",
        "codes",
        "toggle_setting_1",
        "toggle_setting_2",
        "activity",
        "subtype",
        "edit_options",
        "timestamp"
    ],
    "definitions": {
        "list_id": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 100,
            "minimum": 1
        },
        "option_id": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 100,
            "minimum": 1
        },
        "title": {
            "type": "string",
            "maxLength": 255
        },
        "seq": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "is_default": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "option_value": {
            "type": "number"
        },
        "mapping": {
            "type": "string",
            "maxLength": 31
        },
        "notes": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "codes": {
            "type": "string",
            "maxLength": 255
        },
        "toggle_setting_1": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "toggle_setting_2": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "activity": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "subtype": {
            "type": "string",
            "maxLength": 31
        },
        "edit_options": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "timestamp": {
            "type": "string",
            "default": "current_timestamp()"
        }
    },
    "properties": {
        "list_id": {
            "$ref": "#/definitions/list_id"
        },
        "option_id": {
            "$ref": "#/definitions/option_id"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "seq": {
            "$ref": "#/definitions/seq"
        },
        "is_default": {
            "$ref": "#/definitions/is_default"
        },
        "option_value": {
            "$ref": "#/definitions/option_value"
        },
        "mapping": {
            "$ref": "#/definitions/mapping"
        },
        "notes": {
            "$ref": "#/definitions/notes"
        },
        "codes": {
            "$ref": "#/definitions/codes"
        },
        "toggle_setting_1": {
            "$ref": "#/definitions/toggle_setting_1"
        },
        "toggle_setting_2": {
            "$ref": "#/definitions/toggle_setting_2"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "subtype": {
            "$ref": "#/definitions/subtype"
        },
        "edit_options": {
            "$ref": "#/definitions/edit_options"
        },
        "timestamp": {
            "$ref": "#/definitions/timestamp"
        }
    }
}
 module.exports = schema