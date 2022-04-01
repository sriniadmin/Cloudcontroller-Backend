const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customlists', {
    cl_list_slno: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cl_list_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "ID OF THE lIST FOR NEW TAKE SELECT MAX(cl_list_id)+1"
    },
    cl_list_item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "ID OF THE lIST FOR NEW TAKE SELECT MAX(cl_list_item_id)+1"
    },
    cl_list_type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "0=>List Name 1=>list items 2=>Context 3=>Template 4=>Sentence 5=> SavedTemplate 6=>CustomButton"
    },
    cl_list_item_short: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cl_list_item_long: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cl_list_item_level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Flow level for List Designation"
    },
    cl_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cl_deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    cl_creator: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customlists',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cl_list_slno" },
        ]
      },
    ]
  });
};
