let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for ccda_sections table",
    "$id": "ccda_sections",
    "title": "ccda_sections",
    "type": "object",
    "required": [
        "ccda_sections_id",
        "ccda_sections_req_mapping"
    ],
    "definitions": {
        "ccda_sections_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "ccda_components_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "ccda_sections_field": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "ccda_sections_name": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "ccda_sections_req_mapping": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        }
    },
    "properties": {
        "ccda_sections_id": {
            "$ref": "#/definitions/ccda_sections_id"
        },
        "ccda_components_id": {
            "$ref": "#/definitions/ccda_components_id"
        },
        "ccda_sections_field": {
            "$ref": "#/definitions/ccda_sections_field"
        },
        "ccda_sections_name": {
            "$ref": "#/definitions/ccda_sections_name"
        },
        "ccda_sections_req_mapping": {
            "$ref": "#/definitions/ccda_sections_req_mapping"
        }
    }
}
 module.exports = schema