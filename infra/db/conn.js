const mongoose = require('mongoose')

require('dotenv').config();

async function main() {
    try {

        mongoose.set("strictQuery", true)

        const conectToDB = process.env.MONGO_URI;
        await mongoose.connect(conectToDB)
        console.log("conected at db!")

    } catch (error) {
        console.log('Error', error)
    }
}

module.exports = main;