const Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "logger_data",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            pid: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            device_type: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            time: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn("now"),
            },
            url: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            tenant_id: {
                type: DataTypes.STRING(45),
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: "logger_data",
            timestamps: false,
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
