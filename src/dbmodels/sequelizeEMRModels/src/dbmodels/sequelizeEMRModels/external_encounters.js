const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('external_encounters', {
    ee_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ee_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ee_pid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ee_provider_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ee_facility_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ee_encounter_diagnosis: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ee_external_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'external_encounters',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ee_id" },
        ]
      },
    ]
  });
};
