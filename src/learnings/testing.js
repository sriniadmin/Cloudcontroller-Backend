//var log4js = require('log4js');
// log4js.configure({
//   appenders: {
//     logstash: { type: '@log4js-node/logstash-http', url: 'http://51.143.17.177:7120/api/patients/patientinventory', application: 'logstash-log4js', logType: 'application', logChannel: 'node' }
//   },
//   categories: {
//     default: { appenders: [ 'logstash' ], level: 'info' }
//   }
// });

// const logger = log4js.getLogger();
// //logger.addContext('requestId', '123');
// logger.info('some interesting log message');
// logger.error('something has gone wrong');

const log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});

const logger = log4js.getLogger("cheese");
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.error("is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");
