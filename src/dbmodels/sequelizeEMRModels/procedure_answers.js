const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procedure_answers', {
    procedure_order_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "references procedure_order.procedure_order_id"
    },
    procedure_order_seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "references procedure_order_code.procedure_order_seq"
    },
    question_code: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      comment: "references procedure_questions.question_code"
    },
    answer_seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "supports multiple-choice questions. answer_seq, incremented in code"
    },
    answer: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "answer data"
    }
  }, {
    sequelize,
    tableName: 'procedure_answers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "procedure_order_id" },
          { name: "procedure_order_seq" },
          { name: "question_code" },
          { name: "answer_seq" },
        ]
      },
    ]
  });
};
