const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    License:
 *     type: object
 *     properties:
 *       license:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/License_Fields'
 *       tenant_id:
 *         type: string
 *         default: tenant1234675
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    License_Fields:
 *     type: object
 *     properties:
 *       Basic_License:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Basic'
 *       Devices:
 *         type: array
 *         items:
 *           "$ref": '#/components/schemas/Sensors'
 *       Advanced_Features:
 *         type: array
 *         items:
 *           "$ref": '#/components/schemas/Advanced'
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Sensors:
 *     type: object
 *     properties:
 *       sensors:
 *         type: string
 *         default: spo2
 *       status:
 *         type: string
 *         default: active
 *       StartDate:
 *         type: string
 *         default: 2021-06-23
 *       EndDate:
 *         type: string
 *         default: 2021-09-23
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Advanced:
 *     type: object
 *     properties:
 *       advanced_features:
 *         type: string
 *         default: VISULAIZER
 *       status:
 *         type: string
 *         default: active
 *       StartDate:
 *         type: string
 *         default: 2021-06-23
 *       EndDate:
 *         type: string
 *         default: 2021-09-23
 */



/**
 * @openapi
 *  components:
 *   schemas:
 *    Basic:
 *     type: object
 *     properties:
 *       Dashboard:
 *         type: object
 *         "$ref": '#/components/schemas/Dashboard'
 *       Alerts:
 *         type: object
 *         "$ref": '#/components/schemas/Dashboard'
 *       Audit:
 *         type: object
 *         "$ref": '#/components/schemas/Dashboard'
 *       Billing:
 *         type: object
 *         "$ref": '#/components/schemas/Dashboard'
 *       Patient Journey:
 *         type: object
 *         "$ref": '#/components/schemas/Dashboard'
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Dashboard:
 *     type: object
 *     properties:
 *       status:
 *         type: string
 *         default: active
 *       StartDate:
 *         type: string
 *         default: 2021-06-23
 *       EndDate:
 *         type: string
 *         default: 2021-09-23
 */


module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "license",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            tenant_id: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            license_uuid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            license: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            date: {
                type: DataTypes.DATE(255),
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
        },
        {
            sequelize,
            tableName: "license",
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
            ],
        }
    )
}
