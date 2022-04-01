const Sequelize = require('sequelize');
const db = require("../../config/emrmysqldb")
/**
 * @openapi
 *  components:
 *   schemas:
 *    User_Tenant:
 *     type: object
 *     properties:
 *       user_uuid:
 *         type: string
 *         default: user12314
 *       tenant_id:
 *         type: string
 *         default: tenant12345
 *       tenant_name:
 *         type: string
 *         default: demohospital.com
 *       role:
 *         type: string
 *         default: Admin
 *       date:
 *         type: string
 *         default: 2021-12-20 13:18:15
 */


module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user_tenant_map', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_uuid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tenant_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tenant_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE(255),
      allowNull: true,
      defaultValue: Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'user_tenant_map',
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
