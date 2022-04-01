const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claims', {
    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    encounter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Claim version, incremented in code"
    },
    payer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    payer_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    bill_process: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    bill_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    process_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    process_file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    target: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    x12_partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    submitted_claim: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "This claims form claim data"
    }
  }, {
    sequelize,
    tableName: 'claims',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "patient_id" },
          { name: "encounter_id" },
          { name: "version" },
        ]
      },
    ]
  });
};
