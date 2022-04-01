let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_dictation table",
    "$id": "form_dictation",
    "title": "form_dictation",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "groupname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "authorized": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "activity": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "dictation": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "additional_notes": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "groupname": {
            "$ref": "#/definitions/groupname"
        },
        "authorized": {
            "$ref": "#/definitions/authorized"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "dictation": {
            "$ref": "#/definitions/dictation"
        },
        "additional_notes": {
            "$ref": "#/definitions/additional_notes"
        }
    }
}
 module.exports = schema