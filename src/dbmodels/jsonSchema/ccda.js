let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for ccda table",
    "$id": "ccda",
    "title": "ccda",
    "type": "object",
    "required": [
        "id",
        "updated_date",
        "view",
        "transfer",
        "emr_transfer"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "encounter": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "ccda_data": {
            "type": "string",
            "maxLength": 16777215,
            "default": null
        },
        "time": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "status": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327,
            "default": null
        },
        "updated_date": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "user_id": {
            "type": "string",
            "maxLength": 50,
            "default": null
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
        "view": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "transfer": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "emr_transfer": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "ccda_data": {
            "$ref": "#/definitions/ccda_data"
        },
        "time": {
            "$ref": "#/definitions/time"
        },
        "status": {
            "$ref": "#/definitions/status"
        },
        "updated_date": {
            "$ref": "#/definitions/updated_date"
        },
        "user_id": {
            "$ref": "#/definitions/user_id"
        },
        "couch_docid": {
            "$ref": "#/definitions/couch_docid"
        },
        "couch_revid": {
            "$ref": "#/definitions/couch_revid"
        },
        "view": {
            "$ref": "#/definitions/view"
        },
        "transfer": {
            "$ref": "#/definitions/transfer"
        },
        "emr_transfer": {
            "$ref": "#/definitions/emr_transfer"
        }
    }
}
 module.exports = schema