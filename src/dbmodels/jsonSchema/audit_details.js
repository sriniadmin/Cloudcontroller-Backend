let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for audit_details table",
    "$id": "audit_details",
    "title": "audit_details",
    "type": "object",
    "required": [
        "id",
        "table_name",
        "field_name",
        "audit_master_id",
        "entry_identification"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "table_name": {
            "description": "openemr table name",
            "type": "string",
            "maxLength": 100
        },
        "field_name": {
            "description": "openemr table's field name",
            "type": "string",
            "maxLength": 100
        },
        "field_value": {
            "description": "openemr table's field value",
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "audit_master_id": {
            "description": "Id of the audit_master table",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "entry_identification": {
            "description": "Used when multiple entry occurs from the same table.1 means no multiple entry",
            "type": "string",
            "maxLength": 255,
            "default": "1"
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "table_name": {
            "$ref": "#/definitions/table_name"
        },
        "field_name": {
            "$ref": "#/definitions/field_name"
        },
        "field_value": {
            "$ref": "#/definitions/field_value"
        },
        "audit_master_id": {
            "$ref": "#/definitions/audit_master_id"
        },
        "entry_identification": {
            "$ref": "#/definitions/entry_identification"
        }
    }
}
 module.exports = schema