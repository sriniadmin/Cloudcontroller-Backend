let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_eye_neuro table",
    "$id": "form_eye_neuro",
    "title": "form_eye_neuro",
    "type": "object",
    "required": [
        "id",
        "ACT",
        "MOTILITYNORMAL"
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
        "ACT": {
            "type": "string",
            "maxLength": 3,
            "default": "on"
        },
        "ACT5CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT1CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT2CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT3CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT4CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT6CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT7CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT8CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT9CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT10CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT11CCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT1SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT2SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT3SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT4SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT5SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT6SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT7SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT8SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT9SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT10SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT11SCDIST": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT1SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT2SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT3SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT4SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT5CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT6CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT7CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT8CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT9CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT10CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT11CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT5SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT6SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT7SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT8SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT9SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT10SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT11SCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT1CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT2CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT3CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ACT4CCNEAR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "MOTILITYNORMAL": {
            "type": "string",
            "maxLength": 3,
            "default": "on"
        },
        "MOTILITY_RS": {
            "type": "string",
            "maxLength": 1,
            "default": "0"
        },
        "MOTILITY_RI": {
            "type": "string",
            "maxLength": 1,
            "default": "0"
        },
        "MOTILITY_RR": {
            "type": "string",
            "maxLength": 1,
            "default": "0"
        },
        "MOTILITY_RL": {
            "type": "string",
            "maxLength": 1,
            "default": "0"
        },
        "MOTILITY_LS": {
            "type": "string",
            "maxLength": 1,
            "default": "0"
        },
        "MOTILITY_LI": {
            "type": "string",
            "maxLength": 1,
            "default": "0"
        },
        "MOTILITY_LR": {
            "type": "string",
            "maxLength": 1,
            "default": "0"
        },
        "MOTILITY_LL": {
            "type": "string",
            "maxLength": 1,
            "default": "0"
        },
        "MOTILITY_RRSO": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "MOTILITY_RLSO": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "MOTILITY_RRIO": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "MOTILITY_RLIO": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "MOTILITY_LRSO": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "MOTILITY_LLSO": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "MOTILITY_LRIO": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "MOTILITY_LLIO": {
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "NEURO_COMMENTS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "STEREOPSIS": {
            "type": "string",
            "maxLength": 25,
            "default": null
        },
        "ODNPA": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSNPA": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "VERTFUSAMPS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "DIVERGENCEAMPS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "NPC": {
            "type": "string",
            "maxLength": 10,
            "default": null
        },
        "DACCDIST": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "DACCNEAR": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "CACCDIST": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "CACCNEAR": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "ODCOLOR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSCOLOR": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODCOINS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "OSCOINS": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "ODREDDESAT": {
            "type": "string",
            "maxLength": 20,
            "default": null
        },
        "OSREDDESAT": {
            "type": "string",
            "maxLength": 20,
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
        "ACT": {
            "$ref": "#/definitions/ACT"
        },
        "ACT5CCDIST": {
            "$ref": "#/definitions/ACT5CCDIST"
        },
        "ACT1CCDIST": {
            "$ref": "#/definitions/ACT1CCDIST"
        },
        "ACT2CCDIST": {
            "$ref": "#/definitions/ACT2CCDIST"
        },
        "ACT3CCDIST": {
            "$ref": "#/definitions/ACT3CCDIST"
        },
        "ACT4CCDIST": {
            "$ref": "#/definitions/ACT4CCDIST"
        },
        "ACT6CCDIST": {
            "$ref": "#/definitions/ACT6CCDIST"
        },
        "ACT7CCDIST": {
            "$ref": "#/definitions/ACT7CCDIST"
        },
        "ACT8CCDIST": {
            "$ref": "#/definitions/ACT8CCDIST"
        },
        "ACT9CCDIST": {
            "$ref": "#/definitions/ACT9CCDIST"
        },
        "ACT10CCDIST": {
            "$ref": "#/definitions/ACT10CCDIST"
        },
        "ACT11CCDIST": {
            "$ref": "#/definitions/ACT11CCDIST"
        },
        "ACT1SCDIST": {
            "$ref": "#/definitions/ACT1SCDIST"
        },
        "ACT2SCDIST": {
            "$ref": "#/definitions/ACT2SCDIST"
        },
        "ACT3SCDIST": {
            "$ref": "#/definitions/ACT3SCDIST"
        },
        "ACT4SCDIST": {
            "$ref": "#/definitions/ACT4SCDIST"
        },
        "ACT5SCDIST": {
            "$ref": "#/definitions/ACT5SCDIST"
        },
        "ACT6SCDIST": {
            "$ref": "#/definitions/ACT6SCDIST"
        },
        "ACT7SCDIST": {
            "$ref": "#/definitions/ACT7SCDIST"
        },
        "ACT8SCDIST": {
            "$ref": "#/definitions/ACT8SCDIST"
        },
        "ACT9SCDIST": {
            "$ref": "#/definitions/ACT9SCDIST"
        },
        "ACT10SCDIST": {
            "$ref": "#/definitions/ACT10SCDIST"
        },
        "ACT11SCDIST": {
            "$ref": "#/definitions/ACT11SCDIST"
        },
        "ACT1SCNEAR": {
            "$ref": "#/definitions/ACT1SCNEAR"
        },
        "ACT2SCNEAR": {
            "$ref": "#/definitions/ACT2SCNEAR"
        },
        "ACT3SCNEAR": {
            "$ref": "#/definitions/ACT3SCNEAR"
        },
        "ACT4SCNEAR": {
            "$ref": "#/definitions/ACT4SCNEAR"
        },
        "ACT5CCNEAR": {
            "$ref": "#/definitions/ACT5CCNEAR"
        },
        "ACT6CCNEAR": {
            "$ref": "#/definitions/ACT6CCNEAR"
        },
        "ACT7CCNEAR": {
            "$ref": "#/definitions/ACT7CCNEAR"
        },
        "ACT8CCNEAR": {
            "$ref": "#/definitions/ACT8CCNEAR"
        },
        "ACT9CCNEAR": {
            "$ref": "#/definitions/ACT9CCNEAR"
        },
        "ACT10CCNEAR": {
            "$ref": "#/definitions/ACT10CCNEAR"
        },
        "ACT11CCNEAR": {
            "$ref": "#/definitions/ACT11CCNEAR"
        },
        "ACT5SCNEAR": {
            "$ref": "#/definitions/ACT5SCNEAR"
        },
        "ACT6SCNEAR": {
            "$ref": "#/definitions/ACT6SCNEAR"
        },
        "ACT7SCNEAR": {
            "$ref": "#/definitions/ACT7SCNEAR"
        },
        "ACT8SCNEAR": {
            "$ref": "#/definitions/ACT8SCNEAR"
        },
        "ACT9SCNEAR": {
            "$ref": "#/definitions/ACT9SCNEAR"
        },
        "ACT10SCNEAR": {
            "$ref": "#/definitions/ACT10SCNEAR"
        },
        "ACT11SCNEAR": {
            "$ref": "#/definitions/ACT11SCNEAR"
        },
        "ACT1CCNEAR": {
            "$ref": "#/definitions/ACT1CCNEAR"
        },
        "ACT2CCNEAR": {
            "$ref": "#/definitions/ACT2CCNEAR"
        },
        "ACT3CCNEAR": {
            "$ref": "#/definitions/ACT3CCNEAR"
        },
        "ACT4CCNEAR": {
            "$ref": "#/definitions/ACT4CCNEAR"
        },
        "MOTILITYNORMAL": {
            "$ref": "#/definitions/MOTILITYNORMAL"
        },
        "MOTILITY_RS": {
            "$ref": "#/definitions/MOTILITY_RS"
        },
        "MOTILITY_RI": {
            "$ref": "#/definitions/MOTILITY_RI"
        },
        "MOTILITY_RR": {
            "$ref": "#/definitions/MOTILITY_RR"
        },
        "MOTILITY_RL": {
            "$ref": "#/definitions/MOTILITY_RL"
        },
        "MOTILITY_LS": {
            "$ref": "#/definitions/MOTILITY_LS"
        },
        "MOTILITY_LI": {
            "$ref": "#/definitions/MOTILITY_LI"
        },
        "MOTILITY_LR": {
            "$ref": "#/definitions/MOTILITY_LR"
        },
        "MOTILITY_LL": {
            "$ref": "#/definitions/MOTILITY_LL"
        },
        "MOTILITY_RRSO": {
            "$ref": "#/definitions/MOTILITY_RRSO"
        },
        "MOTILITY_RLSO": {
            "$ref": "#/definitions/MOTILITY_RLSO"
        },
        "MOTILITY_RRIO": {
            "$ref": "#/definitions/MOTILITY_RRIO"
        },
        "MOTILITY_RLIO": {
            "$ref": "#/definitions/MOTILITY_RLIO"
        },
        "MOTILITY_LRSO": {
            "$ref": "#/definitions/MOTILITY_LRSO"
        },
        "MOTILITY_LLSO": {
            "$ref": "#/definitions/MOTILITY_LLSO"
        },
        "MOTILITY_LRIO": {
            "$ref": "#/definitions/MOTILITY_LRIO"
        },
        "MOTILITY_LLIO": {
            "$ref": "#/definitions/MOTILITY_LLIO"
        },
        "NEURO_COMMENTS": {
            "$ref": "#/definitions/NEURO_COMMENTS"
        },
        "STEREOPSIS": {
            "$ref": "#/definitions/STEREOPSIS"
        },
        "ODNPA": {
            "$ref": "#/definitions/ODNPA"
        },
        "OSNPA": {
            "$ref": "#/definitions/OSNPA"
        },
        "VERTFUSAMPS": {
            "$ref": "#/definitions/VERTFUSAMPS"
        },
        "DIVERGENCEAMPS": {
            "$ref": "#/definitions/DIVERGENCEAMPS"
        },
        "NPC": {
            "$ref": "#/definitions/NPC"
        },
        "DACCDIST": {
            "$ref": "#/definitions/DACCDIST"
        },
        "DACCNEAR": {
            "$ref": "#/definitions/DACCNEAR"
        },
        "CACCDIST": {
            "$ref": "#/definitions/CACCDIST"
        },
        "CACCNEAR": {
            "$ref": "#/definitions/CACCNEAR"
        },
        "ODCOLOR": {
            "$ref": "#/definitions/ODCOLOR"
        },
        "OSCOLOR": {
            "$ref": "#/definitions/OSCOLOR"
        },
        "ODCOINS": {
            "$ref": "#/definitions/ODCOINS"
        },
        "OSCOINS": {
            "$ref": "#/definitions/OSCOINS"
        },
        "ODREDDESAT": {
            "$ref": "#/definitions/ODREDDESAT"
        },
        "OSREDDESAT": {
            "$ref": "#/definitions/OSREDDESAT"
        }
    }
}
 module.exports = schema