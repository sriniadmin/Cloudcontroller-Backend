const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notification_settings', {
    SettingsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Send_SMS_Before_Hours: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Send_Email_Before_Hours: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SMS_gateway_username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SMS_gateway_password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SMS_gateway_apikey: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'notification_settings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SettingsId" },
        ]
      },
    ]
  });
};
