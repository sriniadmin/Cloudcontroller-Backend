const Sequelize = require("sequelize")

/**
 * @openapi
 *  components:
 *   schemas:
 *    Vital_Threshold:
 *     type: object
 *     properties:
 *       pid:
 *         type: string
 *         default: 1234
 *       min_temp:
 *         type: float
 *         default: 97.23
 *       max_temp:
 *         type: float
 *         default: 99.88
 *       min_hr:
 *         type: float
 *         default: 91.23
 *       max_hr:
 *         type: float
 *         default: 99.87
 *       min_rr:
 *         type: float
 *         default: 92.05
 *       max_rr:
 *         type: float
 *         default: 94.23
 *       min_spo2:
 *         type: float
 *         default: 84.56
 *       max_spo2:
 *         type: float
 *         default: 96.2
 *       tenant_uuid:
 *         type: string
 *         default: 1313
 *       weight_min:
 *         type: string
 *         default: 60
 *       weight_max:
 *         type: string
 *         default: 80
 *       bps_min:
 *         type: string
 *         default: 120/80 mmHg
 *       bps_max:
 *         type: string
 *         default: 120/139 mmHg
 *       bpd_min:
 *         type: string
 *         default: 120/80 mmHg
 *       bpd_max:
 *         type: string
 *         default: 120/139 mmHg
 
 
 *   
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "vital_threshold",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            min_temp: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            max_temp: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            min_hr: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            max_hr: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            min_rr: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            max_rr: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            min_spo2: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            max_spo2: {
                type: DataTypes.FLOAT(5, 2),
                allowNull: true,
                // validate: {
                //     is: /^$|[-+]?[0-9]+\.[0-9]+$/,
                // },
            },
            tenant_uuid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            weight_min: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            weight_max: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            bps_min: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            bps_max: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            bpd_min: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
            bpd_max: {
                type: DataTypes.STRING(255),
                allowNull: true,
                defaultValue: "",
            },
        },
        {
            sequelize,
            tableName: "vital_threshold",
            timestamps: true,
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
