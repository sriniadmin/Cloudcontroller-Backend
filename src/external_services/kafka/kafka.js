const { Kafka } = require("kafkajs")
const clientId = "my-app"
const brokers = [process.env.KAFKA_BROKER+":9092"]
const topic = "NewPatient1"
const kafka = new Kafka({ clientId, brokers })
const producer = kafka.producer()

module.exports = producer
