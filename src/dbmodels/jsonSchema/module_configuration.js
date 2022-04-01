let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for module_configuration table",
    "$id": "module_configuration",
    "title": "module_configuration",
    "type": "object",
    "required": [
        "module_config_id",
        "module_id",
        "field_name",
        "field_value"
    ],
    "definitions": {
        "module_config_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.2089258196146292e+24
        },
        "module_id": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24
        },
        "field_name": {
            "type": "string",
            "maxLength": 45
        },
        "field_value": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "module_config_id": {
            "$ref": "#/definitions/module_config_id"
        },
        "module_id": {
            "$ref": "#/definitions/module_id"
        },
        "field_name": {
            "$ref": "#/definitions/field_name"
        },
        "field_value": {
            "$ref": "#/definitions/field_value"
        }
    }
}
 module.exports = schema