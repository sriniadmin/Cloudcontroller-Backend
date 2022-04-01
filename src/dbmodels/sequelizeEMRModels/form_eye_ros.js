const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_ros', {
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
    ROSGENERAL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSHEENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSCV: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSPULM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSGI: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSGU: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSDERM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSNEURO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSPSYCH: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSMUSCULO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSIMMUNO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSENDOCRINE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ROSCOMMENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_ros',
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
