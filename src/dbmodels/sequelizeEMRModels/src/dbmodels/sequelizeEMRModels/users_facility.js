const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_facility', {
    tablename: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    facility_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'users_facility',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tablename" },
          { name: "table_id" },
          { name: "facility_id" },
        ]
      },
    ]
  });
};
