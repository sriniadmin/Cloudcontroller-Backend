const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dated_reminders', {
    dr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dr_from_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dr_message_text: {
      type: DataTypes.STRING(160),
      allowNull: false
    },
    dr_message_sent_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dr_message_due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    message_priority: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    message_processed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    processed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dr_processed_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dated_reminders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dr_id" },
        ]
      },
      {
        name: "dr_from_ID",
        using: "BTREE",
        fields: [
          { name: "dr_from_ID" },
          { name: "dr_message_due_date" },
        ]
      },
    ]
  });
};
