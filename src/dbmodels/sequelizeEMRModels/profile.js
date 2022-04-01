/**
 * @openapi
 *  components:
 *   schemas:
 *    profile:
 *     type: object
 *     properties:
 *       basic:
 *         type: object
 *         properties:
 *           age:
 *             type: integer
 *           height:
 *             type: integer
 *           weight:
 *             type: integer
 *           phoneNo:
 *             type: integer
 *           gender:
 *             type: string
 *           bloodGroup:
 *             type: string
 *       profession:
 *         type: object
 *         properties:
 *           occupation:
 *             type: string
 *           workingHours:
 *             type: integer
 *           annualIncome:
 *             type: integer
 *       address:
 *         type: object
 *         properties:
 *           country:
 *             type: string
 *           state:
 *             type: string
 *           city:
 *             type: string
 *           building:
 *             type: string
 *           landmark:
 *             type: string
 *           pincode:
 *             type: integer
 *       lifestyle:
 *         type: object
 *         properties:
 *           diet:
 *             type: string
 *           food:
 *             type: string
 *           sleepingHours:
 *             type: integer
 *           sleepDuration:
 *             type: string
 *           physicalActivity:
 *             type: integer
 *           exercise:
 *             type: string
 *       toxicants:
 *         type: object
 *         properties:
 *           alcohol:
 *             type: string
 *           smoking:
 *             type: string
 *           drugIntake:
 *             type: string
 *       body_examination:
 *         type: object
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('profile', {
        id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        pid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tenant_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profile_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profile_data: {
            type: DataTypes.JSON,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'profile',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "profile_id" },
                ]
            },
        ]
    })
}
