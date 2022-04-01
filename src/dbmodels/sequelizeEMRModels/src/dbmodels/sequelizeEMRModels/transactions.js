const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactions', {
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    groupname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    authorized: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transactions',
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
