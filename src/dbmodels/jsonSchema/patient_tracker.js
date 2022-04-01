let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for patient_tracker table",
    "$id": "patient_tracker",
    "title": "patient_tracker",
    "type": "object",
    "required": [
        "id",
        "eid",
        "pid",
        "original_user",
        "encounter",
        "lastseq",
        "drug_screen_completed"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "apptdate": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "appttime": {
            "type": "string",
            "format": "time",
            "default": null
        },
        "eid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "original_user": {
            "description": "This is the user that created the original record",
            "type": "string",
            "maxLength": 255
        },
        "encounter": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "lastseq": {
            "description": "The element file should contain this number of elements",
            "type": "string",
            "maxLength": 4
        },
        "random_drug_test": {
            "description": "NULL if not randomized. If randomized, 0 is no, 1 is yes",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "drug_screen_completed": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "apptdate": {
            "$ref": "#/definitions/apptdate"
        },
        "appttime": {
            "$ref": "#/definitions/appttime"
        },
        "eid": {
            "$ref": "#/definitions/eid"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "original_user": {
            "$ref": "#/definitions/original_user"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "lastseq": {
            "$ref": "#/definitions/lastseq"
        },
        "random_drug_test": {
            "$ref": "#/definitions/random_drug_test"
        },
        "drug_screen_completed": {
            "$ref": "#/definitions/drug_screen_completed"
        }
    }
}
 module.exports = schema