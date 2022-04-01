const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drug_templates', {
    drug_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    selector: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    dosage: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    period: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    refills: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    taxrates: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'drug_templates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "drug_id" },
          { name: "selector" },
        ]
      },
    ]
  });
};
