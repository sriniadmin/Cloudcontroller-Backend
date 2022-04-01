let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for background_services table",
    "$id": "background_services",
    "title": "background_services",
    "type": "object",
    "required": [
        "name",
        "title",
        "active",
        "running",
        "next_run",
        "execute_interval",
        "function",
        "sort_order"
    ],
    "definitions": {
        "name": {
            "$comment": "primary key",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "title": {
            "description": "name for reports",
            "type": "string",
            "maxLength": 127
        },
        "active": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "running": {
            "description": "True indicates managed service is busy. Skip this interval",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "next_run": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "execute_interval": {
            "description": "minimum number of minutes between function calls,0=manual mode",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "function": {
            "description": "name of background service function",
            "type": "string",
            "maxLength": 127
        },
        "require_once": {
            "description": "include file (if necessary)",
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "sort_order": {
            "description": "lower numbers will be run first",
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        }
    },
    "properties": {
        "name": {
            "$ref": "#/definitions/name"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "active": {
            "$ref": "#/definitions/active"
        },
        "running": {
            "$ref": "#/definitions/running"
        },
        "next_run": {
            "$ref": "#/definitions/next_run"
        },
        "execute_interval": {
            "$ref": "#/definitions/execute_interval"
        },
        "function": {
            "$ref": "#/definitions/function"
        },
        "require_once": {
            "$ref": "#/definitions/require_once"
        },
        "sort_order": {
            "$ref": "#/definitions/sort_order"
        }
    }
}
 module.exports = schema