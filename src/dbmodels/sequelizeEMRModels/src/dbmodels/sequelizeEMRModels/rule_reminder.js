const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_reminder', {
    id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to the id column in the clinical_rules table"
    },
    method: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to list_options list rule_reminder_methods"
    },
    method_detail: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to list_options list rule_reminder_intervals"
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'rule_reminder',
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
