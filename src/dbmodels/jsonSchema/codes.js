let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for codes table",
    "$id": "codes",
    "title": "codes",
    "type": "object",
    "required": [
        "id",
        "code_text",
        "code_text_short",
        "code",
        "modifier",
        "superbill",
        "related_code",
        "taxrates",
        "cyp_factor",
        "revenue_code"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "code_text": {
            "type": "string",
            "maxLength": 255
        },
        "code_text_short": {
            "type": "string",
            "maxLength": 24
        },
        "code": {
            "type": "string",
            "maxLength": 25
        },
        "code_type": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327,
            "default": null
        },
        "modifier": {
            "type": "string",
            "maxLength": 12
        },
        "units": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "fee": {
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99,
            "default": null
        },
        "superbill": {
            "type": "string",
            "maxLength": 31
        },
        "related_code": {
            "type": "string",
            "maxLength": 255
        },
        "taxrates": {
            "type": "string",
            "maxLength": 255
        },
        "cyp_factor": {
            "description": "quantity representing a years supply",
            "type": "number"
        },
        "active": {
            "description": "0 = inactive, 1 = active",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "reportable": {
            "description": "0 = non-reportable, 1 = reportable",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "financial_reporting": {
            "description": "0 = negative, 1 = considered important code in financial reporting",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "revenue_code": {
            "description": "Item revenue code",
            "type": "string",
            "maxLength": 6
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "code_text": {
            "$ref": "#/definitions/code_text"
        },
        "code_text_short": {
            "$ref": "#/definitions/code_text_short"
        },
        "code": {
            "$ref": "#/definitions/code"
        },
        "code_type": {
            "$ref": "#/definitions/code_type"
        },
        "modifier": {
            "$ref": "#/definitions/modifier"
        },
        "units": {
            "$ref": "#/definitions/units"
        },
        "fee": {
            "$ref": "#/definitions/fee"
        },
        "superbill": {
            "$ref": "#/definitions/superbill"
        },
        "related_code": {
            "$ref": "#/definitions/related_code"
        },
        "taxrates": {
            "$ref": "#/definitions/taxrates"
        },
        "cyp_factor": {
            "$ref": "#/definitions/cyp_factor"
        },
        "active": {
            "$ref": "#/definitions/active"
        },
        "reportable": {
            "$ref": "#/definitions/reportable"
        },
        "financial_reporting": {
            "$ref": "#/definitions/financial_reporting"
        },
        "revenue_code": {
            "$ref": "#/definitions/revenue_code"
        }
    }
}
 module.exports = schema