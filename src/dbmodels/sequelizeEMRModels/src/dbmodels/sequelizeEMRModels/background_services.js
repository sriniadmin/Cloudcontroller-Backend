const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('background_services', {
    name: {
      type: DataTypes.STRING(31),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(127),
      allowNull: false,
      comment: "name for reports"
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    running: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: -1,
      comment: "True indicates managed service is busy. Skip this interval"
    },
    next_run: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    execute_interval: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "minimum number of minutes between function calls,0=manual mode"
    },
    function: {
      type: DataTypes.STRING(127),
      allowNull: false,
      comment: "name of background service function"
    },
    require_once: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "include file (if necessary)"
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100,
      comment: "lower numbers will be run first"
    }
  }, {
    sequelize,
    tableName: 'background_services',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
