let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for procedure_order table",
    "$id": "procedure_order",
    "title": "procedure_order",
    "type": "object",
    "required": [
        "procedure_order_id",
        "provider_id",
        "patient_id",
        "encounter_id",
        "order_priority",
        "order_status",
        "activity",
        "control_id",
        "lab_id",
        "specimen_type",
        "specimen_location",
        "specimen_volume",
        "clinical_hx"
    ],
    "definitions": {
        "procedure_order_id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "provider_id": {
            "description": "references users.id, the ordering provider",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "patient_id": {
            "description": "references patient_data.pid",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "encounter_id": {
            "description": "references form_encounter.encounter",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "date_collected": {
            "description": "time specimen collected",
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "date_ordered": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "order_priority": {
            "type": "string",
            "maxLength": 31
        },
        "order_status": {
            "description": "pending,routed,complete,canceled",
            "type": "string",
            "maxLength": 31
        },
        "patient_instructions": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "activity": {
            "description": "0 if deleted",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "control_id": {
            "description": "This is the CONTROL ID that is sent back from lab",
            "type": "string",
            "maxLength": 255
        },
        "lab_id": {
            "description": "references procedure_providers.ppid",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "specimen_type": {
            "description": "from the Specimen_Type list",
            "type": "string",
            "maxLength": 31
        },
        "specimen_location": {
            "description": "from the Specimen_Location list",
            "type": "string",
            "maxLength": 31
        },
        "specimen_volume": {
            "description": "from a text input field",
            "type": "string",
            "maxLength": 30
        },
        "date_transmitted": {
            "description": "time of order transmission, null if unsent",
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "clinical_hx": {
            "description": "clinical history text that may be relevant to the order",
            "type": "string",
            "maxLength": 255
        },
        "external_id": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "history_order": {
            "description": "references order is added for history purpose only.",
            "type": "string",
            "enum": [
                "0",
                "1"
            ],
            "default": "0"
        },
        "order_diagnosis": {
            "description": "primary order diagnosis",
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "procedure_order_id": {
            "$ref": "#/definitions/procedure_order_id"
        },
        "provider_id": {
            "$ref": "#/definitions/provider_id"
        },
        "patient_id": {
            "$ref": "#/definitions/patient_id"
        },
        "encounter_id": {
            "$ref": "#/definitions/encounter_id"
        },
        "date_collected": {
            "$ref": "#/definitions/date_collected"
        },
        "date_ordered": {
            "$ref": "#/definitions/date_ordered"
        },
        "order_priority": {
            "$ref": "#/definitions/order_priority"
        },
        "order_status": {
            "$ref": "#/definitions/order_status"
        },
        "patient_instructions": {
            "$ref": "#/definitions/patient_instructions"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "control_id": {
            "$ref": "#/definitions/control_id"
        },
        "lab_id": {
            "$ref": "#/definitions/lab_id"
        },
        "specimen_type": {
            "$ref": "#/definitions/specimen_type"
        },
        "specimen_location": {
            "$ref": "#/definitions/specimen_location"
        },
        "specimen_volume": {
            "$ref": "#/definitions/specimen_volume"
        },
        "date_transmitted": {
            "$ref": "#/definitions/date_transmitted"
        },
        "clinical_hx": {
            "$ref": "#/definitions/clinical_hx"
        },
        "external_id": {
            "$ref": "#/definitions/external_id"
        },
        "history_order": {
            "$ref": "#/definitions/history_order"
        },
        "order_diagnosis": {
            "$ref": "#/definitions/order_diagnosis"
        }
    }
}
 module.exports = schema