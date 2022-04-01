let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for vital_threshold table",
    "$id": "vital_threshold",
    "title": "vital_threshold",
    "type": "object",
    "required": [
        "pid",
        "min_temp",
        "max_temp",
        "min_hr",
        "max_hr",
        "min_rr",
        "max_rr",
        "min_spo2",
        "max_spo2",
        "tenant_uuid"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "string",
            "maxLength": 255
        },
        "min_temp": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "max_temp": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "min_hr": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "max_hr": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "min_rr": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "max_rr": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "min_spo2": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "max_spo2": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "tenant_uuid": {
            "type": "string",
            "maxLength": 255
        },
        "weight_min": {
            "type": "string",
            "maxLength": 20
        },
        "weight_max": {
            "type": "string",
            "maxLength": 20
        },
        "bps_min": {
            "type": "string",
            "maxLength": 20
        },
        "bps_max": {
            "type": "string",
            "maxLength": 255
        },
        "bpd_min": {
            "type": "string",
            "maxLength": 20
        },
        "bpd_max": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "min_temp": {
            "$ref": "#/definitions/min_temp"
        },
        "max_temp": {
            "$ref": "#/definitions/max_temp"
        },
        "min_hr": {
            "$ref": "#/definitions/min_hr"
        },
        "max_hr": {
            "$ref": "#/definitions/max_hr"
        },
        "min_rr": {
            "$ref": "#/definitions/min_rr"
        },
        "max_rr": {
            "$ref": "#/definitions/max_rr"
        },
        "min_spo2": {
            "$ref": "#/definitions/min_spo2"
        },
        "max_spo2": {
            "$ref": "#/definitions/max_spo2"
        },
        "tenant_uuid": {
            "$ref": "#/definitions/tenant_uuid"
        },
        "weight_min": {
            "$ref": "#/definitions/weight_min"
        },
        "weight_max": {
            "$ref": "#/definitions/weight_max"
        },
        "bps_min": {
            "$ref": "#/definitions/bps_min"
        },
        "bps_max": {
            "$ref": "#/definitions/bps_max"
        },
        "bpd_min": {
            "$ref": "#/definitions/bpd_min"
        },
        "bpd_max": {
            "$ref": "#/definitions/bpd_max"
        }
    }
}
 module.exports = schema