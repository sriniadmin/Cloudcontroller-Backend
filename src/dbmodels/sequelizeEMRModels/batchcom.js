const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batchcom', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    sent_by: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    msg_type: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    msg_subject: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    msg_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    msg_date_sent: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'batchcom',
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
