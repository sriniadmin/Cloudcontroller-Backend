let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for issue_encounter table",
    "$id": "issue_encounter",
    "title": "issue_encounter",
    "type": "object",
    "required": [
        "pid",
        "list_id",
        "encounter",
        "resolved"
    ],
    "definitions": {
        "pid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "list_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "encounter": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "resolved": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        }
    },
    "properties": {
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "list_id": {
            "$ref": "#/definitions/list_id"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "resolved": {
            "$ref": "#/definitions/resolved"
        }
    }
}
 module.exports = schema