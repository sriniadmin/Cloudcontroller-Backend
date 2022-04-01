let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for notes table",
    "$id": "notes",
    "title": "notes",
    "type": "object",
    "required": [
        "note",
        "pid"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "note_uuid": {
            "type": "string",
            "maxLength": 250,
            "default": "0"
        },
        "note": {
            "type": ["string","null"],
            "maxLength": 4294967295
        },
        "user_uuid": {
            "type": "string",
            "maxLength": 255
        },
        "date": {
            "description": "create date time",
            "type": ["string","null"],
        },
        "revision": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "tenant_id": {
          "type": "string",
          "maxLength": 255
        },
        "pid": {
            "type": "string",
            "maxLength": 255
        },
        "note_type": {
            "description": "doctor notes, nurse notes, lab notes, prescription notes",
            "type": "string",
            "maxLength": 255
        },
        "note_type_uuid": {
            "description": "value of uuid from different tables like prescription_uuid, lab_uuid etc",
            "type": "string",
            "maxLength": 255,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "note_uuid": {
            "$ref": "#/definitions/note_uuid"
        },
        "note": {
            "$ref": "#/definitions/note"
        },
        "user_uuid": {
            "$ref": "#/definitions/user_uuid"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "revision": {
            "$ref": "#/definitions/revision"
        },
        "tenant_id": {
            "$ref": "#/definitions/tenant_id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "note_type": {
            "$ref": "#/definitions/note_type"
        },
        "note_type_uuid": {
            "$ref": "#/definitions/note_type_uuid"
        }
    }
}
 module.exports = schema
