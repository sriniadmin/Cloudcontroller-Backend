const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gacl_aco_sections', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "gacl_value_aco_sections"
    },
    order_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(230),
      allowNull: false
    },
    hidden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'gacl_aco_sections',
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
        name: "gacl_value_aco_sections",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "value" },
        ]
      },
      {
        name: "gacl_hidden_aco_sections",
        using: "BTREE",
        fields: [
          { name: "hidden" },
        ]
      },
    ]
  });
};
