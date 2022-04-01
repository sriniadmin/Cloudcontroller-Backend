let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for documents table",
    "$id": "documents",
    "title": "documents",
    "type": "object",
    "required": [
        "id",
        "revision",
        "list_id",
        "storagemethod",
        "encounter_id",
        "encounter_check",
        "audit_master_approval_status",
        "encrypted"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "type": {
            "type": "string",
            "enum": [
                "file_url",
                "blob",
                "web_url"
            ],
            "default": null
        },
        "size": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "url": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "thumb_url": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "mimetype": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "pages": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "owner": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "revision": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "foreign_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "docdate": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "hash": {
            "description": "40-character SHA-1 hash of document",
            "type": "string",
            "maxLength": 40,
            "default": null
        },
        "list_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "couch_docid": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "couch_revid": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "storagemethod": {
            "description": "0->Harddisk,1->CouchDB",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "path_depth": {
            "description": "Depth of path to use in url to find document. Not applicable for CouchDB.",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "imported": {
            "description": "Parsing status for CCR/CCD/CCDA importing",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "encounter_id": {
            "description": "Encounter id if tagged",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "encounter_check": {
            "description": "If encounter is created while tagging",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "audit_master_approval_status": {
            "description": "approval_status from audit_master table",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "audit_master_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "documentationOf": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "encrypted": {
            "description": "0->No,1->Yes",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "type": {
            "$ref": "#/definitions/type"
        },
        "size": {
            "$ref": "#/definitions/size"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "url": {
            "$ref": "#/definitions/url"
        },
        "thumb_url": {
            "$ref": "#/definitions/thumb_url"
        },
        "mimetype": {
            "$ref": "#/definitions/mimetype"
        },
        "pages": {
            "$ref": "#/definitions/pages"
        },
        "owner": {
            "$ref": "#/definitions/owner"
        },
        "revision": {
            "$ref": "#/definitions/revision"
        },
        "foreign_id": {
            "$ref": "#/definitions/foreign_id"
        },
        "docdate": {
            "$ref": "#/definitions/docdate"
        },
        "hash": {
            "$ref": "#/definitions/hash"
        },
        "list_id": {
            "$ref": "#/definitions/list_id"
        },
        "couch_docid": {
            "$ref": "#/definitions/couch_docid"
        },
        "couch_revid": {
            "$ref": "#/definitions/couch_revid"
        },
        "storagemethod": {
            "$ref": "#/definitions/storagemethod"
        },
        "path_depth": {
            "$ref": "#/definitions/path_depth"
        },
        "imported": {
            "$ref": "#/definitions/imported"
        },
        "encounter_id": {
            "$ref": "#/definitions/encounter_id"
        },
        "encounter_check": {
            "$ref": "#/definitions/encounter_check"
        },
        "audit_master_approval_status": {
            "$ref": "#/definitions/audit_master_approval_status"
        },
        "audit_master_id": {
            "$ref": "#/definitions/audit_master_id"
        },
        "documentationOf": {
            "$ref": "#/definitions/documentationOf"
        },
        "encrypted": {
            "$ref": "#/definitions/encrypted"
        }
    }
}
 module.exports = schema