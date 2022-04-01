const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_gateway_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    service_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    login_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transaction_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    md5: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payment_gateway_details',
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
