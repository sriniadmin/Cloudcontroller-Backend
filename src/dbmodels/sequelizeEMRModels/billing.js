const Sequelize = require("sequelize")



/**
 * @openapi
 *  components:
 *   schemas:
 *    Billing_Information:
 *     type: object
 *     properties:
 *       pid:
 *         type: string
 *         default: patient12345
 *       params:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Billing_Info'
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Billing:
 *     type: object
 *     properties:
 *       code_type:
 *         type: string
 *         default: CPT
 *       code:
 *         type: integer
 *         default: 99453
 *       pid:
 *         type: string
 *         default: patient1ad72cd5-c7a3-4d9f-8e9d-f446605a387e
 *       bill_date:
 *         type: string
 *         default: 2022-05-05
 *       time_spent:
 *         type: integer
 *         default: 20
 *       revenue_code:
 *         type: string
 *         default: 123
 *       notecodes:
 *         type: string
 *         default: pending
 *       bill_process:
 *         type: string
 *         default: 0
 *       fee:
 *         type: string
 *         default: 20
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Billing_Info:
 *     type: object
 *     properties:
 *      Billing_Information:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Tasks'
 *      Patch_Patient_Information:
 *         type: array
 *         items:
 *          default:[]
 *      Patches:
 *         type: array
 *         items:
 *          default:[]
 * 
 *     
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Tasks:
 *     type: object
 *     properties:
 *       code:
 *         type: integer
 *         default: 99457
 *       code_internal:
 *         type: string
 *         default: 99458_stage1
 *       useruuid:
 *         type: string
 *         default: NurseA
 *       date_time:
 *         type: string
 *         default: 2021-12-08 13:31:12
 *       taskTotalTimeSpent:
 *         type: string
 *         default: 100
 *       timeConsidered:
 *         type: string
 *         default: 100
 *       task:
 *         type: string
 *         default: Called patient over phone - for medicine
 *       status:
 *         type: string
 *         default: true
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Patch_Info:
 *     type: object
 *     properties:
 *       patch_type:
 *         type: string
 *         default: ECG
 *       patch_serial:
 *         type: string
 *         default: 123456
 */


/**
 * @openapi
 *  components:
 *   schemas:
 *    Billing_Update:
 *     type: object
 *     properties:
 *       code_type:
 *         type: string
 *         default: CPTR
 *       code:
 *         type: string
 *         default: 919457
 *       status:
 *         type: string
 *         default: 99453
 *       bill_date:
 *         type: string
 *         default: 2021-06-21
 *       params:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Billing_Info'
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "billing",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
                comment: "Internal date update",
            },
            code_type: {
                type: DataTypes.STRING(15),
                allowNull: true,
            },
            code: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            provider_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            user: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            groupname: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            authorized: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
            encounter: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            params: {
                type: DataTypes.JSON,
                allowNull: true,
                comment:"Task performed by the user"
            },
            billed: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
            activity: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
            payer_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            bill_process: {
                type: DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0,
            },
            bill_date: {
                type: DataTypes.DATE,
                allowNull: true,
                comment: "User date update",
            },
            process_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            process_file: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            modifier: {
                type: DataTypes.STRING(12),
                allowNull: true,
            },
            units: {
                type: DataTypes.INTEGER,
                allowNull: true,
                comment: "the duration for patient monitoring",
            },
            fee: {
                type: DataTypes.DECIMAL(12, 2),
                allowNull: true,
            },
            justify: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            target: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            x12_partner_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            ndc_info: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            notecodes: {
                type: DataTypes.STRING(25),
                allowNull: true,
                defaultValue: "",
            },
            external_id: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            pricelevel: {
                type: DataTypes.STRING(31),
                allowNull: true,
                defaultValue: "",
            },
            revenue_code: {
                type: DataTypes.STRING(6),
                allowNull: true,
                defaultValue: "",
                comment: "Item revenue code",
            }
        },
        {
            sequelize,
            tableName: "billing",
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "pid",
                    using: "BTREE",
                    fields: [{ name: "pid" }],
                },
            ],
        }
    )
}
