const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_patient_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    },
    complete: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to list_options list yesno"
    },
    result: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'rule_patient_data',
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
        name: "pid",
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
      {
        name: "category",
        using: "BTREE",
        fields: [
          { name: "category" },
          { name: "item" },
        ]
      },
    ]
  });
};
