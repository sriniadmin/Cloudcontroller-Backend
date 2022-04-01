const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gacl_aro_map', {
    acl_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    section_value: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(150),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'gacl_aro_map',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "acl_id" },
          { name: "section_value" },
          { name: "value" },
        ]
      },
    ]
  });
};
