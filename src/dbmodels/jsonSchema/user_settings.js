let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for user_settings table",
    "$id": "user_settings",
    "title": "user_settings",
    "type": "object",
    "required": [
        "setting_user",
        "setting_label",
        "setting_value"
    ],
    "definitions": {
        "setting_user": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "setting_label": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 100,
            "minimum": 1
        },
        "setting_value": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "setting_user": {
            "$ref": "#/definitions/setting_user"
        },
        "setting_label": {
            "$ref": "#/definitions/setting_label"
        },
        "setting_value": {
            "$ref": "#/definitions/setting_value"
        }
    }
}
 module.exports = schema