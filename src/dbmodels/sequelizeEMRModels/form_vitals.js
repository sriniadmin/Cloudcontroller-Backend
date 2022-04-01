const Sequelize = require("sequelize")
const db = require("../../config/emrmysqldb")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Vital_create:
 *     type: object
 *     properties:
 *       user:
 *         type: string
 *         default: Emily
 *       groupname:
 *         type: string
 *         default: AB
 *       authorized:
 *         type: integer
 *         default: 12
 *       activity:
 *         type: integer
 *         default: 13
 *       bps:
 *         type: string
 *         default: BPS
 *       bpd:
 *         type: string
 *         default: BPD
 *       weight:
 *         type: float
 *         default: 84.56
 *       height:
 *         type: float
 *         default: 6.2
 *       temperature:
 *         type: float
 *         default: 91.2
 *       temp_method:
 *         type: string
 *         default: TEMP METHOD
 *       pulse:
 *         type: float
 *         default: 2.4
 *       respiration:
 *         type: float
 *         default: 6.7
 *       note:
 *         type: string
 *         default: The patient is in pink of health
 *       BMI:
 *         type: float
 *         default: 23.34
 *       BMI_status:
 *         type: string
 *         default: Active
 *       waist_circ:
 *         type: float
 *         default: 34.5
 *       head_circ:
 *         type: float
 *         default: 45.6
 *       oxygen_saturation:
 *         type: float
 *         default: 1.3
 *       external_id:
 *         type: string
 *         default: 1
 *       spo2:
 *         type: string
 *         default: 60
 *       pain_index:
 *         type: string
 *         default: 20
 *       vital_date:
 *         type: date
 *         default: 2021-07-09
 *       tenant_id:
 *         type: string
 *         default: tenant15636471478
 *       id:
 *         type: integer
 *         default: 1
 *
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "form_vitals",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn("now"),
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: false,
                defaultValue: 0,
            },
            user: {
                type: DataTypes.STRING(255),
                allowNull: true,
                validate: {
                    is: /^$|[a-zA-Z ]*$/,
                },
            },
            groupname: {
                type: DataTypes.STRING(255),
                allowNull: true,
                validate: {
                    is: /^$|[a-zA-Z ]*$/,
                },
            },

            authorized: {
                type: DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0,
                validate: {
                    isInt: true,
                },
            },
            activity: {
                type: DataTypes.TINYINT,
                allowNull: true,
                defaultValue: 0,
            },
            bps: {
                type: DataTypes.STRING(40),
                allowNull: true,
                // validate: {
                //     is: /^$|[a-zA-Z ]*$/,
                // },
            },
            bpd: {
                type: DataTypes.STRING(40),
                allowNull: true,
                //     validate: {
                //         is: /^$|[a-zA-Z ]*$/,
                //     },
            },
            weight: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                defaultValue: 0.0,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            height: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                defaultValue: 0.0,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            temperature: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                defaultValue: 0.0,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            temp_method: {
                type: DataTypes.STRING(255),
                allowNull: true,
                // validate: {
                //     is: /^$|[a-zA-Z ]*$/,
                // },
            },
            pulse: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                defaultValue: 0.0,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            respiration: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                defaultValue: 0.0,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            note: {
                type: DataTypes.STRING(255),
                allowNull: true,
                // validate: {
                //     is: /^$|[a-z ,.'-]+$/i,
                // },
            },
            BMI: {
                type: DataTypes.FLOAT(4, 1),
                allowNull: true,
                defaultValue: 0.0,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            BMI_status: {
                type: DataTypes.STRING(255),
                allowNull: true,
                // validate: {
                //     is: /^$|[a-zA-Z ]*$/,
                // },
            },
            waist_circ: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                defaultValue: 0.0,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            head_circ: {
                type: DataTypes.FLOAT(4, 2),
                allowNull: true,
                defaultValue: 0.0,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            oxygen_saturation: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                defaultValue: 0.0,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            external_id: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            vital_uuid: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            spo2: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            pain_index: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            vital_date: {
                type: DataTypes.DATEONLY,
                allowNull: true,
                validate: {
                    isDate: true,
                },
            },
            tenant_id: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "form_vitals",
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "pid",
                    using: "BTREE",
                    fields: [{ name: "pid" }],
                },
            ],
        }
    )
}
