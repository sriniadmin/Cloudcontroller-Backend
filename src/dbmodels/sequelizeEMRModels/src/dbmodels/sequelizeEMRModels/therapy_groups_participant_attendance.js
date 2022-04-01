const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('therapy_groups_participant_attendance', {
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    meeting_patient_comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    meeting_patient_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'therapy_groups_participant_attendance',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "form_id" },
          { name: "pid" },
        ]
      },
    ]
  });
};
