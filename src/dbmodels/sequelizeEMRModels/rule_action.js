const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_action', {
    id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to the id column in the clinical_rules table"
    },
    group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Contains group id to identify collection of targets in a rule"
    },
    category: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to the category item in the rule_action_item table"
    },
    item: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to the item column in the rule_action_item table"
    }
  }, {
    sequelize,
    tableName: 'rule_action',
    timestamps: false,
    indexes: [
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
