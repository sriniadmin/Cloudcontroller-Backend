const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('module_configuration', {
    module_config_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    module_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    field_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    field_value: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'module_configuration',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "module_config_id" },
        ]
      },
    ]
  });
};
