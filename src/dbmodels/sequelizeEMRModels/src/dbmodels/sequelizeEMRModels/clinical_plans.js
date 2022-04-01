const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clinical_plans', {
    id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "Unique and maps to list_options list clinical_plans"
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "0 is default for all patients, while > 0 is id from patient_data table"
    },
    normal_flag: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "Normal Activation Flag"
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
    cqm_measure_group: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "Clinical Quality Measure Group Identifier"
    }
  }, {
    sequelize,
    tableName: 'clinical_plans',
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
