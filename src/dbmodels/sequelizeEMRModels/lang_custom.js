const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lang_custom', {
    lang_description: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    lang_code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    constant_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lang_custom',
    timestamps: false
  });
};
