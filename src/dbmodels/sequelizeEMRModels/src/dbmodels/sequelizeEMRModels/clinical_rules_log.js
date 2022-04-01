const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clinical_rules_log', {
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
      allowNull: false,
      defaultValue: 0
    },
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "An example category is clinical_reminder_widget"
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    new_value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clinical_rules_log',
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
      {
        name: "uid",
        using: "BTREE",
        fields: [
          { name: "uid" },
        ]
      },
      {
        name: "category",
        using: "BTREE",
        fields: [
          { name: "category" },
        ]
      },
    ]
  });
};
