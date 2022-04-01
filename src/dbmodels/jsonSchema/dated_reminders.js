let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for dated_reminders table",
    "$id": "dated_reminders",
    "title": "dated_reminders",
    "type": "object",
    "required": [
        "dr_id",
        "dr_from_ID",
        "dr_message_text",
        "dr_message_sent_date",
        "dr_message_due_date",
        "pid",
        "message_priority",
        "message_processed",
        "dr_processed_by"
    ],
    "definitions": {
        "dr_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "dr_from_ID": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "dr_message_text": {
            "type": "string",
            "maxLength": 160
        },
        "dr_message_sent_date": {
            "type": "string",
            "format": "date-time"
        },
        "dr_message_due_date": {
            "type": "string",
            "format": "date"
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "message_priority": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "message_processed": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "processed_date": {
            "type": "string",
            "default": null
        },
        "dr_processed_by": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "dr_id": {
            "$ref": "#/definitions/dr_id"
        },
        "dr_from_ID": {
            "$ref": "#/definitions/dr_from_ID"
        },
        "dr_message_text": {
            "$ref": "#/definitions/dr_message_text"
        },
        "dr_message_sent_date": {
            "$ref": "#/definitions/dr_message_sent_date"
        },
        "dr_message_due_date": {
            "$ref": "#/definitions/dr_message_due_date"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "message_priority": {
            "$ref": "#/definitions/message_priority"
        },
        "message_processed": {
            "$ref": "#/definitions/message_processed"
        },
        "processed_date": {
            "$ref": "#/definitions/processed_date"
        },
        "dr_processed_by": {
            "$ref": "#/definitions/dr_processed_by"
        }
    }
}
 module.exports = schema