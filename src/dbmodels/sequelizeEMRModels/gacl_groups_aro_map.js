const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gacl_groups_aro_map', {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    aro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'gacl_groups_aro_map',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "group_id" },
          { name: "aro_id" },
        ]
      },
      {
        name: "gacl_aro_id",
        using: "BTREE",
        fields: [
          { name: "aro_id" },
        ]
      },
    ]
  });
};
