let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for erx_weno_drugs table",
    "$id": "erx_weno_drugs",
    "title": "erx_weno_drugs",
    "type": "object",
    "required": [
        "drug_id",
        "full_name",
        "full_generic_name",
        "brand_name",
        "display_name"
    ],
    "definitions": {
        "drug_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "rxcui_drug_coded": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "generic_rxcui": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26,
            "default": null
        },
        "drug_db_code_qualifier": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "full_name": {
            "type": "string",
            "maxLength": 250
        },
        "rxn_dose_form": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "full_generic_name": {
            "type": "string",
            "maxLength": 250
        },
        "brand_name": {
            "type": "string",
            "maxLength": 250
        },
        "display_name": {
            "type": "string",
            "maxLength": 250
        },
        "route": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "new_dose_form": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "strength": {
            "type": "string",
            "maxLength": 15,
            "default": null
        },
        "supress_for": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "display_name_synonym": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "is_retired": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "sxdg_rxcui": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "sxdg_tty": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "sxdg_name": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "psn_drugdescription": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "ncpdp_quantity_term": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "potency_unit_code": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "dea_schedule_no": {
            "type": "integer",
            "minimum": -32768,
            "maximum": 32767,
            "default": null
        },
        "dea_schedule": {
            "type": "string",
            "maxLength": 7,
            "default": null
        },
        "ingredients": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "drug_interaction": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "unit_source_code": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "code_list_qualifier": {
            "type": "integer",
            "minimum": -8388608,
            "maximum": 8388607,
            "default": null
        }
    },
    "properties": {
        "drug_id": {
            "$ref": "#/definitions/drug_id"
        },
        "rxcui_drug_coded": {
            "$ref": "#/definitions/rxcui_drug_coded"
        },
        "generic_rxcui": {
            "$ref": "#/definitions/generic_rxcui"
        },
        "drug_db_code_qualifier": {
            "$ref": "#/definitions/drug_db_code_qualifier"
        },
        "full_name": {
            "$ref": "#/definitions/full_name"
        },
        "rxn_dose_form": {
            "$ref": "#/definitions/rxn_dose_form"
        },
        "full_generic_name": {
            "$ref": "#/definitions/full_generic_name"
        },
        "brand_name": {
            "$ref": "#/definitions/brand_name"
        },
        "display_name": {
            "$ref": "#/definitions/display_name"
        },
        "route": {
            "$ref": "#/definitions/route"
        },
        "new_dose_form": {
            "$ref": "#/definitions/new_dose_form"
        },
        "strength": {
            "$ref": "#/definitions/strength"
        },
        "supress_for": {
            "$ref": "#/definitions/supress_for"
        },
        "display_name_synonym": {
            "$ref": "#/definitions/display_name_synonym"
        },
        "is_retired": {
            "$ref": "#/definitions/is_retired"
        },
        "sxdg_rxcui": {
            "$ref": "#/definitions/sxdg_rxcui"
        },
        "sxdg_tty": {
            "$ref": "#/definitions/sxdg_tty"
        },
        "sxdg_name": {
            "$ref": "#/definitions/sxdg_name"
        },
        "psn_drugdescription": {
            "$ref": "#/definitions/psn_drugdescription"
        },
        "ncpdp_quantity_term": {
            "$ref": "#/definitions/ncpdp_quantity_term"
        },
        "potency_unit_code": {
            "$ref": "#/definitions/potency_unit_code"
        },
        "dea_schedule_no": {
            "$ref": "#/definitions/dea_schedule_no"
        },
        "dea_schedule": {
            "$ref": "#/definitions/dea_schedule"
        },
        "ingredients": {
            "$ref": "#/definitions/ingredients"
        },
        "drug_interaction": {
            "$ref": "#/definitions/drug_interaction"
        },
        "unit_source_code": {
            "$ref": "#/definitions/unit_source_code"
        },
        "code_list_qualifier": {
            "$ref": "#/definitions/code_list_qualifier"
        }
    }
}
 module.exports = schema