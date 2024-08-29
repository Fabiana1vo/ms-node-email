const kafka = require('./index');

const kafkaConsumer = async(topic) => {
    const consumer = kafka.consumer({ groupId: "ORDER_APP" });
    await consumer.connect();

    await consumer.subscribe({ topic, fromBeginning: true });

    return consumer;
}

module.exports = kafkaConsumer;