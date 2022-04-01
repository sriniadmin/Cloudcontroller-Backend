const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openemr_module_vars', {
    pn_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pn_modname: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    pn_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    pn_value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'openemr_module_vars',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pn_id" },
        ]
      },
      {
        name: "pn_modname",
        using: "BTREE",
        fields: [
          { name: "pn_modname" },
        ]
      },
      {
        name: "pn_name",
        using: "BTREE",
        fields: [
          { name: "pn_name" },
        ]
      },
    ]
  });
};
