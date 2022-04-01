let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for clinical_rules table",
    "$id": "clinical_rules",
    "title": "clinical_rules",
    "type": "object",
    "required": [
        "id",
        "pid",
        "cqm_nqf_code",
        "cqm_pqri_code",
        "amc_code",
        "amc_code_2014",
        "developer",
        "funding_source",
        "release_version",
        "web_reference",
        "access_control"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "description": "Unique and maps to list_options list clinical_rules",
            "type": "string",
            "maxLength": 31,
            "minimum": 1
        },
        "pid": {
            "$comment": "primary key",
            "description": "0 is default for all patients, while > 0 is id from patient_data table",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "active_alert_flag": {
            "description": "Active Alert Widget Module flag - note not yet utilized",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "passive_alert_flag": {
            "description": "Passive Alert Widget Module flag",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "cqm_flag": {
            "description": "Clinical Quality Measure flag (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "cqm_2011_flag": {
            "description": "2011 Clinical Quality Measure flag (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "cqm_2014_flag": {
            "description": "2014 Clinical Quality Measure flag (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "cqm_nqf_code": {
            "description": "Clinical Quality Measure NQF identifier",
            "type": "string",
            "maxLength": 10
        },
        "cqm_pqri_code": {
            "description": "Clinical Quality Measure PQRI identifier",
            "type": "string",
            "maxLength": 10
        },
        "amc_flag": {
            "description": "Automated Measure Calculation flag (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "amc_2011_flag": {
            "description": "2011 Automated Measure Calculation flag for (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "amc_2014_flag": {
            "description": "2014 Automated Measure Calculation flag for (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "amc_code": {
            "description": "Automated Measure Calculation indentifier (MU rule)",
            "type": "string",
            "maxLength": 10
        },
        "amc_code_2014": {
            "description": "Automated Measure Calculation 2014 indentifier (MU rule)",
            "type": "string",
            "maxLength": 30
        },
        "amc_2014_stage1_flag": {
            "description": "2014 Stage 1 - Automated Measure Calculation flag for (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "amc_2014_stage2_flag": {
            "description": "2014 Stage 2 - Automated Measure Calculation flag for (unable to customize per patient)",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "patient_reminder_flag": {
            "description": "Clinical Reminder Module flag",
            "type": "integer",
            "minimum": -128,
            "maximum": 127,
            "default": null
        },
        "developer": {
            "description": "Clinical Rule Developer",
            "type": "string",
            "maxLength": 255
        },
        "funding_source": {
            "description": "Clinical Rule Funding Source",
            "type": "string",
            "maxLength": 255
        },
        "release_version": {
            "description": "Clinical Rule Release Version",
            "type": "string",
            "maxLength": 255
        },
        "web_reference": {
            "description": "Clinical Rule Web Reference",
            "type": "string",
            "maxLength": 255
        },
        "access_control": {
            "description": "ACO link for access control",
            "type": "string",
            "maxLength": 255,
            "default": "patients:med"
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "active_alert_flag": {
            "$ref": "#/definitions/active_alert_flag"
        },
        "passive_alert_flag": {
            "$ref": "#/definitions/passive_alert_flag"
        },
        "cqm_flag": {
            "$ref": "#/definitions/cqm_flag"
        },
        "cqm_2011_flag": {
            "$ref": "#/definitions/cqm_2011_flag"
        },
        "cqm_2014_flag": {
            "$ref": "#/definitions/cqm_2014_flag"
        },
        "cqm_nqf_code": {
            "$ref": "#/definitions/cqm_nqf_code"
        },
        "cqm_pqri_code": {
            "$ref": "#/definitions/cqm_pqri_code"
        },
        "amc_flag": {
            "$ref": "#/definitions/amc_flag"
        },
        "amc_2011_flag": {
            "$ref": "#/definitions/amc_2011_flag"
        },
        "amc_2014_flag": {
            "$ref": "#/definitions/amc_2014_flag"
        },
        "amc_code": {
            "$ref": "#/definitions/amc_code"
        },
        "amc_code_2014": {
            "$ref": "#/definitions/amc_code_2014"
        },
        "amc_2014_stage1_flag": {
            "$ref": "#/definitions/amc_2014_stage1_flag"
        },
        "amc_2014_stage2_flag": {
            "$ref": "#/definitions/amc_2014_stage2_flag"
        },
        "patient_reminder_flag": {
            "$ref": "#/definitions/patient_reminder_flag"
        },
        "developer": {
            "$ref": "#/definitions/developer"
        },
        "funding_source": {
            "$ref": "#/definitions/funding_source"
        },
        "release_version": {
            "$ref": "#/definitions/release_version"
        },
        "web_reference": {
            "$ref": "#/definitions/web_reference"
        },
        "access_control": {
            "$ref": "#/definitions/access_control"
        }
    }
}
 module.exports = schema