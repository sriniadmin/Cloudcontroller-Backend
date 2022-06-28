const Sequelize = require('sequelize');
// const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Procedure:
 *     type: object
 *     properties:
 *       procedure_uuid:
 *         type: string
 *         default: procedure-XXXX
 *       code_type:
 *         type: string
 *         default: procedure-code
 *       description:
 *         type: string
 *         default: procedure description
 *       result:
 *         type: string
 *         default: expected result
 *       status:
 *         type: string
 *         default: active
 *       diagnosis_date:
 *         type: string
 *         default: 2021-09-06
 *       consulting_person:
 *         type: string
 *         default: Dr. Hariharan
 *       label:
 *         type: string
 *         default: label
 *       before_procedure:
 *         type: string
 *         default: Need biopsy
 *       after_procedure:
 *         type: string
 *         default: Invasive breast cancer
 *       during_procedure:
 *         type: string
 *         default: A lump or swelling
 *       document:
 *         type: array
 *         items:
 *          default: http://vpn.live247.ai/images/1638368809348.png
 *       procedure_date_time:
 *         type: array
 *         items:
 *          default: 2021-06-09
 *       procedureType:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Cancer_Form'
 * 
 * 
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Cancer_Form:
 *     type: object
 *     properties:
 *       type:
 *         type: string
 *         default: cancer
 *       procedure_type:
 *         type: string
 *         default: Pancreatic cancer
 *       procedure_site:
 *         type: string
 *         default: Pancreas
 *       condition:
 *         type: string
 *         default: surgery
 *       status:
 *         type: string
 *         default: critical
 *       stage_before_procedure:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Stage_Before'
 *       stage_during_procedure:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Stage_Before'
 *       stage_after_procedure:
 *         type: array
 *         items:
 *          "$ref": '#/components/schemas/Stage_Before'
 *       note:
 *         type: string
 *         default: Endoscopic retrograde cholangiopancreatography (ERCP)
 */

/**
 * @openapi
 *  components:
 *   schemas:
 *    Stage_Before:
 *     type: object
 *     properties:
 *       test:
 *         type: string
 *         default: test1
 *       result:
 *         type: string
 *         default: result
 *       unit:
 *         type: string
 *         default: unit
 *       ref_range:
 *         type: string
 *         default: ref_range
 *       method:
 *         type: string
 *         default: method
 */


module.exports = function (sequelize, DataTypes) {
    return sequelize.define('procedure', {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        pid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        tenant_id: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        procedure_uuid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        diagnosis_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        code_type: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        result: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        consulting_person: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        label: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        // before_procedure: {
        //     type: DataTypes.STRING(255),
        //     allowNull: true
        // },
        // after_procedure: {
        //     type: DataTypes.STRING(255),
        //     allowNull: true
        // },
        // during_procedure: {
        //     type: DataTypes.STRING(255),
        //     allowNull: true
        // },
        // procedureType: {
        //     type: DataTypes.JSON,
        //     allowNull: true
        // },
        // document: {
        //     type: DataTypes.JSON,
        //     allowNull: true
        // },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
        },
    }, {
        sequelize,
        tableName: 'procedure',
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
