let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for insurance_data table",
    "$id": "insurance_data",
    "title": "insurance_data",
    "type": "object",
    "required": [
        "id",
        "date",
        "pid",
        "accept_assignment",
        "policy_type"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "type": {
            "type": "string",
            "enum": [
                "primary",
                "secondary",
                "tertiary"
            ],
            "default": null
        },
        "provider": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "plan_name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "policy_number": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "group_number": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_lname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_mname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_fname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_relationship": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_ss": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_DOB": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "subscriber_street": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_postal_code": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_city": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_state": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_country": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_phone": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_employer": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_employer_street": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_employer_postal_code": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_employer_state": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_employer_country": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subscriber_employer_city": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "copay": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "date": {
            "type": "string",
            "format": "date",
            "default": "0000-00-00"
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "subscriber_sex": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "accept_assignment": {
            "type": "string",
            "maxLength": 5,
            "default": "TRUE"
        },
        "policy_type": {
            "type": "string",
            "maxLength": 25
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "type": {
            "$ref": "#/definitions/type"
        },
        "provider": {
            "$ref": "#/definitions/provider"
        },
        "plan_name": {
            "$ref": "#/definitions/plan_name"
        },
        "policy_number": {
            "$ref": "#/definitions/policy_number"
        },
        "group_number": {
            "$ref": "#/definitions/group_number"
        },
        "subscriber_lname": {
            "$ref": "#/definitions/subscriber_lname"
        },
        "subscriber_mname": {
            "$ref": "#/definitions/subscriber_mname"
        },
        "subscriber_fname": {
            "$ref": "#/definitions/subscriber_fname"
        },
        "subscriber_relationship": {
            "$ref": "#/definitions/subscriber_relationship"
        },
        "subscriber_ss": {
            "$ref": "#/definitions/subscriber_ss"
        },
        "subscriber_DOB": {
            "$ref": "#/definitions/subscriber_DOB"
        },
        "subscriber_street": {
            "$ref": "#/definitions/subscriber_street"
        },
        "subscriber_postal_code": {
            "$ref": "#/definitions/subscriber_postal_code"
        },
        "subscriber_city": {
            "$ref": "#/definitions/subscriber_city"
        },
        "subscriber_state": {
            "$ref": "#/definitions/subscriber_state"
        },
        "subscriber_country": {
            "$ref": "#/definitions/subscriber_country"
        },
        "subscriber_phone": {
            "$ref": "#/definitions/subscriber_phone"
        },
        "subscriber_employer": {
            "$ref": "#/definitions/subscriber_employer"
        },
        "subscriber_employer_street": {
            "$ref": "#/definitions/subscriber_employer_street"
        },
        "subscriber_employer_postal_code": {
            "$ref": "#/definitions/subscriber_employer_postal_code"
        },
        "subscriber_employer_state": {
            "$ref": "#/definitions/subscriber_employer_state"
        },
        "subscriber_employer_country": {
            "$ref": "#/definitions/subscriber_employer_country"
        },
        "subscriber_employer_city": {
            "$ref": "#/definitions/subscriber_employer_city"
        },
        "copay": {
            "$ref": "#/definitions/copay"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "subscriber_sex": {
            "$ref": "#/definitions/subscriber_sex"
        },
        "accept_assignment": {
            "$ref": "#/definitions/accept_assignment"
        },
        "policy_type": {
            "$ref": "#/definitions/policy_type"
        }
    }
}
 module.exports = schema