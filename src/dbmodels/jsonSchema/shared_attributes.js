let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for shared_attributes table",
    "$id": "shared_attributes",
    "title": "shared_attributes",
    "type": "object",
    "required": [
        "pid",
        "encounter",
        "field_id",
        "last_update",
        "user_id"
    ],
    "definitions": {
        "pid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "encounter": {
            "$comment": "primary key",
            "description": "0 if patient attribute, else encounter attribute",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "field_id": {
            "$comment": "primary key",
            "description": "references layout_options.field_id",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "last_update": {
            "description": "time of last update",
            "type": "string",
            "format": "date-time"
        },
        "user_id": {
            "description": "user who last updated",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "field_value": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "field_id": {
            "$ref": "#/definitions/field_id"
        },
        "last_update": {
            "$ref": "#/definitions/last_update"
        },
        "user_id": {
            "$ref": "#/definitions/user_id"
        },
        "field_value": {
            "$ref": "#/definitions/field_value"
        }
    }
}
 module.exports = schema