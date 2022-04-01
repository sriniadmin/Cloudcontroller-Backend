const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onsite_messages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sender_id: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "who sent id"
    },
    recip_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "who to id array"
    }
  }, {
    sequelize,
    tableName: 'onsite_messages',
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
