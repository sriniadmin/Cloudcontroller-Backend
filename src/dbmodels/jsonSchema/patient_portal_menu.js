let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for patient_portal_menu table",
    "$id": "patient_portal_menu",
    "title": "patient_portal_menu",
    "type": "object",
    "required": [
        "patient_portal_menu_id"
    ],
    "definitions": {
        "patient_portal_menu_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "patient_portal_menu_group_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "menu_name": {
            "type": "string",
            "maxLength": 40,
            "default": null
        },
        "menu_order": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "menu_status": {
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767
        }
    },
    "properties": {
        "patient_portal_menu_id": {
            "$ref": "#/definitions/patient_portal_menu_id"
        },
        "patient_portal_menu_group_id": {
            "$ref": "#/definitions/patient_portal_menu_group_id"
        },
        "menu_name": {
            "$ref": "#/definitions/menu_name"
        },
        "menu_order": {
            "$ref": "#/definitions/menu_order"
        },
        "menu_status": {
            "$ref": "#/definitions/menu_status"
        }
    }
}
 module.exports = schema