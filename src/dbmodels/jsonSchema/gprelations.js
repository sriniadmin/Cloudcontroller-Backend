let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for gprelations table",
    "$id": "gprelations",
    "title": "gprelations",
    "description": "general purpose relations",
    "type": "object",
    "required": [
        "type1",
        "id1",
        "type2",
        "id2"
    ],
    "definitions": {
        "type1": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 32767
        },
        "id1": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "type2": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 32767
        },
        "id2": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        }
    },
    "properties": {
        "type1": {
            "$ref": "#/definitions/type1"
        },
        "id1": {
            "$ref": "#/definitions/id1"
        },
        "type2": {
            "$ref": "#/definitions/type2"
        },
        "id2": {
            "$ref": "#/definitions/id2"
        }
    }
}
 module.exports = schema