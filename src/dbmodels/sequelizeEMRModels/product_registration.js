const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_registration', {
    registration_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    opt_out: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_registration',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "registration_id" },
        ]
      },
    ]
  });
};
