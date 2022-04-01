const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents_legal_categories', {
    dlc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dlc_category_type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "1 category 2 subcategory"
    },
    dlc_category_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    dlc_category_parent: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'documents_legal_categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dlc_id" },
        ]
      },
    ]
  });
};
