const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('issue_encounter', {
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    encounter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    resolved: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'issue_encounter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
          { name: "list_id" },
          { name: "encounter" },
        ]
      },
    ]
  });
};
