const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('erx_ttl_touch', {
    patient_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Patient record Id"
    },
    process: {
      type: "ENUM('allergies','medications')",
      allowNull: false,
      primaryKey: true,
      comment: "NewCrop eRx SOAP process"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Date and time of last process update for patient"
    }
  }, {
    sequelize,
    tableName: 'erx_ttl_touch',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "patient_id" },
          { name: "process" },
        ]
      },
    ]
  });
};
