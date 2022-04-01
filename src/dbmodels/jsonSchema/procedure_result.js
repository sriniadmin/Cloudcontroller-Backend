let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for procedure_result table",
    "$id": "procedure_result",
    "title": "procedure_result",
    "type": "object",
    "required": [
        "procedure_result_id",
        "procedure_report_id",
        "result_data_type",
        "result_code",
        "result_text",
        "facility",
        "units",
        "result",
        "range",
        "abnormal",
        "document_id",
        "result_status"
    ],
    "definitions": {
        "procedure_result_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "procedure_report_id": {
            "description": "references procedure_report.procedure_report_id",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "result_data_type": {
            "description": "N=Numeric, S=String, F=Formatted, E=External, L=Long text as first line of comments",
            "type": "string",
            "maxLength": 1,
            "default": "S"
        },
        "result_code": {
            "description": "LOINC code, might match a procedure_type.procedure_code",
            "type": "string",
            "maxLength": 31
        },
        "result_text": {
            "description": "Description of result_code",
            "type": "string",
            "maxLength": 255
        },
        "date": {
            "description": "lab-provided date specific to this result",
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "facility": {
            "description": "lab-provided testing facility ID",
            "type": "string",
            "maxLength": 255
        },
        "units": {
            "type": "string",
            "maxLength": 31
        },
        "result": {
            "type": "string",
            "maxLength": 255
        },
        "range": {
            "type": "string",
            "maxLength": 255
        },
        "abnormal": {
            "description": "no,yes,high,low",
            "type": "string",
            "maxLength": 31
        },
        "comments": {
            "description": "comments from the lab",
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "document_id": {
            "description": "references documents.id if this result is a document",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "result_status": {
            "description": "preliminary, cannot be done, final, corrected, incomplete...etc.",
            "type": "string",
            "maxLength": 31
        }
    },
    "properties": {
        "procedure_result_id": {
            "$ref": "#/definitions/procedure_result_id"
        },
        "procedure_report_id": {
            "$ref": "#/definitions/procedure_report_id"
        },
        "result_data_type": {
            "$ref": "#/definitions/result_data_type"
        },
        "result_code": {
            "$ref": "#/definitions/result_code"
        },
        "result_text": {
            "$ref": "#/definitions/result_text"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "facility": {
            "$ref": "#/definitions/facility"
        },
        "units": {
            "$ref": "#/definitions/units"
        },
        "result": {
            "$ref": "#/definitions/result"
        },
        "range": {
            "$ref": "#/definitions/range"
        },
        "abnormal": {
            "$ref": "#/definitions/abnormal"
        },
        "comments": {
            "$ref": "#/definitions/comments"
        },
        "document_id": {
            "$ref": "#/definitions/document_id"
        },
        "result_status": {
            "$ref": "#/definitions/result_status"
        }
    }
}
 module.exports = schema