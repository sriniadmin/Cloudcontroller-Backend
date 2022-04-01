const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_ros', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    activity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    weight_change: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    weakness: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    fatigue: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    anorexia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    fever: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    chills: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    night_sweats: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    insomnia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    irritability: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    heat_or_cold: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    intolerance: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    change_in_vision: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    glaucoma_history: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    eye_pain: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    irritation: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    redness: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    excessive_tearing: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    double_vision: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    blind_spots: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    photophobia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    hearing_loss: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    discharge: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    pain: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    vertigo: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    tinnitus: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    frequent_colds: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sore_throat: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sinus_problems: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    post_nasal_drip: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    nosebleed: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    snoring: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    apnea: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    breast_mass: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    breast_discharge: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    biopsy: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    abnormal_mammogram: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    cough: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sputum: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    shortness_of_breath: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    wheezing: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    hemoptsyis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    asthma: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    copd: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    chest_pain: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    palpitation: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    syncope: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    pnd: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    doe: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    orthopnea: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    peripheal: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    edema: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    legpain_cramping: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    history_murmur: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    arrythmia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    heart_problem: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    dysphagia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    heartburn: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    bloating: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    belching: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    flatulence: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    nausea: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    vomiting: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    hematemesis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    gastro_pain: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    food_intolerance: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    hepatitis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    jaundice: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    hematochezia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    changed_bowel: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    diarrhea: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    constipation: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    polyuria: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    polydypsia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    dysuria: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    hematuria: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    frequency: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    urgency: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    incontinence: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    renal_stones: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    utis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    hesitancy: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    dribbling: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    stream: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    nocturia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    erections: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ejaculations: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    g: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    p: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ap: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    lc: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    mearche: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    menopause: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    lmp: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    f_frequency: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    f_flow: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    f_symptoms: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    abnormal_hair_growth: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    f_hirsutism: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    joint_pain: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    swelling: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    m_redness: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    m_warm: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    m_stiffness: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    muscle: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    m_aches: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    fms: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    arthritis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    loc: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    seizures: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    stroke: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    tia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    n_numbness: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    n_weakness: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    paralysis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    intellectual_decline: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    memory_problems: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    dementia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    n_headache: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    s_cancer: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    psoriasis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    s_acne: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    s_other: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    s_disease: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    p_diagnosis: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    p_medication: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    depression: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    anxiety: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    social_difficulties: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    thyroid_problems: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    diabetes: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    abnormal_blood: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    anemia: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    fh_blood_problems: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    bleeding_problems: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    allergies: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    frequent_illness: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    hiv: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    hai_status: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_ros',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
