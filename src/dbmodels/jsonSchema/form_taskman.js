let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_taskman table",
    "$id": "form_taskman",
    "title": "form_taskman",
    "type": "object",
    "required": [
        "ID",
        "REQ_DATE",
        "FROM_ID",
        "TO_ID",
        "PATIENT_ID",
        "METHOD"
    ],
    "definitions": {
        "ID": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "REQ_DATE": {
            "type": "string",
            "format": "date-time"
        },
        "FROM_ID": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "TO_ID": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "PATIENT_ID": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "DOC_TYPE": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "DOC_ID": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "ENC_ID": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "METHOD": {
            "type": "string",
            "maxLength": 20
        },
        "COMPLETED": {
            "description": "1 = completed",
            "type": "string",
            "maxLength": 1,
            "default": null
        },
        "COMPLETED_DATE": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "COMMENT": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "USERFIELD_1": {
            "type": "string",
            "maxLength": 50,
            "default": null
        }
    },
    "properties": {
        "ID": {
            "$ref": "#/definitions/ID"
        },
        "REQ_DATE": {
            "$ref": "#/definitions/REQ_DATE"
        },
        "FROM_ID": {
            "$ref": "#/definitions/FROM_ID"
        },
        "TO_ID": {
            "$ref": "#/definitions/TO_ID"
        },
        "PATIENT_ID": {
            "$ref": "#/definitions/PATIENT_ID"
        },
        "DOC_TYPE": {
            "$ref": "#/definitions/DOC_TYPE"
        },
        "DOC_ID": {
            "$ref": "#/definitions/DOC_ID"
        },
        "ENC_ID": {
            "$ref": "#/definitions/ENC_ID"
        },
        "METHOD": {
            "$ref": "#/definitions/METHOD"
        },
        "COMPLETED": {
            "$ref": "#/definitions/COMPLETED"
        },
        "COMPLETED_DATE": {
            "$ref": "#/definitions/COMPLETED_DATE"
        },
        "COMMENT": {
            "$ref": "#/definitions/COMMENT"
        },
        "USERFIELD_1": {
            "$ref": "#/definitions/USERFIELD_1"
        }
    }
}
 module.exports = schema