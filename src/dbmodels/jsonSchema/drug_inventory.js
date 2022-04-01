let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for drug_inventory table",
    "$id": "drug_inventory",
    "title": "drug_inventory",
    "type": "object",
    "required": [
        "inventory_id",
        "drug_id",
        "on_hand",
        "warehouse_id",
        "vendor_id",
        "last_notify"
    ],
    "definitions": {
        "inventory_id": {
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
        "lot_number": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "expiration": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "manufacturer": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "on_hand": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "warehouse_id": {
            "type": "string",
            "maxLength": 31
        },
        "vendor_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "last_notify": {
            "type": "string",
            "format": "date",
            "default": "0000-00-00"
        },
        "destroy_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "destroy_method": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "destroy_witness": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "destroy_notes": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "inventory_id": {
            "$ref": "#/definitions/inventory_id"
        },
        "drug_id": {
            "$ref": "#/definitions/drug_id"
        },
        "lot_number": {
            "$ref": "#/definitions/lot_number"
        },
        "expiration": {
            "$ref": "#/definitions/expiration"
        },
        "manufacturer": {
            "$ref": "#/definitions/manufacturer"
        },
        "on_hand": {
            "$ref": "#/definitions/on_hand"
        },
        "warehouse_id": {
            "$ref": "#/definitions/warehouse_id"
        },
        "vendor_id": {
            "$ref": "#/definitions/vendor_id"
        },
        "last_notify": {
            "$ref": "#/definitions/last_notify"
        },
        "destroy_date": {
            "$ref": "#/definitions/destroy_date"
        },
        "destroy_method": {
            "$ref": "#/definitions/destroy_method"
        },
        "destroy_witness": {
            "$ref": "#/definitions/destroy_witness"
        },
        "destroy_notes": {
            "$ref": "#/definitions/destroy_notes"
        }
    }
}
 module.exports = schema