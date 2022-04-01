const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('list_options', {
    list_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    option_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_default: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    option_value: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    mapping: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    codes: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    toggle_setting_1: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    toggle_setting_2: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    subtype: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    edit_options: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'list_options',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "list_id" },
          { name: "option_id" },
        ]
      },
    ]
  });
};
