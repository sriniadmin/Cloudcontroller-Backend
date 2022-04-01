const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    lft: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rght: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aco_spec: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: "patients|docs"
    }
  }, {
    sequelize,
    tableName: 'categories',
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
        name: "parent",
        using: "BTREE",
        fields: [
          { name: "parent" },
        ]
      },
      {
        name: "lft",
        using: "BTREE",
        fields: [
          { name: "lft" },
          { name: "rght" },
        ]
      },
    ]
  });
};
