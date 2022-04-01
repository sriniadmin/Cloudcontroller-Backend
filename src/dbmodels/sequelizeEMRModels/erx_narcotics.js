const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('erx_narcotics', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    drug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dea_number: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    csa_sch: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    narc: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    other_names: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'erx_narcotics',
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
    ]
  });
};
