const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tenant', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tenant_name: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    tenant_uuid: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tenant',
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
    ]
  });
};
