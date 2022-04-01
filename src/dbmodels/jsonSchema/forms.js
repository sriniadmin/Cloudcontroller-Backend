let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for forms table",
    "$id": "forms",
    "title": "forms",
    "type": "object",
    "required": [
        "id",
        "deleted",
        "issue_id",
        "provider_id"
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
        "encounter": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "form_name": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "form_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
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
        "deleted": {
            "description": "flag indicates form has been deleted",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "formdir": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "therapy_group_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "issue_id": {
            "description": "references lists.id to identify a case",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "provider_id": {
            "description": "references users.id to identify a provider",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "form_name": {
            "$ref": "#/definitions/form_name"
        },
        "form_id": {
            "$ref": "#/definitions/form_id"
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
        "deleted": {
            "$ref": "#/definitions/deleted"
        },
        "formdir": {
            "$ref": "#/definitions/formdir"
        },
        "therapy_group_id": {
            "$ref": "#/definitions/therapy_group_id"
        },
        "issue_id": {
            "$ref": "#/definitions/issue_id"
        },
        "provider_id": {
            "$ref": "#/definitions/provider_id"
        }
    }
}
 module.exports = schema