const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('layout_group_properties', {
    grp_form_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      primaryKey: true
    },
    grp_group_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "empty when representing the whole form"
    },
    grp_title: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: "",
      comment: "descriptive name of the form or group"
    },
    grp_subtitle: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: "",
      comment: "for display under the title"
    },
    grp_mapping: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "the form category"
    },
    grp_seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "optional order within mapping"
    },
    grp_activity: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    grp_repeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    grp_columns: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    grp_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    grp_issue_type: {
      type: DataTypes.STRING(75),
      allowNull: false,
      defaultValue: ""
    },
    grp_aco_spec: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: ""
    },
    grp_services: {
      type: DataTypes.STRING(4095),
      allowNull: false,
      defaultValue: ""
    },
    grp_products: {
      type: DataTypes.STRING(4095),
      allowNull: false,
      defaultValue: ""
    },
    grp_diags: {
      type: DataTypes.STRING(4095),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'layout_group_properties',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "grp_form_id" },
          { name: "grp_group_id" },
        ]
      },
    ]
  });
};
