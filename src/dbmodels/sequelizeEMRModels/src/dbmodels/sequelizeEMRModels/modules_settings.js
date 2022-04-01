const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modules_settings', {
    mod_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fld_type: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "1=>ACL,2=>preferences,3=>hooks"
    },
    obj_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    menu_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modules_settings',
    timestamps: false
  });
};
