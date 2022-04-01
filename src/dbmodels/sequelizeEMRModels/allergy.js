const Sequelize = require('sequelize');
// const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Allergy:
 *     type: object
 *     properties:
 *       allergy_uuid:
 *         type: string
 *         default: allergy-XXXX
 *       allergy_type:
 *         type: string
 *         default: first allergy
 *       allergy_name:
 *         type: string
 *         default: allergy name
 *       reaction:
 *         type: string
 *         default: allergy reaction
 *       status:
 *         type: string
 *         default: active
 *       date_from:
 *         type: string
 *         default: 2021-09-06
 *       date_to:
 *         type: string
 *         default: 2021-10-06
 *       note:
 *         type: string
 *         default: This is a note
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('allergy', {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        allergy_type: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        allergy_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        reaction: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        tenant_id: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        allergy_uuid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        pid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        note: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        date_from: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        date_to: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'allergy',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
        ]
    });
};
