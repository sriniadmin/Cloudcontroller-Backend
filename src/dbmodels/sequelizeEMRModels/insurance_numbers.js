const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('insurance_numbers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    insurance_company_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    provider_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rendering_provider_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    group_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    provider_number_type: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    rendering_provider_number_type: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insurance_numbers',
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
