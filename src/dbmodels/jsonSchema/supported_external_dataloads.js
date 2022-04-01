let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for supported_external_dataloads table",
    "$id": "supported_external_dataloads",
    "title": "supported_external_dataloads",
    "type": "object",
    "required": [
        "load_id",
        "load_type",
        "load_source",
        "load_release_date",
        "load_filename",
        "load_checksum"
    ],
    "definitions": {
        "load_id": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.461501637330903e+48
        },
        "load_type": {
            "type": "string",
            "maxLength": 24
        },
        "load_source": {
            "type": "string",
            "maxLength": 24,
            "default": "CMS"
        },
        "load_release_date": {
            "type": "string",
            "format": "date"
        },
        "load_filename": {
            "type": "string",
            "maxLength": 256
        },
        "load_checksum": {
            "type": "string",
            "maxLength": 32
        }
    },
    "properties": {
        "load_id": {
            "$ref": "#/definitions/load_id"
        },
        "load_type": {
            "$ref": "#/definitions/load_type"
        },
        "load_source": {
            "$ref": "#/definitions/load_source"
        },
        "load_release_date": {
            "$ref": "#/definitions/load_release_date"
        },
        "load_filename": {
            "$ref": "#/definitions/load_filename"
        },
        "load_checksum": {
            "$ref": "#/definitions/load_checksum"
        }
    }
}
 module.exports = schema