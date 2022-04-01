const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api_token', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    token_auth_salt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    token_auth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expiry: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'api_token',
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
