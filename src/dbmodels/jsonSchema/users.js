let schema={
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for users table",
    "$id": "users",
    "title": "users",
    "type": "object",
    "required": [
        "lname",
        "username",
        "password",
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "username": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "password": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "authorized": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "info": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "source": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "fname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "mname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "lname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "suffix": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "federaltaxid": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "federaldrugid": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "upin": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "facility": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "facility_id": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "see_auth": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "active": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "npi": {
            "type": "string",
            "maxLength": 15,
            "default": null
        },
        "title": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "specialty": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "billname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "email": {
            "type": ["string","null"],
            "maxLength": 255,
            "default": null
        },
        "email_direct": {
            "type": "string",
            "maxLength": 255
        },
        "url": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "assistant": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "organization": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "valedictory": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "street": {
            "type": "string",
            "maxLength": 60,
            "default": null
        },
        "streetb": {
            "type": "string",
            "maxLength": 60,
            "default": null
        },
        "city": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "state": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "zip": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "street2": {
            "type": "string",
            "maxLength": 60,
            "default": null
        },
        "streetb2": {
            "type": "string",
            "maxLength": 60,
            "default": null
        },
        "city2": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "state2": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "zip2": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "phone": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "fax": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "phonew1": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "phonew2": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "phonecell": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "notes": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "cal_ui": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647
        },
        "taxonomy": {
            "type": "string",
            "maxLength": 30,
            "default": "207Q00000X"
        },
        "calendar": {
            "description": "1 = appears in calendar",
            "type": "integer",
            "minimum": -128,
            "maximum": 127
        },
        "abook_type": {
            "type": "string",
            "maxLength": 31
        },
        "pwd_expiration_date": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "pwd_history1": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "pwd_history2": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "default_warehouse": {
            "type": "string",
            "maxLength": 31
        },
        "irnpool": {
            "type": "string",
            "maxLength": 31
        },
        "state_license_number": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "weno_prov_id": {
            "type": "string",
            "maxLength": 15,
            "default": null
        },
        "newcrop_user_role": {
            "type": "string",
            "maxLength": 30,
            "default": null
        },
        "cpoe": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "physician_type": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "main_menu_role": {
            "type": "string",
            "maxLength": 50,
            "default": "standard"
        },
        "patient_menu_role": {
            "type": "string",
            "maxLength": 50,
            "default": "standard"
        },
        "tenant_id": {
          "type": "string",
          "maxLength": 255,
          default:"0"
        },
        "role": {
            "type": "string",
            "maxLength": 255
        },
        "user_uuid": {
            "type": "string",
            "maxLength": 255
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "username": {
            "$ref": "#/definitions/username"
        },
        "password": {
            "$ref": "#/definitions/password"
        },
        "authorized": {
            "$ref": "#/definitions/authorized"
        },
        "info": {
            "$ref": "#/definitions/info"
        },
        "source": {
            "$ref": "#/definitions/source"
        },
        "fname": {
            "$ref": "#/definitions/fname"
        },
        "mname": {
            "$ref": "#/definitions/mname"
        },
        "lname": {
            "$ref": "#/definitions/lname"
        },
        "suffix": {
            "$ref": "#/definitions/suffix"
        },
        "federaltaxid": {
            "$ref": "#/definitions/federaltaxid"
        },
        "federaldrugid": {
            "$ref": "#/definitions/federaldrugid"
        },
        "upin": {
            "$ref": "#/definitions/upin"
        },
        "facility": {
            "$ref": "#/definitions/facility"
        },
        "facility_id": {
            "$ref": "#/definitions/facility_id"
        },
        "see_auth": {
            "$ref": "#/definitions/see_auth"
        },
        "active": {
            "$ref": "#/definitions/active"
        },
        "npi": {
            "$ref": "#/definitions/npi"
        },
        "title": {
            "$ref": "#/definitions/title"
        },
        "specialty": {
            "$ref": "#/definitions/specialty"
        },
        "billname": {
            "$ref": "#/definitions/billname"
        },
        "email": {
            "$ref": "#/definitions/email"
        },
        "email_direct": {
            "$ref": "#/definitions/email_direct"
        },
        "url": {
            "$ref": "#/definitions/url"
        },
        "assistant": {
            "$ref": "#/definitions/assistant"
        },
        "organization": {
            "$ref": "#/definitions/organization"
        },
        "valedictory": {
            "$ref": "#/definitions/valedictory"
        },
        "street": {
            "$ref": "#/definitions/street"
        },
        "streetb": {
            "$ref": "#/definitions/streetb"
        },
        "city": {
            "$ref": "#/definitions/city"
        },
        "state": {
            "$ref": "#/definitions/state"
        },
        "zip": {
            "$ref": "#/definitions/zip"
        },
        "street2": {
            "$ref": "#/definitions/street2"
        },
        "streetb2": {
            "$ref": "#/definitions/streetb2"
        },
        "city2": {
            "$ref": "#/definitions/city2"
        },
        "state2": {
            "$ref": "#/definitions/state2"
        },
        "zip2": {
            "$ref": "#/definitions/zip2"
        },
        "phone": {
            "$ref": "#/definitions/phone"
        },
        "fax": {
            "$ref": "#/definitions/fax"
        },
        "phonew1": {
            "$ref": "#/definitions/phonew1"
        },
        "phonew2": {
            "$ref": "#/definitions/phonew2"
        },
        "phonecell": {
            "$ref": "#/definitions/phonecell"
        },
        "notes": {
            "$ref": "#/definitions/notes"
        },
        "cal_ui": {
            "$ref": "#/definitions/cal_ui"
        },
        "taxonomy": {
            "$ref": "#/definitions/taxonomy"
        },
        "calendar": {
            "$ref": "#/definitions/calendar"
        },
        "abook_type": {
            "$ref": "#/definitions/abook_type"
        },
        "pwd_expiration_date": {
            "$ref": "#/definitions/pwd_expiration_date"
        },
        "pwd_history1": {
            "$ref": "#/definitions/pwd_history1"
        },
        "pwd_history2": {
            "$ref": "#/definitions/pwd_history2"
        },
        "default_warehouse": {
            "$ref": "#/definitions/default_warehouse"
        },
        "irnpool": {
            "$ref": "#/definitions/irnpool"
        },
        "state_license_number": {
            "$ref": "#/definitions/state_license_number"
        },
        "weno_prov_id": {
            "$ref": "#/definitions/weno_prov_id"
        },
        "newcrop_user_role": {
            "$ref": "#/definitions/newcrop_user_role"
        },
        "cpoe": {
            "$ref": "#/definitions/cpoe"
        },
        "physician_type": {
            "$ref": "#/definitions/physician_type"
        },
        "main_menu_role": {
            "$ref": "#/definitions/main_menu_role"
        },
        "patient_menu_role": {
            "$ref": "#/definitions/patient_menu_role"
        },
        "tenant_id": {
            "$ref": "#/definitions/tenant_id"
        },
        "role": {
            "$ref": "#/definitions/role"
        },
        "user_uuid": {
            "$ref": "#/definitions/user_uuid"
        }
    }
}

module.exports=schema
