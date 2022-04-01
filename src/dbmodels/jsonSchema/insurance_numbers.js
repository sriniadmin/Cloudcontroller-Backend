let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for insurance_numbers table",
    "$id": "insurance_numbers",
    "title": "insurance_numbers",
    "type": "object",
    "required": [
        "id",
        "provider_id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "provider_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "insurance_company_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "provider_number": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "rendering_provider_number": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "group_number": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "provider_number_type": {
            "type": "string",
            "maxLength": 4,
            "default": null
        },
        "rendering_provider_number_type": {
            "type": "string",
            "maxLength": 4,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "provider_id": {
            "$ref": "#/definitions/provider_id"
        },
        "insurance_company_id": {
            "$ref": "#/definitions/insurance_company_id"
        },
        "provider_number": {
            "$ref": "#/definitions/provider_number"
        },
        "rendering_provider_number": {
            "$ref": "#/definitions/rendering_provider_number"
        },
        "group_number": {
            "$ref": "#/definitions/group_number"
        },
        "provider_number_type": {
            "$ref": "#/definitions/provider_number_type"
        },
        "rendering_provider_number_type": {
            "$ref": "#/definitions/rendering_provider_number_type"
        }
    }
}
 module.exports = schema