let schema = {
    $schema: "http://json-schema.org/draft-07/schema",
    $comment: "JSON Schema for appointment table",
    $id: "appointment",
    title: "appointment",
    type: "object",

    definitions: {
        id: {
            $comment: "primary key",
            type: "integer",
            minimum: 1,
            maximum: 1.5474250491067253e26,
        },
        prac_uuid: {
            type: "string",
            maxLength: 250,
            default: null,
        },
        date: {
            type: "string",
            format: "date",
            default: null,
        },
        startTime: {
            type: "string",
            format: "time",
            default: null,
        },
        endTime: {
            type: "string",
            format: "time",
            default: null,
        },
        pid: {
            type: "string",
            maxLength: 255,
        },
        tenant_uuid: {
            type: "string",
            maxLength: 255,
        },
    },
    properties: {
        id: {
            $ref: "#/definitions/id",
        },
        prac_uuid: {
            $ref: "#/definitions/prac_uuid",
        },
        date: {
            $ref: "#/definitions/date",
        },
        startTime: {
            $ref: "#/definitions/startTime",
        },
        endTime: {
            $ref: "#/definitions/endTime",
        },
        pid: {
            $ref: "#/definitions/pid",
        },
        tenant_uuid: {
            $ref: "#/definitions/tenant_uuid",
        },
    },
}
module.exports = schema
