let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for medex_recalls table",
    "$id": "medex_recalls",
    "title": "medex_recalls",
    "type": "object",
    "required": [
        "r_ID",
        "r_PRACTID",
        "r_pid",
        "r_eventDate",
        "r_facility",
        "r_provider",
        "r_created"
    ],
    "definitions": {
        "r_ID": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "r_PRACTID": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "r_pid": {
            "description": "PatientID from pat_data",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "r_eventDate": {
            "description": "Date of Appt or Recall",
            "type": "string",
            "format": "date"
        },
        "r_facility": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "r_provider": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "r_reason": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "r_created": {
            "type": "string",
            "default": "0000-00-00 00:00:00"
        }
    },
    "properties": {
        "r_ID": {
            "$ref": "#/definitions/r_ID"
        },
        "r_PRACTID": {
            "$ref": "#/definitions/r_PRACTID"
        },
        "r_pid": {
            "$ref": "#/definitions/r_pid"
        },
        "r_eventDate": {
            "$ref": "#/definitions/r_eventDate"
        },
        "r_facility": {
            "$ref": "#/definitions/r_facility"
        },
        "r_provider": {
            "$ref": "#/definitions/r_provider"
        },
        "r_reason": {
            "$ref": "#/definitions/r_reason"
        },
        "r_created": {
            "$ref": "#/definitions/r_created"
        }
    }
}
 module.exports = schema