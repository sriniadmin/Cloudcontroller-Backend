

const Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "device_type",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            key: {
                type: DataTypes.STRING(25),
                allowNull: false,
            },
            text: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            sub: {
                type: DataTypes.STRING(25),
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: "device_type",
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
