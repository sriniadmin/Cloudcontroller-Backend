const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_reviewofs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    authorized: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    fever: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    chills: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    night_sweats: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    weight_loss: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    poor_appetite: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    insomnia: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    fatigued: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    depressed: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    hyperactive: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    exposure_to_foreign_countries: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    cataracts: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    cataract_surgery: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    glaucoma: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    double_vision: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    blurred_vision: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    poor_hearing: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    headaches: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ringing_in_ears: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    bloody_nose: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    sinusitis: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    sinus_surgery: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    dry_mouth: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    strep_throat: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    tonsillectomy: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    swollen_lymph_nodes: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    throat_cancer: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    throat_cancer_surgery: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    heart_attack: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    irregular_heart_beat: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    chest_pains: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    shortness_of_breath: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    high_blood_pressure: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    heart_failure: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    poor_circulation: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    vascular_surgery: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    cardiac_catheterization: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    coronary_artery_bypass: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    heart_transplant: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    stress_test: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    emphysema: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    chronic_bronchitis: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    interstitial_lung_disease: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    shortness_of_breath_2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    lung_cancer: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    lung_cancer_surgery: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    pheumothorax: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    stomach_pains: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    peptic_ulcer_disease: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    gastritis: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    endoscopy: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    polyps: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    colonoscopy: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    colon_cancer: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    colon_cancer_surgery: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ulcerative_colitis: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    crohns_disease: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    appendectomy: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    divirticulitis: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    divirticulitis_surgery: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    gall_stones: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    cholecystectomy: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    hepatitis: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    cirrhosis_of_the_liver: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    splenectomy: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    kidney_failure: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    kidney_stones: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    kidney_cancer: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    kidney_infections: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    bladder_infections: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    bladder_cancer: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    prostate_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    prostate_cancer: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    kidney_transplant: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    sexually_transmitted_disease: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    burning_with_urination: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    discharge_from_urethra: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    rashes: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    infections: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ulcerations: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    pemphigus: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    herpes: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    osetoarthritis: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    rheumotoid_arthritis: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    lupus: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ankylosing_sondlilitis: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    swollen_joints: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    stiff_joints: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    broken_bones: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    neck_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    back_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    back_surgery: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    scoliosis: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    herniated_disc: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    shoulder_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    elbow_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    wrist_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    hand_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    hip_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    knee_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ankle_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    foot_problems: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    insulin_dependent_diabetes: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    noninsulin_dependent_diabetes: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    hypothyroidism: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    hyperthyroidism: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    cushing_syndrom: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    addison_syndrom: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    additional_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_reviewofs',
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
