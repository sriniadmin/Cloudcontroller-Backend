let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for insurance_companies table",
    "$id": "insurance_companies",
    "title": "insurance_companies",
    "type": "object",
    "required": [
        "id",
        "alt_cms_id",
        "inactive"
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
        "attn": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "cms_id": {
            "type": "string",
            "maxLength": 15,
            "default": null
        },
        "ins_type_code": {
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767,
            "default": null
        },
        "x12_receiver_id": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "x12_default_partner_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "alt_cms_id": {
            "type": "string",
            "maxLength": 15
        },
        "inactive": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "eligibility_id": {
            "type": "string",
            "maxLength": 32,
            "default": null
        },
        "x12_default_eligibility_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "attn": {
            "$ref": "#/definitions/attn"
        },
        "cms_id": {
            "$ref": "#/definitions/cms_id"
        },
        "ins_type_code": {
            "$ref": "#/definitions/ins_type_code"
        },
        "x12_receiver_id": {
            "$ref": "#/definitions/x12_receiver_id"
        },
        "x12_default_partner_id": {
            "$ref": "#/definitions/x12_default_partner_id"
        },
        "alt_cms_id": {
            "$ref": "#/definitions/alt_cms_id"
        },
        "inactive": {
            "$ref": "#/definitions/inactive"
        },
        "eligibility_id": {
            "$ref": "#/definitions/eligibility_id"
        },
        "x12_default_eligibility_id": {
            "$ref": "#/definitions/x12_default_eligibility_id"
        }
    }
}
 module.exports = schema