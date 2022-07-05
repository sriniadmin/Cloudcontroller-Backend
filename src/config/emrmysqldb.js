const Sequelize = require("sequelize")
const fs = require('fs');
const logger = require("./logger")
logger.debug(__dirname + "/../../.env")
require("dotenv").config({ path: __dirname + "/../../.env" })

module.exports = new Sequelize(
    process.env.MYSQL_DB_NAME,
    process.env.MYSQL_DB_USER,
    process.env.MYSQL_DB_PASS,
    {
        host: process.env.MYSQL_DB_HOST,
        dialect: process.env.MYSQL_DB_DIALECT,
        operatorsAliases: false,
        logging: true,
        // dialectOptions: {
        //     ssl: {
        //         ca: fs.readFileSync(__dirname + '/ca.pem')
        //     }
        // },
        pool: {
            max: 5, // maximum connection
            min: 0, // minimum connection
            idle: 10000, // release connection
            evict: 20000, // remove idle connections
        },
    }
)
