const Sequelize = require('sequelize');
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Ews_create:
 *     type: object
 *     properties:
 *       timestamp:
 *         type: string
 *         default: 2021-04-28 07:45:15
 *       calculated_time:
 *         type: string
 *         default: CALCULATED_TIME
 *       score:
 *         type: string
 *         default: SCORE
 *       score_split:
 *         type: json
 *         default: SCORE_SPLIT
 *       archive:
 *         type: integer
 *         default: 0
 *       pid:
 *         type: string
 *         default: 4343732873
 *       id:
 *         type: integer
 *         default: 1
 *       tenant_id:
 *         type: integer
 *         default: 1
 * 
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Score:
 *     type: object
 *     properties:
 *       newScore:
 *         type: string
 *         default: 23
 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ews_table', {
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
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    calculated_time: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    score: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    score_split: {
      type: DataTypes.JSON,
      allowNull: false
    },
    tenant_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    archive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'ews_table',
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
