const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_eye_biometrics', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Links to forms.form_id"
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ODK1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODK2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODK2AXIS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSK1: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSK2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    OSK2AXIS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ODAXIALLENGTH: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSAXIALLENGTH: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODPDMeasured: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSPDMeasured: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODACD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSACD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODW2W: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSW2W: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ODLT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OSLT: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_eye_biometrics',
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
        name: "id_pid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "pid" },
        ]
      },
    ]
  });
};
