const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    PatientLocation:
 *     type: object
 *     properties:
 *       pid:
 *         type: string
 *         default: 123435
 *       changeDate:
 *         type: string
 *         default: 2021-09-23
 *       location_uuid:
 *         type: string
 *         default: 124324124
 *       location_type:
 *         type: string
 *         default: ward
 *       floor_tag:
 *         type: string
 *         default: floor
 *       ward_tag:
 *         type: string
 *         default: ward
 *       bed_no:
 *         type: int
 *         default: 23
 *       vital_report_details:
 *         type: array
 *         items: 
 *          default:[]
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "patient_location_table",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            changeDate: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            current_date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
            location_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            location_type: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
                // floor_tag: {
                //     type: DataTypes.STRING(255),
                //     allowNull: true,
                // },
                // ward_tag: {
                //     type: DataTypes.STRING(255),
                //     allowNull: true,
                // },
            bed_no: {
                type: DataTypes.BIGINT(20),
                allowNull: true,
            },
            // vital_report_details: {
            //     type: DataTypes.JSON,
            //     allowNull: true,
            // },
        },
        {
            sequelize,
            tableName: "patient_location_table",
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
