const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gacl_groups_axo_map', {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    axo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'gacl_groups_axo_map',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "group_id" },
          { name: "axo_id" },
        ]
      },
      {
        name: "gacl_axo_id",
        using: "BTREE",
        fields: [
          { name: "axo_id" },
        ]
      },
    ]
  });
};
