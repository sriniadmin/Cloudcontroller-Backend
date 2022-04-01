const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_action_item', {
    category: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "Maps to list_options list rule_action_category"
    },
    item: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "Maps to list_options list rule_action"
    },
    clin_rem_link: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Custom html link in clinical reminder widget"
    },
    reminder_message: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Custom message in patient reminder"
    },
    custom_flag: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 indexed to rule_patient_data, 0 indexed within main schema"
    }
  }, {
    sequelize,
    tableName: 'rule_action_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category" },
          { name: "item" },
        ]
      },
    ]
  });
};
