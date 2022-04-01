const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('external_procedures', {
    ep_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ep_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ep_code_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ep_code: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    ep_pid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ep_encounter: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ep_code_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ep_facility_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ep_external_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'external_procedures',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ep_id" },
        ]
      },
    ]
  });
};
