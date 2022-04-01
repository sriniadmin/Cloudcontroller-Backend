const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('module_acl_group_settings', {
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    allowed: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'module_acl_group_settings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "module_id" },
          { name: "group_id" },
          { name: "section_id" },
        ]
      },
    ]
  });
};
