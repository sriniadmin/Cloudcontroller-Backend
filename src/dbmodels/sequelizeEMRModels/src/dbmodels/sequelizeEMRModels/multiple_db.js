const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('multiple_db', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    namespace: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "namespace"
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dbname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    host: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "localhost"
    },
    port: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 3306
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'multiple_db',
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
        name: "namespace",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "namespace" },
        ]
      },
    ]
  });
};
