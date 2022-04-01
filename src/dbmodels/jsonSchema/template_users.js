let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for template_users table",
    "$id": "template_users",
    "title": "template_users",
    "type": "object",
    "required": [
        "tu_id"
    ],
    "definitions": {
        "tu_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "tu_user_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "tu_facility_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "tu_template_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "tu_template_order": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        }
    },
    "properties": {
        "tu_id": {
            "$ref": "#/definitions/tu_id"
        },
        "tu_user_id": {
            "$ref": "#/definitions/tu_user_id"
        },
        "tu_facility_id": {
            "$ref": "#/definitions/tu_facility_id"
        },
        "tu_template_id": {
            "$ref": "#/definitions/tu_template_id"
        },
        "tu_template_order": {
            "$ref": "#/definitions/tu_template_order"
        }
    }
}
 module.exports = schema