const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pharmacies', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transmit_method: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ncpdp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    npi: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pharmacies',
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
    ]
  });
};
