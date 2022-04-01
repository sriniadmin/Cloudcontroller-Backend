// Example https://medium.com/@alfianlosari/building-grpc-service-server-note-crud-api-with-node-js-bcc5478d5bdb

// GRPC Client
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader');
const logger = require("../../config/logger")

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
}

const PROTO_PATH = process.env.KAFKA_PROTBUF
logger.debug("GRPC Channel Created - Connected to 9000",PROTO_PATH, __dirname)
// grpc.loadPackageDefinition
let protoFileName = __dirname + "/" + PROTO_PATH
const packageDefinition = protoLoader.loadSync(protoFileName, options);
const EMRService = grpc.loadPackageDefinition(packageDefinition).EmrT1Rpc;


// const EMRService = grpc.loadPackageDefinition(__dirname + "/"+ PROTO_PATH).EmrT1Rpc
// const EMRService = grpc.load(PROTO_PATH).EmrT1Rpc
const sensorClient = new EMRService(process.env.SENSOR_CONSUMER+':9000',
    grpc.credentials.createInsecure())

const baselineClient = new EMRService(process.env.SENSOR_CONSUMER + ':9010',
    grpc.credentials.createInsecure())

logger.debug("GRPC Channel Created - Connected to 9000")

module.exports = { sensorClient, baselineClient }
