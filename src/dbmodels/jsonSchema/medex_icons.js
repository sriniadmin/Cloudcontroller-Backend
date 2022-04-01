let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for medex_icons table",
    "$id": "medex_icons",
    "title": "medex_icons",
    "type": "object",
    "required": [
        "i_UID",
        "msg_type",
        "msg_status"
    ],
    "definitions": {
        "i_UID": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "msg_type": {
            "type": "string",
            "maxLength": 50
        },
        "msg_status": {
            "type": "string",
            "maxLength": 10
        },
        "i_description": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "i_html": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "i_blob": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        }
    },
    "properties": {
        "i_UID": {
            "$ref": "#/definitions/i_UID"
        },
        "msg_type": {
            "$ref": "#/definitions/msg_type"
        },
        "msg_status": {
            "$ref": "#/definitions/msg_status"
        },
        "i_description": {
            "$ref": "#/definitions/i_description"
        },
        "i_html": {
            "$ref": "#/definitions/i_html"
        },
        "i_blob": {
            "$ref": "#/definitions/i_blob"
        }
    }
}
 module.exports = schema