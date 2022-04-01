let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for erx_narcotics table",
    "$id": "erx_narcotics",
    "title": "erx_narcotics",
    "type": "object",
    "required": [
        "id",
        "drug",
        "dea_number",
        "csa_sch",
        "narc",
        "other_names"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "drug": {
            "type": "string",
            "maxLength": 255
        },
        "dea_number": {
            "type": "string",
            "maxLength": 5
        },
        "csa_sch": {
            "type": "string",
            "maxLength": 2
        },
        "narc": {
            "type": "string",
            "maxLength": 2
        },
        "other_names": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "drug": {
            "$ref": "#/definitions/drug"
        },
        "dea_number": {
            "$ref": "#/definitions/dea_number"
        },
        "csa_sch": {
            "$ref": "#/definitions/csa_sch"
        },
        "narc": {
            "$ref": "#/definitions/narc"
        },
        "other_names": {
            "$ref": "#/definitions/other_names"
        }
    }
}
 module.exports = schema