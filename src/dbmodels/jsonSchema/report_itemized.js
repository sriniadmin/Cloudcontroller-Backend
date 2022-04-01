let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for report_itemized table",
    "$id": "report_itemized",
    "title": "report_itemized",
    "type": "object",
    "required": [
        "report_id",
        "itemized_test_id",
        "numerator_label",
        "pass",
        "pid"
    ],
    "definitions": {
        "report_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "itemized_test_id": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "numerator_label": {
            "description": "Only used in special cases",
            "type": "string",
            "maxLength": 25
        },
        "pass": {
            "description": "0 is fail, 1 is pass, 2 is excluded",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        }
    },
    "properties": {
        "report_id": {
            "$ref": "#/definitions/report_id"
        },
        "itemized_test_id": {
            "$ref": "#/definitions/itemized_test_id"
        },
        "numerator_label": {
            "$ref": "#/definitions/numerator_label"
        },
        "pass": {
            "$ref": "#/definitions/pass"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        }
    }
}
 module.exports = schema