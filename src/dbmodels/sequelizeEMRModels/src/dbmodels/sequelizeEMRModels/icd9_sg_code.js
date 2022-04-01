const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icd9_sg_code', {
    sg_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    sg_code: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    formatted_sg_code: {
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
    tableName: 'icd9_sg_code',
    timestamps: false,
    indexes: [
      {
        name: "sg_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sg_id" },
        ]
      },
      {
        name: "sg_code",
        using: "BTREE",
        fields: [
          { name: "sg_code" },
        ]
      },
      {
        name: "formatted_sg_code",
        using: "BTREE",
        fields: [
          { name: "formatted_sg_code" },
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
