const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lang_constants', {
    cons_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    constant_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lang_constants',
    timestamps: false,
    indexes: [
      {
        name: "cons_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cons_id" },
        ]
      },
      {
        name: "constant_name",
        using: "BTREE",
        fields: [
          { name: "constant_name", length: 100 },
        ]
      },
    ]
  });
};
