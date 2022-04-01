const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ar_activity', {
    pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    encounter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sequence_no: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Ar_activity sequence_no, incremented in code"
    },
    code_type: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "empty means claim level"
    },
    modifier: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    payer_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0=pt, 1=ins1, 2=ins2, etc"
    },
    post_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    post_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "references users.id"
    },
    session_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "references ar_session.session_id"
    },
    memo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "adjustment reasons go here"
    },
    pay_amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "either pay or adj will always be 0"
    },
    adj_amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    modified_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    follow_up: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    follow_up_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    account_code: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    reason_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Use as needed to show the primary payer adjustment reason code"
    }
  }, {
    sequelize,
    tableName: 'ar_activity',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "encounter" },
          { name: "sequence_no" },
        ]
      },
      {
        name: "session_id",
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
    ]
  });
};
