let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for role table",
    "$id": "role",
    "title": "role",
    "type": "object",
    "required": [
        "id",
        "title",
        "role_uuid",
        "active",
        "createdAt"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "title": {
            "type": "string",
            "maxLength": 100
        },
        "role_uuid": {
            "type": "string",
            "maxLength": 250
        },
        "description": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "active": {
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767
        },
        "createdAt": {
            "type": "string",
            "format": "date-time"
        },
        "updatedAt": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "content": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "role_uuid": {
            "$ref": "#/definitions/role_uuid"
        },
        "description": {
            "$ref": "#/definitions/description"
        },
        "active": {
            "$ref": "#/definitions/active"
        },
        "createdAt": {
            "$ref": "#/definitions/createdAt"
        },
        "updatedAt": {
            "$ref": "#/definitions/updatedAt"
        },
        "content": {
            "$ref": "#/definitions/content"
        }
    }
}
 module.exports = schema