const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clinical_plans_rules', {
    plan_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "Unique and maps to list_options list clinical_plans"
    },
    rule_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "Unique and maps to list_options list clinical_rules"
    }
  }, {
    sequelize,
    tableName: 'clinical_plans_rules',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plan_id" },
          { name: "rule_id" },
        ]
      },
    ]
  });
};
