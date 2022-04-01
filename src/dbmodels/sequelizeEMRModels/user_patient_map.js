const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    User_Patient_Map:
 *     type: object
 *     properties:
 *       user_uuid:
 *         type: string
 *         default: 1
 *       updated_time:
 *         type: time
 *         default: 2021-04-28 07:45:15
 *       archive:
 *         type: integer
 *         default: 1
 *       id:
 *         type: integer
 *         default: 1
 *       active:
 *         type: integer
 *         default: 1
 *       patient_uuid:
 *         type: string
 *         default: 1
 *       role:
 *         type: string
 *         default: Doctor
 *       pid:
 *         type: string
 *         default: 1
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "user_patient_map",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            user_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
                primaryKey: true,
            },
            updated_time: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: "0000-00-00 00:00:00"
            },
            archive: {
                type: DataTypes.INTEGER(4),
                allowNull: true,
                validate: {
                    isInt: true
                }
            },
            active: {
                type: DataTypes.INTEGER(6),
                allowNull: true,
                validate: {
                    isInt: true
                }
            },
            patient_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            role: {
                type: DataTypes.STRING(255),
                allowNull: true,
                validate: {
                    isAlpha: true
                }
            },
            pid: {
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
            tableName: "user_patient_map",
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "id" },

                    ],
                },
            ],
        }
    )
}
