//a-z standard packages
const cookieParser = require("cookie-parser")
require('dotenv').config()

console.log("App Start Testing")
const createError = require("http-errors")
const express = require("express")
const morgan = require("morgan")
const path = require("path")
const responseTime = require("response-time")
const swaggerUi = require("swagger-ui-express")

//a-z custom modules
const { auditor, auditorLoadCfg } = require("./src/middleware/audit")
const authentication = require("./src/middleware/authentication")
const RBAC = require("./src/middleware/rbac")
const logger = require("./src/config/logger")
const openapiSpecification = require("./src/config/swaggerConfig")
const rbac = require("./src/middleware/rbac")
const systemChecks = require("./src/lib/system/systemChecks")
const testGRPC = require("./src/external_services/grpc/kafka_service")
//const validateParams = require("./src/middleware/validate_params");
const apiResponseHandler = require("./src/middleware/apiResponseHandler")

// WebApp constants
const port = process.env.WEB_APP_PORT

// TODO : cleanup
// NOTE : With Sequelize AUTO
// For some of the tables - primaryKey: true needs to be set -- then everything will work as expected
// For now commented them some of the tables under init-models

const sequelizeDB = require("./src/config/emrmysqldb") // Database
const postgresSequelizeDB = require("./src/config/emrpostgresdb") //postgres database
let initModels =
    require("./src/dbmodels/sequelizeEMRModels/init-models").initModels
let models = initModels(sequelizeDB)

let postgresModels = initModels(postgresSequelizeDB)

const Users_Secure = models.users_secure

const pathRouter = "./src/routes/api/"

const { medRouter, medCron } = require(pathRouter + "medication")
const url = require('url')


// XXX - this needs to be generic prestart checks
// Validate all the system checks before launching the API endpoints
// For now only DB check is present - all the requirements should be validated
// as a health check of System using healthstatus Api
systemChecks.dbValidate()

let app = express()
const fileUpload = require('express-fileupload');
app.use(fileUpload());
const cors = require('cors')

app.options("*", cors({ origin: '*', optionsSuccessStatus: 200 }))
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))

app.use(debugging)
function debugging(req, res, next) {
    console.log('                                  ');
    console.log('...........................................................................');
    console.log('\x1b[33m%s\x1b[0m', `PATH: ${url.parse(req.url,true).pathname}`);
    console.log('...........................................................................');
    next()
}

// view engine setup - Can we removed once the Frontend React UI and Mobile App is available
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

auditorLoadCfg()

// Register Middleware
app.use(express.json())
app.use(
    express.urlencoded({
        extended: false,
    })
)

// const beforeAfterInjection = function (req, res, next) {
//     logger.debug("In the before After Injection Function")
//     res.response = function (obj) {
//         req.res = obj
//     }
//     next()
// }

// const { emailer } = require("./src/external_services/email/email")
//emailer("reset@live247.ai", "srivatsa2423@gmail.com", "test", "test", "")

// app.use(beforeAfterInjection)

app.use(cookieParser())
// Static files from this will be loaded without checking the token
app.use(express.static(path.join(__dirname, "public")))


// app.use('/api/v1', router);

app.use(responseTime())
app.use(authentication.validateSession)
//app.use(validateParams);
// logger.debug('just above the rvac validate ')
// app.use(RBAC.RBAC_Validate)
// logger.debug('after the rbac validate')

// Middleware for audit trail
// console.log("\n\n[AUDIT]\n\n", auditor, auditorLoadCfg)
app.use(auditor)

// Swagger - After Auth to not expose the Api
// Swagger Route
// https://blog.cloudboost.io/adding-swagger-to-existing-node-js-project-92a6624b855b
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use( // KEEP THIS
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(openapiSpecification, { explorer: true })
)


//a-z All WebApp Routes // KEEP THIS
const routes = {
    //'/':				'index',
    "/api/alerts": "alerts",
    "/api/audit": "audit",
    "/api/bed": "bed",
    "/api/connectors": "connectors",
    "/api/facility": "facility",
    "/api/internal": "internal",
    "/api/location": "location",
    //'/api/medication':  'medication',
    "/api/patch": "patch",
    "/api/patients": "patients",
    "/api/patientinventory": "patientinventory",
    "/api/sign": "sign",
    "/api/tenant": "tenant",
    "/api/users": "users",
    "/api/product": "drug",
    "/api/upgrade": "upgrade",
    "/api/role": "role",
    "/api/billing": "billing",
    "/api/license": "license",
    "/api/tasks": "tasks",
    "/api/device": "device",
    "/api/profile": "profiles",
    "/api/patch/delete": "patch",
    "/saasapi/device": "patch",
    "/api/logger": "logger"
}

// Register WebApp Routes
let rt = Object.keys(routes) // KEEP THIS
rt.forEach((k) => {
    let rpath = pathRouter + routes[k]
    logger.debug("Registering %s : %s", k, rpath)
    app.use(k, require(rpath))
})

// XXX - Ugly to fix
// app.use("/api/medication", medRouter)
// medCron()

// This is for the Sensors - Needs to be moved out later
app.use("/liveapi/gateway", require("./src/routes/liveapi/gateway")) // KEEP THIS

// app.use("/video/guide", require("./src/routes/video/guide"))

// // Explicit routes
// app.get("/api-docs.json", (req, res) => {
//     res.setHeader("Content-Type", "application/json")
//     res.response(openapiSpecification)
// })

// This sends out the response to the client
app.use(apiResponseHandler) // KEEP THIS

// app.use(function (err, req, res, next) {
//     console.log("This is the invalid field ->", err.field, err)
//     next(err)
// })
//app.use(apiResponseHandler)

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// This sends out the response to the client
// app.use(apiResponseHandler)

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// app.set('port', process.env.PORT || 3000)

// app.listen(app.get('port'), () => {
//   console.log(`Express server listening on port ${app.get('port')}`);
// })

const server = require('http').Server(app) // KEEP THIS
const io = require('socket.io')(server) // KEEP THIS

global.global_variable = require('./globle-config/global-variable') // KEEP THIS

io.on('connection', (socket) => { // KEEP THIS
    global_variable.socket = socket
    global_variable.io = io
})

server.listen(process.env.WEB_APP_PORT) // KEEP THIS

// app.listen(port, function () {
//     logger.debug("Server running on port => ", port)
// })

module.exports = app;
