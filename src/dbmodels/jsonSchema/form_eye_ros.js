let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_ros table",
    "$id": "form_eye_ros",
    "title": "form_eye_ros",
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
        "ROSGENERAL": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSHEENT": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSCV": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSPULM": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSGI": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSGU": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSDERM": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSNEURO": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSPSYCH": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSMUSCULO": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSIMMUNO": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSENDOCRINE": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ROSCOMMENTS": {
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
        "ROSGENERAL": {
            "$ref": "#/definitions/ROSGENERAL"
        },
        "ROSHEENT": {
            "$ref": "#/definitions/ROSHEENT"
        },
        "ROSCV": {
            "$ref": "#/definitions/ROSCV"
        },
        "ROSPULM": {
            "$ref": "#/definitions/ROSPULM"
        },
        "ROSGI": {
            "$ref": "#/definitions/ROSGI"
        },
        "ROSGU": {
            "$ref": "#/definitions/ROSGU"
        },
        "ROSDERM": {
            "$ref": "#/definitions/ROSDERM"
        },
        "ROSNEURO": {
            "$ref": "#/definitions/ROSNEURO"
        },
        "ROSPSYCH": {
            "$ref": "#/definitions/ROSPSYCH"
        },
        "ROSMUSCULO": {
            "$ref": "#/definitions/ROSMUSCULO"
        },
        "ROSIMMUNO": {
            "$ref": "#/definitions/ROSIMMUNO"
        },
        "ROSENDOCRINE": {
            "$ref": "#/definitions/ROSENDOCRINE"
        },
        "ROSCOMMENTS": {
            "$ref": "#/definitions/ROSCOMMENTS"
        }
    }
}
 module.exports = schema