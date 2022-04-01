let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for eligibility_verification table",
    "$id": "eligibility_verification",
    "title": "eligibility_verification",
    "type": "object",
    "required": [
        "verification_id"
    ],
    "definitions": {
        "verification_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "response_id": {
            "type": "string",
            "maxLength": 32,
            "default": null
        },
        "insurance_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "eligibility_check_date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "copay": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "deductible": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "deductiblemet": {
            "type": "string",
            "enum": [
                "Y",
                "N"
            ],
            "default": "Y"
        },
        "create_date": {
            "type": "string",
            "format": "date",
            "default": null
        }
    },
    "properties": {
        "verification_id": {
            "$ref": "#/definitions/verification_id"
        },
        "response_id": {
            "$ref": "#/definitions/response_id"
        },
        "insurance_id": {
            "$ref": "#/definitions/insurance_id"
        },
        "eligibility_check_date": {
            "$ref": "#/definitions/eligibility_check_date"
        },
        "copay": {
            "$ref": "#/definitions/copay"
        },
        "deductible": {
            "$ref": "#/definitions/deductible"
        },
        "deductiblemet": {
            "$ref": "#/definitions/deductiblemet"
        },
        "create_date": {
            "$ref": "#/definitions/create_date"
        }
    }
}
 module.exports = schema