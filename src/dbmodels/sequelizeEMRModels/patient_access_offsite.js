const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_access_offsite', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "pid"
    },
    portal_username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    portal_pwd: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    portal_pwd_status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "0=>Password Created Through Demographics by The provider or staff. Patient Should Change it at first time it.1=>Pwd updated or created by patient itself"
    },
    authorize_net_id: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "authorize.net profile id"
    },
    portal_relation: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patient_access_offsite',
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
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
    ]
  });
};
