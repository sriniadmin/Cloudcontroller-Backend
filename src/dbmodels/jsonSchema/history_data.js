let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for history_data table",
    "$id": "history_data",
    "title": "history_data",
    "type": "object",
    "required": [
        "id",
        "pid",
        "usertext12",
        "usertext13",
        "usertext14",
        "usertext15",
        "usertext16",
        "usertext17",
        "usertext18",
        "usertext19",
        "usertext20",
        "usertext21",
        "usertext22",
        "usertext23",
        "usertext24",
        "usertext25",
        "usertext26",
        "usertext27",
        "usertext28",
        "usertext29",
        "usertext30"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 7.307508186654515e+47
        },
        "coffee": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "tobacco": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "alcohol": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "sleep_patterns": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "exercise_patterns": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "seatbelt_use": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "counseling": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "hazardous_activities": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "recreational_drugs": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "last_breast_exam": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_mammogram": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_gynocological_exam": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_rectal_exam": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_prostate_exam": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_physical_exam": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_sigmoidoscopy_colonoscopy": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_ecg": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_cardiac_echo": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_retinal": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_fluvax": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_pneuvax": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_ldl": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_hemoglobin": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_psa": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "last_exam_results": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "history_mother": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "dc_mother": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "history_father": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "dc_father": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "history_siblings": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "dc_siblings": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "history_offspring": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "dc_offspring": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "history_spouse": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "dc_spouse": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "relatives_cancer": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "relatives_tuberculosis": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "relatives_diabetes": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "relatives_high_blood_pressure": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "relatives_heart_problems": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "relatives_stroke": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "relatives_epilepsy": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "relatives_mental_illness": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "relatives_suicide": {
            "type": "string",
            "maxLength": 4294967295,
            "default": null
        },
        "cataract_surgery": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "tonsillectomy": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "cholecystestomy": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "heart_surgery": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "hysterectomy": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "hernia_repair": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "hip_replacement": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "knee_replacement": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "appendectomy": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "name_1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "value_1": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "name_2": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "value_2": {
            "type": "string",
            "maxLength": 255,
            "default": null
        },
        "additional_history": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "exams": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "usertext11": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "usertext12": {
            "type": "string",
            "maxLength": 255
        },
        "usertext13": {
            "type": "string",
            "maxLength": 255
        },
        "usertext14": {
            "type": "string",
            "maxLength": 255
        },
        "usertext15": {
            "type": "string",
            "maxLength": 255
        },
        "usertext16": {
            "type": "string",
            "maxLength": 255
        },
        "usertext17": {
            "type": "string",
            "maxLength": 255
        },
        "usertext18": {
            "type": "string",
            "maxLength": 255
        },
        "usertext19": {
            "type": "string",
            "maxLength": 255
        },
        "usertext20": {
            "type": "string",
            "maxLength": 255
        },
        "usertext21": {
            "type": "string",
            "maxLength": 255
        },
        "usertext22": {
            "type": "string",
            "maxLength": 255
        },
        "usertext23": {
            "type": "string",
            "maxLength": 255
        },
        "usertext24": {
            "type": "string",
            "maxLength": 255
        },
        "usertext25": {
            "type": "string",
            "maxLength": 255
        },
        "usertext26": {
            "type": "string",
            "maxLength": 255
        },
        "usertext27": {
            "type": "string",
            "maxLength": 255
        },
        "usertext28": {
            "type": "string",
            "maxLength": 255
        },
        "usertext29": {
            "type": "string",
            "maxLength": 255
        },
        "usertext30": {
            "type": "string",
            "maxLength": 255
        },
        "userdate11": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "userdate12": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "userdate13": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "userdate14": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "userdate15": {
            "type": "string",
            "format": "date",
            "default": null
        },
        "userarea11": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        },
        "userarea12": {
            "type": "string",
            "maxLength": 65535,
            "default": null
        }
    },
    "properties": {
        "id": {
            "$ref": "#/definitions/id"
        },
        "coffee": {
            "$ref": "#/definitions/coffee"
        },
        "tobacco": {
            "$ref": "#/definitions/tobacco"
        },
        "alcohol": {
            "$ref": "#/definitions/alcohol"
        },
        "sleep_patterns": {
            "$ref": "#/definitions/sleep_patterns"
        },
        "exercise_patterns": {
            "$ref": "#/definitions/exercise_patterns"
        },
        "seatbelt_use": {
            "$ref": "#/definitions/seatbelt_use"
        },
        "counseling": {
            "$ref": "#/definitions/counseling"
        },
        "hazardous_activities": {
            "$ref": "#/definitions/hazardous_activities"
        },
        "recreational_drugs": {
            "$ref": "#/definitions/recreational_drugs"
        },
        "last_breast_exam": {
            "$ref": "#/definitions/last_breast_exam"
        },
        "last_mammogram": {
            "$ref": "#/definitions/last_mammogram"
        },
        "last_gynocological_exam": {
            "$ref": "#/definitions/last_gynocological_exam"
        },
        "last_rectal_exam": {
            "$ref": "#/definitions/last_rectal_exam"
        },
        "last_prostate_exam": {
            "$ref": "#/definitions/last_prostate_exam"
        },
        "last_physical_exam": {
            "$ref": "#/definitions/last_physical_exam"
        },
        "last_sigmoidoscopy_colonoscopy": {
            "$ref": "#/definitions/last_sigmoidoscopy_colonoscopy"
        },
        "last_ecg": {
            "$ref": "#/definitions/last_ecg"
        },
        "last_cardiac_echo": {
            "$ref": "#/definitions/last_cardiac_echo"
        },
        "last_retinal": {
            "$ref": "#/definitions/last_retinal"
        },
        "last_fluvax": {
            "$ref": "#/definitions/last_fluvax"
        },
        "last_pneuvax": {
            "$ref": "#/definitions/last_pneuvax"
        },
        "last_ldl": {
            "$ref": "#/definitions/last_ldl"
        },
        "last_hemoglobin": {
            "$ref": "#/definitions/last_hemoglobin"
        },
        "last_psa": {
            "$ref": "#/definitions/last_psa"
        },
        "last_exam_results": {
            "$ref": "#/definitions/last_exam_results"
        },
        "history_mother": {
            "$ref": "#/definitions/history_mother"
        },
        "dc_mother": {
            "$ref": "#/definitions/dc_mother"
        },
        "history_father": {
            "$ref": "#/definitions/history_father"
        },
        "dc_father": {
            "$ref": "#/definitions/dc_father"
        },
        "history_siblings": {
            "$ref": "#/definitions/history_siblings"
        },
        "dc_siblings": {
            "$ref": "#/definitions/dc_siblings"
        },
        "history_offspring": {
            "$ref": "#/definitions/history_offspring"
        },
        "dc_offspring": {
            "$ref": "#/definitions/dc_offspring"
        },
        "history_spouse": {
            "$ref": "#/definitions/history_spouse"
        },
        "dc_spouse": {
            "$ref": "#/definitions/dc_spouse"
        },
        "relatives_cancer": {
            "$ref": "#/definitions/relatives_cancer"
        },
        "relatives_tuberculosis": {
            "$ref": "#/definitions/relatives_tuberculosis"
        },
        "relatives_diabetes": {
            "$ref": "#/definitions/relatives_diabetes"
        },
        "relatives_high_blood_pressure": {
            "$ref": "#/definitions/relatives_high_blood_pressure"
        },
        "relatives_heart_problems": {
            "$ref": "#/definitions/relatives_heart_problems"
        },
        "relatives_stroke": {
            "$ref": "#/definitions/relatives_stroke"
        },
        "relatives_epilepsy": {
            "$ref": "#/definitions/relatives_epilepsy"
        },
        "relatives_mental_illness": {
            "$ref": "#/definitions/relatives_mental_illness"
        },
        "relatives_suicide": {
            "$ref": "#/definitions/relatives_suicide"
        },
        "cataract_surgery": {
            "$ref": "#/definitions/cataract_surgery"
        },
        "tonsillectomy": {
            "$ref": "#/definitions/tonsillectomy"
        },
        "cholecystestomy": {
            "$ref": "#/definitions/cholecystestomy"
        },
        "heart_surgery": {
            "$ref": "#/definitions/heart_surgery"
        },
        "hysterectomy": {
            "$ref": "#/definitions/hysterectomy"
        },
        "hernia_repair": {
            "$ref": "#/definitions/hernia_repair"
        },
        "hip_replacement": {
            "$ref": "#/definitions/hip_replacement"
        },
        "knee_replacement": {
            "$ref": "#/definitions/knee_replacement"
        },
        "appendectomy": {
            "$ref": "#/definitions/appendectomy"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "pid": {
            "$ref": "#/definitions/pid"
        },
        "name_1": {
            "$ref": "#/definitions/name_1"
        },
        "value_1": {
            "$ref": "#/definitions/value_1"
        },
        "name_2": {
            "$ref": "#/definitions/name_2"
        },
        "value_2": {
            "$ref": "#/definitions/value_2"
        },
        "additional_history": {
            "$ref": "#/definitions/additional_history"
        },
        "exams": {
            "$ref": "#/definitions/exams"
        },
        "usertext11": {
            "$ref": "#/definitions/usertext11"
        },
        "usertext12": {
            "$ref": "#/definitions/usertext12"
        },
        "usertext13": {
            "$ref": "#/definitions/usertext13"
        },
        "usertext14": {
            "$ref": "#/definitions/usertext14"
        },
        "usertext15": {
            "$ref": "#/definitions/usertext15"
        },
        "usertext16": {
            "$ref": "#/definitions/usertext16"
        },
        "usertext17": {
            "$ref": "#/definitions/usertext17"
        },
        "usertext18": {
            "$ref": "#/definitions/usertext18"
        },
        "usertext19": {
            "$ref": "#/definitions/usertext19"
        },
        "usertext20": {
            "$ref": "#/definitions/usertext20"
        },
        "usertext21": {
            "$ref": "#/definitions/usertext21"
        },
        "usertext22": {
            "$ref": "#/definitions/usertext22"
        },
        "usertext23": {
            "$ref": "#/definitions/usertext23"
        },
        "usertext24": {
            "$ref": "#/definitions/usertext24"
        },
        "usertext25": {
            "$ref": "#/definitions/usertext25"
        },
        "usertext26": {
            "$ref": "#/definitions/usertext26"
        },
        "usertext27": {
            "$ref": "#/definitions/usertext27"
        },
        "usertext28": {
            "$ref": "#/definitions/usertext28"
        },
        "usertext29": {
            "$ref": "#/definitions/usertext29"
        },
        "usertext30": {
            "$ref": "#/definitions/usertext30"
        },
        "userdate11": {
            "$ref": "#/definitions/userdate11"
        },
        "userdate12": {
            "$ref": "#/definitions/userdate12"
        },
        "userdate13": {
            "$ref": "#/definitions/userdate13"
        },
        "userdate14": {
            "$ref": "#/definitions/userdate14"
        },
        "userdate15": {
            "$ref": "#/definitions/userdate15"
        },
        "userarea11": {
            "$ref": "#/definitions/userarea11"
        },
        "userarea12": {
            "$ref": "#/definitions/userarea12"
        }
    }
}
 module.exports = schema