const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gacl_acl', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    section_value: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: "system"
    },
    allow: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    enabled: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    return_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updated_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'gacl_acl',
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
        name: "gacl_enabled_acl",
        using: "BTREE",
        fields: [
          { name: "enabled" },
        ]
      },
      {
        name: "gacl_section_value_acl",
        using: "BTREE",
        fields: [
          { name: "section_value" },
        ]
      },
      {
        name: "gacl_updated_date_acl",
        using: "BTREE",
        fields: [
          { name: "updated_date" },
        ]
      },
    ]
  });
};
