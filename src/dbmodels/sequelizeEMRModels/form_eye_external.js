const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_external', {
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
    RUL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LUL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RLL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LLL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RBROW: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LBROW: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RMCT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LMCT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RADNEXA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LADNEXA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RMRD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    LMRD: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    RLF: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    LLF: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    RVFISSURE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    LVFISSURE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ODHERTEL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OSHERTEL: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    HERTELBASE: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    RCAROTID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LCAROTID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RTEMPART: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LTEMPART: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RCNV: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LCNV: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RCNVII: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LCNVII: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EXT_COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_external',
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
