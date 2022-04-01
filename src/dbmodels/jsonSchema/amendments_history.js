let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for amendments_history table",
    "$id": "amendments_history",
    "title": "amendments_history",
    "type": "object",
    "required": [
        "amendment_id",
        "created_by",
        "created_time"
    ],
    "definitions": {
        "amendment_id": {
            "description": "Amendment ID",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "amendment_note": {
            "description": "Amendment requested from",
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "amendment_status": {
            "description": "Amendment Request Status",
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "created_by": {
            "description": "references users.id for session owner",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "created_time": {
            "description": "created time",
            "type": "string",
            "default": "0000-00-00 00:00:00"
        }
    },
    "properties": {
        "amendment_id": {
            "$ref": "#/definitions/amendment_id"
        },
        "amendment_note": {
            "$ref": "#/definitions/amendment_note"
        },
        "amendment_status": {
            "$ref": "#/definitions/amendment_status"
        },
        "created_by": {
            "$ref": "#/definitions/created_by"
        },
        "created_time": {
            "$ref": "#/definitions/created_time"
        }
    }
}
 module.exports = schema