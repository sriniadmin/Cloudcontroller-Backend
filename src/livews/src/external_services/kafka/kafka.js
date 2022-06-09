const { Kafka } = require("kafkajs")
const clientId = "my-app"
const brokers = [process.env.KAFKA_BROKER_HOST+ ":" +process.env.KAFKA_BROKER_PORT]
const topic = "NewPatient1"
const kafka = new Kafka({ clientId, brokers })
const producer = kafka.producer()

module.exports = producer
