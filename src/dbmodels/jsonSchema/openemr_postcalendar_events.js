let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for openemr_postcalendar_events table",
    "$id": "openemr_postcalendar_events",
    "title": "openemr_postcalendar_events",
    "type": "object",
    "required": [
        "pc_eid",
        "pc_catid",
        "pc_multiple",
        "pc_topic",
        "pc_eventDate",
        "pc_endDate",
        "pc_duration",
        "pc_recurrtype",
        "pc_recurrfreq",
        "pc_alldayevent",
        "pc_eventstatus",
        "pc_sharing",
        "pc_apptstatus",
        "pc_prefcatid",
        "pc_facility",
        "pc_sendalertsms",
        "pc_sendalertemail",
        "pc_billing_location",
        "pc_room"
    ],
    "definitions": {
        "pc_eid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 3.094850098213451e+26
        },
        "pc_catid": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "pc_multiple": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1.2089258196146292e+24
        },
        "pc_aid": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "pc_pid": {
            "type": "string",
            "maxLength": 11,
            "default": null
        },
        "pc_gid": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "pc_title": {
            "type": "string",
            "maxLength": 150,
            "default": null
        },
        "pc_time": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "pc_hometext": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "pc_comments": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "pc_counter": {
            "type": "integer",
            "minimum": 0,
            "maximum": 18446744073709552000
        },
        "pc_topic": {
            "type": "integer",
            "minimum": -8388608,
            "maximum": 8388607
        },
        "pc_informant": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "pc_eventDate": {
            "type": "string",
            "format": "date",
            "default": "0000-00-00"
        },
        "pc_endDate": {
            "type": "string",
            "format": "date",
            "default": "0000-00-00"
        },
        "pc_duration": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "pc_recurrtype": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
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
        "pc_startTime": {
            "type": "string",
            "format": "time",
            "default": null
        },
        "pc_endTime": {
            "type": "string",
            "format": "time",
            "default": null
        },
        "pc_alldayevent": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "pc_location": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "pc_conttel": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "pc_contname": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "pc_contemail": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "pc_website": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "pc_fee": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "pc_eventstatus": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "pc_sharing": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "pc_language": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "pc_apptstatus": {
            "type": "string",
            "maxLength": 15,
            "default": "-"
        },
        "pc_prefcatid": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "pc_facility": {
            "description": "facility id for this event",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "pc_sendalertsms": {
            "type": "string",
            "maxLength": 3,
            "default": "NO"
        },
        "pc_sendalertemail": {
            "type": "string",
            "maxLength": 3,
            "default": "NO"
        },
        "pc_billing_location": {
            "type": "integer",
            "minimum": -140737488355328,
            "maximum": 140737488355327
        },
        "pc_room": {
            "type": "string",
            "maxLength": 20
        }
    },
    "properties": {
        "pc_eid": {
            "$ref": "#/definitions/pc_eid"
        },
        "pc_catid": {
            "$ref": "#/definitions/pc_catid"
        },
        "pc_multiple": {
            "$ref": "#/definitions/pc_multiple"
        },
        "pc_aid": {
            "$ref": "#/definitions/pc_aid"
        },
        "pc_pid": {
            "$ref": "#/definitions/pc_pid"
        },
        "pc_gid": {
            "$ref": "#/definitions/pc_gid"
        },
        "pc_title": {
            "$ref": "#/definitions/pc_title"
        },
        "pc_time": {
            "$ref": "#/definitions/pc_time"
        },
        "pc_hometext": {
            "$ref": "#/definitions/pc_hometext"
        },
        "pc_comments": {
            "$ref": "#/definitions/pc_comments"
        },
        "pc_counter": {
            "$ref": "#/definitions/pc_counter"
        },
        "pc_topic": {
            "$ref": "#/definitions/pc_topic"
        },
        "pc_informant": {
            "$ref": "#/definitions/pc_informant"
        },
        "pc_eventDate": {
            "$ref": "#/definitions/pc_eventDate"
        },
        "pc_endDate": {
            "$ref": "#/definitions/pc_endDate"
        },
        "pc_duration": {
            "$ref": "#/definitions/pc_duration"
        },
        "pc_recurrtype": {
            "$ref": "#/definitions/pc_recurrtype"
        },
        "pc_recurrspec": {
            "$ref": "#/definitions/pc_recurrspec"
        },
        "pc_recurrfreq": {
            "$ref": "#/definitions/pc_recurrfreq"
        },
        "pc_startTime": {
            "$ref": "#/definitions/pc_startTime"
        },
        "pc_endTime": {
            "$ref": "#/definitions/pc_endTime"
        },
        "pc_alldayevent": {
            "$ref": "#/definitions/pc_alldayevent"
        },
        "pc_location": {
            "$ref": "#/definitions/pc_location"
        },
        "pc_conttel": {
            "$ref": "#/definitions/pc_conttel"
        },
        "pc_contname": {
            "$ref": "#/definitions/pc_contname"
        },
        "pc_contemail": {
            "$ref": "#/definitions/pc_contemail"
        },
        "pc_website": {
            "$ref": "#/definitions/pc_website"
        },
        "pc_fee": {
            "$ref": "#/definitions/pc_fee"
        },
        "pc_eventstatus": {
            "$ref": "#/definitions/pc_eventstatus"
        },
        "pc_sharing": {
            "$ref": "#/definitions/pc_sharing"
        },
        "pc_language": {
            "$ref": "#/definitions/pc_language"
        },
        "pc_apptstatus": {
            "$ref": "#/definitions/pc_apptstatus"
        },
        "pc_prefcatid": {
            "$ref": "#/definitions/pc_prefcatid"
        },
        "pc_facility": {
            "$ref": "#/definitions/pc_facility"
        },
        "pc_sendalertsms": {
            "$ref": "#/definitions/pc_sendalertsms"
        },
        "pc_sendalertemail": {
            "$ref": "#/definitions/pc_sendalertemail"
        },
        "pc_billing_location": {
            "$ref": "#/definitions/pc_billing_location"
        },
        "pc_room": {
            "$ref": "#/definitions/pc_room"
        }
    }
}
 module.exports = schema