const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    coffee: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tobacco: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    alcohol: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sleep_patterns: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exercise_patterns: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seatbelt_use: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    counseling: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hazardous_activities: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recreational_drugs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_breast_exam: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_mammogram: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_gynocological_exam: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_rectal_exam: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_prostate_exam: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_physical_exam: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_sigmoidoscopy_colonoscopy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_ecg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_cardiac_echo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_retinal: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_fluvax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_pneuvax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_ldl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_hemoglobin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_psa: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_exam_results: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    history_mother: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dc_mother: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    history_father: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dc_father: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    history_siblings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dc_siblings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    history_offspring: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dc_offspring: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    history_spouse: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dc_spouse: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    relatives_cancer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    relatives_tuberculosis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    relatives_diabetes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    relatives_high_blood_pressure: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    relatives_heart_problems: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    relatives_stroke: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    relatives_epilepsy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    relatives_mental_illness: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    relatives_suicide: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cataract_surgery: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tonsillectomy: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cholecystestomy: {
      type: DataTypes.DATE,
      allowNull: true
    },
    heart_surgery: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hysterectomy: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hernia_repair: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hip_replacement: {
      type: DataTypes.DATE,
      allowNull: true
    },
    knee_replacement: {
      type: DataTypes.DATE,
      allowNull: true
    },
    appendectomy: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    name_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    additional_history: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exams: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usertext11: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usertext12: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext13: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext14: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext15: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext16: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext17: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext18: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext19: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext20: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext21: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext22: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext23: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext24: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext25: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext26: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext27: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext28: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext29: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    usertext30: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    userdate11: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    userdate12: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    userdate13: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    userdate14: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    userdate15: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    userarea11: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userarea12: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'history_data',
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
      {
        name: "pid",
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
    ]
  });
};
