let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for users_facility table",
    "$id": "users_facility",
    "title": "users_facility",
    "description": "joins users or patient_data to facility table",
    "type": "object",
    "required": [
        "tablename",
        "table_id",
        "facility_id"
    ],
    "definitions": {
        "tablename": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 64,
            "minimum": 1
        },
        "table_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "facility_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "tablename": {
            "$ref": "#/definitions/tablename"
        },
        "table_id": {
            "$ref": "#/definitions/table_id"
        },
        "facility_id": {
            "$ref": "#/definitions/facility_id"
        }
    }
}
 module.exports = schema