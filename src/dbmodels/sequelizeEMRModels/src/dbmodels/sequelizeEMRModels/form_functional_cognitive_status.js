const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_functional_cognitive_status', {
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
    codetext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    external_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_functional_cognitive_status',
    timestamps: false
  });
};
