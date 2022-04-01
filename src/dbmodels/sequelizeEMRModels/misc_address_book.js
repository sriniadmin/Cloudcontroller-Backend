const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('misc_address_book', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    street: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'misc_address_book',
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
