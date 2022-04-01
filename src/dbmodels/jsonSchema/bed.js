let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for bed table",
    "$id": "bed",
    "title": "bed",
    "type": "object",
    "required": [
        "id",
        "tenant_uuid",
        "bed_uuid",
        "bed_num",
        "archive",
        "active",
        "location_uuid"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "tenant_uuid": {
            "type": "string",
            "maxLength": 255
        },
        "bed_uuid": {
            "type": "string",
            "maxLength": 255
        },
        "bed_num": {
            "type": "string",
            "maxLength": 100
        },
        "archive": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "active": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "location_uuid": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "tenant_uuid": {
            "$ref": "#/definitions/tenant_uuid"
        },
        "bed_uuid": {
            "$ref": "#/definitions/bed_uuid"
        },
        "bed_num": {
            "$ref": "#/definitions/bed_num"
        },
        "archive": {
            "$ref": "#/definitions/archive"
        },
        "active": {
            "$ref": "#/definitions/active"
        },
        "location_uuid": {
            "$ref": "#/definitions/location_uuid"
        }
    }
}
 module.exports = schema