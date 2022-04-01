const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dtime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    encounter: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount1: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    amount2: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    posted1: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    posted2: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'payments',
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
        name: "pid",
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
    ]
  });
};
