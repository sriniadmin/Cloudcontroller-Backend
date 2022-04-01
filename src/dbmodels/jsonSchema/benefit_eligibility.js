let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for benefit_eligibility table",
    "$id": "benefit_eligibility",
    "title": "benefit_eligibility",
    "type": "object",
    "required": [
        "response_id",
        "verification_id"
    ],
    "definitions": {
        "response_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "verification_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "type": {
            "type": "string",
            "maxLength": 4,
            "default": null
        },
        "benefit_type": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "start_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "end_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "coverage_level": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "coverage_type": {
            "type": "string",
            "maxLength": 512,
            "default": null
        },
        "plan_type": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "plan_description": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "coverage_period": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "amount": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99,
            "default": null
        },
        "percent": {
            "type": "number",
            "maximum": 9.99,
            "minimum": -9.99,
            "default": null
        },
        "network_ind": {
            "type": "string",
            "maxLength": 2,
            "default": null
        },
        "message": {
            "type": "string",
            "maxLength": 512,
            "default": null
        },
        "response_status": {
            "type": "string",
            "enum": [
                "A",
                "D"
            ],
            "default": "A"
        },
        "response_create_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "response_modify_date": {
            "type": "string",
            "format": "date",
            "default": null
        }
    },
    "properties": {
        "response_id": {
            "$ref": "#/definitions/response_id"
        },
        "verification_id": {
            "$ref": "#/definitions/verification_id"
        },
        "type": {
            "$ref": "#/definitions/type"
        },
        "benefit_type": {
            "$ref": "#/definitions/benefit_type"
        },
        "start_date": {
            "$ref": "#/definitions/start_date"
        },
        "end_date": {
            "$ref": "#/definitions/end_date"
        },
        "coverage_level": {
            "$ref": "#/definitions/coverage_level"
        },
        "coverage_type": {
            "$ref": "#/definitions/coverage_type"
        },
        "plan_type": {
            "$ref": "#/definitions/plan_type"
        },
        "plan_description": {
            "$ref": "#/definitions/plan_description"
        },
        "coverage_period": {
            "$ref": "#/definitions/coverage_period"
        },
        "amount": {
            "$ref": "#/definitions/amount"
        },
        "percent": {
            "$ref": "#/definitions/percent"
        },
        "network_ind": {
            "$ref": "#/definitions/network_ind"
        },
        "message": {
            "$ref": "#/definitions/message"
        },
        "response_status": {
            "$ref": "#/definitions/response_status"
        },
        "response_create_date": {
            "$ref": "#/definitions/response_create_date"
        },
        "response_modify_date": {
            "$ref": "#/definitions/response_modify_date"
        }
    }
}
 module.exports = schema