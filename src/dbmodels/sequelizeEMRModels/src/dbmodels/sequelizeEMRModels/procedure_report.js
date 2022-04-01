const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('procedure_report', {
    procedure_report_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    procedure_order_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "references procedure_order.procedure_order_id"
    },
    procedure_order_seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "references procedure_order_code.procedure_order_seq"
    },
    date_collected: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_collected_tz: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "",
      comment: "+-hhmm offset from UTC"
    },
    date_report: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_report_tz: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "",
      comment: "+-hhmm offset from UTC"
    },
    source: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "references users.id, who entered this data"
    },
    specimen_num: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: ""
    },
    report_status: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "",
      comment: "received,complete,error"
    },
    review_status: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: "received",
      comment: "pending review status: received,reviewed"
    },
    report_notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "notes from the lab"
    }
  }, {
    sequelize,
    tableName: 'procedure_report',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "procedure_report_id" },
        ]
      },
      {
        name: "procedure_order_id",
        using: "BTREE",
        fields: [
          { name: "procedure_order_id" },
        ]
      },
    ]
  });
};
