const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_mag_wearing', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENCOUNTER: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FORM_ID: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    PID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    RX_NUMBER: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ODSPH: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODCYL: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODAXIS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSSPH: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSCYL: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSAXIS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODMIDADD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSMIDADD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODADD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSADD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODVA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSVA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODNEARVA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSNEARVA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODHPD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODHBASE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODVPD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODVBASE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODSLABOFF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODVERTEXDIST: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSHPD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSHBASE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSVPD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSVBASE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSSLABOFF: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSVERTEXDIST: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODMPDD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODMPDN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSMPDD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSMPDN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BPDD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BPDN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LENS_MATERIAL: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LENS_TREATMENTS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RX_TYPE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_mag_wearing',
    timestamps: false,
    indexes: [
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FORM_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FORM_ID" },
          { name: "ENCOUNTER" },
          { name: "PID" },
          { name: "RX_NUMBER" },
        ]
      },
    ]
  });
};
