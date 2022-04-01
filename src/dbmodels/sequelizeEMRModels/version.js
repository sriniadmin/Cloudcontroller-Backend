const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('version', {
    v_major: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    v_minor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    v_patch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    v_realpatch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    v_tag: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    v_database: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    v_acl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'version',
    timestamps: false
  });
};
