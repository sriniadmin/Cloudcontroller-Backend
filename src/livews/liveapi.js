//a-z standard packages
const cookieParser = require('cookie-parser');
console.log("App Start Testing")

const express = require('express');

const path = require('path');
const responseTime = require('response-time');
const swaggerUi = require('swagger-ui-express');

//a-z custom modules

const logger = require("./src/config/logger");
const openapiSpecification = require("./src/config/swaggerConfig");

const systemChecks = require("./src/lib/system/systemChecks");
const testGRPC = require("./src/external_services/grpc/kafka_service");
const apiResponseHandler = require("./src/middleware/apiResponseHandler");

// WebApp constants
const port = process.env.WEB_APP_PORT;

// TODO : cleanup
// NOTE : With Sequelize AUTO
// For some of the tables - primaryKey: true needs to be set -- then everything will work as expected
// For now commented them some of the tables under init-models

const sequelizeDB = require("./src/config/emrmysqldb"); // Database

let initModels = require("./src/dbmodels/sequelizeEMRModels/init-models")
  .initModels
let models = initModels(sequelizeDB)

const pathRouter = './src/routes/api/'

// XXX - this needs to be generic prestart checks
// Validate all the system checks before launching the API endpoints
// For now only DB check is present - all the requirements should be validated
// as a health check of System using healthstatus Api
systemChecks.dbValidate()

let app = express();

// view engine setup - Can we removed once the Frontend React UI and Mobile App is available
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// Register Middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(cookieParser());

// Static files from this will be loaded without checking the token
app.use(express.static(path.join(__dirname, 'public')));

app.use(responseTime());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification,{ explorer: true }));


// This is for the Sensors - Needs to be moved out later
app.use('/liveapi/gateway', require('./src/routes/liveapi/gateway'));

// Explicit routes
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(openapiSpecification);
});

// // This sends out the response to the client
app.use(apiResponseHandler)

app.use(function (err, req, res, next) {
  console.log('This is the invalid field ->', err.field, err)
  next(err)
})

app.listen(port, function () {
  logger.debug("Server running on port => ", port);
});

// module.exports = app;
