const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('upgradeGateway', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    upgradeDetails: {
      type: DataTypes.JSON,
      allowNull: false
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.fn("now"),
    },
    tenant_uuid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    upgradeGatewayUUID: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'upgradeGateway',
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
