let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_hpi table",
    "$id": "form_eye_hpi",
    "title": "form_eye_hpi",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "description": "Links to forms.form_id",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "CC1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "HPI1": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "QUALITY1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "TIMING1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "DURATION1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "CONTEXT1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "SEVERITY1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "MODIFY1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ASSOCIATED1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "LOCATION1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "CHRONIC1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "CHRONIC2": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "CHRONIC3": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "CC2": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "HPI2": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "QUALITY2": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "TIMING2": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "DURATION2": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "CONTEXT2": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "SEVERITY2": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "MODIFY2": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ASSOCIATED2": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LOCATION2": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "CC3": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "HPI3": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "QUALITY3": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "TIMING3": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "DURATION3": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "CONTEXT3": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "SEVERITY3": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "MODIFY3": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ASSOCIATED3": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "LOCATION3": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "CC1": {
            "$ref": "#/definitions/CC1"
        },
        "HPI1": {
            "$ref": "#/definitions/HPI1"
        },
        "QUALITY1": {
            "$ref": "#/definitions/QUALITY1"
        },
        "TIMING1": {
            "$ref": "#/definitions/TIMING1"
        },
        "DURATION1": {
            "$ref": "#/definitions/DURATION1"
        },
        "CONTEXT1": {
            "$ref": "#/definitions/CONTEXT1"
        },
        "SEVERITY1": {
            "$ref": "#/definitions/SEVERITY1"
        },
        "MODIFY1": {
            "$ref": "#/definitions/MODIFY1"
        },
        "ASSOCIATED1": {
            "$ref": "#/definitions/ASSOCIATED1"
        },
        "LOCATION1": {
            "$ref": "#/definitions/LOCATION1"
        },
        "CHRONIC1": {
            "$ref": "#/definitions/CHRONIC1"
        },
        "CHRONIC2": {
            "$ref": "#/definitions/CHRONIC2"
        },
        "CHRONIC3": {
            "$ref": "#/definitions/CHRONIC3"
        },
        "CC2": {
            "$ref": "#/definitions/CC2"
        },
        "HPI2": {
            "$ref": "#/definitions/HPI2"
        },
        "QUALITY2": {
            "$ref": "#/definitions/QUALITY2"
        },
        "TIMING2": {
            "$ref": "#/definitions/TIMING2"
        },
        "DURATION2": {
            "$ref": "#/definitions/DURATION2"
        },
        "CONTEXT2": {
            "$ref": "#/definitions/CONTEXT2"
        },
        "SEVERITY2": {
            "$ref": "#/definitions/SEVERITY2"
        },
        "MODIFY2": {
            "$ref": "#/definitions/MODIFY2"
        },
        "ASSOCIATED2": {
            "$ref": "#/definitions/ASSOCIATED2"
        },
        "LOCATION2": {
            "$ref": "#/definitions/LOCATION2"
        },
        "CC3": {
            "$ref": "#/definitions/CC3"
        },
        "HPI3": {
            "$ref": "#/definitions/HPI3"
        },
        "QUALITY3": {
            "$ref": "#/definitions/QUALITY3"
        },
        "TIMING3": {
            "$ref": "#/definitions/TIMING3"
        },
        "DURATION3": {
            "$ref": "#/definitions/DURATION3"
        },
        "CONTEXT3": {
            "$ref": "#/definitions/CONTEXT3"
        },
        "SEVERITY3": {
            "$ref": "#/definitions/SEVERITY3"
        },
        "MODIFY3": {
            "$ref": "#/definitions/MODIFY3"
        },
        "ASSOCIATED3": {
            "$ref": "#/definitions/ASSOCIATED3"
        },
        "LOCATION3": {
            "$ref": "#/definitions/LOCATION3"
        }
    }
}
 module.exports = schema