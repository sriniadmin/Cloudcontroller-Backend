const Sequelize = require('sequelize');
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patient_Medication:
 *     type: object
 *     properties:
 *       time_given:
 *         type: string
 *         default: 2021-09-23
 *       pid:
 *         type: string
 *         default: 1
 *       drug:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Medication'
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Medication:
 *     type: object
 *     properties:
 *       drugName:
 *         type: string
 *         default: ramipril
 *       strength:
 *         type: string
 *         default: 5mg
 *       dosage:
 *         type: string
 *         default: 3
 *       route:
 *         type: string
 *         default: oral
 *       doses:
 *         type: string
 *         default: once a day
 
 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('patient_medication_table', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    drug: {
      type: DataTypes.JSON,
      allowNull: false
    },
    time_given: {
      type: DataTypes.DATE,
      allowNull: false
    },
    internal_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now')
    },
  }, {
    sequelize,
    tableName: 'patient_medication_table',
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
