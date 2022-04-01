let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for openemr_module_vars table",
    "$id": "openemr_module_vars",
    "title": "openemr_module_vars",
    "type": "object",
    "required": [
        "pn_id"
    ],
    "definitions": {
        "pn_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 3.094850098213451e+26
        },
        "pn_modname": {
            "type": "string",
            "maxLength": 64,
            "default": null
        },
        "pn_name": {
            "type": "string",
            "maxLength": 64,
            "default": null
        },
        "pn_value": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        }
    },
    "properties": {
        "pn_id": {
            "$ref": "#/definitions/pn_id"
        },
        "pn_modname": {
            "$ref": "#/definitions/pn_modname"
        },
        "pn_name": {
            "$ref": "#/definitions/pn_name"
        },
        "pn_value": {
            "$ref": "#/definitions/pn_value"
        }
    }
}
 module.exports = schema