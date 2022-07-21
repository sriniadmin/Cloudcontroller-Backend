const Sequelize = require("sequelize")

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "alert_data",
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
            value: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            threshold_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            value_of: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            max: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            min: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            alert_uuid: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            isAttended: {
                type: DataTypes.STRING(15),
                allowNull: true,
            }
        },
        {
            sequelize,
            tableName: "alert_data",
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
