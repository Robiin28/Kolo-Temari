const nodemailer = require('nodemailer');
const sendEmail = (option) => {
   
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const emailOption = {
        from: 'mineFlix support team <support@mineFlix.com',
        to: option.email,
        subject: option.subject,
        text: option.message,
        html: option.html 
    }


    transporter.sendMail(emailOption);
}
module.exports =sendEmail;