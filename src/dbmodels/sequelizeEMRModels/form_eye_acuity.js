const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_acuity', {
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
    SCODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    SCOSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PHODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PHOSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLOSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MROSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    SCNEARODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    SCNEAROSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRNEARODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MRNEAROSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    GLAREODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    GLAREOSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    GLARECOMMENTS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ARODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    AROSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CRODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CROSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLODVA1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CTLOSVA1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PAMODVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PAMOSVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    LIODVA: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    LIOSVA: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    WODVANEAR: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSVANEARCC: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    BINOCVA: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_acuity',
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
