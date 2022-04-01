let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for procedure_order_code table",
    "$id": "procedure_order_code",
    "title": "procedure_order_code",
    "type": "object",
    "required": [
        "procedure_order_id",
        "procedure_order_seq",
        "procedure_code",
        "procedure_name",
        "procedure_source",
        "do_not_send"
    ],
    "definitions": {
        "procedure_order_id": {
            "$comment": "primary key",
            "description": "references procedure_order.procedure_order_id",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "procedure_order_seq": {
            "$comment": "primary key",
            "description": "Supports multiple tests per order. Procedure_order_seq, incremented in code",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "procedure_code": {
            "description": "like procedure_type.procedure_code",
            "type": "string",
            "maxLength": 31
        },
        "procedure_name": {
            "description": "descriptive name of the procedure code",
            "type": "string",
            "maxLength": 255
        },
        "procedure_source": {
            "description": "1=original order, 2=added after order sent",
            "type": "string",
            "maxLength": 1,
            "default": "1"
        },
        "diagnoses": {
            "description": "diagnoses and maybe other coding (e.g. ICD9:111.11)",
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "do_not_send": {
            "description": "0 = normal, 1 = do not transmit to lab",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "procedure_order_title": {
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "procedure_order_id": {
            "$ref": "#/definitions/procedure_order_id"
        },
        "procedure_order_seq": {
            "$ref": "#/definitions/procedure_order_seq"
        },
        "procedure_code": {
            "$ref": "#/definitions/procedure_code"
        },
        "procedure_name": {
            "$ref": "#/definitions/procedure_name"
        },
        "procedure_source": {
            "$ref": "#/definitions/procedure_source"
        },
        "diagnoses": {
            "$ref": "#/definitions/diagnoses"
        },
        "do_not_send": {
            "$ref": "#/definitions/do_not_send"
        },
        "procedure_order_title": {
            "$ref": "#/definitions/procedure_order_title"
        }
    }
}
 module.exports = schema