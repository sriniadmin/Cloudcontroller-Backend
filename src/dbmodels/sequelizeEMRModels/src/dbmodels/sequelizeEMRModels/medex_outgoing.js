const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medex_outgoing', {
    msg_uid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    msg_pid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    msg_pc_eid: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    campaign_uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    msg_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    msg_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    msg_reply: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    msg_extra_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    medex_uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'medex_outgoing',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "msg_uid" },
        ]
      },
      {
        name: "msg_eid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "msg_uid" },
          { name: "msg_pc_eid" },
          { name: "medex_uid" },
        ]
      },
      {
        name: "i_msg_date",
        using: "BTREE",
        fields: [
          { name: "msg_date" },
        ]
      },
    ]
  });
};
