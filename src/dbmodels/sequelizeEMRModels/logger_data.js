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
            time: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn("now"),
            },
            url: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            data: {
                type: DataTypes.BLOB('medium'),
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
