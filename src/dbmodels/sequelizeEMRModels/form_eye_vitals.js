const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_vitals', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Links to forms.form_id"
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    alert: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      defaultValue: "yes"
    },
    oriented: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      defaultValue: "TPP"
    },
    confused: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      defaultValue: "nml"
    },
    ODIOPAP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSIOPAP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODIOPTPN: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSIOPTPN: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODIOPFTN: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSIOPFTN: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IOPTIME: {
      type: DataTypes.TIME,
      allowNull: false
    },
    ODIOPPOST: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    OSIOPPOST: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    IOPPOSTTIME: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ODIOPTARGET: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    OSIOPTARGET: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    AMSLEROD: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    AMSLEROS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ODVF1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ODVF2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ODVF3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ODVF4: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    OSVF1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    OSVF2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    OSVF3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    OSVF4: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_vitals',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_pid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "pid" },
        ]
      },
    ]
  });
};
