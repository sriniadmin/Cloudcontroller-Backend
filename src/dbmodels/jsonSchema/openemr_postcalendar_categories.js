let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for openemr_postcalendar_categories table",
    "$id": "openemr_postcalendar_categories",
    "title": "openemr_postcalendar_categories",
    "type": "object",
    "required": [
        "pc_catid",
        "pc_recurrtype",
        "pc_recurrfreq",
        "pc_duration",
        "pc_end_date_flag",
        "pc_end_date_freq",
        "pc_end_all_day",
        "pc_dailylimit",
        "pc_cattype",
        "pc_active",
        "pc_seq",
        "aco_spec"
    ],
    "definitions": {
        "pc_catid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 3.094850098213451e+26
        },
        "pc_constant_id": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "pc_catname": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "pc_catcolor": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "pc_catdesc": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "pc_recurrtype": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "pc_enddate": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "pc_recurrspec": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "pc_recurrfreq": {
            "type": "integer",
            "minimum": -8388608,
            "maximum": 8388607
        },
        "pc_duration": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "pc_end_date_flag": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "pc_end_date_type": {
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767,
            "default": null
        },
        "pc_end_date_freq": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "pc_end_all_day": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "pc_dailylimit": {
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767
        },
        "pc_cattype": {
            "description": "Used in grouping categories",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "pc_active": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "pc_seq": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "aco_spec": {
            "type": "string",
            "maxLength": 63,
            "default": "encounters|notes"
        }
    },
    "properties": {
        "pc_catid": {
            "$ref": "#/definitions/pc_catid"
        },
        "pc_constant_id": {
            "$ref": "#/definitions/pc_constant_id"
        },
        "pc_catname": {
            "$ref": "#/definitions/pc_catname"
        },
        "pc_catcolor": {
            "$ref": "#/definitions/pc_catcolor"
        },
        "pc_catdesc": {
            "$ref": "#/definitions/pc_catdesc"
        },
        "pc_recurrtype": {
            "$ref": "#/definitions/pc_recurrtype"
        },
        "pc_enddate": {
            "$ref": "#/definitions/pc_enddate"
        },
        "pc_recurrspec": {
            "$ref": "#/definitions/pc_recurrspec"
        },
        "pc_recurrfreq": {
            "$ref": "#/definitions/pc_recurrfreq"
        },
        "pc_duration": {
            "$ref": "#/definitions/pc_duration"
        },
        "pc_end_date_flag": {
            "$ref": "#/definitions/pc_end_date_flag"
        },
        "pc_end_date_type": {
            "$ref": "#/definitions/pc_end_date_type"
        },
        "pc_end_date_freq": {
            "$ref": "#/definitions/pc_end_date_freq"
        },
        "pc_end_all_day": {
            "$ref": "#/definitions/pc_end_all_day"
        },
        "pc_dailylimit": {
            "$ref": "#/definitions/pc_dailylimit"
        },
        "pc_cattype": {
            "$ref": "#/definitions/pc_cattype"
        },
        "pc_active": {
            "$ref": "#/definitions/pc_active"
        },
        "pc_seq": {
            "$ref": "#/definitions/pc_seq"
        },
        "aco_spec": {
            "$ref": "#/definitions/aco_spec"
        }
    }
}
 module.exports = schema