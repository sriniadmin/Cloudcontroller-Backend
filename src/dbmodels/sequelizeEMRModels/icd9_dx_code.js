const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icd9_dx_code', {
    dx_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    dx_code: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    formatted_dx_code: {
      type: DataTypes.STRING(6),
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
    tableName: 'icd9_dx_code',
    timestamps: false,
    indexes: [
      {
        name: "dx_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dx_id" },
        ]
      },
      {
        name: "dx_code",
        using: "BTREE",
        fields: [
          { name: "dx_code" },
        ]
      },
      {
        name: "formatted_dx_code",
        using: "BTREE",
        fields: [
          { name: "formatted_dx_code" },
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
