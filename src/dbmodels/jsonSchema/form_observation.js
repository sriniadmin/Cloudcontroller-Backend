let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_observation table",
    "$id": "form_observation",
    "title": "form_observation",
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
        "observation": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ob_value": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ob_unit": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "description": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "code_type": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "table_code": {
            "type": "string",
            "maxLength": 255,
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
        "observation": {
            "$ref": "#/definitions/observation"
        },
        "ob_value": {
            "$ref": "#/definitions/ob_value"
        },
        "ob_unit": {
            "$ref": "#/definitions/ob_unit"
        },
        "description": {
            "$ref": "#/definitions/description"
        },
        "code_type": {
            "$ref": "#/definitions/code_type"
        },
        "table_code": {
            "$ref": "#/definitions/table_code"
        }
    }
}
 module.exports = schema