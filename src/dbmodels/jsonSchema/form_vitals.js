let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_vitals table",
    "$id": "form_vitals",
    "title": "form_vitals",
    "type": "object",
    "required": [


    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "date": {
            "type": ["string","null"],
            "format": "date-time"
        },
        "pid": {
            "type":["string","null"],
            "maxLength": 255
        },
        "user": {
            "type": ["string","null"],
            "maxLength": 255
        },
        "groupname": {
            "type": ["string","null"],
            "maxLength": 255
        },
        "authorized": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "activity": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "bps": {
            "type": ["string","null"],
            "maxLength": 40
        },
        "bpd": {
            "type": ["string","null"],
            "maxLength": 40
        },
        "weight": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "height": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "temperature": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "temp_method": {
            "type": ["string","null"],
            "maxLength": 255
        },
        "pulse": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "respiration": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "note": {
            "type": ["string","null"],
            "maxLength": 255
        },
        "BMI": {
            "type": "number",
            "maximum": 999.9,
            "minimum": -999.9
        },
        "BMI_status": {
            "type": ["string","null"],
            "maxLength": 255,
        },
        "waist_circ": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "head_circ": {
            "type": "number",
            "maximum": 99.99,
            "minimum": -99.99
        },
        "oxygen_saturation": {
            "type": "number",
            "maximum": 999.99,
            "minimum": -999.99
        },
        "external_id": {
            "type":["string","null"],
            "maxLength": 20
        },
        "spo2": {
            "type":["string","null"],
            "maxLength": 255
        },
        "pain_index": {
            "type":["string","null"],
            "maxLength": 255
        },
        "tenant_id":{
            "type":["string"],
            "maxLength":255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
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
        "authorized": {
            "$ref": "#/definitions/authorized"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "bps": {
            "$ref": "#/definitions/bps"
        },
        "bpd": {
            "$ref": "#/definitions/bpd"
        },
        "weight": {
            "$ref": "#/definitions/weight"
        },
        "height": {
            "$ref": "#/definitions/height"
        },
        "temperature": {
            "$ref": "#/definitions/temperature"
        },
        "temp_method": {
            "$ref": "#/definitions/temp_method"
        },
        "pulse": {
            "$ref": "#/definitions/pulse"
        },
        "respiration": {
            "$ref": "#/definitions/respiration"
        },
        "note": {
            "$ref": "#/definitions/note"
        },
        "BMI": {
            "$ref": "#/definitions/BMI"
        },
        "BMI_status": {
            "$ref": "#/definitions/BMI_status"
        },
        "waist_circ": {
            "$ref": "#/definitions/waist_circ"
        },
        "head_circ": {
            "$ref": "#/definitions/head_circ"
        },
        "oxygen_saturation": {
            "$ref": "#/definitions/oxygen_saturation"
        },
        "external_id": {
            "$ref": "#/definitions/external_id"
        },
        "spo2": {
            "$ref": "#/definitions/spo2"
        },
        "pain_index": {
            "$ref": "#/definitions/pain_index"
        },
        "tenant_id": {
            "$ref": "#/definitions/tenant_id"
        }

    }
}
 module.exports = schema
