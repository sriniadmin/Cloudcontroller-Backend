const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procedure_questions', {
    lab_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "references procedure_providers.ppid to identify the lab"
    },
    procedure_code: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "references procedure_type.procedure_code to identify this order type"
    },
    question_code: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "code identifying this question"
    },
    seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "sequence number for ordering"
    },
    question_text: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "descriptive text for question_code"
    },
    required: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 = required, 0 = not"
    },
    maxsize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "maximum length if text input field"
    },
    fldtype: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "T",
      comment: "Text, Number, Select, Multiselect, Date, Gestational-age"
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "choices for fldtype S and T"
    },
    tips: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Additional instructions for answering the question"
    },
    activity: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1 = active, 0 = inactive"
    }
  }, {
    sequelize,
    tableName: 'procedure_questions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lab_id" },
          { name: "procedure_code" },
          { name: "question_code" },
        ]
      },
    ]
  });
};
