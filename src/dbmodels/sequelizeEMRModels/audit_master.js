const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_master', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "The Id of the user who approves or denies"
    },
    approval_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1-Pending,2-Approved,3-Denied,4-Appointment directly updated to calendar table,5-Cancelled appointment"
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    modified_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ip_address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1-new patient,2-existing patient,3-change is only in the document,4-Patient upload,5-random key,10-Appointment"
    }
  }, {
    sequelize,
    tableName: 'audit_master',
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
