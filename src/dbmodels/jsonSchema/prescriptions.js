let schema = {
    $schema: "http://json-schema.org/draft-07/schema",
    $comment: "JSON Schema for prescriptions table",
    $id: "prescriptions",
    title: "prescriptions",
    type: "object",
    required: [
            // txDate,drug
    ],
    definitions: {
        id: {
            $comment: "primary key",
            type: "integer",
            minimum: 1,
            maximum: 1.5474250491067253e26,
        },
        prescription_uuid: {
            type: "string",
            maxLength: 250,
        },
        filled_by_id: {
            type: ["integer","null"],
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
        },
        pharmacy_id: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        date_added: {
            type: ["string","null"],
        },
        date_modified: {
            type: ["string","null"],
        },
        provider_id: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        encounter: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        start_date: {
            type: ["string","null"],
            default: null,
        },
        drug_uuid: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
        },
        rxnorm_drugcode: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        form: {
            type: ["string","null"],
            maxLength: 500,
        },
        dosage: {
            type: "string",
            maxLength: 500,
        },
        quantity: {
            type: ["string","null"],
            maxLength: 31,
            default: null,
        },
        size: {
            type: "string",
            maxLength: 25,
            default: null,
        },
        unit: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        route: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        interval: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        substitute: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        refills: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        per_refill: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        filled_date: {
            type: ["string","null"],
        },
        medication: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
            default: null,
        },
        note_uuid: {
            type: ["string","null"],
            maxLength: 255,
        },
        active: {
            type: "integer",
            minimum: -1.5474250491067253e26,
            maximum: 1.5474250491067253e26,
        },
        datetime: {
            type: "string",
            default: null,
        },
        prac_uuid: {
            type: ["string","null"],
            maxLength: 250,
        },
        site: {
            type: ["string","null"],
            maxLength: 50,
        },
        prescriptionguid: {
            type: ["string","null"],
            maxLength: 50,
        },
        erx_source: {
            description: "0-OpenEMR 1-External",
            type: "integer",
            minimum: -2147483648,
            maximum: 2147483647,
        },
        erx_uploaded: {
            description: "0-Pending NewCrop upload 1-Uploaded to NewCrop",
            type: "integer",
            minimum: -2147483648,
            maximum: 2147483647,
        },
        drug_info_erx: {
            type: ["string","null"],
            maxLength: 65535,
        },
        external_id: {
            type: ["string","null"],
            maxLength: 20,
        },
        end_date: {
            type: ["string","null"],
        },
        indication: {
            type: "string",
            maxLength: 65535,
            default: null,
        },
        prn: {
            type: ["string","null"],
            maxLength: 30,
        },
        ntx: {
            type: "integer",
            minimum: -32768,
            maximum: 32767,
            default: null,
        },
        rtx: {
            type: "integer",
            minimum: -32768,
            maximum: 32767,
            default: null,
        },
        txDate: {
            type: "string",
        },
        tenant_uuid: {
            type: "string",
            maxLength: 255,
        },
        pid: {
            type: "string",
            maxLength: 255,
        },
    },
    properties: {
        id: {
            $ref: "#/definitions/id",
        },
        prescription_uuid: {
            $ref: "#/definitions/prescription_uuid",
        },
        filled_by_id: {
            $ref: "#/definitions/filled_by_id",
        },
        pharmacy_id: {
            $ref: "#/definitions/pharmacy_id",
        },
        date_added: {
            $ref: "#/definitions/date_added",
        },
        date_modified: {
            $ref: "#/definitions/date_modified",
        },
        provider_id: {
            $ref: "#/definitions/provider_id",
        },
        encounter: {
            $ref: "#/definitions/encounter",
        },
        start_date: {
            $ref: "#/definitions/start_date",
        },
        drug_uuid: {
            $ref: "#/definitions/drug_uuid",
        },
        rxnorm_drugcode: {
            $ref: "#/definitions/rxnorm_drugcode",
        },
        form: {
            $ref: "#/definitions/form",
        },
        dosage: {
            $ref: "#/definitions/dosage",
        },
        quantity: {
            $ref: "#/definitions/quantity",
        },
        size: {
            $ref: "#/definitions/size",
        },
        unit: {
            $ref: "#/definitions/unit",
        },
        route: {
            $ref: "#/definitions/route",
        },
        interval: {
            $ref: "#/definitions/interval",
        },
        substitute: {
            $ref: "#/definitions/substitute",
        },
        refills: {
            $ref: "#/definitions/refills",
        },
        per_refill: {
            $ref: "#/definitions/per_refill",
        },
        filled_date: {
            $ref: "#/definitions/filled_date",
        },
        medication: {
            $ref: "#/definitions/medication",
        },
        note_uuid: {
            $ref: "#/definitions/note_uuid",
        },
        active: {
            $ref: "#/definitions/active",
        },
        datetime: {
            $ref: "#/definitions/datetime",
        },
        prac_uuid: {
            $ref: "#/definitions/prac_uuid",
        },
        site: {
            $ref: "#/definitions/site",
        },
        prescriptionguid: {
            $ref: "#/definitions/prescriptionguid",
        },
        erx_source: {
            $ref: "#/definitions/erx_source",
        },
        erx_uploaded: {
            $ref: "#/definitions/erx_uploaded",
        },
        drug_info_erx: {
            $ref: "#/definitions/drug_info_erx",
        },
        external_id: {
            $ref: "#/definitions/external_id",
        },
        end_date: {
            $ref: "#/definitions/end_date",
        },
        indication: {
            $ref: "#/definitions/indication",
        },
        prn: {
            $ref: "#/definitions/prn",
        },
        ntx: {
            $ref: "#/definitions/ntx",
        },
        rtx: {
            $ref: "#/definitions/rtx",
        },
        txDate: {
            $ref: "#/definitions/txDate",
        },
        tenant_uuid: {
            $ref: "#/definitions/tenant_uuid",
        },
        pid: {
            $ref: "#/definitions/pid",
        },
    },
}
module.exports = schema
