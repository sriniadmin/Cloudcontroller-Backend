let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for immunization_observation table",
    "$id": "immunization_observation",
    "title": "immunization_observation",
    "type": "object",
    "required": [
        "imo_id",
        "imo_im_id",
        "imo_date_observation"
    ],
    "definitions": {
        "imo_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "imo_im_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "imo_pid": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "imo_criteria": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "imo_criteria_value": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "imo_user": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "imo_code": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "imo_codetext": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "imo_codetype": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "imo_vis_date_published": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "imo_vis_date_presented": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "imo_date_observation": {
            "type": "string",
            "default": "current_timestamp()"
        }
    },
    "properties": {
        "imo_id": {
            "$ref": "#/definitions/imo_id"
        },
        "imo_im_id": {
            "$ref": "#/definitions/imo_im_id"
        },
        "imo_pid": {
            "$ref": "#/definitions/imo_pid"
        },
        "imo_criteria": {
            "$ref": "#/definitions/imo_criteria"
        },
        "imo_criteria_value": {
            "$ref": "#/definitions/imo_criteria_value"
        },
        "imo_user": {
            "$ref": "#/definitions/imo_user"
        },
        "imo_code": {
            "$ref": "#/definitions/imo_code"
        },
        "imo_codetext": {
            "$ref": "#/definitions/imo_codetext"
        },
        "imo_codetype": {
            "$ref": "#/definitions/imo_codetype"
        },
        "imo_vis_date_published": {
            "$ref": "#/definitions/imo_vis_date_published"
        },
        "imo_vis_date_presented": {
            "$ref": "#/definitions/imo_vis_date_presented"
        },
        "imo_date_observation": {
            "$ref": "#/definitions/imo_date_observation"
        }
    }
}
 module.exports = schema