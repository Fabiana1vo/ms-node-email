const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const routes = require('./src/app/Routes/routes')
const conn = require('./infra/db/conn')

require("./infra/providers/kafka/consumer")
require('dotenv').config()

const port = process.env.PORT || 3000

app.use(helmet());

app.use(cors());
app.use(routes)
app.use(express.json())


app.listen(port, () => {
    console.log(`Server is running on port 🎉 ${port}`)
})

//Conectando-se ao banco de dados!
conn();

// consumers();