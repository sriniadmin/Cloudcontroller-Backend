const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procedure_type', {
    procedure_type_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references procedure_type.procedure_type_id"
    },
    name: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: "",
      comment: "name for this category, procedure or result type"
    },
    lab_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references procedure_providers.ppid, 0 means default to parent"
    },
    procedure_code: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "code identifying this procedure"
    },
    procedure_type: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "see list proc_type"
    },
    body_site: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "where to do injection, e.g. arm, buttock"
    },
    specimen: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "blood, urine, saliva, etc."
    },
    route_admin: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "oral, injection"
    },
    laterality: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "left, right, ..."
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "descriptive text for procedure_code"
    },
    standard_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "industry standard code type and code (e.g. CPT4:12345)"
    },
    related_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "suggested code(s) for followup services if result is abnormal"
    },
    units: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "default for procedure_result.units"
    },
    range: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "default for procedure_result.range"
    },
    seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "sequence number for ordering"
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1=active, 0=inactive"
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "additional notes to enhance description"
    }
  }, {
    sequelize,
    tableName: 'procedure_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "procedure_type_id" },
        ]
      },
      {
        name: "parent",
        using: "BTREE",
        fields: [
          { name: "parent" },
        ]
      },
    ]
  });
};
