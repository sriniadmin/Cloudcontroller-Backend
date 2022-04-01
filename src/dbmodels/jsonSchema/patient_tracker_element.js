let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for patient_tracker_element table",
    "$id": "patient_tracker_element",
    "title": "patient_tracker_element",
    "type": "object",
    "required": [
        "pt_tracker_id",
        "room",
        "status",
        "seq",
        "user"
    ],
    "definitions": {
        "pt_tracker_id": {
            "description": "maps to id column in patient_tracker table",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "start_datetime": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "room": {
            "type": "string",
            "maxLength": 20
        },
        "status": {
            "type": "string",
            "maxLength": 31
        },
        "seq": {
            "description": "This is a numerical sequence for this pt_tracker_id events",
            "type": "string",
            "maxLength": 4
        },
        "user": {
            "description": "This is the user that created this element",
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "pt_tracker_id": {
            "$ref": "#/definitions/pt_tracker_id"
        },
        "start_datetime": {
            "$ref": "#/definitions/start_datetime"
        },
        "room": {
            "$ref": "#/definitions/room"
        },
        "status": {
            "$ref": "#/definitions/status"
        },
        "seq": {
            "$ref": "#/definitions/seq"
        },
        "user": {
            "$ref": "#/definitions/user"
        }
    }
}
 module.exports = schema