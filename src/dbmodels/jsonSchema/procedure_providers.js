let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for procedure_providers table",
    "$id": "procedure_providers",
    "title": "procedure_providers",
    "type": "object",
    "required": [
        "ppid",
        "name",
        "npi",
        "send_app_id",
        "send_fac_id",
        "recv_app_id",
        "recv_fac_id",
        "DorP",
        "direction",
        "protocol",
        "remote_host",
        "login",
        "password",
        "orders_path",
        "results_path",
        "lab_director"
    ],
    "definitions": {
        "ppid": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "name": {
            "type": "string",
            "maxLength": 255
        },
        "npi": {
            "type": "string",
            "maxLength": 15
        },
        "send_app_id": {
            "description": "Sending application ID (MSH-3.1)",
            "type": "string",
            "maxLength": 255
        },
        "send_fac_id": {
            "description": "Sending facility ID (MSH-4.1)",
            "type": "string",
            "maxLength": 255
        },
        "recv_app_id": {
            "description": "Receiving application ID (MSH-5.1)",
            "type": "string",
            "maxLength": 255
        },
        "recv_fac_id": {
            "description": "Receiving facility ID (MSH-6.1)",
            "type": "string",
            "maxLength": 255
        },
        "DorP": {
            "description": "Debugging or Production (MSH-11)",
            "type": "string",
            "maxLength": 1,
            "default": "D"
        },
        "direction": {
            "description": "Bidirectional or Results-only",
            "type": "string",
            "maxLength": 1,
            "default": "B"
        },
        "protocol": {
            "type": "string",
            "maxLength": 15,
            "default": "DL"
        },
        "remote_host": {
            "type": "string",
            "maxLength": 255
        },
        "login": {
            "type": "string",
            "maxLength": 255
        },
        "password": {
            "type": "string",
            "maxLength": 255
        },
        "orders_path": {
            "type": "string",
            "maxLength": 255
        },
        "results_path": {
            "type": "string",
            "maxLength": 255
        },
        "notes": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "lab_director": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        }
    },
    "properties": {
        "ppid": {
            "$ref": "#/definitions/ppid"
        },
        "name": {
            "$ref": "#/definitions/name"
        },
        "npi": {
            "$ref": "#/definitions/npi"
        },
        "send_app_id": {
            "$ref": "#/definitions/send_app_id"
        },
        "send_fac_id": {
            "$ref": "#/definitions/send_fac_id"
        },
        "recv_app_id": {
            "$ref": "#/definitions/recv_app_id"
        },
        "recv_fac_id": {
            "$ref": "#/definitions/recv_fac_id"
        },
        "DorP": {
            "$ref": "#/definitions/DorP"
        },
        "direction": {
            "$ref": "#/definitions/direction"
        },
        "protocol": {
            "$ref": "#/definitions/protocol"
        },
        "remote_host": {
            "$ref": "#/definitions/remote_host"
        },
        "login": {
            "$ref": "#/definitions/login"
        },
        "password": {
            "$ref": "#/definitions/password"
        },
        "orders_path": {
            "$ref": "#/definitions/orders_path"
        },
        "results_path": {
            "$ref": "#/definitions/results_path"
        },
        "notes": {
            "$ref": "#/definitions/notes"
        },
        "lab_director": {
            "$ref": "#/definitions/lab_director"
        }
    }
}
 module.exports = schema