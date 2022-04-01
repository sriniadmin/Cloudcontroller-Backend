const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icd10_reimbr_pcs_9_10', {
    map_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    code_cnt: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ICD9_01: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ICD9_02: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ICD9_03: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ICD9_04: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ICD9_05: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ICD9_06: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    revision: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'icd10_reimbr_pcs_9_10',
    timestamps: false,
    indexes: [
      {
        name: "map_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "map_id" },
        ]
      },
    ]
  });
};
