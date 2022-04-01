const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('therapy_groups', {
    group_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    group_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    group_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    group_type: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    group_participation: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    group_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    group_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    group_guest_counselors: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'therapy_groups',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
};
