let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_antseg table",
    "$id": "form_eye_antseg",
    "title": "form_eye_antseg",
    "type": "object",
    "required": [
        "id"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "description": "Links to forms.form_id",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47,
            "default": null
        },
        "ODSCHIRMER1": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSSCHIRMER1": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ODSCHIRMER2": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSSCHIRMER2": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ODTBUT": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSTBUT": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSCONJ": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ODCONJ": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODCORNEA": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSCORNEA": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODAC": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSAC": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODLENS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSLENS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODIRIS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSIRIS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "PUPIL_NORMAL": {
            "type": "string",
            "maxLength": 2,
            "default": "1"
        },
        "ODPUPILSIZE1": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ODPUPILSIZE2": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ODPUPILREACTIVITY": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ODAPD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSPUPILSIZE1": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSPUPILSIZE2": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSPUPILREACTIVITY": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSAPD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "DIMODPUPILSIZE1": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "DIMODPUPILSIZE2": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "DIMODPUPILREACTIVITY": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "DIMOSPUPILSIZE1": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "DIMOSPUPILSIZE2": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "DIMOSPUPILREACTIVITY": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "PUPIL_COMMENTS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODKTHICKNESS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSKTHICKNESS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ODGONIO": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "OSGONIO": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ANTSEG_COMMENTS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "ODSCHIRMER1": {
            "$ref": "#/definitions/ODSCHIRMER1"
        },
        "OSSCHIRMER1": {
            "$ref": "#/definitions/OSSCHIRMER1"
        },
        "ODSCHIRMER2": {
            "$ref": "#/definitions/ODSCHIRMER2"
        },
        "OSSCHIRMER2": {
            "$ref": "#/definitions/OSSCHIRMER2"
        },
        "ODTBUT": {
            "$ref": "#/definitions/ODTBUT"
        },
        "OSTBUT": {
            "$ref": "#/definitions/OSTBUT"
        },
        "OSCONJ": {
            "$ref": "#/definitions/OSCONJ"
        },
        "ODCONJ": {
            "$ref": "#/definitions/ODCONJ"
        },
        "ODCORNEA": {
            "$ref": "#/definitions/ODCORNEA"
        },
        "OSCORNEA": {
            "$ref": "#/definitions/OSCORNEA"
        },
        "ODAC": {
            "$ref": "#/definitions/ODAC"
        },
        "OSAC": {
            "$ref": "#/definitions/OSAC"
        },
        "ODLENS": {
            "$ref": "#/definitions/ODLENS"
        },
        "OSLENS": {
            "$ref": "#/definitions/OSLENS"
        },
        "ODIRIS": {
            "$ref": "#/definitions/ODIRIS"
        },
        "OSIRIS": {
            "$ref": "#/definitions/OSIRIS"
        },
        "PUPIL_NORMAL": {
            "$ref": "#/definitions/PUPIL_NORMAL"
        },
        "ODPUPILSIZE1": {
            "$ref": "#/definitions/ODPUPILSIZE1"
        },
        "ODPUPILSIZE2": {
            "$ref": "#/definitions/ODPUPILSIZE2"
        },
        "ODPUPILREACTIVITY": {
            "$ref": "#/definitions/ODPUPILREACTIVITY"
        },
        "ODAPD": {
            "$ref": "#/definitions/ODAPD"
        },
        "OSPUPILSIZE1": {
            "$ref": "#/definitions/OSPUPILSIZE1"
        },
        "OSPUPILSIZE2": {
            "$ref": "#/definitions/OSPUPILSIZE2"
        },
        "OSPUPILREACTIVITY": {
            "$ref": "#/definitions/OSPUPILREACTIVITY"
        },
        "OSAPD": {
            "$ref": "#/definitions/OSAPD"
        },
        "DIMODPUPILSIZE1": {
            "$ref": "#/definitions/DIMODPUPILSIZE1"
        },
        "DIMODPUPILSIZE2": {
            "$ref": "#/definitions/DIMODPUPILSIZE2"
        },
        "DIMODPUPILREACTIVITY": {
            "$ref": "#/definitions/DIMODPUPILREACTIVITY"
        },
        "DIMOSPUPILSIZE1": {
            "$ref": "#/definitions/DIMOSPUPILSIZE1"
        },
        "DIMOSPUPILSIZE2": {
            "$ref": "#/definitions/DIMOSPUPILSIZE2"
        },
        "DIMOSPUPILREACTIVITY": {
            "$ref": "#/definitions/DIMOSPUPILREACTIVITY"
        },
        "PUPIL_COMMENTS": {
            "$ref": "#/definitions/PUPIL_COMMENTS"
        },
        "ODKTHICKNESS": {
            "$ref": "#/definitions/ODKTHICKNESS"
        },
        "OSKTHICKNESS": {
            "$ref": "#/definitions/OSKTHICKNESS"
        },
        "ODGONIO": {
            "$ref": "#/definitions/ODGONIO"
        },
        "OSGONIO": {
            "$ref": "#/definitions/OSGONIO"
        },
        "ANTSEG_COMMENTS": {
            "$ref": "#/definitions/ANTSEG_COMMENTS"
        }
    }
}
 module.exports = schema