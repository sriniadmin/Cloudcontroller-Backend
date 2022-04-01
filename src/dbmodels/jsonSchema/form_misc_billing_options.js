let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_misc_billing_options table",
    "$id": "form_misc_billing_options",
    "title": "form_misc_billing_options",
    "type": "object",
    "required": [
        "id"
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
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "groupname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "authorized": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "activity": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "employment_related": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "auto_accident": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "accident_state": {
            "type": "string",
            "maxLength": 2,
            "default": null
        },
        "other_accident": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "medicaid_referral_code": {
            "type": "string",
            "maxLength": 2,
            "default": null
        },
        "epsdt_flag": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "provider_qualifier_code": {
            "type": "string",
            "maxLength": 2,
            "default": null
        },
        "provider_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "outside_lab": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "lab_amount": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99,
            "default": null
        },
        "is_unable_to_work": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "onset_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "date_initial_treatment": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "off_work_from": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "off_work_to": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "is_hospitalized": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "hospitalization_date_from": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "hospitalization_date_to": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "medicaid_resubmission_code": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "medicaid_original_reference": {
            "type": "string",
            "maxLength": 15,
            "default": null
        },
        "prior_auth_number": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "comments": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "replacement_claim": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "icn_resubmission_number": {
            "type": "string",
            "maxLength": 35,
            "default": null
        },
        "box_14_date_qual": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "box_15_date_qual": {
            "type": "string",
            "maxLength": 3,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "groupname": {
            "$ref": "#/definitions/groupname"
        },
        "authorized": {
            "$ref": "#/definitions/authorized"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "employment_related": {
            "$ref": "#/definitions/employment_related"
        },
        "auto_accident": {
            "$ref": "#/definitions/auto_accident"
        },
        "accident_state": {
            "$ref": "#/definitions/accident_state"
        },
        "other_accident": {
            "$ref": "#/definitions/other_accident"
        },
        "medicaid_referral_code": {
            "$ref": "#/definitions/medicaid_referral_code"
        },
        "epsdt_flag": {
            "$ref": "#/definitions/epsdt_flag"
        },
        "provider_qualifier_code": {
            "$ref": "#/definitions/provider_qualifier_code"
        },
        "provider_id": {
            "$ref": "#/definitions/provider_id"
        },
        "outside_lab": {
            "$ref": "#/definitions/outside_lab"
        },
        "lab_amount": {
            "$ref": "#/definitions/lab_amount"
        },
        "is_unable_to_work": {
            "$ref": "#/definitions/is_unable_to_work"
        },
        "onset_date": {
            "$ref": "#/definitions/onset_date"
        },
        "date_initial_treatment": {
            "$ref": "#/definitions/date_initial_treatment"
        },
        "off_work_from": {
            "$ref": "#/definitions/off_work_from"
        },
        "off_work_to": {
            "$ref": "#/definitions/off_work_to"
        },
        "is_hospitalized": {
            "$ref": "#/definitions/is_hospitalized"
        },
        "hospitalization_date_from": {
            "$ref": "#/definitions/hospitalization_date_from"
        },
        "hospitalization_date_to": {
            "$ref": "#/definitions/hospitalization_date_to"
        },
        "medicaid_resubmission_code": {
            "$ref": "#/definitions/medicaid_resubmission_code"
        },
        "medicaid_original_reference": {
            "$ref": "#/definitions/medicaid_original_reference"
        },
        "prior_auth_number": {
            "$ref": "#/definitions/prior_auth_number"
        },
        "comments": {
            "$ref": "#/definitions/comments"
        },
        "replacement_claim": {
            "$ref": "#/definitions/replacement_claim"
        },
        "icn_resubmission_number": {
            "$ref": "#/definitions/icn_resubmission_number"
        },
        "box_14_date_qual": {
            "$ref": "#/definitions/box_14_date_qual"
        },
        "box_15_date_qual": {
            "$ref": "#/definitions/box_15_date_qual"
        }
    }
}
 module.exports = schema