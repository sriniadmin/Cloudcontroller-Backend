let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for drug_sales table",
    "$id": "drug_sales",
    "title": "drug_sales",
    "type": "object",
    "required": [
        "sale_id",
        "drug_id",
        "inventory_id",
        "prescription_id",
        "pid",
        "encounter",
        "sale_date",
        "quantity",
        "fee",
        "billed",
        "xfer_inventory_id",
        "distributor_id",
        "notes"
    ],
    "definitions": {
        "sale_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "drug_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "inventory_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "prescription_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "encounter": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "sale_date": {
            "type": "string",
            "format": "date"
        },
        "quantity": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "fee": {
            "type": "number",
            "maximum": 9999999999.99,
            "minimum": -9999999999.99
        },
        "billed": {
            "description": "indicates if the sale is posted to accounting",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "xfer_inventory_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "distributor_id": {
            "description": "references users.id",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "notes": {
            "type": "string",
            "maxLength": 255
        },
        "bill_date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "pricelevel": {
            "type": "string",
            "maxLength": 31
        },
        "selector": {
            "description": "references drug_templates.selector",
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "sale_id": {
            "$ref": "#/definitions/sale_id"
        },
        "drug_id": {
            "$ref": "#/definitions/drug_id"
        },
        "inventory_id": {
            "$ref": "#/definitions/inventory_id"
        },
        "prescription_id": {
            "$ref": "#/definitions/prescription_id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "sale_date": {
            "$ref": "#/definitions/sale_date"
        },
        "quantity": {
            "$ref": "#/definitions/quantity"
        },
        "fee": {
            "$ref": "#/definitions/fee"
        },
        "billed": {
            "$ref": "#/definitions/billed"
        },
        "xfer_inventory_id": {
            "$ref": "#/definitions/xfer_inventory_id"
        },
        "distributor_id": {
            "$ref": "#/definitions/distributor_id"
        },
        "notes": {
            "$ref": "#/definitions/notes"
        },
        "bill_date": {
            "$ref": "#/definitions/bill_date"
        },
        "pricelevel": {
            "$ref": "#/definitions/pricelevel"
        },
        "selector": {
            "$ref": "#/definitions/selector"
        }
    }
}
 module.exports = schema