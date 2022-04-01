const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('layout_options', {
    form_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    field_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    group_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    title: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: ""
    },
    seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    data_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    uor: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    fld_length: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15
    },
    max_length: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    list_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    titlecols: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    datacols: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    default_value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    edit_options: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fld_rows: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    list_backup_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    source: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "F",
      comment: "F=Form, D=Demographics, H=History, E=Encounter"
    },
    conditions: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "serialized array of skip conditions"
    },
    validation: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'layout_options',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "form_id" },
          { name: "field_id" },
          { name: "seq" },
        ]
      },
    ]
  });
};
