const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modules', {
    mod_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mod_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: "0"
    },
    mod_directory: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    mod_parent: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    mod_type: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    mod_active: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    mod_ui_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "'"
    },
    mod_relative_link: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    mod_ui_order: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    mod_ui_active: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    mod_description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    mod_nick_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    mod_enc_menu: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "no"
    },
    permissions_item_table: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    directory: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sql_run: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'modules',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mod_id" },
          { name: "mod_directory" },
        ]
      },
    ]
  });
};
