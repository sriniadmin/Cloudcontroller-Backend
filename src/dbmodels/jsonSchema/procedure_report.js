let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for procedure_report table",
    "$id": "procedure_report",
    "title": "procedure_report",
    "type": "object",
    "required": [
        "procedure_report_id",
        "procedure_order_seq",
        "source",
        "specimen_num",
        "report_status",
        "review_status"
    ],
    "definitions": {
        "procedure_report_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "procedure_order_id": {
            "description": "references procedure_order.procedure_order_id",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "procedure_order_seq": {
            "description": "references procedure_order_code.procedure_order_seq",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "date_collected": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "date_collected_tz": {
            "description": "+-hhmm offset from UTC",
            "type": "string",
            "maxLength": 5
        },
        "date_report": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "date_report_tz": {
            "description": "+-hhmm offset from UTC",
            "type": "string",
            "maxLength": 5
        },
        "source": {
            "description": "references users.id, who entered this data",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "specimen_num": {
            "type": "string",
            "maxLength": 63
        },
        "report_status": {
            "description": "received,complete,error",
            "type": "string",
            "maxLength": 31
        },
        "review_status": {
            "description": "pending review status: received,reviewed",
            "type": "string",
            "maxLength": 31,
            "default": "received"
        },
        "report_notes": {
            "description": "notes from the lab",
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "procedure_report_id": {
            "$ref": "#/definitions/procedure_report_id"
        },
        "procedure_order_id": {
            "$ref": "#/definitions/procedure_order_id"
        },
        "procedure_order_seq": {
            "$ref": "#/definitions/procedure_order_seq"
        },
        "date_collected": {
            "$ref": "#/definitions/date_collected"
        },
        "date_collected_tz": {
            "$ref": "#/definitions/date_collected_tz"
        },
        "date_report": {
            "$ref": "#/definitions/date_report"
        },
        "date_report_tz": {
            "$ref": "#/definitions/date_report_tz"
        },
        "source": {
            "$ref": "#/definitions/source"
        },
        "specimen_num": {
            "$ref": "#/definitions/specimen_num"
        },
        "report_status": {
            "$ref": "#/definitions/report_status"
        },
        "review_status": {
            "$ref": "#/definitions/review_status"
        },
        "report_notes": {
            "$ref": "#/definitions/report_notes"
        }
    }
}
 module.exports = schema