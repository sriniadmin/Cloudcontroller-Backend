let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for facility table",
    "$id": "facility",
    "title": "facility",
    "type": "object",
    "required": [
        "name",
        "tenant_id",
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "phone": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "fax": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "street": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "city": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "state": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "postal_code": {
            "type": "string",
            "maxLength": 11,
            "default": null
        },
        "country_code": {
            "type": "string",
            "maxLength": 30
        },
        "federal_ein": {
            "type": "string",
            "maxLength": 15,
            "default": null
        },
        "website": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "email": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "service_location": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "billing_location": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "accepts_assignment": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "pos_code": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "x12_sender_id": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "attn": {
            "type": "string",
            "maxLength": 65,
            "default": null
        },
        "domain_identifier": {
            "type": "string",
            "maxLength": 60,
            "default": null
        },
        "facility_npi": {
            "type": "string",
            "maxLength": 15,
            "default": null
        },
        "facility_taxonomy": {
            "type": "string",
            "maxLength": 15,
            "default": null
        },
        "tax_id_type": {
            "type": "string",
            "maxLength": 31
        },
        "color": {
            "type": "string",
            "maxLength": 7
        },
        "primary_business_entity": {
            "description": "0-Not Set as business entity 1-Set as business entity",
            "type": "integer",
            "minimum": -6.044629098073146e+23,
            "maximum": 6.044629098073146e+23
        },
        "facility_code": {
            "type": "string",
            "maxLength": 31,
            "default": null
        },
        "extra_validation": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "mail_street": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "mail_street2": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "mail_city": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "mail_state": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "mail_zip": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "oid": {
            "description": "HIEs CCDA and FHIR an OID is required/wanted",
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "phone": {
            "$ref": "#/definitions/phone"
        },
        "fax": {
            "$ref": "#/definitions/fax"
        },
        "street": {
            "$ref": "#/definitions/street"
        },
        "city": {
            "$ref": "#/definitions/city"
        },
        "state": {
            "$ref": "#/definitions/state"
        },
        "postal_code": {
            "$ref": "#/definitions/postal_code"
        },
        "country_code": {
            "$ref": "#/definitions/country_code"
        },
        "federal_ein": {
            "$ref": "#/definitions/federal_ein"
        },
        "website": {
            "$ref": "#/definitions/website"
        },
        "email": {
            "$ref": "#/definitions/email"
        },
        "service_location": {
            "$ref": "#/definitions/service_location"
        },
        "billing_location": {
            "$ref": "#/definitions/billing_location"
        },
        "accepts_assignment": {
            "$ref": "#/definitions/accepts_assignment"
        },
        "pos_code": {
            "$ref": "#/definitions/pos_code"
        },
        "x12_sender_id": {
            "$ref": "#/definitions/x12_sender_id"
        },
        "attn": {
            "$ref": "#/definitions/attn"
        },
        "domain_identifier": {
            "$ref": "#/definitions/domain_identifier"
        },
        "facility_npi": {
            "$ref": "#/definitions/facility_npi"
        },
        "facility_taxonomy": {
            "$ref": "#/definitions/facility_taxonomy"
        },
        "tax_id_type": {
            "$ref": "#/definitions/tax_id_type"
        },
        "color": {
            "$ref": "#/definitions/color"
        },
        "primary_business_entity": {
            "$ref": "#/definitions/primary_business_entity"
        },
        "facility_code": {
            "$ref": "#/definitions/facility_code"
        },
        "extra_validation": {
            "$ref": "#/definitions/extra_validation"
        },
        "mail_street": {
            "$ref": "#/definitions/mail_street"
        },
        "mail_street2": {
            "$ref": "#/definitions/mail_street2"
        },
        "mail_city": {
            "$ref": "#/definitions/mail_city"
        },
        "mail_state": {
            "$ref": "#/definitions/mail_state"
        },
        "mail_zip": {
            "$ref": "#/definitions/mail_zip"
        },
        "oid": {
            "$ref": "#/definitions/oid"
        }
    }
}
 module.exports = schema