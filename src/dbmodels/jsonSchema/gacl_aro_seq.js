let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for gacl_aro_seq table",
    "$id": "gacl_aro_seq",
    "title": "gacl_aro_seq",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        }
    }
}
 module.exports = schema