const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_hpi', {
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
    CC1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HPI1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    QUALITY1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIMING1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DURATION1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONTEXT1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEVERITY1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MODIFY1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ASSOCIATED1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LOCATION1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CHRONIC1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CHRONIC2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CHRONIC3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CC2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HPI2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    QUALITY2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TIMING2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DURATION2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CONTEXT2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SEVERITY2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MODIFY2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ASSOCIATED2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LOCATION2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CC3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HPI3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    QUALITY3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TIMING3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DURATION3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CONTEXT3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SEVERITY3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MODIFY3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ASSOCIATED3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LOCATION3: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_hpi',
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
