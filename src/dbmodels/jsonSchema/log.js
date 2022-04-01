let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for log table",
    "$id": "log",
    "title": "log",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "event": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "category": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "groupname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "comments": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "user_notes": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "patient_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "success": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "checksum": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "crt_user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "log_from": {
            "type": "string",
            "maxLength": 20,
            "default": "open-emr"
        },
        "menu_item_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "ccda_doc_id": {
            "description": "CCDA document id from ccda",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "event": {
            "$ref": "#/definitions/event"
        },
        "category": {
            "$ref": "#/definitions/category"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "groupname": {
            "$ref": "#/definitions/groupname"
        },
        "comments": {
            "$ref": "#/definitions/comments"
        },
        "user_notes": {
            "$ref": "#/definitions/user_notes"
        },
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        },
        "success": {
            "$ref": "#/definitions/success"
        },
        "checksum": {
            "$ref": "#/definitions/checksum"
        },
        "crt_user": {
            "$ref": "#/definitions/crt_user"
        },
        "log_from": {
            "$ref": "#/definitions/log_from"
        },
        "menu_item_id": {
            "$ref": "#/definitions/menu_item_id"
        },
        "ccda_doc_id": {
            "$ref": "#/definitions/ccda_doc_id"
        }
    }
}
 module.exports = schema