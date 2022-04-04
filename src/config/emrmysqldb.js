const Sequelize = require("sequelize")
const logger = require("./logger")
logger.debug(__dirname + "/../../.env")
require("dotenv").config({ path: __dirname + "/../../.env" })


module.exports = new Sequelize(
    process.env.EMR_DB,
    process.env.EMR_DB_USER,
    process.env.EMR_DB_PASS,
    {
        host: process.env.EMR_DB_HOST,
        dialect: process.env.EMR_DB_DIALECT,
        operatorsAliases: false,
        logging: false,
        // dialectOptions: {
        //     statement_timeout: 1000,
        //     idle_in_transaction_session_timeout: 5000
        // },
        pool: {
            max: 40,
            min: 0,
            acquire: 60000,
            idle: 10000,
            evict: 20000,
        },
    }
)
