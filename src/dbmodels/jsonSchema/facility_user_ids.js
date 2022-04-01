let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for facility_user_ids table",
    "$id": "facility_user_ids",
    "title": "facility_user_ids",
    "type": "object",
    "required": [
        "id",
        "field_id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "uid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "facility_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "field_id": {
            "description": "references layout_options.field_id",
            "type": "string",
            "maxLength": 31
        },
        "field_value": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "uid": {
            "$ref": "#/definitions/uid"
        },
        "facility_id": {
            "$ref": "#/definitions/facility_id"
        },
        "field_id": {
            "$ref": "#/definitions/field_id"
        },
        "field_value": {
            "$ref": "#/definitions/field_value"
        }
    }
}
 module.exports = schema