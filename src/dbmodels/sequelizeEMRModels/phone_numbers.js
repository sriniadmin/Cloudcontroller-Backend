const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phone_numbers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    country_code: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    area_code: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    prefix: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    foreign_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'phone_numbers',
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
        name: "foreign_id",
        using: "BTREE",
        fields: [
          { name: "foreign_id" },
        ]
      },
    ]
  });
};
