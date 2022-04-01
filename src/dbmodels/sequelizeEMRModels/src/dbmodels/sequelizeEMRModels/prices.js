const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prices', {
    pr_id: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    pr_selector: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "template selector for drugs, empty for codes"
    },
    pr_level: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    pr_price: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "price in local currency"
    }
  }, {
    sequelize,
    tableName: 'prices',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pr_id" },
          { name: "pr_selector" },
          { name: "pr_level" },
        ]
      },
    ]
  });
};
