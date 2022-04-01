const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_neuro', {
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
    ACT: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: "on"
    },
    ACT5CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT1CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT2CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT3CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT4CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT6CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT7CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT8CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT9CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT10CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT11CCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT1SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT2SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT3SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT4SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT5SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT6SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT7SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT8SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT9SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT10SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT11SCDIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT1SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT2SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT3SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT4SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT5CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT6CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT7CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT8CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT9CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT10CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT11CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT5SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT6SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT7SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT8SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT9SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT10SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT11SCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT1CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT2CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT3CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACT4CCNEAR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MOTILITYNORMAL: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: "on"
    },
    MOTILITY_RS: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    },
    MOTILITY_RI: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    },
    MOTILITY_RR: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    },
    MOTILITY_RL: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    },
    MOTILITY_LS: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    },
    MOTILITY_LI: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    },
    MOTILITY_LR: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    },
    MOTILITY_LL: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "0"
    },
    MOTILITY_RRSO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MOTILITY_RLSO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MOTILITY_RRIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MOTILITY_RLIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MOTILITY_LRSO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MOTILITY_LLSO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MOTILITY_LRIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MOTILITY_LLIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NEURO_COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    STEREOPSIS: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ODNPA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSNPA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VERTFUSAMPS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DIVERGENCEAMPS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NPC: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DACCDIST: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DACCNEAR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CACCDIST: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CACCNEAR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODCOLOR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSCOLOR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODCOINS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSCOINS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODREDDESAT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSREDDESAT: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_neuro',
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
