let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for ews_table table",
    "$id": "ews_table",
    "title": "ews_table",
    "type": "object",
    "required": [
        "id",
        "score",
        "score_split",
        "tenant_id",
        "pid"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "string",
            "maxLength": 255
        },
        "timestamp": {
            "type": "string",
            "default": "0000-00-00 00:00:00"
        },
        "calculated_time": {
            "type": "string",
            "maxLength": 255
        },
        "score": {
            "type": "string",
            "maxLength": 20
        },
        "score_split": {
            "type": "string",
            "maxLength": 4294967295
        },
        "tenant_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "archive": {
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
        "timestamp": {
            "$ref": "#/definitions/timestamp"
        },
        "calculated_time": {
            "$ref": "#/definitions/calculated_time"
        },
        "score": {
            "$ref": "#/definitions/score"
        },
        "score_split": {
            "$ref": "#/definitions/score_split"
        },
        "tenant_id": {
            "$ref": "#/definitions/tenant_id"
        },
        "archive": {
            "$ref": "#/definitions/archive"
        }
    }
}

module.exports=schema
