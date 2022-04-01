const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_birthday_alert', {
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    turned_off_on: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'patient_birthday_alert',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
