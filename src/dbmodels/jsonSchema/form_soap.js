let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_soap table",
    "$id": "form_soap",
    "title": "form_soap",
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
            "maximum": 7.307508186654515e+47
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
            "maximum": 2147483647
        },
        "activity": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "subjective": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "objective": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "assessment": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "plan": {
            "type": "string",
            "maxLength": 65535,
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
        "subjective": {
            "$ref": "#/definitions/subjective"
        },
        "objective": {
            "$ref": "#/definitions/objective"
        },
        "assessment": {
            "$ref": "#/definitions/assessment"
        },
        "plan": {
            "$ref": "#/definitions/plan"
        }
    }
}
 module.exports = schema