const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('therapy_groups_participants', {
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    group_patient_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    group_patient_start: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    group_patient_end: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    group_patient_comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'therapy_groups_participants',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "group_id" },
          { name: "pid" },
        ]
      },
    ]
  });
};
