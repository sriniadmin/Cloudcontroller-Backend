let schema = {
    $schema: "http://json-schema.org/draft-07/schema",
    $comment: "JSON Schema for connector table",
    $id: "connector",
    title: "connector",
    type: "object",
    required: ["id"],
    definitions: {
        id: {
            $comment: "primary key",
            type: "integer",
            minimum: 1,
            maximum: 7.307508186654515e47,
        },
        url: {
            type: "string",
            maxLength: 255,
        },
        username: {
            type: "string",
            minimum: -7.307508186654515e47,
            maximum: 7.307508186654515e47,
        },
        password: {
            type: "string",
            maxLength: 255,
        },
        crontime: {
            type: "string",
            default: "0000-00-00 00:00:00",
        },
        connector_uuid: {
            type: "string",
            maxLength: 255,
        },
        connector_specifics: {
            type: "string",
            maxLength: 100,
        },
        resources: {
            type: "string",
            maxLength: 100,
        },
    },
    properties: {
        id: {
            $ref: "#/definitions/id",
        },
        url: {
            $ref: "#/definitions/url",
        },
        username: {
            $ref: "#/definitions/username",
        },
        password: {
            $ref: "#/definitions/password",
        },
        crontime: {
            $ref: "#/definitions/crontime",
        },
        connector_uuid: {
            $ref: "#/definitions/connector_uuid",
        },
        connector_specifics: {
            $ref: "#/definitions/connector_specifics",
        },
        resources: {
            $ref: "#/definitions/resources",
        },
    },
}
module.exports = schema
