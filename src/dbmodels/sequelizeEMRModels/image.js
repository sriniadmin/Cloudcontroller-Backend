const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")
/**
 * @openapi
 *  components:
 *   schemas:
 *    Image:
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
 *       image_uuid:
 *         type: string
 *         default: 123456
 *       template_uuid:
 *         type: string
 *         default: 123456
 *       template_type:
 *         type: string
 *         default: note
 *       pid:
 *         type: string
 *         default: 187641892473
 *       id:
 *         type: integer
 *         default: 1
 *       tags:
 *         type: array
 *         items:
 *          default:[note]
 
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Image_Update:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         default: fileName
 *       data:
 *         type: string
 *         format: binary
 *       template_uuid:
 *         type: string
 *         default: 123456
 *       type:
 *         type: string
 *         default: type
 
 */



module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "image",
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
                allowNull: true,
            },
            data: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            image_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            template_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            template_type: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
            pid: {
                type: DataTypes.STRING(255),
                allownull: true,
            },
            tags: {
                type: DataTypes.JSON,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "image",
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
