let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for chart_tracker table",
    "$id": "chart_tracker",
    "title": "chart_tracker",
    "type": "object",
    "required": [
        "ct_pid",
        "ct_when",
        "ct_userid",
        "ct_location"
    ],
    "definitions": {
        "ct_pid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "ct_when": {
            "$comment": "primary key",
            "type": "string",
            "format": "date-time",
            "minimum": 1
        },
        "ct_userid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "ct_location": {
            "type": "string",
            "maxLength": 31
        }
    },
    "properties": {
        "ct_pid": {
            "$ref": "#/definitions/ct_pid"
        },
        "ct_when": {
            "$ref": "#/definitions/ct_when"
        },
        "ct_userid": {
            "$ref": "#/definitions/ct_userid"
        },
        "ct_location": {
            "$ref": "#/definitions/ct_location"
        }
    }
}
 module.exports = schema