const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
      "amendments_history",
      {
          amendment_id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              autoIncrement: true,
              comment: "Amendment ID",
              primaryKey: true,
          },
          amendment_note: {
              type: DataTypes.TEXT,
              allowNull: true,
              comment: "Amendment requested from",
          },
          amendment_status: {
              type: DataTypes.STRING(50),
              allowNull: true,
              comment: "Amendment Request Status",
          },
          created_by: {
              type: DataTypes.INTEGER,
              allowNull: false,
              comment: "references users.id for session owner",
          },
          created_time: {
              type: DataTypes.DATE,
              allowNull: false,
              defaultValue: "0000-00-00 00:00:00",
              comment: "created time",
          },
      },
      {
          sequelize,
          tableName: "amendments_history",
          timestamps: false,
          indexes: [
              {
                  name: "amendment_history_id",
                  using: "BTREE",
                  fields: [{ name: "amendment_id" }],
              },
          ],
      }
  )
};
