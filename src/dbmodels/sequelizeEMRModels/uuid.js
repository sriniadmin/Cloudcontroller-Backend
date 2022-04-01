const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('uuid', {
    uuid: {
      type: DataTypes.STRING(400),
      allowNull: false,
      primaryKey: true,
      comment: "with the uuidType"
    },
    tenant_uuid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'uuid',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uuid" },
          { name: "tenant_uuid" },
        ]
      },
    ]
  });
};
