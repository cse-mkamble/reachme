require("dotenv").config();
const nodemailer = require('nodemailer');

const sendEmail = (options) => {

    const transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: 'cse.mkamble@gmail.com',
            pass: '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',
        }
    });

    const mailOptions = {
        from: process.env.APP_NAME + ' <cse.mkamble@gmail.com>',
        to: options.to,
        subject: options.subject,
        html: options.text,
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}

module.exports = sendEmail;