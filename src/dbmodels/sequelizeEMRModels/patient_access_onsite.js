const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_access_onsite', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    portal_username: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    portal_pwd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    portal_pwd_status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "0=>Password Created Through Demographics by The provider or staff. Patient Should Change it at first time it.1=>Pwd updated or created by patient itself"
    },
    portal_salt: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    portal_login_username: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "User entered username"
    },
    portal_onetime: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patient_access_onsite',
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
