const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    brokers: ['crisp-barnacle-7063-us1-kafka.upstash.io:9092'],
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',
        username: 'Y3Jpc3AtYmFybmFjbGUtNzA2MyRQ-LaEnb8DjXtHO-QNR-NWftUjDumsZvK-2U4',
        password: 'OWE5ZGIxNDYtNjA1MC00OTk3LTgxNDgtNThhYTY2NzJjZjQ3'
    },
    // logLevel: logLevel.ERROR,
});

module.exports = kafka;