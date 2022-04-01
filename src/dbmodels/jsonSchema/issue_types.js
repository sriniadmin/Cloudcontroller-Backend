let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for issue_types table",
    "$id": "issue_types",
    "title": "issue_types",
    "type": "object",
    "required": [
        "active",
        "category",
        "type",
        "plural",
        "singular",
        "abbreviation",
        "style",
        "force_show",
        "ordering",
        "aco_spec"
    ],
    "definitions": {
        "active": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "category": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 75,
            "minimum": 1
        },
        "type": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 75,
            "minimum": 1
        },
        "plural": {
            "type": "string",
            "maxLength": 75
        },
        "singular": {
            "type": "string",
            "maxLength": 75
        },
        "abbreviation": {
            "type": "string",
            "maxLength": 75
        },
        "style": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "force_show": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "ordering": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "aco_spec": {
            "type": "string",
            "maxLength": 63,
            "default": "patients|med"
        }
    },
    "properties": {
        "active": {
            "$ref": "#/definitions/active"
        },
        "category": {
            "$ref": "#/definitions/category"
        },
        "type": {
            "$ref": "#/definitions/type"
        },
        "plural": {
            "$ref": "#/definitions/plural"
        },
        "singular": {
            "$ref": "#/definitions/singular"
        },
        "abbreviation": {
            "$ref": "#/definitions/abbreviation"
        },
        "style": {
            "$ref": "#/definitions/style"
        },
        "force_show": {
            "$ref": "#/definitions/force_show"
        },
        "ordering": {
            "$ref": "#/definitions/ordering"
        },
        "aco_spec": {
            "$ref": "#/definitions/aco_spec"
        }
    }
}
 module.exports = schema