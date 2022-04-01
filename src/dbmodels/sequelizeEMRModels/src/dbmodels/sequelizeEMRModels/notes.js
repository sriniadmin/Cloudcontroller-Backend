const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    foreign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    revision: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'notes',
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
        name: "foreign_id",
        using: "BTREE",
        fields: [
          { name: "owner" },
        ]
      },
      {
        name: "foreign_id_2",
        using: "BTREE",
        fields: [
          { name: "foreign_id" },
        ]
      },
      {
        name: "date",
        using: "BTREE",
        fields: [
          { name: "date" },
        ]
      },
    ]
  });
};
