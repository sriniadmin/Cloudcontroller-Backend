const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_reminders', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1 if active and 0 if not active"
    },
    date_inactivated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reason_inactivated: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to list_options list rule_reminder_inactive_opt"
    },
    due_status: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to list_options list rule_reminder_due_opt"
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "id from patient_data table"
    },
    category: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to the category item in the rule_action_item table"
    },
    item: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to the item column in the rule_action_item table"
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_sent: {
      type: DataTypes.DATE,
      allowNull: true
    },
    voice_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 if not sent and 1 if sent"
    },
    sms_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 if not sent and 1 if sent"
    },
    email_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 if not sent and 1 if sent"
    },
    mail_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 if not sent and 1 if sent"
    }
  }, {
    sequelize,
    tableName: 'patient_reminders',
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
      {
        name: "pid",
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
      {
        name: "category",
        using: "BTREE",
        fields: [
          { name: "category" },
          { name: "item" },
        ]
      },
    ]
  });
};
