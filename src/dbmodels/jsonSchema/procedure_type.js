let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for procedure_type table",
    "$id": "procedure_type",
    "title": "procedure_type",
    "type": "object",
    "required": [
        "procedure_type_id",
        "parent",
        "name",
        "lab_id",
        "procedure_code",
        "procedure_type",
        "body_site",
        "specimen",
        "route_admin",
        "laterality",
        "description",
        "standard_code",
        "related_code",
        "units",
        "range",
        "seq",
        "activity",
        "notes"
    ],
    "definitions": {
        "procedure_type_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "parent": {
            "description": "references procedure_type.procedure_type_id",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "name": {
            "description": "name for this category, procedure or result type",
            "type": "string",
            "maxLength": 63
        },
        "lab_id": {
            "description": "references procedure_providers.ppid, 0 means default to parent",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "procedure_code": {
            "description": "code identifying this procedure",
            "type": "string",
            "maxLength": 31
        },
        "procedure_type": {
            "description": "see list proc_type",
            "type": "string",
            "maxLength": 31
        },
        "body_site": {
            "description": "where to do injection, e.g. arm, buttock",
            "type": "string",
            "maxLength": 31
        },
        "specimen": {
            "description": "blood, urine, saliva, etc.",
            "type": "string",
            "maxLength": 31
        },
        "route_admin": {
            "description": "oral, injection",
            "type": "string",
            "maxLength": 31
        },
        "laterality": {
            "description": "left, right, ...",
            "type": "string",
            "maxLength": 31
        },
        "description": {
            "description": "descriptive text for procedure_code",
            "type": "string",
            "maxLength": 255
        },
        "standard_code": {
            "description": "industry standard code type and code (e.g. CPT4:12345)",
            "type": "string",
            "maxLength": 255
        },
        "related_code": {
            "description": "suggested code(s) for followup services if result is abnormal",
            "type": "string",
            "maxLength": 255
        },
        "units": {
            "description": "default for procedure_result.units",
            "type": "string",
            "maxLength": 31
        },
        "range": {
            "description": "default for procedure_result.range",
            "type": "string",
            "maxLength": 255
        },
        "seq": {
            "description": "sequence number for ordering",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "activity": {
            "description": "1=active, 0=inactive",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "notes": {
            "description": "additional notes to enhance description",
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "procedure_type_id": {
            "$ref": "#/definitions/procedure_type_id"
        },
        "parent": {
            "$ref": "#/definitions/parent"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "lab_id": {
            "$ref": "#/definitions/lab_id"
        },
        "procedure_code": {
            "$ref": "#/definitions/procedure_code"
        },
        "procedure_type": {
            "$ref": "#/definitions/procedure_type"
        },
        "body_site": {
            "$ref": "#/definitions/body_site"
        },
        "specimen": {
            "$ref": "#/definitions/specimen"
        },
        "route_admin": {
            "$ref": "#/definitions/route_admin"
        },
        "laterality": {
            "$ref": "#/definitions/laterality"
        },
        "description": {
            "$ref": "#/definitions/description"
        },
        "standard_code": {
            "$ref": "#/definitions/standard_code"
        },
        "related_code": {
            "$ref": "#/definitions/related_code"
        },
        "units": {
            "$ref": "#/definitions/units"
        },
        "range": {
            "$ref": "#/definitions/range"
        },
        "seq": {
            "$ref": "#/definitions/seq"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "notes": {
            "$ref": "#/definitions/notes"
        }
    }
}
 module.exports = schema