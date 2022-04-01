let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for therapy_groups_participants table",
    "$id": "therapy_groups_participants",
    "title": "therapy_groups_participants",
    "type": "object",
    "required": [
        "group_id",
        "pid",
        "group_patient_status",
        "group_patient_start"
    ],
    "definitions": {
        "group_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "pid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "group_patient_status": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "group_patient_start": {
            "type": "string",
            "format": "date"
        },
        "group_patient_end": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "group_patient_comment": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "group_id": {
            "$ref": "#/definitions/group_id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "group_patient_status": {
            "$ref": "#/definitions/group_patient_status"
        },
        "group_patient_start": {
            "$ref": "#/definitions/group_patient_start"
        },
        "group_patient_end": {
            "$ref": "#/definitions/group_patient_end"
        },
        "group_patient_comment": {
            "$ref": "#/definitions/group_patient_comment"
        }
    }
}
 module.exports = schema