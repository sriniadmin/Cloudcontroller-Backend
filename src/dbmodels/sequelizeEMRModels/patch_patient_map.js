const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")
/**
 * @openapi
 *  components:
 *   schemas:
 *    Patch_Patient_Map:
 *     type: object
 *     properties:
 *       patch_uuid:
 *         type: string
 *         default: Patch_UUID
 *       duration:
 *         type: string
 *         default: 14
 *       id:
 *         type: integer
 *         default: 1
 *       tenant_id:
 *         type: string
 *         default: 1
 *       command:
 *         type: string
 *         default: discover
 *       keepaliveHistory:
 *         type: object
 *         items: 
 *          default:
 *       discoverDevices:
 *         type: object
 *         items: 
 *          default:
 *       config:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Configs'
 *       pid:
 *         type: string
 *         default: 0
 *       required:
 *          patch_uuid
 *          tenant_id
 *          pid
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Update_Patch_Patient_Map:
 *     type: object
 *     properties:
 *       patch_uuid:
 *         type: string
 *         default: Patch_UUID
 *       duration:
 *         type: string
 *         default: 14
 *       command:
 *         type: string
 *         default: discover
 *       keepaliveHistory:
 *         type: object
 *         items: 
 *          default:
 *       config:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Configs'
 */



/**
 * @openapi
 *  components:
 *   schemas:
 *    Configs:
 *     type: object
 *     properties:
 *       sample_freq:
 *         type: string
 *         default: 30s
 *       sample_count:
 *         type: string
 *         default: 30
 *       stop_sample:
 *         type: string
 *         default: 0
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "patch_patient_map",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            patch_uuid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            duration: {
                type: DataTypes.STRING(300),
                allowNull: true,
            },
            tenant_id: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
            config: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            prevConfig: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            keepaliveHistory:
            {
                type: DataTypes.JSON,
                allowNull: true,
            },
            discoverDevices:
            {
                type: DataTypes.JSON,
                allowNull: true,
            },
            command: {

                type: DataTypes.STRING(255),
                allowNull: true,
            },
            keepaliveTime: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            configFlag: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "patch_patient_map",
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

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patch_Map:
 *     type: object
 *     properties:
 *       ecg:
 *         type: string
 *         default: b5cf3c3d-03dd-45cb-b86e-709ea2446cf9
 *       spo2:
 *         type: string
 *         default: b5cf3c3d-03dd-45cb-b86e-709ea2446cf9
 *       temp:
 *         type: string
 *         default: b5cf3c3d-03dd-45cb-b86e-709ea2446cf9
 */
