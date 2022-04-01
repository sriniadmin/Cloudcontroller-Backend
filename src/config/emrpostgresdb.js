const postgresSequelize = require("sequelize")
const logger = require("./logger")
logger.debug(__dirname + "/../../.env")
require("dotenv").config({ path: __dirname + "/../../.env" })

module.exports = new postgresSequelize(
    process.env.EMR_POSTGRES_DB,
    process.env.EMR_POSTGRES_DB_USER,
    process.env.EMR_POSTGRES_DB_PASS,
    {
        host: process.env.EMR_POSTGRES_DB_HOST,
        dialect: process.env.EMR_POSTGRES_DB_DIALECT,
        operatorsAliases: false,

        pool: {
            max: 20,
            min: 0,
            acquire: 60000,
            idle: 10000,
        },
    }
)
