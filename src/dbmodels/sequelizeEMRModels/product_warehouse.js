const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_warehouse', {
    pw_drug_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pw_warehouse: {
      type: DataTypes.STRING(31),
      allowNull: false,
      primaryKey: true
    },
    pw_min_level: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    pw_max_level: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'product_warehouse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pw_drug_id" },
          { name: "pw_warehouse" },
        ]
      },
    ]
  });
};
