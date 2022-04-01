let schema = {
    $schema: "http://json-schema.org/draft-07/schema",
    $comment: "JSON Schema for user patient map  table",
    $id: "user_patient_map",
    title: "user_patient_map",
    type: "object",

    definitions: {
        id: {
            $comment: "primary key",
            type: "integer",
            minimum: 1,
            maximum: 1.5474250491067253e26,
        },
        user_uuid: {
            type: "string",
            maxLength: 255,
        },
        updated_time: {
            type: "string",
            format: "date-time",
            default: null,
        },
        archive: {
            type: "integer",
            maxLength: 6,
        },
        active: {
            type: "integer",
            maxLength: 4,
        },
        patient_uuid: {
            type: "string",
            maxLength: 255,
        },
        role: {
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
        user_uuid: {
            $ref: "#/definitions/user_uuid",
        },
        updated_time: {
            $ref: "#/definitions/updated_time",
        },
        archive: {
            $ref: "#/definitions/archive",
        },
        active: {
            $ref: "#/definitions/active",
        },
        patient_uuid: {
            $ref: "#/definitions/patient_uuid",
        },
        role: {
            $ref: "#/definitions/role",
        },
        pid: {
          $ref: "#/definitions/pid",
      },
    },
}
module.exports = schema
