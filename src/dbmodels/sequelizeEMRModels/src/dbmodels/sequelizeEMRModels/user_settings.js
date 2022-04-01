const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_settings', {
    setting_user: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    setting_label: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    setting_value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'user_settings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "setting_user" },
          { name: "setting_label" },
        ]
      },
    ]
  });
};
