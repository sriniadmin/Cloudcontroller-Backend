const Sequelize = require('sequelize');
// const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Medical_history:
 *     type: object
 *     properties:
 *       medical_history_uuid:
 *         type: string
 *         default: medicalhistory-XXXX
 *       date_of_treatment:
 *         type: string
 *         default: 2021-09-06
 *       treatment:
 *         type: array
 *         items:
 *          default:[]
 *       hospital_name:
 *         type: string
 *         default: MB Hospital
 *       doctor_name:
 *         type: string
 *         default: Dr. Ansh
 *       note:
 *         type: string
 *         default: This is a note
 *       symptoms:
 *         type: string
 *         default: Symptoms
 *       documents:
 *         type: string
 *         default: documents
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('medical_history', {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        date_of_treatment: {
            type: DataTypes.DATE,
            allowNull: true
        },
        treatment: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        hospital_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        doctor_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        tenant_id: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        note: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        medical_history_uuid: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        pid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.fn('now')
        },
        // symptoms: {
        //     type: DataTypes.TEXT('long'),
        //     allowNull: true
        // },
        documents: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
    }, {
        sequelize,
        tableName: 'medical_history',
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
