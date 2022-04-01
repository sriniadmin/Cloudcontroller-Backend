const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_locking', {
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
    IMP: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PLAN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Resource: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Technician: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LOCKED: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    LOCKEDDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    LOCKEDBY: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_locking',
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
