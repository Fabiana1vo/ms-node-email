const nodemailer = require('nodemailer');
const EmailDTO = require('../Dto/emailDto');
const EmailModel = require('../Models/emailModel')
const EmailStatus = require('./../Enum/statusEmail')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
    },
});


exports.senderEmail = async(value) => {

    const data = value;
    const emailDto = new EmailDTO(data);

    try {

        if (emailDto.isValid() == true) {
            //Registrar os dados no banco de dados e incluir o status além de quando o email foi enviado

            // console.log("mostrando os dados recebidos no meu senderEmail service", value)

            await transporter.sendMail({
                from: emailDto.from,
                to: emailDto.to,
                subject: emailDto.subject,
                html: emailDto.message,
            }).then(() => {
                emailDto.status_email = EmailStatus.sent;
            }).catch((error) => {
                emailDto.status_email = EmailStatus.failed;
            });
            return {
                message: 'Email enviado com sucesso'
            };
        } else {
            return {
                error: emailDto.isValid()
            };
        }

    } catch (error) {

        if (error) {
            emailDto.status_email = EmailStatus.failed
        }
        console.log(error);
        return {
            error: 'Ocorreu um erro ao processar sua solicitação o email'
        };

    } finally {

        const email = await EmailModel.create(emailDto);

        console.log(email)
    }
}