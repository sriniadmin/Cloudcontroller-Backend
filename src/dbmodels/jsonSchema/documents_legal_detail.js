let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for documents_legal_detail table",
    "$id": "documents_legal_detail",
    "title": "documents_legal_detail",
    "type": "object",
    "required": [
        "dld_id",
        "dld_master_docid",
        "dld_signed",
        "dld_signed_time",
        "dld_filename",
        "dld_signing_person",
        "dld_sign_level",
        "dld_content",
        "dld_file_for_pdf_generation",
        "dld_moved"
    ],
    "definitions": {
        "dld_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.2089258196146292e+24
        },
        "dld_pid": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "dld_facility": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "dld_provider": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "dld_encounter": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24,
            "default": null
        },
        "dld_master_docid": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24
        },
        "dld_signed": {
            "description": "0-Not Signed or Cannot Sign(Layout),1-Signed,2-Ready to sign,3-Denied(Pat Regi),4-Patient Upload,10-Save(Layout)",
            "type": "integer",
            "minimum": 0,
            "maximum": 1099511627776
        },
        "dld_signed_time": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "dld_filepath": {
            "type": "string",
            "maxLength": 75,
            "default": null
        },
        "dld_filename": {
            "type": "string",
            "maxLength": 45
        },
        "dld_signing_person": {
            "type": "string",
            "maxLength": 50
        },
        "dld_sign_level": {
            "description": "Sign flow level",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "dld_content": {
            "description": "Layout sign position",
            "type": "string",
            "maxLength": 50
        },
        "dld_file_for_pdf_generation": {
            "description": "The filled details in the fdf file is stored here.Patient Registration Screen",
            "type": "string"
        },
        "dld_denial_reason": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "dld_moved": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "dld_patient_comments": {
            "description": "Patient comments stored here",
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "dld_id": {
            "$ref": "#/definitions/dld_id"
        },
        "dld_pid": {
            "$ref": "#/definitions/dld_pid"
        },
        "dld_facility": {
            "$ref": "#/definitions/dld_facility"
        },
        "dld_provider": {
            "$ref": "#/definitions/dld_provider"
        },
        "dld_encounter": {
            "$ref": "#/definitions/dld_encounter"
        },
        "dld_master_docid": {
            "$ref": "#/definitions/dld_master_docid"
        },
        "dld_signed": {
            "$ref": "#/definitions/dld_signed"
        },
        "dld_signed_time": {
            "$ref": "#/definitions/dld_signed_time"
        },
        "dld_filepath": {
            "$ref": "#/definitions/dld_filepath"
        },
        "dld_filename": {
            "$ref": "#/definitions/dld_filename"
        },
        "dld_signing_person": {
            "$ref": "#/definitions/dld_signing_person"
        },
        "dld_sign_level": {
            "$ref": "#/definitions/dld_sign_level"
        },
        "dld_content": {
            "$ref": "#/definitions/dld_content"
        },
        "dld_file_for_pdf_generation": {
            "$ref": "#/definitions/dld_file_for_pdf_generation"
        },
        "dld_denial_reason": {
            "$ref": "#/definitions/dld_denial_reason"
        },
        "dld_moved": {
            "$ref": "#/definitions/dld_moved"
        },
        "dld_patient_comments": {
            "$ref": "#/definitions/dld_patient_comments"
        }
    }
}
 module.exports = schema