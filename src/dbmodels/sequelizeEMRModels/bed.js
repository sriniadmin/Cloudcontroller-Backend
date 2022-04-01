const Sequelize = require('sequelize');
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Bed_create:
 *     type: object
 *     properties:
 *       archive:
 *         type: int
 *         default: 1
 *       active:
 *         type: int
 *         default: 1
 *       bed_num:
 *         type: string
 *         default: 2
 *       tenant_uuid:
 *         type: string
 *         default: 1
 *       location_uuid:
 *         type: string
 *         default: 1
 *       bed_uuid:
 *         type: string
 *         default: 2
 *       id:
 *         type: integer
 *         default: 2
 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('bed', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tenant_uuid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bed_uuid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bed_num: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    archive: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    location_uuid: {
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
    tableName: 'bed',
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
