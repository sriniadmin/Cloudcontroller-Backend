const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procedure_order', {
    procedure_order_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    provider_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references users.id, the ordering provider"
    },
    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "references patient_data.pid"
    },
    encounter_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references form_encounter.encounter"
    },
    date_collected: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "time specimen collected"
    },
    date_ordered: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    order_priority: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    order_status: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "pending,routed,complete,canceled"
    },
    patient_instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "0 if deleted"
    },
    control_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "This is the CONTROL ID that is sent back from lab"
    },
    lab_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references procedure_providers.ppid"
    },
    specimen_type: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "from the Specimen_Type list"
    },
    specimen_location: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "from the Specimen_Location list"
    },
    specimen_volume: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
      comment: "from a text input field"
    },
    date_transmitted: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "time of order transmission, null if unsent"
    },
    clinical_hx: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "clinical history text that may be relevant to the order"
    },
    external_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    history_order: {
      type: "ENUM('0','1')",
      allowNull: true,
      defaultValue: "0",
      comment: "references order is added for history purpose only."
    },
    order_diagnosis: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "",
      comment: "primary order diagnosis"
    }
  }, {
    sequelize,
    tableName: 'procedure_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "procedure_order_id" },
        ]
      },
      {
        name: "datepid",
        using: "BTREE",
        fields: [
          { name: "date_ordered" },
          { name: "patient_id" },
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
