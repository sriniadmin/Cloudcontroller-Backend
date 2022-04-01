const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clinical_rules', {
    id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "Unique and maps to list_options list clinical_rules"
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "0 is default for all patients, while > 0 is id from patient_data table"
    },
    active_alert_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "Active Alert Widget Module flag - note not yet utilized"
    },
    passive_alert_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "Passive Alert Widget Module flag"
    },
    cqm_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "Clinical Quality Measure flag (unable to customize per patient)"
    },
    cqm_2011_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "2011 Clinical Quality Measure flag (unable to customize per patient)"
    },
    cqm_2014_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "2014 Clinical Quality Measure flag (unable to customize per patient)"
    },
    cqm_nqf_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "Clinical Quality Measure NQF identifier"
    },
    cqm_pqri_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "Clinical Quality Measure PQRI identifier"
    },
    amc_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "Automated Measure Calculation flag (unable to customize per patient)"
    },
    amc_2011_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "2011 Automated Measure Calculation flag for (unable to customize per patient)"
    },
    amc_2014_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "2014 Automated Measure Calculation flag for (unable to customize per patient)"
    },
    amc_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "Automated Measure Calculation indentifier (MU rule)"
    },
    amc_code_2014: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "Automated Measure Calculation 2014 indentifier (MU rule)"
    },
    amc_2014_stage1_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "2014 Stage 1 - Automated Measure Calculation flag for (unable to customize per patient)"
    },
    amc_2014_stage2_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "2014 Stage 2 - Automated Measure Calculation flag for (unable to customize per patient)"
    },
    patient_reminder_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "Clinical Reminder Module flag"
    },
    developer: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Clinical Rule Developer"
    },
    funding_source: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Clinical Rule Funding Source"
    },
    release_version: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Clinical Rule Release Version"
    },
    web_reference: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Clinical Rule Web Reference"
    },
    access_control: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "patients:med",
      comment: "ACO link for access control"
    }
  }, {
    sequelize,
    tableName: 'clinical_rules',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "pid" },
        ]
      },
    ]
  });
};
