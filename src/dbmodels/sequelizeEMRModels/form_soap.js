const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_soap', {
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
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    authorized: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    subjective: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    objective: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assessment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    plan: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_soap',
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
