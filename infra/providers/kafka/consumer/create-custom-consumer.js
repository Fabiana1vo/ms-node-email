const kafkaConsumer = require('../kafka.consumer');


async function createCustomerConsumer() {
    console.log("CUSTUMER CONSUMER")
    const consumer = await kafkaConsumer("USER_CREATED")

    await consumer.run({
        eachMessage: async({ message }) => {
            const messageToString = message.value.toString()
            console.log(messageToString, "messageToString")
        }
    })
}

createCustomerConsumer();

module.exports = createCustomerConsumer;