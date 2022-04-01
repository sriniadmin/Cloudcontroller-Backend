const Sequelize = require('sequelize');
// const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Medical_Illness:
 *     type: object
 *     properties:
 *       prescription_uuid:
 *         type: string
 *         default: prescription238957294875
 *       procedure_uuid:
 *         type: string
 *         default: procedure089789
 *       vital_uuid:
 *         type: string
 *         default: vital13434
 *       report_uuid:
 *         type: string
 *         default: report1138778
 *       illness_uuid:
 *         type: string
 *         default: illness13434
 *       allergy_uuid:
 *         type: string
 *         default: allergy1341354
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('medical_illness_map', {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        prescription_uuid: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
     procedure_uuid: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        allergy_uuid: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
       vital_uuid: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
       report_uuid: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        allergy_uuid: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        illness_uuid: {
            type: DataTypes.STRING(255),
            allowNull:true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'medical_illness_map',
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
