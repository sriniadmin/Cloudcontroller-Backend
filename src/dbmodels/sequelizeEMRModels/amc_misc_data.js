const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('amc_misc_data', {
    amc_id: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "Unique and maps to list_options list clinical_rules"
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    map_category: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Maps to an object category (such as prescriptions etc.)"
    },
    map_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Maps to an object id (such as prescription id etc.)"
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_completed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    soc_provided: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'amc_misc_data',
    timestamps: false,
    indexes: [
      {
        name: "amc_id",
        using: "BTREE",
        fields: [
          { name: "amc_id" },
          { name: "pid" },
          { name: "map_id" },
        ]
      },
    ]
  });
};
