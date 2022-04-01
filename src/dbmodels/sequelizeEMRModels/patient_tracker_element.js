const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_tracker_element', {
    pt_tracker_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "maps to id column in patient_tracker table"
    },
    start_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    room: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    status: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    seq: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      comment: "This is a numerical sequence for this pt_tracker_id events"
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "This is the user that created this element"
    }
  }, {
    sequelize,
    tableName: 'patient_tracker_element',
    timestamps: false,
    indexes: [
      {
        name: "pt_tracker_id",
        using: "BTREE",
        fields: [
          { name: "pt_tracker_id" },
          { name: "seq" },
        ]
      },
    ]
  });
};
