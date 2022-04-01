let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for amc_misc_data table",
    "$id": "amc_misc_data",
    "title": "amc_misc_data",
    "type": "object",
    "required": [
        "amc_id",
        "map_category",
        "map_id"
    ],
    "definitions": {
        "amc_id": {
            "description": "Unique and maps to list_options list clinical_rules",
            "type": "string",
            "maxLength": 31
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "map_category": {
            "description": "Maps to an object category (such as prescriptions etc.)",
            "type": "string",
            "maxLength": 255
        },
        "map_id": {
            "description": "Maps to an object id (such as prescription id etc.)",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "date_created": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "date_completed": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "soc_provided": {
            "type": "string",
            "format": "date-time",
            "default": null
        }
    },
    "properties": {
        "amc_id": {
            "$ref": "#/definitions/amc_id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "map_category": {
            "$ref": "#/definitions/map_category"
        },
        "map_id": {
            "$ref": "#/definitions/map_id"
        },
        "date_created": {
            "$ref": "#/definitions/date_created"
        },
        "date_completed": {
            "$ref": "#/definitions/date_completed"
        },
        "soc_provided": {
            "$ref": "#/definitions/soc_provided"
        }
    }
}
 module.exports = schema