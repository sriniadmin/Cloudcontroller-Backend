let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for syndromic_surveillance table",
    "$id": "syndromic_surveillance",
    "title": "syndromic_surveillance",
    "type": "object",
    "required": [
        "id",
        "lists_id",
        "submission_date",
        "filename"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "lists_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "submission_date": {
            "type": "string",
            "format": "date-time"
        },
        "filename": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "lists_id": {
            "$ref": "#/definitions/lists_id"
        },
        "submission_date": {
            "$ref": "#/definitions/submission_date"
        },
        "filename": {
            "$ref": "#/definitions/filename"
        }
    }
}
 module.exports = schema