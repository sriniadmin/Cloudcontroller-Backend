// https://log4js-node.github.io/log4js-node/layouts.html


var log4js = require('log4js');

// Logger configuration
log4js.configure('./src/config/log4js-config.json');

// Default logger
const logger = log4js.getLogger();

// Log a message with the default logger
logger.info(' Log4js! should be UP !! ');

module.exports = logger;
