const Sequelize = require("sequelize")
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "note_attachment",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            note_uuid: {
                type: DataTypes.STRING(250),
                allowNull: false,
                defaultValue: "0",
            },
            name: {
                type: DataTypes.STRING(250),
                allowNull: false,
            },
            data: {
                type: DataTypes.BLOB('medium'),
                allowNull: false,
            },
            type: {
                type: DataTypes.STRING(250),
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn("now"),
            }
        },
        {
            sequelize,
            tableName: "note_attachment",
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