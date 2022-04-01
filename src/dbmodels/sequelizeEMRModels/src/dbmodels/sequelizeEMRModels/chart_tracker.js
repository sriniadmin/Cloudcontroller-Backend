const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chart_tracker', {
    ct_pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ct_when: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    ct_userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    ct_location: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'chart_tracker',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ct_pid" },
          { name: "ct_when" },
        ]
      },
    ]
  });
};
