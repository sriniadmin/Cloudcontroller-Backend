let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for immunizations table",
    "$id": "immunizations",
    "title": "immunizations",
    "type": "object",
    "required": [
        "id",
        "update_date",
        "added_erroneously"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "patient_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "administered_date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "immunization_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "cvx_code": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "manufacturer": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "lot_number": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "administered_by_id": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "administered_by": {
            "description": "Alternative to administered_by_id",
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "education_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "vis_date": {
            "description": "Date of VIS Statement",
            "type": "string",
            "format": "date",
            "default": null
        },
        "note": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "create_date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "update_date": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "created_by": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "updated_by": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "amount_administered": {
            "type": "number",
            "default": null
        },
        "amount_administered_unit": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "expiration_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "route": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "administration_site": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "added_erroneously": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "external_id": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "completion_status": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "information_source": {
            "type": "string",
            "maxLength": 31,
            "default": null
        },
        "refusal_reason": {
            "type": "string",
            "maxLength": 31,
            "default": null
        },
        "ordering_provider": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        },
        "administered_date": {
            "$ref": "#/definitions/administered_date"
        },
        "immunization_id": {
            "$ref": "#/definitions/immunization_id"
        },
        "cvx_code": {
            "$ref": "#/definitions/cvx_code"
        },
        "manufacturer": {
            "$ref": "#/definitions/manufacturer"
        },
        "lot_number": {
            "$ref": "#/definitions/lot_number"
        },
        "administered_by_id": {
            "$ref": "#/definitions/administered_by_id"
        },
        "administered_by": {
            "$ref": "#/definitions/administered_by"
        },
        "education_date": {
            "$ref": "#/definitions/education_date"
        },
        "vis_date": {
            "$ref": "#/definitions/vis_date"
        },
        "note": {
            "$ref": "#/definitions/note"
        },
        "create_date": {
            "$ref": "#/definitions/create_date"
        },
        "update_date": {
            "$ref": "#/definitions/update_date"
        },
        "created_by": {
            "$ref": "#/definitions/created_by"
        },
        "updated_by": {
            "$ref": "#/definitions/updated_by"
        },
        "amount_administered": {
            "$ref": "#/definitions/amount_administered"
        },
        "amount_administered_unit": {
            "$ref": "#/definitions/amount_administered_unit"
        },
        "expiration_date": {
            "$ref": "#/definitions/expiration_date"
        },
        "route": {
            "$ref": "#/definitions/route"
        },
        "administration_site": {
            "$ref": "#/definitions/administration_site"
        },
        "added_erroneously": {
            "$ref": "#/definitions/added_erroneously"
        },
        "external_id": {
            "$ref": "#/definitions/external_id"
        },
        "completion_status": {
            "$ref": "#/definitions/completion_status"
        },
        "information_source": {
            "$ref": "#/definitions/information_source"
        },
        "refusal_reason": {
            "$ref": "#/definitions/refusal_reason"
        },
        "ordering_provider": {
            "$ref": "#/definitions/ordering_provider"
        }
    }
}
 module.exports = schema