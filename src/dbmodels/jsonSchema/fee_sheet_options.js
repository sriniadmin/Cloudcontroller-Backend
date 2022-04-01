let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for fee_sheet_options table",
    "$id": "fee_sheet_options",
    "title": "fee_sheet_options",
    "type": "object",
    "required": [],
    "definitions": {
        "fs_category": {
            "type": "string",
            "maxLength": 63,
            "default": null
        },
        "fs_option": {
            "type": "string",
            "maxLength": 63,
            "default": null
        },
        "fs_codes": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "fs_category": {
            "$ref": "#/definitions/fs_category"
        },
        "fs_option": {
            "$ref": "#/definitions/fs_option"
        },
        "fs_codes": {
            "$ref": "#/definitions/fs_codes"
        }
    }
}
 module.exports = schema