const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patch_create:
 *     type: object
 *     properties:
 *       patch_type:
 *         type: string
 *         default: gateway
 *         description: Types of patches are - gateway, ecg, spo2, temperature
 *       patch_name:
 *         type: string
 *         default: Watch
 *       patch_uuid:
 *         type: string
 *         default: QUIRHEJFWUINQOBO39
 *       patch_status:
 *         type: string
 *         default: usable
 *       patch_group_id:
 *         type: string
 *         default: 12345
 *         description: The watch UUID can be used to group the other patches
 *       patch_mac:
 *         type: string
 *         default: 54321
 *       patch_bluetooth:
 *         type: integer
 *         default: 234
 *       patch_sensor_id:
 *         type: string
 *         default: QWERTY1234
 *       patch_serial:
 *         type: string
 *         default: QWERTY32145
 *       tenant_id:
 *         type: string
 *         default: 1
 *       pid:
 *         type: string
 *         default: 0
 *       patch_state:
 *         type: string
 *         default: active
 *       required:
 *          patch_type
 *          tenant_id
 *          patch_serial
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patch_create_group_id:
 *     type: object
 *     properties:
 *       temperature:
 *         type: string
 *         default: GW-LV-59739
 *         description: Provide the patch serial of the temperature
 *       ecg:
 *         type: string
 *         default: GW-LV-59734
 *         description: Provide the patch serial of the ecg
 *       spo2:
 *         type: string
 *         default: GW-LV-59737
 *         description: Provide the patch serial of the spo2
 *       gateway:
 *         type: string
 *         default: GW-LV-59732
 *         description: The watch UUID can be used to group the other patches
 */

//This is for the patch update

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patch_update:
 *     type: object
 *     properties:
 *       patch_type:
 *         type: string
 *         default: gateway
 *         description: Patch Update 
 *       patch_name:
 *         type: string
 *         default: Watch
 *       patch_status:
 *         type: string
 *         default: usable
 *       patch_group_id:
 *         type: string
 *         default: 12345
 *         description: The watch UUID can be used to group the other patches
 *       patch_mac:
 *         type: string
 *         default: 54321
 *       patch_bluetooth:
 *         type: integer
 *         default: 234
 *       patch_sensor_id:
 *         type: string
 *         default: QWERTY1234
 *       id:
 *         type: integer
 *         default: 1
 *       tenant_id:
 *         type: string
 *         default: 1
 *       pid:
 *         type: string
 *         default: 0
 *       patch_state:
 *         type: string
 *         default: active
 *       required:
 *          patch_type
 *          tenant_id
 *          patch_serial
 */


module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "patch",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            patch_type: {
                type: DataTypes.STRING(200),
                allowNull: false,
                // validate: {
                //     is: /^[a-z ,.'-]+$/i,
                // },
            },
            patch_name: {
                type: DataTypes.STRING(200),
                allowNull: true,
                // validate: {
                //     is: /^[a-z ,.'-]+$/i,
                // },
            },
            patch_uuid: {
                type: DataTypes.STRING(250),
                allowNull: false,
            },
            patch_status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            patch_group_id: {
                type: DataTypes.STRING(250),
                allowNull: true,
            },
            patch_mac: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            patch_bluetooth: {
                type: DataTypes.SMALLINT,
                allowNull: true,
                defaultValue: 1,
            },
            patch_sensor_id: {
                type: DataTypes.STRING(250),
                allowNull: true,
                validate: {
                    is: /[a-zA-Z0-9\s]*$/,
                },
            },
            patch_serial: {
                type: DataTypes.STRING(250),
                allowNull: true
            },
            tenant_id: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: false,
                defaultValue: 0,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
            patch_state: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            group_type: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            in_use: {
                type: DataTypes.STRING(5),
                allowNull: false
            },
            enterprise: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            device_serial: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            sequelize,
            tableName: "patch",
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
