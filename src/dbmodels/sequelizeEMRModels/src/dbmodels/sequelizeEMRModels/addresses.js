const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('addresses', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    line1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    plus_four: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    foreign_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'addresses',
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
