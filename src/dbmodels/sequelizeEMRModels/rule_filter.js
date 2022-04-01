const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rule_filter', {
    id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to the id column in the clinical_rules table"
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
      comment: "Maps to list_options list rule_filters"
    },
    method_detail: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to list_options lists rule__intervals"
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'rule_filter',
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
