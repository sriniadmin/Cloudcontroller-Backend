const sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")
/**
 * @openapi
 *  components:
 *   schemas:
 *    Report:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *         default: type
 *       name:
 *         type: string
 *         default: fileName
 *       data:
 *         type: string
 *         format: binary
 *       pid:
 *         type: string
 *         default: 123456
 */


module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "report",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                primaryKey: true,
            },
            type: {
                type: DataTypes.STRING(250),
                allowNull: true,
                defaultValue: "0",
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            data: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            report_uuid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE(255),
                allowNull: true,
                defaultValue:sequelize.fn('now')
              },
        },
        {
            sequelize,
            tableName: "report",
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
