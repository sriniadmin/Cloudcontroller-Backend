let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for standardized_tables_track table",
    "$id": "standardized_tables_track",
    "title": "standardized_tables_track",
    "type": "object",
    "required": [
        "id",
        "name",
        "revision_version",
        "file_checksum"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "imported_date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "name": {
            "description": "name of standardized tables such as RXNORM",
            "type": "string",
            "maxLength": 255
        },
        "revision_version": {
            "description": "revision of standardized tables that were imported",
            "type": "string",
            "maxLength": 255
        },
        "revision_date": {
            "description": "revision of standardized tables that were imported",
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "file_checksum": {
            "type": "string",
            "maxLength": 32
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "imported_date": {
            "$ref": "#/definitions/imported_date"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "revision_version": {
            "$ref": "#/definitions/revision_version"
        },
        "revision_date": {
            "$ref": "#/definitions/revision_date"
        },
        "file_checksum": {
            "$ref": "#/definitions/file_checksum"
        }
    }
}
 module.exports = schema