const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_antseg', {
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
    ODSCHIRMER1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSSCHIRMER1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ODSCHIRMER2: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSSCHIRMER2: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ODTBUT: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSTBUT: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSCONJ: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ODCONJ: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODCORNEA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSCORNEA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODAC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSAC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODLENS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSLENS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODIRIS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSIRIS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PUPIL_NORMAL: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "1"
    },
    ODPUPILSIZE1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ODPUPILSIZE2: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ODPUPILREACTIVITY: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    ODAPD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSPUPILSIZE1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSPUPILSIZE2: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSPUPILREACTIVITY: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    OSAPD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DIMODPUPILSIZE1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DIMODPUPILSIZE2: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DIMODPUPILREACTIVITY: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DIMOSPUPILSIZE1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DIMOSPUPILSIZE2: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DIMOSPUPILREACTIVITY: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PUPIL_COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODKTHICKNESS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSKTHICKNESS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ODGONIO: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSGONIO: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ANTSEG_COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_antseg',
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
