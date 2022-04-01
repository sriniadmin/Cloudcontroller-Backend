let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_refraction table",
    "$id": "form_eye_refraction",
    "title": "form_eye_refraction",
    "type": "object",
    "required": [
        "id",
        "BALANCED"
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
        "MRODSPH": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRODCYL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRODAXIS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRODPRISM": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRODBASE": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRODADD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MROSSPH": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MROSCYL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MROSAXIS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MROSPRISM": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "MROSBASE": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "MROSADD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRODNEARSPHERE": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRODNEARCYL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRODNEARAXIS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MRODPRISMNEAR": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "MRODBASENEAR": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MROSNEARSHPERE": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MROSNEARCYL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "MROSNEARAXIS": {
            "type": "string",
            "maxLength": 125,
            "default": null
        },
        "MROSPRISMNEAR": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "MROSBASENEAR": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CRODSPH": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CRODCYL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CRODAXIS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CROSSPH": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CROSCYL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CROSAXIS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CRCOMMENTS": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "BALANCED": {
            "type": "string",
            "maxLength": 2
        },
        "ARODSPH": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ARODCYL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ARODAXIS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "AROSSPH": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "AROSCYL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "AROSAXIS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ARODADD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "AROSADD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ARNEARODVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ARNEAROSVA": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ARODPRISM": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "AROSPRISM": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "CTLODSPH": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLODCYL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLODAXIS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLODBC": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLODDIAM": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLOSSPH": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLOSCYL": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLOSAXIS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLOSBC": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLOSDIAM": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTL_COMMENTS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "CTLMANUFACTUREROD": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "CTLSUPPLIEROD": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "CTLBRANDOD": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "CTLMANUFACTUREROS": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "CTLSUPPLIEROS": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "CTLBRANDOS": {
            "type": "string",
            "maxLength": 50,
            "default": null
        },
        "CTLODADD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "CTLOSADD": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "NVOCHECKED": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ADDCHECKED": {
            "type": "string",
            "maxLength": 25,
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
        "MRODSPH": {
            "$ref": "#/definitions/MRODSPH"
        },
        "MRODCYL": {
            "$ref": "#/definitions/MRODCYL"
        },
        "MRODAXIS": {
            "$ref": "#/definitions/MRODAXIS"
        },
        "MRODPRISM": {
            "$ref": "#/definitions/MRODPRISM"
        },
        "MRODBASE": {
            "$ref": "#/definitions/MRODBASE"
        },
        "MRODADD": {
            "$ref": "#/definitions/MRODADD"
        },
        "MROSSPH": {
            "$ref": "#/definitions/MROSSPH"
        },
        "MROSCYL": {
            "$ref": "#/definitions/MROSCYL"
        },
        "MROSAXIS": {
            "$ref": "#/definitions/MROSAXIS"
        },
        "MROSPRISM": {
            "$ref": "#/definitions/MROSPRISM"
        },
        "MROSBASE": {
            "$ref": "#/definitions/MROSBASE"
        },
        "MROSADD": {
            "$ref": "#/definitions/MROSADD"
        },
        "MRODNEARSPHERE": {
            "$ref": "#/definitions/MRODNEARSPHERE"
        },
        "MRODNEARCYL": {
            "$ref": "#/definitions/MRODNEARCYL"
        },
        "MRODNEARAXIS": {
            "$ref": "#/definitions/MRODNEARAXIS"
        },
        "MRODPRISMNEAR": {
            "$ref": "#/definitions/MRODPRISMNEAR"
        },
        "MRODBASENEAR": {
            "$ref": "#/definitions/MRODBASENEAR"
        },
        "MROSNEARSHPERE": {
            "$ref": "#/definitions/MROSNEARSHPERE"
        },
        "MROSNEARCYL": {
            "$ref": "#/definitions/MROSNEARCYL"
        },
        "MROSNEARAXIS": {
            "$ref": "#/definitions/MROSNEARAXIS"
        },
        "MROSPRISMNEAR": {
            "$ref": "#/definitions/MROSPRISMNEAR"
        },
        "MROSBASENEAR": {
            "$ref": "#/definitions/MROSBASENEAR"
        },
        "CRODSPH": {
            "$ref": "#/definitions/CRODSPH"
        },
        "CRODCYL": {
            "$ref": "#/definitions/CRODCYL"
        },
        "CRODAXIS": {
            "$ref": "#/definitions/CRODAXIS"
        },
        "CROSSPH": {
            "$ref": "#/definitions/CROSSPH"
        },
        "CROSCYL": {
            "$ref": "#/definitions/CROSCYL"
        },
        "CROSAXIS": {
            "$ref": "#/definitions/CROSAXIS"
        },
        "CRCOMMENTS": {
            "$ref": "#/definitions/CRCOMMENTS"
        },
        "BALANCED": {
            "$ref": "#/definitions/BALANCED"
        },
        "ARODSPH": {
            "$ref": "#/definitions/ARODSPH"
        },
        "ARODCYL": {
            "$ref": "#/definitions/ARODCYL"
        },
        "ARODAXIS": {
            "$ref": "#/definitions/ARODAXIS"
        },
        "AROSSPH": {
            "$ref": "#/definitions/AROSSPH"
        },
        "AROSCYL": {
            "$ref": "#/definitions/AROSCYL"
        },
        "AROSAXIS": {
            "$ref": "#/definitions/AROSAXIS"
        },
        "ARODADD": {
            "$ref": "#/definitions/ARODADD"
        },
        "AROSADD": {
            "$ref": "#/definitions/AROSADD"
        },
        "ARNEARODVA": {
            "$ref": "#/definitions/ARNEARODVA"
        },
        "ARNEAROSVA": {
            "$ref": "#/definitions/ARNEAROSVA"
        },
        "ARODPRISM": {
            "$ref": "#/definitions/ARODPRISM"
        },
        "AROSPRISM": {
            "$ref": "#/definitions/AROSPRISM"
        },
        "CTLODSPH": {
            "$ref": "#/definitions/CTLODSPH"
        },
        "CTLODCYL": {
            "$ref": "#/definitions/CTLODCYL"
        },
        "CTLODAXIS": {
            "$ref": "#/definitions/CTLODAXIS"
        },
        "CTLODBC": {
            "$ref": "#/definitions/CTLODBC"
        },
        "CTLODDIAM": {
            "$ref": "#/definitions/CTLODDIAM"
        },
        "CTLOSSPH": {
            "$ref": "#/definitions/CTLOSSPH"
        },
        "CTLOSCYL": {
            "$ref": "#/definitions/CTLOSCYL"
        },
        "CTLOSAXIS": {
            "$ref": "#/definitions/CTLOSAXIS"
        },
        "CTLOSBC": {
            "$ref": "#/definitions/CTLOSBC"
        },
        "CTLOSDIAM": {
            "$ref": "#/definitions/CTLOSDIAM"
        },
        "CTL_COMMENTS": {
            "$ref": "#/definitions/CTL_COMMENTS"
        },
        "CTLMANUFACTUREROD": {
            "$ref": "#/definitions/CTLMANUFACTUREROD"
        },
        "CTLSUPPLIEROD": {
            "$ref": "#/definitions/CTLSUPPLIEROD"
        },
        "CTLBRANDOD": {
            "$ref": "#/definitions/CTLBRANDOD"
        },
        "CTLMANUFACTUREROS": {
            "$ref": "#/definitions/CTLMANUFACTUREROS"
        },
        "CTLSUPPLIEROS": {
            "$ref": "#/definitions/CTLSUPPLIEROS"
        },
        "CTLBRANDOS": {
            "$ref": "#/definitions/CTLBRANDOS"
        },
        "CTLODADD": {
            "$ref": "#/definitions/CTLODADD"
        },
        "CTLOSADD": {
            "$ref": "#/definitions/CTLOSADD"
        },
        "NVOCHECKED": {
            "$ref": "#/definitions/NVOCHECKED"
        },
        "ADDCHECKED": {
            "$ref": "#/definitions/ADDCHECKED"
        }
    }
}
 module.exports = schema