let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for billing table",
    "$id": "billing",
    "title": "billing",
    "type": "object",
    "required": [
        "id",
        "bill_process",
        "notecodes",
        "revenue_code"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "code_type": {
            "type": "string",
            "maxLength": 15,
            "default": null
        },
        "code": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "provider_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "user": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "groupname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "authorized": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "encounter": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "code_text": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "billed": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "activity": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "payer_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "bill_process": {
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767
        },
        "bill_date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "process_date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "process_file": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "modifier": {
            "type": "string",
            "maxLength": 12,
            "default": null
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
        "justify": {
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
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "ndc_info": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "notecodes": {
            "type": "string",
            "maxLength": 25
        },
        "external_id": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "pricelevel": {
            "type": "string",
            "maxLength": 31
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
        "date": {
            "$ref": "#/definitions/date"
        },
        "code_type": {
            "$ref": "#/definitions/code_type"
        },
        "code": {
            "$ref": "#/definitions/code"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "provider_id": {
            "$ref": "#/definitions/provider_id"
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
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "code_text": {
            "$ref": "#/definitions/code_text"
        },
        "billed": {
            "$ref": "#/definitions/billed"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "payer_id": {
            "$ref": "#/definitions/payer_id"
        },
        "bill_process": {
            "$ref": "#/definitions/bill_process"
        },
        "bill_date": {
            "$ref": "#/definitions/bill_date"
        },
        "process_date": {
            "$ref": "#/definitions/process_date"
        },
        "process_file": {
            "$ref": "#/definitions/process_file"
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
        "justify": {
            "$ref": "#/definitions/justify"
        },
        "target": {
            "$ref": "#/definitions/target"
        },
        "x12_partner_id": {
            "$ref": "#/definitions/x12_partner_id"
        },
        "ndc_info": {
            "$ref": "#/definitions/ndc_info"
        },
        "notecodes": {
            "$ref": "#/definitions/notecodes"
        },
        "external_id": {
            "$ref": "#/definitions/external_id"
        },
        "pricelevel": {
            "$ref": "#/definitions/pricelevel"
        },
        "revenue_code": {
            "$ref": "#/definitions/revenue_code"
        }
    }
}
 module.exports = schema