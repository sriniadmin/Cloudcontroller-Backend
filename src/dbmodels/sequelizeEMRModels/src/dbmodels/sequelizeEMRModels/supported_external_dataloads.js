const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supported_external_dataloads', {
    load_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    load_type: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: ""
    },
    load_source: {
      type: DataTypes.STRING(24),
      allowNull: false,
      defaultValue: "CMS"
    },
    load_release_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    load_filename: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ""
    },
    load_checksum: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'supported_external_dataloads',
    timestamps: false,
    indexes: [
      {
        name: "load_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "load_id" },
        ]
      },
    ]
  });
};
