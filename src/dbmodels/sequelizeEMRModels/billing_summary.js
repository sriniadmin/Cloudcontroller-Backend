const Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "billing_summary",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            pid: {
                type: DataTypes.STRING(255),
                allowNull: false,
                comment: "PID of patient"
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn("now"),
                comment: "Internal date update",
            },
            task_99453: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            task_99454: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            task_99457: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            task_99458: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            task_99091: {
                type: DataTypes.INTEGER,
                allowNull: true,
            }
        },
        {
            sequelize,
            tableName: "billing_summary",
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
