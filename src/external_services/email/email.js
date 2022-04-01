const nodemailer = require("nodemailer");
const logger = require("../../config/logger")

// const emailhost = process.env.SMTP_HOST
// const emailuser = process.env.EMAIL_USER
// const emailpassword = process.env.EMAIL_PASSWORD

const emailhost = "smtp.hostinger.com"
const emailuser = "reset@live247.ai"
const emailpassword = "Re$et@123$"

async function transporter() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    logger.debug("Setting up the transport")
    let transporter = nodemailer.createTransport({
        host: emailhost,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: emailuser, // generated ethereal user
            pass: emailpassword, // generated ethereal password
        },
    });
    logger.debug("Transporter is", transporter)
    return transporter
}


async function emailer(fromAddress, toAddress, subject, text, html) {
    // send mail with defined transport object
    logger.debug("Setting up the email transport to send email : ", fromAddress, toAddress)
    let transport = await transporter()
    logger.debug("Transport is ",transport)
    let info = await transport.sendMail({
        from: fromAddress, // sender address
        to: toAddress, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });

    logger.debug("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}



module.exports = { emailer }
