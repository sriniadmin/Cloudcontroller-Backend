let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for registry table",
    "$id": "registry",
    "title": "registry",
    "type": "object",
    "required": [
        "id",
        "patient_encounter",
        "therapy_group_encounter",
        "aco_spec"
    ],
    "definitions": {
        "name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "state": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "directory": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "sql_run": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "unpackaged": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "priority": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "category": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "nickname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "patient_encounter": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "therapy_group_encounter": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "aco_spec": {
            "type": "string",
            "maxLength": 63,
            "default": "encounters|notes"
        }
    },
    "properties": {
        "name": {
            "$ref": "#/definitions/name"
        },
        "state": {
            "$ref": "#/definitions/state"
        },
        "directory": {
            "$ref": "#/definitions/directory"
        },
        "id": {
            "$ref": "#/definitions/id"
        },
        "sql_run": {
            "$ref": "#/definitions/sql_run"
        },
        "unpackaged": {
            "$ref": "#/definitions/unpackaged"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "priority": {
            "$ref": "#/definitions/priority"
        },
        "category": {
            "$ref": "#/definitions/category"
        },
        "nickname": {
            "$ref": "#/definitions/nickname"
        },
        "patient_encounter": {
            "$ref": "#/definitions/patient_encounter"
        },
        "therapy_group_encounter": {
            "$ref": "#/definitions/therapy_group_encounter"
        },
        "aco_spec": {
            "$ref": "#/definitions/aco_spec"
        }
    }
}
 module.exports = schema