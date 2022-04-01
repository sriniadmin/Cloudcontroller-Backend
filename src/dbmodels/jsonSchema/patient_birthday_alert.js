let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for patient_birthday_alert table",
    "$id": "patient_birthday_alert",
    "title": "patient_birthday_alert",
    "type": "object",
    "required": [
        "pid",
        "user_id",
        "turned_off_on"
    ],
    "definitions": {
        "pid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "user_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "turned_off_on": {
            "type": "string",
            "format": "date"
        }
    },
    "properties": {
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "user_id": {
            "$ref": "#/definitions/user_id"
        },
        "turned_off_on": {
            "$ref": "#/definitions/turned_off_on"
        }
    }
}
 module.exports = schema