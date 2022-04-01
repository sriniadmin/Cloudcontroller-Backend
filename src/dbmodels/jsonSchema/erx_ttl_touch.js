let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for erx_ttl_touch table",
    "$id": "erx_ttl_touch",
    "title": "erx_ttl_touch",
    "description": "Store records last update per patient data process",
    "type": "object",
    "required": [
        "patient_id",
        "process",
        "updated"
    ],
    "definitions": {
        "patient_id": {
            "$comment": "primary key",
            "description": "Patient record Id",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.461501637330903e+48
        },
        "process": {
            "$comment": "primary key",
            "description": "NewCrop eRx SOAP process",
            "type": "string",
            "enum": [
                "allergies",
                "medications"
            ],
            "minimum": 1
        },
        "updated": {
            "description": "Date and time of last process update for patient",
            "type": "string",
            "format": "date-time"
        }
    },
    "properties": {
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        },
        "process": {
            "$ref": "#/definitions/process"
        },
        "updated": {
            "$ref": "#/definitions/updated"
        }
    }
}
 module.exports = schema