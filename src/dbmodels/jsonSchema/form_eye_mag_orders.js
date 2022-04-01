let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_mag_orders table",
    "$id": "form_eye_mag_orders",
    "title": "form_eye_mag_orders",
    "type": "object",
    "required": [
        "id",
        "form_id",
        "pid",
        "ORDER_DETAILS",
        "ORDER_DATE_PLACED"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "form_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "ORDER_DETAILS": {
            "type": "string",
            "maxLength": 255
        },
        "ORDER_STATUS": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "ORDER_PRIORITY": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "ORDER_DATE_PLACED": {
            "type": "string",
            "format": "date"
        },
        "ORDER_PLACED_BYWHOM": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "ORDER_DATE_COMPLETED": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "ORDER_COMPLETED_BYWHOM": {
            "type": "string",
            "maxLength": 50,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "form_id": {
            "$ref": "#/definitions/form_id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "ORDER_DETAILS": {
            "$ref": "#/definitions/ORDER_DETAILS"
        },
        "ORDER_STATUS": {
            "$ref": "#/definitions/ORDER_STATUS"
        },
        "ORDER_PRIORITY": {
            "$ref": "#/definitions/ORDER_PRIORITY"
        },
        "ORDER_DATE_PLACED": {
            "$ref": "#/definitions/ORDER_DATE_PLACED"
        },
        "ORDER_PLACED_BYWHOM": {
            "$ref": "#/definitions/ORDER_PLACED_BYWHOM"
        },
        "ORDER_DATE_COMPLETED": {
            "$ref": "#/definitions/ORDER_DATE_COMPLETED"
        },
        "ORDER_COMPLETED_BYWHOM": {
            "$ref": "#/definitions/ORDER_COMPLETED_BYWHOM"
        }
    }
}
 module.exports = schema