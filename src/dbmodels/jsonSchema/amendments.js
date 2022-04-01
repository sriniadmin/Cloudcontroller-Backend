let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for amendments table",
    "$id": "amendments",
    "title": "amendments",
    "type": "object",
    "required": [
        "amendment_id",
        "amendment_date",
        "amendment_by",
        "pid",
        "created_by",
        "created_time"
    ],
    "definitions": {
        "amendment_id": {
            "$comment": "primary key",
            "description": "Amendment ID",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "amendment_date": {
            "description": "Amendement request date",
            "type": "string",
            "format": "date"
        },
        "amendment_by": {
            "description": "Amendment requested from",
            "type": "string",
            "maxLength": 50
        },
        "amendment_status": {
            "description": "Amendment status accepted/rejected/null",
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "pid": {
            "description": "Patient ID from patient_data",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "amendment_desc": {
            "description": "Amendment Details",
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "created_by": {
            "description": "references users.id for session owner",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "modified_by": {
            "description": "references users.id for session owner",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "created_time": {
            "description": "created time",
            "type": "string",
            "default": "0000-00-00 00:00:00"
        },
        "modified_time": {
            "description": "modified time",
            "type": "string",
            "default": null
        }
    },
    "properties": {
        "amendment_id": {
            "$ref": "#/definitions/amendment_id"
        },
        "amendment_date": {
            "$ref": "#/definitions/amendment_date"
        },
        "amendment_by": {
            "$ref": "#/definitions/amendment_by"
        },
        "amendment_status": {
            "$ref": "#/definitions/amendment_status"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "amendment_desc": {
            "$ref": "#/definitions/amendment_desc"
        },
        "created_by": {
            "$ref": "#/definitions/created_by"
        },
        "modified_by": {
            "$ref": "#/definitions/modified_by"
        },
        "created_time": {
            "$ref": "#/definitions/created_time"
        },
        "modified_time": {
            "$ref": "#/definitions/modified_time"
        }
    }
}
 module.exports = schema