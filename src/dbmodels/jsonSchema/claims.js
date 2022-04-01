let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for claims table",
    "$id": "claims",
    "title": "claims",
    "type": "object",
    "required": [
        "patient_id",
        "encounter_id",
        "version",
        "payer_id",
        "status",
        "payer_type",
        "bill_process",
        "x12_partner_id"
    ],
    "definitions": {
        "patient_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "encounter_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "version": {
            "$comment": "primary key",
            "description": "Claim version, incremented in code",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.2089258196146292e+24
        },
        "payer_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "status": {
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767
        },
        "payer_type": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "bill_process": {
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767
        },
        "bill_time": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "process_time": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "process_file": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "target": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "x12_partner_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "submitted_claim": {
            "description": "This claims form claim data",
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        },
        "encounter_id": {
            "$ref": "#/definitions/encounter_id"
        },
        "version": {
            "$ref": "#/definitions/version"
        },
        "payer_id": {
            "$ref": "#/definitions/payer_id"
        },
        "status": {
            "$ref": "#/definitions/status"
        },
        "payer_type": {
            "$ref": "#/definitions/payer_type"
        },
        "bill_process": {
            "$ref": "#/definitions/bill_process"
        },
        "bill_time": {
            "$ref": "#/definitions/bill_time"
        },
        "process_time": {
            "$ref": "#/definitions/process_time"
        },
        "process_file": {
            "$ref": "#/definitions/process_file"
        },
        "target": {
            "$ref": "#/definitions/target"
        },
        "x12_partner_id": {
            "$ref": "#/definitions/x12_partner_id"
        },
        "submitted_claim": {
            "$ref": "#/definitions/submitted_claim"
        }
    }
}
 module.exports = schema