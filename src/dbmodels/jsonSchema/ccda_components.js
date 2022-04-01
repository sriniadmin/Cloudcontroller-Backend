let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for ccda_components table",
    "$id": "ccda_components",
    "title": "ccda_components",
    "type": "object",
    "required": [
        "ccda_components_id",
        "ccda_type"
    ],
    "definitions": {
        "ccda_components_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "ccda_components_field": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "ccda_components_name": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "ccda_type": {
            "description": "0=>sections,1=>components",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "ccda_components_id": {
            "$ref": "#/definitions/ccda_components_id"
        },
        "ccda_components_field": {
            "$ref": "#/definitions/ccda_components_field"
        },
        "ccda_components_name": {
            "$ref": "#/definitions/ccda_components_name"
        },
        "ccda_type": {
            "$ref": "#/definitions/ccda_type"
        }
    }
}
 module.exports = schema