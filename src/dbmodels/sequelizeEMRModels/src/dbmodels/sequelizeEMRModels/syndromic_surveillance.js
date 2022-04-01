const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('syndromic_surveillance', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lists_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    submission_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'syndromic_surveillance',
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
        name: "lists_id",
        using: "BTREE",
        fields: [
          { name: "lists_id" },
        ]
      },
    ]
  });
};
