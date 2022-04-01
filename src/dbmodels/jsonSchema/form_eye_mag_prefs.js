let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_mag_prefs table",
    "$id": "form_eye_mag_prefs",
    "title": "form_eye_mag_prefs",
    "type": "object",
    "required": [
        "LOCATION_text",
        "FILL_ACTION",
        "GORIGHT",
        "GOLEFT",
        "UNSPEC"
    ],
    "definitions": {
        "PEZONE": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "LOCATION": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "LOCATION_text": {
            "type": "string",
            "maxLength": 25
        },
        "id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "selection": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ZONE_ORDER": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "GOVALUE": {
            "type": "string",
            "maxLength": 10,
            "default": "0"
        },
        "ordering": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "FILL_ACTION": {
            "type": "string",
            "maxLength": 10,
            "default": "ADD"
        },
        "GORIGHT": {
            "type": "string",
            "maxLength": 50
        },
        "GOLEFT": {
            "type": "string",
            "maxLength": 50
        },
        "UNSPEC": {
            "type": "string",
            "maxLength": 50
        }
    },
    "properties": {
        "PEZONE": {
            "$ref": "#/definitions/PEZONE"
        },
        "LOCATION": {
            "$ref": "#/definitions/LOCATION"
        },
        "LOCATION_text": {
            "$ref": "#/definitions/LOCATION_text"
        },
        "id": {
            "$ref": "#/definitions/id"
        },
        "selection": {
            "$ref": "#/definitions/selection"
        },
        "ZONE_ORDER": {
            "$ref": "#/definitions/ZONE_ORDER"
        },
        "GOVALUE": {
            "$ref": "#/definitions/GOVALUE"
        },
        "ordering": {
            "$ref": "#/definitions/ordering"
        },
        "FILL_ACTION": {
            "$ref": "#/definitions/FILL_ACTION"
        },
        "GORIGHT": {
            "$ref": "#/definitions/GORIGHT"
        },
        "GOLEFT": {
            "$ref": "#/definitions/GOLEFT"
        },
        "UNSPEC": {
            "$ref": "#/definitions/UNSPEC"
        }
    }
}
 module.exports = schema