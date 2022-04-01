let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for code_types table",
    "$id": "code_types",
    "title": "code_types",
    "type": "object",
    "required": [
        "ct_key",
        "ct_id",
        "ct_seq",
        "ct_mod",
        "ct_just",
        "ct_mask",
        "ct_fee",
        "ct_rel",
        "ct_nofs",
        "ct_diag",
        "ct_active",
        "ct_label",
        "ct_external",
        "ct_claim",
        "ct_proc",
        "ct_term",
        "ct_problem",
        "ct_drug"
    ],
    "definitions": {
        "ct_key": {
            "$comment": "primary key",
            "description": "short alphanumeric name",
            "type": "string",
            "maxLength": 15,
            "minimum": 1
        },
        "ct_id": {
            "description": "numeric identifier",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "ct_seq": {
            "description": "sort order",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "ct_mod": {
            "description": "length of modifier field",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "ct_just": {
            "description": "ct_key of justify type, if any",
            "type": "string",
            "maxLength": 15
        },
        "ct_mask": {
            "description": "formatting mask for code values",
            "type": "string",
            "maxLength": 9
        },
        "ct_fee": {
            "description": "1 if fees are used",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "ct_rel": {
            "description": "1 if can relate to other code types",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "ct_nofs": {
            "description": "1 if to be hidden in the fee sheet",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "ct_diag": {
            "description": "1 if this is a diagnosis type",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "ct_active": {
            "description": "1 if this is active",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "ct_label": {
            "description": "label of this code type",
            "type": "string",
            "maxLength": 31
        },
        "ct_external": {
            "description": "0 if stored codes in codes tables, 1 or greater if codes stored in external tables",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "ct_claim": {
            "description": "1 if this is used in claims",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "ct_proc": {
            "description": "1 if this is a procedure type",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "ct_term": {
            "description": "1 if this is a clinical term",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "ct_problem": {
            "description": "1 if this code type is used as a medical problem",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "ct_drug": {
            "description": "1 if this code type is used as a medication",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        }
    },
    "properties": {
        "ct_key": {
            "$ref": "#/definitions/ct_key"
        },
        "ct_id": {
            "$ref": "#/definitions/ct_id"
        },
        "ct_seq": {
            "$ref": "#/definitions/ct_seq"
        },
        "ct_mod": {
            "$ref": "#/definitions/ct_mod"
        },
        "ct_just": {
            "$ref": "#/definitions/ct_just"
        },
        "ct_mask": {
            "$ref": "#/definitions/ct_mask"
        },
        "ct_fee": {
            "$ref": "#/definitions/ct_fee"
        },
        "ct_rel": {
            "$ref": "#/definitions/ct_rel"
        },
        "ct_nofs": {
            "$ref": "#/definitions/ct_nofs"
        },
        "ct_diag": {
            "$ref": "#/definitions/ct_diag"
        },
        "ct_active": {
            "$ref": "#/definitions/ct_active"
        },
        "ct_label": {
            "$ref": "#/definitions/ct_label"
        },
        "ct_external": {
            "$ref": "#/definitions/ct_external"
        },
        "ct_claim": {
            "$ref": "#/definitions/ct_claim"
        },
        "ct_proc": {
            "$ref": "#/definitions/ct_proc"
        },
        "ct_term": {
            "$ref": "#/definitions/ct_term"
        },
        "ct_problem": {
            "$ref": "#/definitions/ct_problem"
        },
        "ct_drug": {
            "$ref": "#/definitions/ct_drug"
        }
    }
}
 module.exports = schema