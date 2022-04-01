const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openemr_modules', {
    pn_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pn_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    pn_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pn_displayname: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    pn_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pn_regid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    pn_directory: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    pn_version: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pn_admin_capable: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pn_user_capable: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pn_state: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'openemr_modules',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pn_id" },
        ]
      },
    ]
  });
};
