let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for location table",
    "$id": "location",
    "title": "location",
    "type": "object",
    "required": [
        "id",
        "location_uuid",
        "tenant_uuid",
        "archive",
        "active",
        "date",
        "building",
        "floor",
        "ward",
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "location_uuid": {
            "type": "string",
            "maxLength": 255
        },
        "tenant_uuid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "archive": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "active": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "date": {
            "type": "string",
            "format": "date-time"
        },
        "building": {
            "type": "string",
            "maxLength": 100
        },
        "floor": {
            "type": "string",
            "maxLength": 100
        },
        "ward": {
            "type": "string",
            "maxLength": 100
        },
        "facility_uuid": {
            "type": "string",
            "maxLength": 250
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "location_uuid": {
            "$ref": "#/definitions/location_uuid"
        },
        "tenant_uuid": {
            "$ref": "#/definitions/tenant_uuid"
        },
        "archive": {
            "$ref": "#/definitions/archive"
        },
        "active": {
            "$ref": "#/definitions/active"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "building": {
            "$ref": "#/definitions/building"
        },
        "floor": {
            "$ref": "#/definitions/floor"
        },
        "ward": {
            "$ref": "#/definitions/ward"
        },
        "facility_uuid": {
            "$ref": "#/definitions/facility_uuid"
        }
    }
}
 module.exports = schema