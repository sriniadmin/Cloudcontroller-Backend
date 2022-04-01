const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onsite_portal_activity', {
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
    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    activity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    require_audit: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    pending_action: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    action_taken: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    narrative: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    table_action: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    table_args: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    action_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    action_taken_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    checksum: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'onsite_portal_activity',
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
        name: "date",
        using: "BTREE",
        fields: [
          { name: "date" },
        ]
      },
    ]
  });
};
