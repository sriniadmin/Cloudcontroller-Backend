let schema = {
    $schema: "http://json-schema.org/draft-07/schema",
    $comment: "JSON Schema for patch table",
    $id: "patch",
    title: "patch",
    type: "array",
    required: [
        "patch_type",
        "patch_uuid",
        "patch_status",
        "patch_serial",
        "tenant_id",
    ],
    definitions: {
        id: {
            $comment: "primary key",
            type: "integer",
            minimum: 1,
            maximum: 7.307508186654515e47,
        },
        patch_type: {
            type: "string",
            maxLength: 200,
        },
        patch_name: {
            type: "string",
            maxLength: 200,
        },
        patch_uuid: {
            type: "string",
            maxLength: 250,
        },
        pid: {
            type: "string",
            maxLength: 250,
        },
        patch_status: {
            type: "string",
            maxLength: 255
        },
        patch_group_id: {
            type: "string",
            maxLength: 250,
        },
        patch_mac: {
            type: "string",
            maxLength:255
        },
        patch_bluetooth: {
            type: "integer",
            minimum: -140737488355328,
            maximum: 140737488355327,
        },
        patch_sensor_id: {
            type: "string",
            maxLength: 250,
        },
        patch_serial: {
            type: "string",
            maxLength: 250,
        },
        tenant_id: {
            type: "string",
            maxLength: 250,
        },
        patch_state: {
            type: "string",
            maxLength: 250,
        }
    },
    properties: {
        id: {
            $ref: "#/definitions/id",
        },
        patch_type: {
            $ref: "#/definitions/patch_type",
        },
        patch_name: {
            $ref: "#/definitions/patch_name",
        },
        patch_uuid: {
            $ref: "#/definitions/patch_uuid",
        },
        patch_status: {
            $ref: "#/definitions/patch_status",
        },
        patch_group_id: {
            $ref: "#/definitions/patch_group_id",
        },
        patch_mac: {
            $ref: "#/definitions/patch_mac",
        },
        patch_bluetooth: {
            $ref: "#/definitions/patch_bluetooth",
        },
        patch_sensor_id: {
            $ref: "#/definitions/patch_sensor_id",
        },
        patch_serial: {
            $ref: "#/definitions/patch_serial",
        },
        tenant_id: {
            $ref: "#/definitions/tenant_id",
        },
        pid: {
            $ref: "#/definitions/pid",
        },
        patch_state: {
            $ref: "#/definitions/patch_state",
        }
    },
}
module.exports = schema
