let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_reviewofs table",
    "$id": "form_reviewofs",
    "title": "form_reviewofs",
    "type": "object",
    "required": [
        "id"
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
            "format": "date-time",
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
        "fever": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "chills": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "night_sweats": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "weight_loss": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "poor_appetite": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "insomnia": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "fatigued": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "depressed": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "hyperactive": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "exposure_to_foreign_countries": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "cataracts": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "cataract_surgery": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "glaucoma": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "double_vision": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "blurred_vision": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "poor_hearing": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "headaches": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "ringing_in_ears": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "bloody_nose": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "sinusitis": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "sinus_surgery": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "dry_mouth": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "strep_throat": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "tonsillectomy": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "swollen_lymph_nodes": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "throat_cancer": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "throat_cancer_surgery": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "heart_attack": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "irregular_heart_beat": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "chest_pains": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "shortness_of_breath": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "high_blood_pressure": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "heart_failure": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "poor_circulation": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "vascular_surgery": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "cardiac_catheterization": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "coronary_artery_bypass": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "heart_transplant": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "stress_test": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "emphysema": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "chronic_bronchitis": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "interstitial_lung_disease": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "shortness_of_breath_2": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "lung_cancer": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "lung_cancer_surgery": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "pheumothorax": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "stomach_pains": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "peptic_ulcer_disease": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "gastritis": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "endoscopy": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "polyps": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "colonoscopy": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "colon_cancer": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "colon_cancer_surgery": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "ulcerative_colitis": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "crohns_disease": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "appendectomy": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "divirticulitis": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "divirticulitis_surgery": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "gall_stones": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "cholecystectomy": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "hepatitis": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "cirrhosis_of_the_liver": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "splenectomy": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "kidney_failure": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "kidney_stones": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "kidney_cancer": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "kidney_infections": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "bladder_infections": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "bladder_cancer": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "prostate_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "prostate_cancer": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "kidney_transplant": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "sexually_transmitted_disease": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "burning_with_urination": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "discharge_from_urethra": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "rashes": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "infections": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "ulcerations": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "pemphigus": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "herpes": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "osetoarthritis": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "rheumotoid_arthritis": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "lupus": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "ankylosing_sondlilitis": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "swollen_joints": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "stiff_joints": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "broken_bones": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "neck_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "back_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "back_surgery": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "scoliosis": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "herniated_disc": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "shoulder_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "elbow_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "wrist_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "hand_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "hip_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "knee_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "ankle_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "foot_problems": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "insulin_dependent_diabetes": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "noninsulin_dependent_diabetes": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "hypothyroidism": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "hyperthyroidism": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "cushing_syndrom": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "addison_syndrom": {
            "type": "string",
            "maxLength": 5,
            "default": null
        },
        "additional_notes": {
            "type": "string",
            "maxLength": 4294967295,
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
        "fever": {
            "$ref": "#/definitions/fever"
        },
        "chills": {
            "$ref": "#/definitions/chills"
        },
        "night_sweats": {
            "$ref": "#/definitions/night_sweats"
        },
        "weight_loss": {
            "$ref": "#/definitions/weight_loss"
        },
        "poor_appetite": {
            "$ref": "#/definitions/poor_appetite"
        },
        "insomnia": {
            "$ref": "#/definitions/insomnia"
        },
        "fatigued": {
            "$ref": "#/definitions/fatigued"
        },
        "depressed": {
            "$ref": "#/definitions/depressed"
        },
        "hyperactive": {
            "$ref": "#/definitions/hyperactive"
        },
        "exposure_to_foreign_countries": {
            "$ref": "#/definitions/exposure_to_foreign_countries"
        },
        "cataracts": {
            "$ref": "#/definitions/cataracts"
        },
        "cataract_surgery": {
            "$ref": "#/definitions/cataract_surgery"
        },
        "glaucoma": {
            "$ref": "#/definitions/glaucoma"
        },
        "double_vision": {
            "$ref": "#/definitions/double_vision"
        },
        "blurred_vision": {
            "$ref": "#/definitions/blurred_vision"
        },
        "poor_hearing": {
            "$ref": "#/definitions/poor_hearing"
        },
        "headaches": {
            "$ref": "#/definitions/headaches"
        },
        "ringing_in_ears": {
            "$ref": "#/definitions/ringing_in_ears"
        },
        "bloody_nose": {
            "$ref": "#/definitions/bloody_nose"
        },
        "sinusitis": {
            "$ref": "#/definitions/sinusitis"
        },
        "sinus_surgery": {
            "$ref": "#/definitions/sinus_surgery"
        },
        "dry_mouth": {
            "$ref": "#/definitions/dry_mouth"
        },
        "strep_throat": {
            "$ref": "#/definitions/strep_throat"
        },
        "tonsillectomy": {
            "$ref": "#/definitions/tonsillectomy"
        },
        "swollen_lymph_nodes": {
            "$ref": "#/definitions/swollen_lymph_nodes"
        },
        "throat_cancer": {
            "$ref": "#/definitions/throat_cancer"
        },
        "throat_cancer_surgery": {
            "$ref": "#/definitions/throat_cancer_surgery"
        },
        "heart_attack": {
            "$ref": "#/definitions/heart_attack"
        },
        "irregular_heart_beat": {
            "$ref": "#/definitions/irregular_heart_beat"
        },
        "chest_pains": {
            "$ref": "#/definitions/chest_pains"
        },
        "shortness_of_breath": {
            "$ref": "#/definitions/shortness_of_breath"
        },
        "high_blood_pressure": {
            "$ref": "#/definitions/high_blood_pressure"
        },
        "heart_failure": {
            "$ref": "#/definitions/heart_failure"
        },
        "poor_circulation": {
            "$ref": "#/definitions/poor_circulation"
        },
        "vascular_surgery": {
            "$ref": "#/definitions/vascular_surgery"
        },
        "cardiac_catheterization": {
            "$ref": "#/definitions/cardiac_catheterization"
        },
        "coronary_artery_bypass": {
            "$ref": "#/definitions/coronary_artery_bypass"
        },
        "heart_transplant": {
            "$ref": "#/definitions/heart_transplant"
        },
        "stress_test": {
            "$ref": "#/definitions/stress_test"
        },
        "emphysema": {
            "$ref": "#/definitions/emphysema"
        },
        "chronic_bronchitis": {
            "$ref": "#/definitions/chronic_bronchitis"
        },
        "interstitial_lung_disease": {
            "$ref": "#/definitions/interstitial_lung_disease"
        },
        "shortness_of_breath_2": {
            "$ref": "#/definitions/shortness_of_breath_2"
        },
        "lung_cancer": {
            "$ref": "#/definitions/lung_cancer"
        },
        "lung_cancer_surgery": {
            "$ref": "#/definitions/lung_cancer_surgery"
        },
        "pheumothorax": {
            "$ref": "#/definitions/pheumothorax"
        },
        "stomach_pains": {
            "$ref": "#/definitions/stomach_pains"
        },
        "peptic_ulcer_disease": {
            "$ref": "#/definitions/peptic_ulcer_disease"
        },
        "gastritis": {
            "$ref": "#/definitions/gastritis"
        },
        "endoscopy": {
            "$ref": "#/definitions/endoscopy"
        },
        "polyps": {
            "$ref": "#/definitions/polyps"
        },
        "colonoscopy": {
            "$ref": "#/definitions/colonoscopy"
        },
        "colon_cancer": {
            "$ref": "#/definitions/colon_cancer"
        },
        "colon_cancer_surgery": {
            "$ref": "#/definitions/colon_cancer_surgery"
        },
        "ulcerative_colitis": {
            "$ref": "#/definitions/ulcerative_colitis"
        },
        "crohns_disease": {
            "$ref": "#/definitions/crohns_disease"
        },
        "appendectomy": {
            "$ref": "#/definitions/appendectomy"
        },
        "divirticulitis": {
            "$ref": "#/definitions/divirticulitis"
        },
        "divirticulitis_surgery": {
            "$ref": "#/definitions/divirticulitis_surgery"
        },
        "gall_stones": {
            "$ref": "#/definitions/gall_stones"
        },
        "cholecystectomy": {
            "$ref": "#/definitions/cholecystectomy"
        },
        "hepatitis": {
            "$ref": "#/definitions/hepatitis"
        },
        "cirrhosis_of_the_liver": {
            "$ref": "#/definitions/cirrhosis_of_the_liver"
        },
        "splenectomy": {
            "$ref": "#/definitions/splenectomy"
        },
        "kidney_failure": {
            "$ref": "#/definitions/kidney_failure"
        },
        "kidney_stones": {
            "$ref": "#/definitions/kidney_stones"
        },
        "kidney_cancer": {
            "$ref": "#/definitions/kidney_cancer"
        },
        "kidney_infections": {
            "$ref": "#/definitions/kidney_infections"
        },
        "bladder_infections": {
            "$ref": "#/definitions/bladder_infections"
        },
        "bladder_cancer": {
            "$ref": "#/definitions/bladder_cancer"
        },
        "prostate_problems": {
            "$ref": "#/definitions/prostate_problems"
        },
        "prostate_cancer": {
            "$ref": "#/definitions/prostate_cancer"
        },
        "kidney_transplant": {
            "$ref": "#/definitions/kidney_transplant"
        },
        "sexually_transmitted_disease": {
            "$ref": "#/definitions/sexually_transmitted_disease"
        },
        "burning_with_urination": {
            "$ref": "#/definitions/burning_with_urination"
        },
        "discharge_from_urethra": {
            "$ref": "#/definitions/discharge_from_urethra"
        },
        "rashes": {
            "$ref": "#/definitions/rashes"
        },
        "infections": {
            "$ref": "#/definitions/infections"
        },
        "ulcerations": {
            "$ref": "#/definitions/ulcerations"
        },
        "pemphigus": {
            "$ref": "#/definitions/pemphigus"
        },
        "herpes": {
            "$ref": "#/definitions/herpes"
        },
        "osetoarthritis": {
            "$ref": "#/definitions/osetoarthritis"
        },
        "rheumotoid_arthritis": {
            "$ref": "#/definitions/rheumotoid_arthritis"
        },
        "lupus": {
            "$ref": "#/definitions/lupus"
        },
        "ankylosing_sondlilitis": {
            "$ref": "#/definitions/ankylosing_sondlilitis"
        },
        "swollen_joints": {
            "$ref": "#/definitions/swollen_joints"
        },
        "stiff_joints": {
            "$ref": "#/definitions/stiff_joints"
        },
        "broken_bones": {
            "$ref": "#/definitions/broken_bones"
        },
        "neck_problems": {
            "$ref": "#/definitions/neck_problems"
        },
        "back_problems": {
            "$ref": "#/definitions/back_problems"
        },
        "back_surgery": {
            "$ref": "#/definitions/back_surgery"
        },
        "scoliosis": {
            "$ref": "#/definitions/scoliosis"
        },
        "herniated_disc": {
            "$ref": "#/definitions/herniated_disc"
        },
        "shoulder_problems": {
            "$ref": "#/definitions/shoulder_problems"
        },
        "elbow_problems": {
            "$ref": "#/definitions/elbow_problems"
        },
        "wrist_problems": {
            "$ref": "#/definitions/wrist_problems"
        },
        "hand_problems": {
            "$ref": "#/definitions/hand_problems"
        },
        "hip_problems": {
            "$ref": "#/definitions/hip_problems"
        },
        "knee_problems": {
            "$ref": "#/definitions/knee_problems"
        },
        "ankle_problems": {
            "$ref": "#/definitions/ankle_problems"
        },
        "foot_problems": {
            "$ref": "#/definitions/foot_problems"
        },
        "insulin_dependent_diabetes": {
            "$ref": "#/definitions/insulin_dependent_diabetes"
        },
        "noninsulin_dependent_diabetes": {
            "$ref": "#/definitions/noninsulin_dependent_diabetes"
        },
        "hypothyroidism": {
            "$ref": "#/definitions/hypothyroidism"
        },
        "hyperthyroidism": {
            "$ref": "#/definitions/hyperthyroidism"
        },
        "cushing_syndrom": {
            "$ref": "#/definitions/cushing_syndrom"
        },
        "addison_syndrom": {
            "$ref": "#/definitions/addison_syndrom"
        },
        "additional_notes": {
            "$ref": "#/definitions/additional_notes"
        }
    }
}
 module.exports = schema