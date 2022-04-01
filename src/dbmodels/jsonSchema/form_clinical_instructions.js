let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_clinical_instructions table",
    "$id": "form_clinical_instructions",
    "title": "form_clinical_instructions",
    "type": "object",
    "required": [
        "id",
        "date"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "encounter": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "instruction": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "date": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "activity": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "instruction": {
            "$ref": "#/definitions/instruction"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        }
    }
}
 module.exports = schema