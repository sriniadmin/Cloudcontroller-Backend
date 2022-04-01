const Sequelize = require('sequelize');
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Prac_create:
 *     type: object
 *     properties:
 *       users_uuid:
 *         type: array
 *         items:
 *          default: usere873217
 *       archive:
 *         type: integer
 *         default: 1
 *       tenant_id:
 *         type: string
 *         default: 1
 *       id:
 *         type: integer
 *         default: 1
 *       pid:
 *         type: string
 *         default: 1
 *       primary_consultant:
 *         type: array
 *         items:
 *          default: prac9ekff134124
 *       secondary_consultant:
 *         type: array
 *         items:
 *          default: prac13948147
 */




module.exports = function (sequelize, DataTypes) {
  return sequelize.define('practictioner_patient_map', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    users_uuid: {
      type: DataTypes.JSON,
      allowNull: true

    },
    pid: {
      type: DataTypes.STRING(255),
      allowNull: true

    },
    tenant_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    archive: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      validate: {
        isInt: true
      }
    },
    primary: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      validate: {
        isInt: true
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.fn("now"),
    },
    primary_consultant: {
      type: DataTypes.JSON,
      allowNull: true
    },
    secondary_consultant: {
      type: DataTypes.JSON,
      allowNull: true
    },

  }, {
    sequelize,
    tableName: 'practictioner_patient_map',
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
