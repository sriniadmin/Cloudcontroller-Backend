const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_vitals', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    authorized: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    bps: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    bpd: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    weight: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true,
      defaultValue: 0.00
    },
    height: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true,
      defaultValue: 0.00
    },
    temperature: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true,
      defaultValue: 0.00
    },
    temp_method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pulse: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true,
      defaultValue: 0.00
    },
    respiration: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true,
      defaultValue: 0.00
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BMI: {
      type: DataTypes.FLOAT(4,1),
      allowNull: true,
      defaultValue: 0.0
    },
    BMI_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    waist_circ: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true,
      defaultValue: 0.00
    },
    head_circ: {
      type: DataTypes.FLOAT(4,2),
      allowNull: true,
      defaultValue: 0.00
    },
    oxygen_saturation: {
      type: DataTypes.FLOAT(5,2),
      allowNull: true,
      defaultValue: 0.00
    },
    external_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_vitals',
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
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
    ]
  });
};
