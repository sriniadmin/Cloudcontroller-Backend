const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Appointment_create:
 *     type: object
 *     properties:
 *       prac_uuid:
 *         type: string
 *         default: 1
 *       date:
 *         type: date
 *         default: "2021-03-01"
 *       startTime:
 *         type: time
 *         default: 09:20:00
 *       endTime:
 *         type: time
 *         default: 09:30:00
 *       id:
 *         type: integer
 *         default: 1
 *       pid:
 *         type: string
 *         default: 1
 *       tenant_uuid:
 *         type: string
 *         default: 1
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "Appointment",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            prac_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
                primaryKey: true,
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            startTime: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            endTime: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            tenant_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "Appointment",
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
