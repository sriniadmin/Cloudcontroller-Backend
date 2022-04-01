let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for drugs table",
    "$id": "drugs",
    "title": "drugs",
    "type": "object",
    "required": [
        "drug_id",
        "name",
        "on_order",
        "form",
        "size",
        "unit",
        "route",
        "drug_code",
        "active",
        "substitute"
    ],
    "definitions": {
        "drug_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "name": {
            "type": "string",
            "maxLength": 255
        },
        "ndc_number": {
            "type": "string",
            "maxLength": 20
        },
        "on_order": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "reorder_point": {
            "type": "number"
        },
        "max_level": {
            "type": "number"
        },
        "last_notify": {
            "type": "string",
            "format": "date",
            "default": "0000-00-00"
        },
        "reactions": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "form": {
            "type": "integer",
            "minimum": -8388608,
            "maximum": 8388607
        },
        "size": {
            "type": "string",
            "maxLength": 25
        },
        "unit": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "route": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "substitute": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "related_code": {
            "description": "may reference a related codes.code",
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
        "allow_combining": {
            "description": "1 = allow filling an order from multiple lots",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "allow_multiple": {
            "description": "1 = allow multiple lots at one warehouse",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "drug_code": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "consumable": {
            "description": "1 = will not show on the fee sheet",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "dispensable": {
            "description": "0 = pharmacy elsewhere, 1 = dispensed here",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        }
    },
    "properties": {
        "drug_id": {
            "$ref": "#/definitions/drug_id"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "ndc_number": {
            "$ref": "#/definitions/ndc_number"
        },
        "on_order": {
            "$ref": "#/definitions/on_order"
        },
        "reorder_point": {
            "$ref": "#/definitions/reorder_point"
        },
        "max_level": {
            "$ref": "#/definitions/max_level"
        },
        "last_notify": {
            "$ref": "#/definitions/last_notify"
        },
        "reactions": {
            "$ref": "#/definitions/reactions"
        },
        "form": {
            "$ref": "#/definitions/form"
        },
        "size": {
            "$ref": "#/definitions/size"
        },
        "unit": {
            "$ref": "#/definitions/unit"
        },
        "route": {
            "$ref": "#/definitions/route"
        },
        "substitute": {
            "$ref": "#/definitions/substitute"
        },
        "related_code": {
            "$ref": "#/definitions/related_code"
        },
        "cyp_factor": {
            "$ref": "#/definitions/cyp_factor"
        },
        "active": {
            "$ref": "#/definitions/active"
        },
        "allow_combining": {
            "$ref": "#/definitions/allow_combining"
        },
        "allow_multiple": {
            "$ref": "#/definitions/allow_multiple"
        },
        "drug_code": {
            "$ref": "#/definitions/drug_code"
        },
        "consumable": {
            "$ref": "#/definitions/consumable"
        },
        "dispensable": {
            "$ref": "#/definitions/dispensable"
        }
    }
}
 module.exports = schema