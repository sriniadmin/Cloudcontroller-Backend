let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for x12_partners table",
    "$id": "x12_partners",
    "title": "x12_partners",
    "type": "object",
    "required": [
        "id",
        "x12_isa01",
        "x12_isa02",
        "x12_isa03",
        "x12_isa04",
        "x12_isa05",
        "x12_isa07",
        "x12_isa14",
        "x12_isa15",
        "x12_gs02",
        "x12_per06",
        "x12_dtp03"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "name": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "id_number": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "x12_sender_id": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "x12_receiver_id": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "processing_format": {
            "type": "string",
            "enum": [
                "standard",
                "medi-cal",
                "cms",
                "proxymed",
                "oa_eligibility",
                "availity_eligibility"
            ],
            "default": null
        },
        "x12_isa01": {
            "description": "User logon Required Indicator",
            "type": "string",
            "maxLength": 2,
            "default": "00"
        },
        "x12_isa02": {
            "description": "User Logon",
            "type": "string",
            "maxLength": 10,
            "default": "          "
        },
        "x12_isa03": {
            "description": "User password required Indicator",
            "type": "string",
            "maxLength": 2,
            "default": "00"
        },
        "x12_isa04": {
            "description": "User Password",
            "type": "string",
            "maxLength": 10,
            "default": "          "
        },
        "x12_isa05": {
            "type": "string",
            "maxLength": 2,
            "default": "ZZ"
        },
        "x12_isa07": {
            "type": "string",
            "maxLength": 2,
            "default": "ZZ"
        },
        "x12_isa14": {
            "type": "string",
            "maxLength": 1,
            "default": "0"
        },
        "x12_isa15": {
            "type": "string",
            "maxLength": 1,
            "default": "P"
        },
        "x12_gs02": {
            "type": "string",
            "maxLength": 15
        },
        "x12_per06": {
            "type": "string",
            "maxLength": 80
        },
        "x12_dtp03": {
            "type": "string",
            "maxLength": 1,
            "default": "A"
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "id_number": {
            "$ref": "#/definitions/id_number"
        },
        "x12_sender_id": {
            "$ref": "#/definitions/x12_sender_id"
        },
        "x12_receiver_id": {
            "$ref": "#/definitions/x12_receiver_id"
        },
        "processing_format": {
            "$ref": "#/definitions/processing_format"
        },
        "x12_isa01": {
            "$ref": "#/definitions/x12_isa01"
        },
        "x12_isa02": {
            "$ref": "#/definitions/x12_isa02"
        },
        "x12_isa03": {
            "$ref": "#/definitions/x12_isa03"
        },
        "x12_isa04": {
            "$ref": "#/definitions/x12_isa04"
        },
        "x12_isa05": {
            "$ref": "#/definitions/x12_isa05"
        },
        "x12_isa07": {
            "$ref": "#/definitions/x12_isa07"
        },
        "x12_isa14": {
            "$ref": "#/definitions/x12_isa14"
        },
        "x12_isa15": {
            "$ref": "#/definitions/x12_isa15"
        },
        "x12_gs02": {
            "$ref": "#/definitions/x12_gs02"
        },
        "x12_per06": {
            "$ref": "#/definitions/x12_per06"
        },
        "x12_dtp03": {
            "$ref": "#/definitions/x12_dtp03"
        }
    }
}
 module.exports = schema