const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_postseg', {
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
    ODDISC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSDISC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODCUP: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSCUP: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODMACULA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSMACULA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODVESSELS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSVESSELS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODVITREOUS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSVITREOUS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODPERIPH: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSPERIPH: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ODCMT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OSCMT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RETINA_COMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DIL_RISKS: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: "on"
    },
    DIL_MEDS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    WETTYPE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ATROPINE: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    CYCLOMYDRIL: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    TROPICAMIDE: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    CYCLOGYL: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    NEO25: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'form_eye_postseg',
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
