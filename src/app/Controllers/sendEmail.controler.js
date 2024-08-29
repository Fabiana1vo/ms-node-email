const { senderEmail } = require('../Services/senderEmail.service');

exports.sendEmail = async(req, res) => {
    // console.log(req.body, "Mostrando os dados recebidos no controller")

    try {
        const { ownerRef, from, to, subject, message } = req.body;
        let result = await senderEmail({ ownerRef, from, to, subject, message });
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
}