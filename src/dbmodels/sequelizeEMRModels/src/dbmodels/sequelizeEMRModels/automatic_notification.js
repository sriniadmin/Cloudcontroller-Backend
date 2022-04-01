const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('automatic_notification', {
    notification_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sms_gateway_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    next_app_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    next_app_time: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    provider_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_sender: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email_subject: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: "ENUM('SMS','Email')",
      allowNull: false,
      defaultValue: "SMS"
    },
    notification_sent_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'automatic_notification',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "notification_id" },
        ]
      },
    ]
  });
};
