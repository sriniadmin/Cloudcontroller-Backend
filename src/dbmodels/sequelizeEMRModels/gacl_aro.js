const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gacl_aro', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    section_value: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: "0"
    },
    value: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    order_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hidden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'gacl_aro',
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
        name: "gacl_section_value_value_aro",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "section_value" },
          { name: "value" },
        ]
      },
      {
        name: "gacl_hidden_aro",
        using: "BTREE",
        fields: [
          { name: "hidden" },
        ]
      },
    ]
  });
};
