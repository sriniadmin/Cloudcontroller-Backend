const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_tracker', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    apptdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    appttime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    eid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    original_user: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "This is the user that created the original record"
    },
    encounter: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lastseq: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      comment: "The element file should contain this number of elements"
    },
    random_drug_test: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "NULL if not randomized. If randomized, 0 is no, 1 is yes"
    },
    drug_screen_completed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'patient_tracker',
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
        name: "eid",
        using: "BTREE",
        fields: [
          { name: "eid" },
        ]
      },
      {
        name: "pid",
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
    ]
  });
};
