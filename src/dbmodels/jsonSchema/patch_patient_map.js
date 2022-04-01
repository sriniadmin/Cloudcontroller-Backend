let schema = {
    $schema: "http://json-schema.org/draft-07/schema",
    $comment: "JSON Schema for patch_patient_map table",
    $id: "patch_patient_map",
    title: "patch_patient_map",
    type: "array",

    required: ["patch_uuid"],
    definitions: {
        id: {
            $comment: "primary key",
            type: "integer",
            minimum: 1,
            maximum: 7.307508186654515e47,
        },
        patch_uuid: {
            type: "string",
            maxLength: 4294967295,
        },
        duration: {
            type: "string",
            maxLength: 4294967295,
        },
        tenant_id: {
            type: "string",
            maxLength: 250,
        },
        pid: {
            type: "string",
            maxLength: 250,
        },
    },
    properties: {
        id: {
            $ref: "#/definitions/id",
        },
        patch_uuid: {
            $ref: "#/definitions/patch_uuid",
        },
        duration: {
            $ref: "#/definitions/duration",
        },
        tenant_id: {
            $ref: "#/definitions/tenant_id",
        },
        pid: {
            $ref: "#/definitions/pid",
        },
    },
}
module.exports = schema
