const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notification_log', {
    iLogId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pc_eid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sms_gateway_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    smsgateway_info: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_sender: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: "ENUM('SMS','Email')",
      allowNull: false
    },
    patient_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pc_eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pc_endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pc_startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    pc_endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    dSentDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'notification_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iLogId" },
        ]
      },
    ]
  });
};
