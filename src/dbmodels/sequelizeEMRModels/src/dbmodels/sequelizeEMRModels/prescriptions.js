const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prescriptions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    filled_by_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pharmacy_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_modified: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    encounter: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    drug: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    drug_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rxnorm_drugcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    form: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dosage: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    quantity: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    size: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    route: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interval: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    substitute: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    refills: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    per_refill: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    filled_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    medication: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    site: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prescriptionguid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    erx_source: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-OpenEMR 1-External"
    },
    erx_uploaded: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Pending NewCrop upload 1-Uploaded to NewCrop"
    },
    drug_info_erx: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    external_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    indication: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prn: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ntx: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rtx: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    txDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'prescriptions',
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
        name: "patient_id",
        using: "BTREE",
        fields: [
          { name: "patient_id" },
        ]
      },
    ]
  });
};
