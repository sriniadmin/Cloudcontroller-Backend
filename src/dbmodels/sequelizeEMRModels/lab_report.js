const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Lab_Report:
 *     type: object
 *     properties:
 *       report:
 *         type: array
 *         default: []
 *       report_uuid:
 *         type: string
 *         default: 123456
 *       name:
 *         type: string
 *         default: Name
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "lab_report",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            report: {
                type: DataTypes.JSON,
                allowNull: false,
            },
            tenant_id: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE(255),
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
            report_uuid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(255),  
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "lab_report",
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
