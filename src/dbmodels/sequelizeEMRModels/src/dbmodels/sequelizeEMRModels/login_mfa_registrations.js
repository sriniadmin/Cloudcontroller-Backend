const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('login_mfa_registrations', {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    last_challenge: {
      type: DataTypes.DATE,
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(31),
      allowNull: false,
      comment: "Q&A, U2F, TOTP etc."
    },
    var1: {
      type: DataTypes.STRING(4096),
      allowNull: false,
      defaultValue: "",
      comment: "Question, U2F registration etc."
    },
    var2: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: "",
      comment: "Answer etc."
    }
  }, {
    sequelize,
    tableName: 'login_mfa_registrations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
