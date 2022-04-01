let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for lists table",
    "$id": "lists",
    "title": "lists",
    "type": "object",
    "required": [
        "id",
        "subtype",
        "outcome",
        "reinjury_id",
        "injury_part",
        "injury_type",
        "injury_grade",
        "reaction",
        "erx_source",
        "erx_uploaded",
        "modifydate"
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
        "type": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "subtype": {
            "type": "string",
            "maxLength": 31
        },
        "title": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "begdate": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "enddate": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "returndate": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "occurrence": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "classification": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "referredby": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "extrainfo": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "diagnosis": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "activity": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "comments": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "groupname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "outcome": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "destination": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "reinjury_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "injury_part": {
            "type": "string",
            "maxLength": 31
        },
        "injury_type": {
            "type": "string",
            "maxLength": 31
        },
        "injury_grade": {
            "type": "string",
            "maxLength": 31
        },
        "reaction": {
            "type": "string",
            "maxLength": 255
        },
        "external_allergyid": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "erx_source": {
            "description": "0-OpenEMR 1-External",
            "type": "string",
            "enum": [
                "0",
                "1"
            ],
            "default": "0"
        },
        "erx_uploaded": {
            "description": "0-Pending NewCrop upload 1-Uploaded TO NewCrop",
            "type": "string",
            "enum": [
                "0",
                "1"
            ],
            "default": "0"
        },
        "modifydate": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "severity_al": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "external_id": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "list_option_id": {
            "description": "Reference to list_options table",
            "type": "string",
            "maxLength": 100,
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
        "type": {
            "$ref": "#/definitions/type"
        },
        "subtype": {
            "$ref": "#/definitions/subtype"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "begdate": {
            "$ref": "#/definitions/begdate"
        },
        "enddate": {
            "$ref": "#/definitions/enddate"
        },
        "returndate": {
            "$ref": "#/definitions/returndate"
        },
        "occurrence": {
            "$ref": "#/definitions/occurrence"
        },
        "classification": {
            "$ref": "#/definitions/classification"
        },
        "referredby": {
            "$ref": "#/definitions/referredby"
        },
        "extrainfo": {
            "$ref": "#/definitions/extrainfo"
        },
        "diagnosis": {
            "$ref": "#/definitions/diagnosis"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "comments": {
            "$ref": "#/definitions/comments"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "groupname": {
            "$ref": "#/definitions/groupname"
        },
        "outcome": {
            "$ref": "#/definitions/outcome"
        },
        "destination": {
            "$ref": "#/definitions/destination"
        },
        "reinjury_id": {
            "$ref": "#/definitions/reinjury_id"
        },
        "injury_part": {
            "$ref": "#/definitions/injury_part"
        },
        "injury_type": {
            "$ref": "#/definitions/injury_type"
        },
        "injury_grade": {
            "$ref": "#/definitions/injury_grade"
        },
        "reaction": {
            "$ref": "#/definitions/reaction"
        },
        "external_allergyid": {
            "$ref": "#/definitions/external_allergyid"
        },
        "erx_source": {
            "$ref": "#/definitions/erx_source"
        },
        "erx_uploaded": {
            "$ref": "#/definitions/erx_uploaded"
        },
        "modifydate": {
            "$ref": "#/definitions/modifydate"
        },
        "severity_al": {
            "$ref": "#/definitions/severity_al"
        },
        "external_id": {
            "$ref": "#/definitions/external_id"
        },
        "list_option_id": {
            "$ref": "#/definitions/list_option_id"
        }
    }
}
 module.exports = schema