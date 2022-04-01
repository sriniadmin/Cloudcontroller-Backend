let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for documents_legal_master table",
    "$id": "documents_legal_master",
    "title": "documents_legal_master",
    "description": "List of Master Docs to be signed",
    "type": "object",
    "required": [
        "dlm_document_id",
        "dlm_document_name",
        "dlm_filepath",
        "dlm_sign_height",
        "dlm_sign_width",
        "dlm_filename",
        "dlm_effective_date",
        "dlm_version",
        "content"
    ],
    "definitions": {
        "dlm_category": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "dlm_subcategory": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "dlm_document_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.2089258196146292e+24
        },
        "dlm_document_name": {
            "type": "string",
            "maxLength": 75
        },
        "dlm_filepath": {
            "type": "string",
            "maxLength": 75
        },
        "dlm_facility": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "dlm_provider": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "dlm_sign_height": {
            "type": "number"
        },
        "dlm_sign_width": {
            "type": "number"
        },
        "dlm_filename": {
            "type": "string",
            "maxLength": 45
        },
        "dlm_effective_date": {
            "type": "string",
            "format": "date-time"
        },
        "dlm_version": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24
        },
        "content": {
            "type": "string",
            "maxLength": 255
        },
        "dlm_savedsign": {
            "description": "0-Yes 1-No",
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "dlm_review": {
            "description": "0-Yes 1-No",
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "dlm_upload_type": {
            "description": "0-Provider Uploaded,1-Patient Uploaded",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        }
    },
    "properties": {
        "dlm_category": {
            "$ref": "#/definitions/dlm_category"
        },
        "dlm_subcategory": {
            "$ref": "#/definitions/dlm_subcategory"
        },
        "dlm_document_id": {
            "$ref": "#/definitions/dlm_document_id"
        },
        "dlm_document_name": {
            "$ref": "#/definitions/dlm_document_name"
        },
        "dlm_filepath": {
            "$ref": "#/definitions/dlm_filepath"
        },
        "dlm_facility": {
            "$ref": "#/definitions/dlm_facility"
        },
        "dlm_provider": {
            "$ref": "#/definitions/dlm_provider"
        },
        "dlm_sign_height": {
            "$ref": "#/definitions/dlm_sign_height"
        },
        "dlm_sign_width": {
            "$ref": "#/definitions/dlm_sign_width"
        },
        "dlm_filename": {
            "$ref": "#/definitions/dlm_filename"
        },
        "dlm_effective_date": {
            "$ref": "#/definitions/dlm_effective_date"
        },
        "dlm_version": {
            "$ref": "#/definitions/dlm_version"
        },
        "content": {
            "$ref": "#/definitions/content"
        },
        "dlm_savedsign": {
            "$ref": "#/definitions/dlm_savedsign"
        },
        "dlm_review": {
            "$ref": "#/definitions/dlm_review"
        },
        "dlm_upload_type": {
            "$ref": "#/definitions/dlm_upload_type"
        }
    }
}
 module.exports = schema