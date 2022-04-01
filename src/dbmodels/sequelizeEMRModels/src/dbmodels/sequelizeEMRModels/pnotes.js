const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pnotes', {
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
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pid: {
      type: DataTypes.BIGINT,
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
    title: {
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
    message_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "New"
    },
    portal_relation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_msg_encrypted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Whether messsage encrypted 0-Not encrypted, 1-Encrypted"
    },
    update_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pnotes',
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
    ]
  });
};
