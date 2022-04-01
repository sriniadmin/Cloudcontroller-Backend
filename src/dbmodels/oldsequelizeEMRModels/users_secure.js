const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
      "users_secure",
      {
          id: {
              type: DataTypes.BIGINT,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
          },
          username: {
              type: DataTypes.STRING(255),
              allowNull: true,
          },
          email: {
              type: DataTypes.STRING(255),
              allowNull: true,
          },
          role: {
              type: DataTypes.STRING(255),
              allowNull: true,
          },
          password: {
              type: DataTypes.STRING(255),
              allowNull: true,
          },
          salt: {
              type: DataTypes.STRING(255),
              allowNull: true,
          },
          last_update: {
              type: DataTypes.DATE,
              allowNull: false,
              defaultValue: Sequelize.fn("current_timestamp"),
          },
          password_history1: {
              type: DataTypes.STRING(255),
              allowNull: true,
          },
          salt_history1: {
              type: DataTypes.STRING(255),
              allowNull: true,
          },
          password_history2: {
              type: DataTypes.STRING(255),
              allowNull: true,
          },
          salt_history2: {
              type: DataTypes.STRING(255),
              allowNull: true,
          },
          last_challenge_response: {
              type: DataTypes.DATE,
              allowNull: true,
          },
          login_work_area: {
              type: DataTypes.TEXT,
              allowNull: true,
          },
          login_fail_counter: {
              type: DataTypes.INTEGER,
              allowNull: true,
              defaultValue: 0,
          },
      },
      {
          sequelize,
          tableName: "users_secure",
          timestamps: false,
          indexes: [
              {
                  name: "PRIMARY",
                  unique: true,
                  using: "BTREE",
                  fields: [{ name: "id" }],
              },
              {
                  name: "USERNAME_ID",
                  unique: true,
                  using: "BTREE",
                  fields: [{ name: "id" }, { name: "username" }],
              },
          ],
      }
  )
};
