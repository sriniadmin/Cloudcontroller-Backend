const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_observation', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    encounter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    authorized: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    observation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ob_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ob_unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    table_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_observation',
    timestamps: false
  });
};
