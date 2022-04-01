const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ar_session', {
    session_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    payer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0=pt else references insurance_companies.id"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "references users.id for session owner"
    },
    closed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0=no, 1=yes"
    },
    reference: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "check or EOB number"
    },
    check_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deposit_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pay_total: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
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
    global_amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    payment_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    adjustment_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    post_to_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ar_session',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
      {
        name: "user_closed",
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "closed" },
        ]
      },
      {
        name: "deposit_date",
        using: "BTREE",
        fields: [
          { name: "deposit_date" },
        ]
      },
    ]
  });
};
