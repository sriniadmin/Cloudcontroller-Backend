let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_mag_dispense table",
    "$id": "form_eye_mag_dispense",
    "title": "form_eye_mag_dispense",
    "type": "object",
    "required": [
        "id",
        "date"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "date": {
            "type": "string",
            "default": "current_timestamp()"
        },
        "encounter": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "user": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "groupname": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "authorized": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "activity": {
            "type": "integer",
            "minimum": -2147483648,
            "maximum": 2147483647,
            "default": null
        },
        "REFDATE": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "REFTYPE": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "RXTYPE": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODSPH": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODCYL": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODAXIS": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSSPH": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSCYL": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSAXIS": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODMIDADD": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSMIDADD": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODADD": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "OSADD": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "ODHPD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODHBASE": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODVPD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODVBASE": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODSLABOFF": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODVERTEXDIST": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSHPD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSHBASE": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSVPD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSVBASE": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSSLABOFF": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSVERTEXDIST": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODMPDD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODMPDN": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSMPDD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSMPDN": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "BPDD": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "BPDN": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "LENS_MATERIAL": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "LENS_TREATMENTS": {
            "type": "string",
            "maxLength": 100,
            "default": null
        },
        "CTLMANUFACTUREROD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLMANUFACTUREROS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLSUPPLIEROD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLSUPPLIEROS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLBRANDOD": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "CTLBRANDOS": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "CTLODQUANTITY": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "CTLOSQUANTITY": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "ODDIAM": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "ODBC": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "OSDIAM": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "OSBC": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "RXCOMMENTS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "COMMENTS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "encounter": {
            "$ref": "#/definitions/encounter"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "user": {
            "$ref": "#/definitions/user"
        },
        "groupname": {
            "$ref": "#/definitions/groupname"
        },
        "authorized": {
            "$ref": "#/definitions/authorized"
        },
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "REFDATE": {
            "$ref": "#/definitions/REFDATE"
        },
        "REFTYPE": {
            "$ref": "#/definitions/REFTYPE"
        },
        "RXTYPE": {
            "$ref": "#/definitions/RXTYPE"
        },
        "ODSPH": {
            "$ref": "#/definitions/ODSPH"
        },
        "ODCYL": {
            "$ref": "#/definitions/ODCYL"
        },
        "ODAXIS": {
            "$ref": "#/definitions/ODAXIS"
        },
        "OSSPH": {
            "$ref": "#/definitions/OSSPH"
        },
        "OSCYL": {
            "$ref": "#/definitions/OSCYL"
        },
        "OSAXIS": {
            "$ref": "#/definitions/OSAXIS"
        },
        "ODMIDADD": {
            "$ref": "#/definitions/ODMIDADD"
        },
        "OSMIDADD": {
            "$ref": "#/definitions/OSMIDADD"
        },
        "ODADD": {
            "$ref": "#/definitions/ODADD"
        },
        "OSADD": {
            "$ref": "#/definitions/OSADD"
        },
        "ODHPD": {
            "$ref": "#/definitions/ODHPD"
        },
        "ODHBASE": {
            "$ref": "#/definitions/ODHBASE"
        },
        "ODVPD": {
            "$ref": "#/definitions/ODVPD"
        },
        "ODVBASE": {
            "$ref": "#/definitions/ODVBASE"
        },
        "ODSLABOFF": {
            "$ref": "#/definitions/ODSLABOFF"
        },
        "ODVERTEXDIST": {
            "$ref": "#/definitions/ODVERTEXDIST"
        },
        "OSHPD": {
            "$ref": "#/definitions/OSHPD"
        },
        "OSHBASE": {
            "$ref": "#/definitions/OSHBASE"
        },
        "OSVPD": {
            "$ref": "#/definitions/OSVPD"
        },
        "OSVBASE": {
            "$ref": "#/definitions/OSVBASE"
        },
        "OSSLABOFF": {
            "$ref": "#/definitions/OSSLABOFF"
        },
        "OSVERTEXDIST": {
            "$ref": "#/definitions/OSVERTEXDIST"
        },
        "ODMPDD": {
            "$ref": "#/definitions/ODMPDD"
        },
        "ODMPDN": {
            "$ref": "#/definitions/ODMPDN"
        },
        "OSMPDD": {
            "$ref": "#/definitions/OSMPDD"
        },
        "OSMPDN": {
            "$ref": "#/definitions/OSMPDN"
        },
        "BPDD": {
            "$ref": "#/definitions/BPDD"
        },
        "BPDN": {
            "$ref": "#/definitions/BPDN"
        },
        "LENS_MATERIAL": {
            "$ref": "#/definitions/LENS_MATERIAL"
        },
        "LENS_TREATMENTS": {
            "$ref": "#/definitions/LENS_TREATMENTS"
        },
        "CTLMANUFACTUREROD": {
            "$ref": "#/definitions/CTLMANUFACTUREROD"
        },
        "CTLMANUFACTUREROS": {
            "$ref": "#/definitions/CTLMANUFACTUREROS"
        },
        "CTLSUPPLIEROD": {
            "$ref": "#/definitions/CTLSUPPLIEROD"
        },
        "CTLSUPPLIEROS": {
            "$ref": "#/definitions/CTLSUPPLIEROS"
        },
        "CTLBRANDOD": {
            "$ref": "#/definitions/CTLBRANDOD"
        },
        "CTLBRANDOS": {
            "$ref": "#/definitions/CTLBRANDOS"
        },
        "CTLODQUANTITY": {
            "$ref": "#/definitions/CTLODQUANTITY"
        },
        "CTLOSQUANTITY": {
            "$ref": "#/definitions/CTLOSQUANTITY"
        },
        "ODDIAM": {
            "$ref": "#/definitions/ODDIAM"
        },
        "ODBC": {
            "$ref": "#/definitions/ODBC"
        },
        "OSDIAM": {
            "$ref": "#/definitions/OSDIAM"
        },
        "OSBC": {
            "$ref": "#/definitions/OSBC"
        },
        "RXCOMMENTS": {
            "$ref": "#/definitions/RXCOMMENTS"
        },
        "COMMENTS": {
            "$ref": "#/definitions/COMMENTS"
        }
    }
}
 module.exports = schema