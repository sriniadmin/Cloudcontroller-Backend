const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lang_definitions', {
    def_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cons_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lang_definitions',
    timestamps: false,
    indexes: [
      {
        name: "def_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "def_id" },
        ]
      },
      {
        name: "cons_id",
        using: "BTREE",
        fields: [
          { name: "cons_id" },
        ]
      },
    ]
  });
};
