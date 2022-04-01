const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")
/**
 * @openapi
 *  components:
 *   schemas:
 *    Connector:
 *     type: object
 *     properties:
 *       username:
 *         type: string
 *         default: username
 *       password:
 *         type: string
 *         default: 14
 *       id:
 *         type: integer
 *         default: 1
 *       crontime:
 *         type: string
 *         default: 2021-04-28 07:45:15
 *       url:
 *         type: string
 *         default: 0
 *       connector_uuid:
 *         type: string
 *         default: 1
 *       connector_specifics:
 *         type: string
 *         default: 0
 *       resources:
 *         type: string
 *         default: 0
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "connector",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            url: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            username: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING(300),
                allowNull: true,
            },
            crontime: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: "0000-00-00 00:00:00",
            },
            connector_uuid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            connector_specifics: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            resources: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
        },
        {
            sequelize,
            tableName: "connector",
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
