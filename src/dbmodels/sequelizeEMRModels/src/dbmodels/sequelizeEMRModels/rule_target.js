const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_target', {
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
    include_flag: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 is exclude and 1 is include"
    },
    required_flag: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 is required and 1 is optional"
    },
    method: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to list_options list rule_targets"
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Data is dependent on the method"
    },
    interval: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Only used in interval entries"
    }
  }, {
    sequelize,
    tableName: 'rule_target',
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
