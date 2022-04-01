let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_care_plan table",
    "$id": "form_care_plan",
    "title": "form_care_plan",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "date": {
            "type": "string",
            "format": "date",
            "default": null
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
        "code": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "codetext": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "description": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "external_id": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "care_plan_type": {
            "type": "string",
            "maxLength": 30,
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
        "encounter": {
            "$ref": "#/definitions/encounter"
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
        "code": {
            "$ref": "#/definitions/code"
        },
        "codetext": {
            "$ref": "#/definitions/codetext"
        },
        "description": {
            "$ref": "#/definitions/description"
        },
        "external_id": {
            "$ref": "#/definitions/external_id"
        },
        "care_plan_type": {
            "$ref": "#/definitions/care_plan_type"
        }
    }
}
 module.exports = schema