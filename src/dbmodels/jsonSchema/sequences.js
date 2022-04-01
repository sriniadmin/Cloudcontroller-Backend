let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for sequences table",
    "$id": "sequences",
    "title": "sequences",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "type": "integer",
            "minimum": 0,
            "maximum": 3.094850098213451e+26
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        }
    }
}
 module.exports = schema