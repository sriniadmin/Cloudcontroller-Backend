let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for practictioner_patient_map table",
    "$id": "practictioner_patient_map",
    "title": "practictioner_patient_map",
    "type": "object",
    "required": [
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "patient_uuid": {
            "type": "string",
            "maxLength": 255
        },
        "users_uuid": {
            "type": "array",
        },
        "tenant_id": {
            "type": "string",
            "maxLength": 255
        },
        "archive": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "primary": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "primary_consultant": {
            "type": "array",
        },
        "secondary_consultant": {
            "type": "array",
        },
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "patient_uuid": {
            "$ref": "#/definitions/patient_uuid"
        },
        "users_uuid": {
            "$ref": "#/definitions/users_uuid"
        },
        "tenant_id": {
            "$ref": "#/definitions/tenant_id"
        },
        "archive": {
            "$ref": "#/definitions/archive"
        },
        "primary": {
            "$ref": "#/definitions/primary"
        },
        "primary_consultant": {
            "$ref": "#/definitions/primary_consultant"
        },
        "secondary_consultant": {
            "$ref": "#/definitions/secondary_consultant"
        }
    }
}
 module.exports = schema