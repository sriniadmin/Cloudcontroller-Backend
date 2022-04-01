const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onsite_online', {
    hash: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'onsite_online',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hash" },
        ]
      },
    ]
  });
};
