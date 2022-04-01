const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('erx_rx_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prescription_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    time: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    read: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'erx_rx_log',
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
