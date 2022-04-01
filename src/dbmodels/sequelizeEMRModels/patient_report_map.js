const Sequelize = require('sequelize');
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patient_report_map:
 *     type: object
 *     properties:
 *       tenant_id:
 *         type: string
 *         default: 2
 *       report_json:
 *         type: string
 *         default: 1
 *       deboarded_time:
 *         type: string
 *         default: 1
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_report_map', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tenant_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    report_json: {
      type: DataTypes.JSON,
      allowNull: false
    },
    deboarded_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("now"),
    },
  }, {
    sequelize,
    tableName: 'patient_report_map',
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
    ]
  });
};
