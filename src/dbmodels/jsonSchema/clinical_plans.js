let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for clinical_plans table",
    "$id": "clinical_plans",
    "title": "clinical_plans",
    "type": "object",
    "required": [
        "id",
        "pid",
        "cqm_measure_group"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "description": "Unique and maps to list_options list clinical_plans",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "pid": {
            "$comment": "primary key",
            "description": "0 is default for all patients, while > 0 is id from patient_data table",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "normal_flag": {
            "description": "Normal Activation Flag",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "cqm_flag": {
            "description": "Clinical Quality Measure flag (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "cqm_2011_flag": {
            "description": "2011 Clinical Quality Measure flag (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "cqm_2014_flag": {
            "description": "2014 Clinical Quality Measure flag (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "cqm_measure_group": {
            "description": "Clinical Quality Measure Group Identifier",
            "type": "string",
            "maxLength": 10
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "normal_flag": {
            "$ref": "#/definitions/normal_flag"
        },
        "cqm_flag": {
            "$ref": "#/definitions/cqm_flag"
        },
        "cqm_2011_flag": {
            "$ref": "#/definitions/cqm_2011_flag"
        },
        "cqm_2014_flag": {
            "$ref": "#/definitions/cqm_2014_flag"
        },
        "cqm_measure_group": {
            "$ref": "#/definitions/cqm_measure_group"
        }
    }
}
 module.exports = schema