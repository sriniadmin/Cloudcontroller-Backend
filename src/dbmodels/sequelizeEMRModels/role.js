const Sequelize = require('sequelize');

/**
 * @openapi
 *  components:
 *   schemas:
 *    Role_create:
 *     type: object
 *     properties:
 *       role_uuid:
 *         type: string
 *         default: 1
 *       description:
 *         type: string
 *         default: 2
 *       active:
 *         type: int
 *         default: 1
 *       content:
 *         type: string
 *         default: 1
 *       role_name:
 *         type: string
 *         default: 2
 *       tenant_id:
 *         type: string
 *         default: 1
 *       role_permission:
 *         type: array
 *         items:
 *          default: 
 *       categories_permission:
 *         type: array
 *         items: 
 *          default: 
 */


/**
 * @openapi
 *  components:
 *   schemas:
 *    Role_update:
 *     type: object
 *     properties:
 *       role_uuid:
 *         type: string
 *         default: 1
 *       description:
 *         type: string
 *         default: 2
 *       active:
 *         type: int
 *         default: 1
 *       content:
 *         type: string
 *         default: 1
 *       role_name:
 *         type: string
 *         default: 2
 *       tenant_id:
 *         type: string
 *         default: 1
 *       role_permission:
 *         type: array
 *         items:
 *          default: 
 *       categories_permission:
 *         type: array
 *         items: 
 *          default: 
 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('role', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    role_uuid: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    role_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tenant_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role_permission: {
      type: DataTypes.JSON,
      allowNull: true
    },
    categories_permission: {
      type: DataTypes.JSON,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'role',
    timestamps: true,
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
