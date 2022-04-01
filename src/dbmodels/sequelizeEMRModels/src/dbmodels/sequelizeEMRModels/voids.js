const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('voids', {
    void_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "references patient_data.pid"
    },
    encounter_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references form_encounter.encounter"
    },
    what_voided: {
      type: DataTypes.STRING(31),
      allowNull: false,
      comment: "checkout,receipt and maybe other options later"
    },
    date_original: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "time of original action that is now voided"
    },
    date_voided: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "time of void action"
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "references users.id"
    },
    amount1: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "for checkout,receipt total voided adjustments"
    },
    amount2: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "for checkout,receipt total voided payments"
    },
    other_info: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "for checkout,receipt the old invoice refno"
    }
  }, {
    sequelize,
    tableName: 'voids',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "void_id" },
        ]
      },
      {
        name: "datevoided",
        using: "BTREE",
        fields: [
          { name: "date_voided" },
        ]
      },
      {
        name: "pidenc",
        using: "BTREE",
        fields: [
          { name: "patient_id" },
          { name: "encounter_id" },
        ]
      },
    ]
  });
};
