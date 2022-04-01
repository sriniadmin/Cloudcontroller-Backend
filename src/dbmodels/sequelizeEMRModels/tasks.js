const Sequelize = require('sequelize');

/**
 * @openapi
 *  components:
 *   schemas:
 *    Task:
 *     type: object
 *     properties:
 *       task:
 *         type: array
 *         items:
 *           "$ref": '#/components/schemas/Tasks_Create'
 *       pid:
 *         type: string
 *         default: patient12345
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Tasks_Create:
 *     type: object
 *     properties:
 *       date:
 *         type: string
 *         default: 2021-12-23
 *       user_uuid:
 *         type: string
 *         default: user123456
 *       task:
 *         type: string
 *         default: Added a mew patient
 *       timeSpent:
 *         type: string
 *         default: 100
 *       timeConsidered:
 *         type: string
 *         default: 80
 *       totalTime:
 *         type: string
 *         default: 180
 *       code:
 *         type: string
 *         default: 99457
 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tasks', {
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
    task: {
      type: DataTypes.JSON,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE(255),
      allowNull: true,
      defaultValue: Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'tasks',
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
