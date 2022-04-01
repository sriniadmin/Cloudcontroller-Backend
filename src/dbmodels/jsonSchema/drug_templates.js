let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for drug_templates table",
    "$id": "drug_templates",
    "title": "drug_templates",
    "type": "object",
    "required": [
        "drug_id",
        "selector",
        "period",
        "quantity",
        "refills"
    ],
    "definitions": {
        "drug_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "selector": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 255,
            "minimum": 1
        },
        "dosage": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "period": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "quantity": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "refills": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "taxrates": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "drug_id": {
            "$ref": "#/definitions/drug_id"
        },
        "selector": {
            "$ref": "#/definitions/selector"
        },
        "dosage": {
            "$ref": "#/definitions/dosage"
        },
        "period": {
            "$ref": "#/definitions/period"
        },
        "quantity": {
            "$ref": "#/definitions/quantity"
        },
        "refills": {
            "$ref": "#/definitions/refills"
        },
        "taxrates": {
            "$ref": "#/definitions/taxrates"
        }
    }
}
 module.exports = schema