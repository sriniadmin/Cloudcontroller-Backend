let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for onsite_documents table",
    "$id": "onsite_documents",
    "title": "onsite_documents",
    "type": "object",
    "required": [
        "id",
        "create_date",
        "doc_type",
        "patient_signed_status",
        "patient_signed_time",
        "accept_signed_status",
        "authorizing_signator",
        "review_date",
        "denial_reason",
        "file_name",
        "file_path"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.2089258196146292e+24
        },
        "pid": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.461501637330903e+48,
            "default": null
        },
        "facility": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "provider": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "encounter": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "create_date": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "doc_type": {
            "type": "string",
            "maxLength": 255
        },
        "patient_signed_status": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1099511627776
        },
        "patient_signed_time": {
            "type": "string",
            "format": "date-time",
            "default": "0000-00-00 00:00:00"
        },
        "authorize_signed_time": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "accept_signed_status": {
            "type": "integer",
            "minimum": -549755813888,
            "maximum": 549755813887
        },
        "authorizing_signator": {
            "type": "string",
            "maxLength": 50
        },
        "review_date": {
            "type": "string",
            "format": "date-time",
            "default": "0000-00-00 00:00:00"
        },
        "denial_reason": {
            "type": "string",
            "maxLength": 255
        },
        "authorized_signature": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "patient_signature": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "full_document": {
            "type": "string",
            "default": null
        },
        "file_name": {
            "type": "string",
            "maxLength": 255
        },
        "file_path": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "facility": {
            "$ref": "#/definitions/facility"
        },
        "provider": {
            "$ref": "#/definitions/provider"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "create_date": {
            "$ref": "#/definitions/create_date"
        },
        "doc_type": {
            "$ref": "#/definitions/doc_type"
        },
        "patient_signed_status": {
            "$ref": "#/definitions/patient_signed_status"
        },
        "patient_signed_time": {
            "$ref": "#/definitions/patient_signed_time"
        },
        "authorize_signed_time": {
            "$ref": "#/definitions/authorize_signed_time"
        },
        "accept_signed_status": {
            "$ref": "#/definitions/accept_signed_status"
        },
        "authorizing_signator": {
            "$ref": "#/definitions/authorizing_signator"
        },
        "review_date": {
            "$ref": "#/definitions/review_date"
        },
        "denial_reason": {
            "$ref": "#/definitions/denial_reason"
        },
        "authorized_signature": {
            "$ref": "#/definitions/authorized_signature"
        },
        "patient_signature": {
            "$ref": "#/definitions/patient_signature"
        },
        "full_document": {
            "$ref": "#/definitions/full_document"
        },
        "file_name": {
            "$ref": "#/definitions/file_name"
        },
        "file_path": {
            "$ref": "#/definitions/file_path"
        }
    }
}
 module.exports = schema