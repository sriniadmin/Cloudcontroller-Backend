const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direct_message_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    msg_type: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "S=sent,R=received"
    },
    msg_id: {
      type: DataTypes.STRING(127),
      allowNull: false
    },
    sender: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    recipient: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    create_ts: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      comment: "Q=queued,D=dispatched,R=received,F=failed"
    },
    status_info: {
      type: DataTypes.STRING(511),
      allowNull: true
    },
    status_ts: {
      type: DataTypes.DATE,
      allowNull: true
    },
    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'direct_message_log',
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
        name: "msg_id",
        using: "BTREE",
        fields: [
          { name: "msg_id" },
        ]
      },
      {
        name: "patient_id",
        using: "BTREE",
        fields: [
          { name: "patient_id" },
        ]
      },
    ]
  });
};
