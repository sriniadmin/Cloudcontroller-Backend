const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procedure_order_code', {
    procedure_order_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "references procedure_order.procedure_order_id"
    },
    procedure_order_seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Supports multiple tests per order. Procedure_order_seq, incremented in code"
    },
    procedure_code: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "like procedure_type.procedure_code"
    },
    procedure_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "descriptive name of the procedure code"
    },
    procedure_source: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "1",
      comment: "1=original order, 2=added after order sent"
    },
    diagnoses: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "diagnoses and maybe other coding (e.g. ICD9:111.11)"
    },
    do_not_send: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = normal, 1 = do not transmit to lab"
    },
    procedure_order_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'procedure_order_code',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "procedure_order_id" },
          { name: "procedure_order_seq" },
        ]
      },
    ]
  });
};
