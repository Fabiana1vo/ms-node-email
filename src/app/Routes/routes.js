const express = require('express');
const routes = express.Router();

routes.use(express())
routes.use(express.json())

require('dotenv').config();

const { sendEmail } = require('../Controllers/sendEmail.controler')

routes.get('/', (req, res) => {
    res.send("Estou funcionando!")
})

routes.post('/email', sendEmail)

module.exports = routes;