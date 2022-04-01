let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for therapy_groups_counselors table",
    "$id": "therapy_groups_counselors",
    "title": "therapy_groups_counselors",
    "type": "object",
    "required": [
        "group_id",
        "user_id"
    ],
    "definitions": {
        "group_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "user_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "group_id": {
            "$ref": "#/definitions/group_id"
        },
        "user_id": {
            "$ref": "#/definitions/user_id"
        }
    }
}
 module.exports = schema