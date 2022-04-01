let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_groups_encounter table",
    "$id": "form_groups_encounter",
    "title": "form_groups_encounter",
    "type": "object",
    "required": [
        "id",
        "facility_id",
        "pc_catid",
        "last_level_billed",
        "last_level_closed",
        "stmt_count",
        "invoice_refno",
        "referral_source",
        "billing_facility"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "reason": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "facility": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "facility_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "group_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "encounter": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "onset_date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "sensitivity": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "billing_note": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "pc_catid": {
            "description": "event category from openemr_postcalendar_categories",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "last_level_billed": {
            "description": "0=none, 1=ins1, 2=ins2, etc",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "last_level_closed": {
            "description": "0=none, 1=ins1, 2=ins2, etc",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "last_stmt_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "stmt_count": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "provider_id": {
            "description": "default and main provider for this visit",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "supervisor_id": {
            "description": "supervising provider, if any, for this visit",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "invoice_refno": {
            "type": "string",
            "maxLength": 31
        },
        "referral_source": {
            "type": "string",
            "maxLength": 31
        },
        "billing_facility": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "external_id": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "pos_code": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "counselors": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "appt_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "reason": {
            "$ref": "#/definitions/reason"
        },
        "facility": {
            "$ref": "#/definitions/facility"
        },
        "facility_id": {
            "$ref": "#/definitions/facility_id"
        },
        "group_id": {
            "$ref": "#/definitions/group_id"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "onset_date": {
            "$ref": "#/definitions/onset_date"
        },
        "sensitivity": {
            "$ref": "#/definitions/sensitivity"
        },
        "billing_note": {
            "$ref": "#/definitions/billing_note"
        },
        "pc_catid": {
            "$ref": "#/definitions/pc_catid"
        },
        "last_level_billed": {
            "$ref": "#/definitions/last_level_billed"
        },
        "last_level_closed": {
            "$ref": "#/definitions/last_level_closed"
        },
        "last_stmt_date": {
            "$ref": "#/definitions/last_stmt_date"
        },
        "stmt_count": {
            "$ref": "#/definitions/stmt_count"
        },
        "provider_id": {
            "$ref": "#/definitions/provider_id"
        },
        "supervisor_id": {
            "$ref": "#/definitions/supervisor_id"
        },
        "invoice_refno": {
            "$ref": "#/definitions/invoice_refno"
        },
        "referral_source": {
            "$ref": "#/definitions/referral_source"
        },
        "billing_facility": {
            "$ref": "#/definitions/billing_facility"
        },
        "external_id": {
            "$ref": "#/definitions/external_id"
        },
        "pos_code": {
            "$ref": "#/definitions/pos_code"
        },
        "counselors": {
            "$ref": "#/definitions/counselors"
        },
        "appt_id": {
            "$ref": "#/definitions/appt_id"
        }
    }
}
 module.exports = schema