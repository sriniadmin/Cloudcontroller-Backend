const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lists_touch', {
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lists_touch',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "type" },
        ]
      },
    ]
  });
};
