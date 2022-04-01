const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dated_reminders_link', {
    dr_link_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dr_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    to_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dated_reminders_link',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dr_link_id" },
        ]
      },
      {
        name: "to_id",
        using: "BTREE",
        fields: [
          { name: "to_id" },
        ]
      },
      {
        name: "dr_id",
        using: "BTREE",
        fields: [
          { name: "dr_id" },
        ]
      },
    ]
  });
};
