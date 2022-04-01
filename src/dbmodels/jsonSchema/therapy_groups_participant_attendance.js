let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for therapy_groups_participant_attendance table",
    "$id": "therapy_groups_participant_attendance",
    "title": "therapy_groups_participant_attendance",
    "type": "object",
    "required": [
        "form_id",
        "pid"
    ],
    "definitions": {
        "form_id": {
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
        "meeting_patient_comment": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "meeting_patient_status": {
            "type": "string",
            "maxLength": 15,
            "default": null
        }
    },
    "properties": {
        "form_id": {
            "$ref": "#/definitions/form_id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "meeting_patient_comment": {
            "$ref": "#/definitions/meeting_patient_comment"
        },
        "meeting_patient_status": {
            "$ref": "#/definitions/meeting_patient_status"
        }
    }
}
 module.exports = schema