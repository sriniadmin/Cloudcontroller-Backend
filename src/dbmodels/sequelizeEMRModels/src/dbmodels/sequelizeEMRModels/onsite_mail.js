const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onsite_mail', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    authorized: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    header: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recipient_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    recipient_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sender_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    sender_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assigned_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "flag indicates note is deleted"
    },
    delete_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mtype: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    message_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "New"
    },
    mail_chain: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reply_mail_chain: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_msg_encrypted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Whether messsage encrypted 0-Not encrypted, 1-Encrypted"
    }
  }, {
    sequelize,
    tableName: 'onsite_mail',
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
          { name: "owner" },
        ]
      },
    ]
  });
};
