const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icd10_pcs_order_code', {
    pcs_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    pcs_code: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    valid_for_coding: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    short_desc: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    long_desc: {
      type: DataTypes.STRING(300),
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
    tableName: 'icd10_pcs_order_code',
    timestamps: false,
    indexes: [
      {
        name: "pcs_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pcs_id" },
        ]
      },
      {
        name: "pcs_code",
        using: "BTREE",
        fields: [
          { name: "pcs_code" },
        ]
      },
      {
        name: "active",
        using: "BTREE",
        fields: [
          { name: "active" },
        ]
      },
    ]
  });
};
