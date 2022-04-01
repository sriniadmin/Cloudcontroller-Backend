let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for report_results table",
    "$id": "report_results",
    "title": "report_results",
    "type": "object",
    "required": [
        "report_id",
        "field_id"
    ],
    "definitions": {
        "report_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "field_id": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "field_value": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "report_id": {
            "$ref": "#/definitions/report_id"
        },
        "field_id": {
            "$ref": "#/definitions/field_id"
        },
        "field_value": {
            "$ref": "#/definitions/field_value"
        }
    }
}
 module.exports = schema