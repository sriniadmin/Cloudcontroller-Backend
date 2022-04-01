const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log_comment_encrypt', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    log_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    encrypt: {
      type: "ENUM('Yes','No')",
      allowNull: false,
      defaultValue: "No"
    },
    checksum: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    version: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 for mycrypt and 1 for openssl"
    }
  }, {
    sequelize,
    tableName: 'log_comment_encrypt',
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
