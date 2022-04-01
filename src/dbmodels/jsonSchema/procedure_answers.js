let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for procedure_answers table",
    "$id": "procedure_answers",
    "title": "procedure_answers",
    "type": "object",
    "required": [
        "procedure_order_id",
        "procedure_order_seq",
        "question_code",
        "answer_seq",
        "answer"
    ],
    "definitions": {
        "procedure_order_id": {
            "$comment": "primary key",
            "description": "references procedure_order.procedure_order_id",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "procedure_order_seq": {
            "$comment": "primary key",
            "description": "references procedure_order_code.procedure_order_seq",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "question_code": {
            "$comment": "primary key",
            "description": "references procedure_questions.question_code",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "answer_seq": {
            "$comment": "primary key",
            "description": "supports multiple-choice questions. answer_seq, incremented in code",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "answer": {
            "description": "answer data",
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "procedure_order_id": {
            "$ref": "#/definitions/procedure_order_id"
        },
        "procedure_order_seq": {
            "$ref": "#/definitions/procedure_order_seq"
        },
        "question_code": {
            "$ref": "#/definitions/question_code"
        },
        "answer_seq": {
            "$ref": "#/definitions/answer_seq"
        },
        "answer": {
            "$ref": "#/definitions/answer"
        }
    }
}
 module.exports = schema