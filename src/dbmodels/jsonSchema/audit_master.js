let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for audit_master table",
    "$id": "audit_master",
    "title": "audit_master",
    "type": "object",
    "required": [
        "id",
        "pid",
        "user_id",
        "approval_status",
        "created_time",
        "modified_time",
        "ip_address",
        "type"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "user_id": {
            "description": "The Id of the user who approves or denies",
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "userEmail": {
            "description": "User Identitification via RBAC or ABAC",
            "type": "string",
            "default": null 
        },
        "userRole": {
            "description": "User Role via RBAC or ABAC",
            "type": "string",
            "default": null
        },
        "tenant": {
            "description": "Tenant via RBAC or ABAC",
            "type": "string",
            "default": null
        },
        "approval_status": {
            "description": "1-Pending,2-Approved,3-Denied,4-Appointment directly updated to calendar table,5-Cancelled appointment",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "comments": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "created_time": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "modified_time": {
            "type": "string",
            "format": "date-time"
        },
        "ip_address": {
            "type": "string",
            "maxLength": 100
        },
        "type": {
            "description": "1-new patient,2-existing patient,3-change is only in the document,4-Patient upload,5-random key,10-Appointment",
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "user_id": {
            "$ref": "#/definitions/user_id"
        },
        "userEmail": {
            "$ref": "#/definitions/userEmail"
        },
        "userRole": {
            "$ref": "#/definitions/userRole"
        },
        "tenant": {
            "$ref": "#/definitions/tenant"
        },
        "approval_status": {
            "$ref": "#/definitions/approval_status"
        },
        "comments": {
            "$ref": "#/definitions/comments"
        },
        "created_time": {
            "$ref": "#/definitions/created_time"
        },
        "modified_time": {
            "$ref": "#/definitions/modified_time"
        },
        "ip_address": {
            "$ref": "#/definitions/ip_address"
        },
        "type": {
            "$ref": "#/definitions/type"
        }
    }
}
 module.exports = schema