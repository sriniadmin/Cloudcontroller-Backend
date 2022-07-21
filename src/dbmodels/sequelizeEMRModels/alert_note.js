const Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "alert_note",
        {
            id: {
                autoIncrement: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            alert_uuid: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            note: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn("now"),
            }
        },
        {
            sequelize,
            tableName: "alert_note",
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
