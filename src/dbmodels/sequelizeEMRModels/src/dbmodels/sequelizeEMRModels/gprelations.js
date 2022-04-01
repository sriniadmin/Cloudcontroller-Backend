const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gprelations', {
    type1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id1: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id2: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'gprelations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type1" },
          { name: "id1" },
          { name: "type2" },
          { name: "id2" },
        ]
      },
      {
        name: "key2",
        using: "BTREE",
        fields: [
          { name: "type2" },
          { name: "id2" },
        ]
      },
    ]
  });
};
