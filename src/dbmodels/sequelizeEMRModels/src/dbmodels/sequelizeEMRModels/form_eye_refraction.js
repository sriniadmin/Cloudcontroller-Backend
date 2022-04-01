const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_refraction', {
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
    MRODSPH: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRODCYL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRODAXIS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRODPRISM: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRODBASE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRODADD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MROSSPH: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MROSCYL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MROSAXIS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MROSPRISM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MROSBASE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MROSADD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRODNEARSPHERE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRODNEARCYL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRODNEARAXIS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRODPRISMNEAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MRODBASENEAR: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MROSNEARSHPERE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MROSNEARCYL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MROSNEARAXIS: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    MROSPRISMNEAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MROSBASENEAR: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CRODSPH: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CRODCYL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CRODAXIS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CROSSPH: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CROSCYL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CROSAXIS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CRCOMMENTS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BALANCED: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    ARODSPH: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ARODCYL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ARODAXIS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    AROSSPH: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    AROSCYL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    AROSAXIS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ARODADD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    AROSADD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ARNEARODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ARNEAROSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ARODPRISM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AROSPRISM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CTLODSPH: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLODCYL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLODAXIS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLODBC: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLODDIAM: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLOSSPH: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLOSCYL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLOSAXIS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLOSBC: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLOSDIAM: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTL_COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CTLMANUFACTUREROD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CTLSUPPLIEROD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CTLBRANDOD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CTLMANUFACTUREROS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CTLSUPPLIEROS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CTLBRANDOS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CTLODADD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLOSADD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    NVOCHECKED: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ADDCHECKED: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_refraction',
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
