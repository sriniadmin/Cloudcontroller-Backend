const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_mag_dispense', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    encounter: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    authorized: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REFDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    REFTYPE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RXTYPE: {
      type: DataTypes.STRING(20),
      allowNull: true
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
    CTLMANUFACTUREROD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLMANUFACTUREROS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLSUPPLIEROD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLSUPPLIEROS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLBRANDOD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CTLBRANDOS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CTLODQUANTITY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CTLOSQUANTITY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ODDIAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ODBC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OSDIAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OSBC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RXCOMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_mag_dispense',
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
        name: "pid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "encounter" },
          { name: "id" },
        ]
      },
    ]
  });
};
