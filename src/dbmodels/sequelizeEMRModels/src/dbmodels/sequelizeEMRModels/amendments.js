const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('amendments', {
    amendment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Amendment ID"
    },
    amendment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Amendement request date"
    },
    amendment_by: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Amendment requested from"
    },
    amendment_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Amendment status accepted\/rejected\/null"
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Patient ID from patient_data"
    },
    amendment_desc: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Amendment Details"
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "references users.id for session owner"
    },
    modified_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "references users.id for session owner"
    },
    created_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00",
      comment: "created time"
    },
    modified_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "modified time"
    }
  }, {
    sequelize,
    tableName: 'amendments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "amendment_id" },
        ]
      },
      {
        name: "amendment_pid",
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
    ]
  });
};
