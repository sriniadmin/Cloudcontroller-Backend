let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for tenant table",
    "$id": "tenant",
    "title": "tenant",
    "type": "object",
    "required": [
        "tenant_name",
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "tenant_name": {
            "type": "string",
            "maxLength": 500
        },
        "tenant_uuid": {
            "type": "string",
            "maxLength": 256
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "tenant_name": {
            "$ref": "#/definitions/tenant_name"
        },
        "tenant_uuid": {
            "$ref": "#/definitions/tenant_uuid"
        }
    }
}
 module.exports = schema
