const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gacl_aro_groups', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    lft: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rgt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(150),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'gacl_aro_groups',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "value" },
        ]
      },
      {
        name: "gacl_value_aro_groups",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "value" },
        ]
      },
      {
        name: "gacl_parent_id_aro_groups",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "gacl_lft_rgt_aro_groups",
        using: "BTREE",
        fields: [
          { name: "lft" },
          { name: "rgt" },
        ]
      },
    ]
  });
};
