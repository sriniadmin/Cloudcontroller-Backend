let schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$comment": "JSON Schema for form_ros table",
    "$id": "form_ros",
    "title": "form_ros",
    "type": "object",
    "required": [
        "id",
        "pid",
        "activity"
    ],
    "definitions": {
        "id": {
            "$comment": "primary key",
            "type": "integer",
            "minimum": 1,
            "maximum": 1.5474250491067253e+26
        },
        "pid": {
            "type": "integer",
            "minimum": -7.307508186654515e+47,
            "maximum": 7.307508186654515e+47
        },
        "activity": {
            "type": "integer",
            "minimum": -1.5474250491067253e+26,
            "maximum": 1.5474250491067253e+26
        },
        "date": {
            "type": "string",
            "format": "date-time",
            "default": null
        },
        "weight_change": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "weakness": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "fatigue": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "anorexia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "fever": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "chills": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "night_sweats": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "insomnia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "irritability": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "heat_or_cold": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "intolerance": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "change_in_vision": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "glaucoma_history": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "eye_pain": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "irritation": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "redness": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "excessive_tearing": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "double_vision": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "blind_spots": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "photophobia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "hearing_loss": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "discharge": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "pain": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "vertigo": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "tinnitus": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "frequent_colds": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "sore_throat": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "sinus_problems": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "post_nasal_drip": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "nosebleed": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "snoring": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "apnea": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "breast_mass": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "breast_discharge": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "biopsy": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "abnormal_mammogram": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "cough": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "sputum": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "shortness_of_breath": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "wheezing": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "hemoptsyis": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "asthma": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "copd": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "chest_pain": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "palpitation": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "syncope": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "pnd": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "doe": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "orthopnea": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "peripheal": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "edema": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "legpain_cramping": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "history_murmur": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "arrythmia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "heart_problem": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "dysphagia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "heartburn": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "bloating": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "belching": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "flatulence": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "nausea": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "vomiting": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "hematemesis": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "gastro_pain": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "food_intolerance": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "hepatitis": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "jaundice": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "hematochezia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "changed_bowel": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "diarrhea": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "constipation": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "polyuria": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "polydypsia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "dysuria": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "hematuria": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "frequency": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "urgency": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "incontinence": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "renal_stones": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "utis": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "hesitancy": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "dribbling": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "stream": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "nocturia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "erections": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "ejaculations": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "g": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "p": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "ap": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "lc": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "mearche": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "menopause": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "lmp": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "f_frequency": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "f_flow": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "f_symptoms": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "abnormal_hair_growth": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "f_hirsutism": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "joint_pain": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "swelling": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "m_redness": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "m_warm": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "m_stiffness": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "muscle": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "m_aches": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "fms": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "arthritis": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "loc": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "seizures": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "stroke": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "tia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "n_numbness": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "n_weakness": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "paralysis": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "intellectual_decline": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "memory_problems": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "dementia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "n_headache": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "s_cancer": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "psoriasis": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "s_acne": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "s_other": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "s_disease": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "p_diagnosis": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "p_medication": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "depression": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "anxiety": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "social_difficulties": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "thyroid_problems": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "diabetes": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "abnormal_blood": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "anemia": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "fh_blood_problems": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "bleeding_problems": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "allergies": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "frequent_illness": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "hiv": {
            "type": "string",
            "maxLength": 3,
            "default": null
        },
        "hai_status": {
            "type": "string",
            "maxLength": 3,
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
        "activity": {
            "$ref": "#/definitions/activity"
        },
        "date": {
            "$ref": "#/definitions/date"
        },
        "weight_change": {
            "$ref": "#/definitions/weight_change"
        },
        "weakness": {
            "$ref": "#/definitions/weakness"
        },
        "fatigue": {
            "$ref": "#/definitions/fatigue"
        },
        "anorexia": {
            "$ref": "#/definitions/anorexia"
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
        "insomnia": {
            "$ref": "#/definitions/insomnia"
        },
        "irritability": {
            "$ref": "#/definitions/irritability"
        },
        "heat_or_cold": {
            "$ref": "#/definitions/heat_or_cold"
        },
        "intolerance": {
            "$ref": "#/definitions/intolerance"
        },
        "change_in_vision": {
            "$ref": "#/definitions/change_in_vision"
        },
        "glaucoma_history": {
            "$ref": "#/definitions/glaucoma_history"
        },
        "eye_pain": {
            "$ref": "#/definitions/eye_pain"
        },
        "irritation": {
            "$ref": "#/definitions/irritation"
        },
        "redness": {
            "$ref": "#/definitions/redness"
        },
        "excessive_tearing": {
            "$ref": "#/definitions/excessive_tearing"
        },
        "double_vision": {
            "$ref": "#/definitions/double_vision"
        },
        "blind_spots": {
            "$ref": "#/definitions/blind_spots"
        },
        "photophobia": {
            "$ref": "#/definitions/photophobia"
        },
        "hearing_loss": {
            "$ref": "#/definitions/hearing_loss"
        },
        "discharge": {
            "$ref": "#/definitions/discharge"
        },
        "pain": {
            "$ref": "#/definitions/pain"
        },
        "vertigo": {
            "$ref": "#/definitions/vertigo"
        },
        "tinnitus": {
            "$ref": "#/definitions/tinnitus"
        },
        "frequent_colds": {
            "$ref": "#/definitions/frequent_colds"
        },
        "sore_throat": {
            "$ref": "#/definitions/sore_throat"
        },
        "sinus_problems": {
            "$ref": "#/definitions/sinus_problems"
        },
        "post_nasal_drip": {
            "$ref": "#/definitions/post_nasal_drip"
        },
        "nosebleed": {
            "$ref": "#/definitions/nosebleed"
        },
        "snoring": {
            "$ref": "#/definitions/snoring"
        },
        "apnea": {
            "$ref": "#/definitions/apnea"
        },
        "breast_mass": {
            "$ref": "#/definitions/breast_mass"
        },
        "breast_discharge": {
            "$ref": "#/definitions/breast_discharge"
        },
        "biopsy": {
            "$ref": "#/definitions/biopsy"
        },
        "abnormal_mammogram": {
            "$ref": "#/definitions/abnormal_mammogram"
        },
        "cough": {
            "$ref": "#/definitions/cough"
        },
        "sputum": {
            "$ref": "#/definitions/sputum"
        },
        "shortness_of_breath": {
            "$ref": "#/definitions/shortness_of_breath"
        },
        "wheezing": {
            "$ref": "#/definitions/wheezing"
        },
        "hemoptsyis": {
            "$ref": "#/definitions/hemoptsyis"
        },
        "asthma": {
            "$ref": "#/definitions/asthma"
        },
        "copd": {
            "$ref": "#/definitions/copd"
        },
        "chest_pain": {
            "$ref": "#/definitions/chest_pain"
        },
        "palpitation": {
            "$ref": "#/definitions/palpitation"
        },
        "syncope": {
            "$ref": "#/definitions/syncope"
        },
        "pnd": {
            "$ref": "#/definitions/pnd"
        },
        "doe": {
            "$ref": "#/definitions/doe"
        },
        "orthopnea": {
            "$ref": "#/definitions/orthopnea"
        },
        "peripheal": {
            "$ref": "#/definitions/peripheal"
        },
        "edema": {
            "$ref": "#/definitions/edema"
        },
        "legpain_cramping": {
            "$ref": "#/definitions/legpain_cramping"
        },
        "history_murmur": {
            "$ref": "#/definitions/history_murmur"
        },
        "arrythmia": {
            "$ref": "#/definitions/arrythmia"
        },
        "heart_problem": {
            "$ref": "#/definitions/heart_problem"
        },
        "dysphagia": {
            "$ref": "#/definitions/dysphagia"
        },
        "heartburn": {
            "$ref": "#/definitions/heartburn"
        },
        "bloating": {
            "$ref": "#/definitions/bloating"
        },
        "belching": {
            "$ref": "#/definitions/belching"
        },
        "flatulence": {
            "$ref": "#/definitions/flatulence"
        },
        "nausea": {
            "$ref": "#/definitions/nausea"
        },
        "vomiting": {
            "$ref": "#/definitions/vomiting"
        },
        "hematemesis": {
            "$ref": "#/definitions/hematemesis"
        },
        "gastro_pain": {
            "$ref": "#/definitions/gastro_pain"
        },
        "food_intolerance": {
            "$ref": "#/definitions/food_intolerance"
        },
        "hepatitis": {
            "$ref": "#/definitions/hepatitis"
        },
        "jaundice": {
            "$ref": "#/definitions/jaundice"
        },
        "hematochezia": {
            "$ref": "#/definitions/hematochezia"
        },
        "changed_bowel": {
            "$ref": "#/definitions/changed_bowel"
        },
        "diarrhea": {
            "$ref": "#/definitions/diarrhea"
        },
        "constipation": {
            "$ref": "#/definitions/constipation"
        },
        "polyuria": {
            "$ref": "#/definitions/polyuria"
        },
        "polydypsia": {
            "$ref": "#/definitions/polydypsia"
        },
        "dysuria": {
            "$ref": "#/definitions/dysuria"
        },
        "hematuria": {
            "$ref": "#/definitions/hematuria"
        },
        "frequency": {
            "$ref": "#/definitions/frequency"
        },
        "urgency": {
            "$ref": "#/definitions/urgency"
        },
        "incontinence": {
            "$ref": "#/definitions/incontinence"
        },
        "renal_stones": {
            "$ref": "#/definitions/renal_stones"
        },
        "utis": {
            "$ref": "#/definitions/utis"
        },
        "hesitancy": {
            "$ref": "#/definitions/hesitancy"
        },
        "dribbling": {
            "$ref": "#/definitions/dribbling"
        },
        "stream": {
            "$ref": "#/definitions/stream"
        },
        "nocturia": {
            "$ref": "#/definitions/nocturia"
        },
        "erections": {
            "$ref": "#/definitions/erections"
        },
        "ejaculations": {
            "$ref": "#/definitions/ejaculations"
        },
        "g": {
            "$ref": "#/definitions/g"
        },
        "p": {
            "$ref": "#/definitions/p"
        },
        "ap": {
            "$ref": "#/definitions/ap"
        },
        "lc": {
            "$ref": "#/definitions/lc"
        },
        "mearche": {
            "$ref": "#/definitions/mearche"
        },
        "menopause": {
            "$ref": "#/definitions/menopause"
        },
        "lmp": {
            "$ref": "#/definitions/lmp"
        },
        "f_frequency": {
            "$ref": "#/definitions/f_frequency"
        },
        "f_flow": {
            "$ref": "#/definitions/f_flow"
        },
        "f_symptoms": {
            "$ref": "#/definitions/f_symptoms"
        },
        "abnormal_hair_growth": {
            "$ref": "#/definitions/abnormal_hair_growth"
        },
        "f_hirsutism": {
            "$ref": "#/definitions/f_hirsutism"
        },
        "joint_pain": {
            "$ref": "#/definitions/joint_pain"
        },
        "swelling": {
            "$ref": "#/definitions/swelling"
        },
        "m_redness": {
            "$ref": "#/definitions/m_redness"
        },
        "m_warm": {
            "$ref": "#/definitions/m_warm"
        },
        "m_stiffness": {
            "$ref": "#/definitions/m_stiffness"
        },
        "muscle": {
            "$ref": "#/definitions/muscle"
        },
        "m_aches": {
            "$ref": "#/definitions/m_aches"
        },
        "fms": {
            "$ref": "#/definitions/fms"
        },
        "arthritis": {
            "$ref": "#/definitions/arthritis"
        },
        "loc": {
            "$ref": "#/definitions/loc"
        },
        "seizures": {
            "$ref": "#/definitions/seizures"
        },
        "stroke": {
            "$ref": "#/definitions/stroke"
        },
        "tia": {
            "$ref": "#/definitions/tia"
        },
        "n_numbness": {
            "$ref": "#/definitions/n_numbness"
        },
        "n_weakness": {
            "$ref": "#/definitions/n_weakness"
        },
        "paralysis": {
            "$ref": "#/definitions/paralysis"
        },
        "intellectual_decline": {
            "$ref": "#/definitions/intellectual_decline"
        },
        "memory_problems": {
            "$ref": "#/definitions/memory_problems"
        },
        "dementia": {
            "$ref": "#/definitions/dementia"
        },
        "n_headache": {
            "$ref": "#/definitions/n_headache"
        },
        "s_cancer": {
            "$ref": "#/definitions/s_cancer"
        },
        "psoriasis": {
            "$ref": "#/definitions/psoriasis"
        },
        "s_acne": {
            "$ref": "#/definitions/s_acne"
        },
        "s_other": {
            "$ref": "#/definitions/s_other"
        },
        "s_disease": {
            "$ref": "#/definitions/s_disease"
        },
        "p_diagnosis": {
            "$ref": "#/definitions/p_diagnosis"
        },
        "p_medication": {
            "$ref": "#/definitions/p_medication"
        },
        "depression": {
            "$ref": "#/definitions/depression"
        },
        "anxiety": {
            "$ref": "#/definitions/anxiety"
        },
        "social_difficulties": {
            "$ref": "#/definitions/social_difficulties"
        },
        "thyroid_problems": {
            "$ref": "#/definitions/thyroid_problems"
        },
        "diabetes": {
            "$ref": "#/definitions/diabetes"
        },
        "abnormal_blood": {
            "$ref": "#/definitions/abnormal_blood"
        },
        "anemia": {
            "$ref": "#/definitions/anemia"
        },
        "fh_blood_problems": {
            "$ref": "#/definitions/fh_blood_problems"
        },
        "bleeding_problems": {
            "$ref": "#/definitions/bleeding_problems"
        },
        "allergies": {
            "$ref": "#/definitions/allergies"
        },
        "frequent_illness": {
            "$ref": "#/definitions/frequent_illness"
        },
        "hiv": {
            "$ref": "#/definitions/hiv"
        },
        "hai_status": {
            "$ref": "#/definitions/hai_status"
        }
    }
}
 module.exports = schema