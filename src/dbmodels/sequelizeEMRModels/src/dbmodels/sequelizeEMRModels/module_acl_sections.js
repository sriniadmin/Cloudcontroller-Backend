const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('module_acl_sections', {
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    section_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parent_section: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    section_identifier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'module_acl_sections',
    timestamps: false
  });
};
