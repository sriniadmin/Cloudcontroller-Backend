let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for gacl_phpgacl table",
    "$id": "gacl_phpgacl",
    "title": "gacl_phpgacl",
    "type": "object",
    "required": [
        "name",
        "value"
    ],
    "definitions": {
        "name": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 230,
            "minimum": 1
        },
        "value": {
            "type": "string",
            "maxLength": 150
        }
    },
    "properties": {
        "name": {
            "$ref": "#/definitions/name"
        },
        "value": {
            "$ref": "#/definitions/value"
        }
    }
}
 module.exports = schema