let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for log_validator table",
    "$id": "log_validator",
    "title": "log_validator",
    "type": "object",
    "required": [
        "log_id"
    ],
    "definitions": {
        "log_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "log_checksum": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        }
    },
    "properties": {
        "log_id": {
            "$ref": "#/definitions/log_id"
        },
        "log_checksum": {
            "$ref": "#/definitions/log_checksum"
        }
    }
}
 module.exports = schema