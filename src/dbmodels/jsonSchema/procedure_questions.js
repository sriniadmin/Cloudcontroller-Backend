let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for procedure_questions table",
    "$id": "procedure_questions",
    "title": "procedure_questions",
    "type": "object",
    "required": [
        "lab_id",
        "procedure_code",
        "question_code",
        "seq",
        "question_text",
        "required",
        "maxsize",
        "fldtype",
        "tips",
        "activity"
    ],
    "definitions": {
        "lab_id": {
            "$comment": "primary key",
            "description": "references procedure_providers.ppid to identify the lab",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "procedure_code": {
            "$comment": "primary key",
            "description": "references procedure_type.procedure_code to identify this order type",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "question_code": {
            "$comment": "primary key",
            "description": "code identifying this question",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "seq": {
            "description": "sequence number for ordering",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "question_text": {
            "description": "descriptive text for question_code",
            "type": "string",
            "maxLength": 255
        },
        "required": {
            "description": "1 = required, 0 = not",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "maxsize": {
            "description": "maximum length if text input field",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "fldtype": {
            "description": "Text, Number, Select, Multiselect, Date, Gestational-age",
            "type": "string",
            "maxLength": 1,
            "default": "T"
        },
        "options": {
            "description": "choices for fldtype S and T",
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "tips": {
            "description": "Additional instructions for answering the question",
            "type": "string",
            "maxLength": 255
        },
        "activity": {
            "description": "1 = active, 0 = inactive",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        }
    },
    "properties": {
        "lab_id": {
            "$ref": "#/definitions/lab_id"
        },
        "procedure_code": {
            "$ref": "#/definitions/procedure_code"
        },
        "question_code": {
            "$ref": "#/definitions/question_code"
        },
        "seq": {
            "$ref": "#/definitions/seq"
        },
        "question_text": {
            "$ref": "#/definitions/question_text"
        },
        "required": {
            "$ref": "#/definitions/required"
        },
        "maxsize": {
            "$ref": "#/definitions/maxsize"
        },
        "fldtype": {
            "$ref": "#/definitions/fldtype"
        },
        "options": {
            "$ref": "#/definitions/options"
        },
        "tips": {
            "$ref": "#/definitions/tips"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        }
    }
}
 module.exports = schema