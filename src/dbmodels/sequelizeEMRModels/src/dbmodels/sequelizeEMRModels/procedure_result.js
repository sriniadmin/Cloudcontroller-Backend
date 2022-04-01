const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procedure_result', {
    procedure_result_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    procedure_report_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "references procedure_report.procedure_report_id"
    },
    result_data_type: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "S",
      comment: "N=Numeric, S=String, F=Formatted, E=External, L=Long text as first line of comments"
    },
    result_code: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "LOINC code, might match a procedure_type.procedure_code"
    },
    result_text: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Description of result_code"
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "lab-provided date specific to this result"
    },
    facility: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "lab-provided testing facility ID"
    },
    units: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    result: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    range: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    abnormal: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "no,yes,high,low"
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "comments from the lab"
    },
    document_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references documents.id if this result is a document"
    },
    result_status: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "preliminary, cannot be done, final, corrected, incomplete...etc."
    }
  }, {
    sequelize,
    tableName: 'procedure_result',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "procedure_result_id" },
        ]
      },
      {
        name: "procedure_report_id",
        using: "BTREE",
        fields: [
          { name: "procedure_report_id" },
        ]
      },
    ]
  });
};
