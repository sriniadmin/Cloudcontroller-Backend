const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icd10_gem_dx_9_10', {
    map_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    dx_icd9_source: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    dx_icd10_target: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    flags: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    revision: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'icd10_gem_dx_9_10',
    timestamps: false,
    indexes: [
      {
        name: "map_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "map_id" },
        ]
      },
    ]
  });
};
