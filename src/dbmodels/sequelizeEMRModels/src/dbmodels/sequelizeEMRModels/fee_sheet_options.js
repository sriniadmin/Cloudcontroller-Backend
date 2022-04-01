const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fee_sheet_options', {
    fs_category: {
      type: DataTypes.STRING(63),
      allowNull: true
    },
    fs_option: {
      type: DataTypes.STRING(63),
      allowNull: true
    },
    fs_codes: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fee_sheet_options',
    timestamps: false
  });
};
