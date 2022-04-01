const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medex_recalls', {
    r_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    r_PRACTID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    r_pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "PatientID from pat_data"
    },
    r_eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Date of Appt or Recall"
    },
    r_facility: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    r_provider: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    r_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    r_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'medex_recalls',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "r_ID" },
        ]
      },
      {
        name: "r_PRACTID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "r_PRACTID" },
          { name: "r_pid" },
        ]
      },
      {
        name: "i_eventDate",
        using: "BTREE",
        fields: [
          { name: "r_eventDate" },
        ]
      },
    ]
  });
};
