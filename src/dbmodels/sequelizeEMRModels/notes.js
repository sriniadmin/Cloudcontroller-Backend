const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")
/**
 * @openapi
 *  components:
 *   schemas:
 *    Notes_create:
 *     type: object
 *     properties:
 *       note:
 *         type: string
 *         default: Note about the patient
 *       user_uuid:
 *         type: string
 *         default: user4ae7047e-1bfa-4408-8c22-148b6a6242d0
 *       date:
 *         type: string
 *         default: 2021-03-01
 *       revision:
 *         type: string
 *         default: 2021-03-01
 *       pid:
 *         type: string
 *         default: 12345
 *       note_type:
 *         type: string
 *         default: Type of note
 *       note_type_uuid:
 *         type: string
 *         default: UUID
 *       tenant_id:
 *         type: string
 *         default: 4
 *       flag:
 *         type: integer
 *         default: 0
 *       prac_uuid:
 *         type: string
 *         default: user4ae7047e-1bfa-4408-8c22-148b6a6242d0
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "notes",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            note_uuid: {
                type: DataTypes.STRING(250),
                allowNull: false,
                defaultValue: "0",
            },
            note: {
                type: DataTypes.TEXT,
                allowNull: true,
                // validate: {
                //     is: /^[a-z ,.'-]+$/i,
                // },
            },
            user_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
            revision: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn("current_timestamp"),
            },
            tenant_id: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            flag: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: true,
            },
            note_type: {
                type: DataTypes.STRING(255),
                allowNull: false,
                comment:
                    "doctor notes, nurse notes, lab notes, prescription notes",
                // validate: {
                //     is: /^[a-z ,.'-]+$/i,
                // },
            },
            note_type_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
                comment:
                    "value of uuid from different tables like prescription_uuid, lab_uuid etc",
                // validate: {
                //     is: /^[a-z ,.'-]+$/i,
                // },
            },
            prac_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "notes",
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "foreign_id",
                    using: "BTREE",
                    fields: [{ name: "prac_uuid" }],
                },
                {
                    name: "foreign_id_2",
                    using: "BTREE",
                    fields: [{ name: "note_uuid" }],
                },
                {
                    name: "date",
                    using: "BTREE",
                    fields: [{ name: "date" }],
                },
            ],
        }
    )
}
