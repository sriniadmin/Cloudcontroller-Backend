let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for dated_reminders_link table",
    "$id": "dated_reminders_link",
    "title": "dated_reminders_link",
    "type": "object",
    "required": [
        "dr_link_id",
        "dr_id",
        "to_id"
    ],
    "definitions": {
        "dr_link_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "dr_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "to_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "dr_link_id": {
            "$ref": "#/definitions/dr_link_id"
        },
        "dr_id": {
            "$ref": "#/definitions/dr_id"
        },
        "to_id": {
            "$ref": "#/definitions/to_id"
        }
    }
}
 module.exports = schema