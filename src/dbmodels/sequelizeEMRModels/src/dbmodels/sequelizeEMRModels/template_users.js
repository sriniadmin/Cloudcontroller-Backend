const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('template_users', {
    tu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tu_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tu_facility_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tu_template_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tu_template_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'template_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tu_id" },
        ]
      },
      {
        name: "templateuser",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tu_user_id" },
          { name: "tu_template_id" },
        ]
      },
    ]
  });
};
