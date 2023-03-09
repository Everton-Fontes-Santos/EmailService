import config from "../config.js";
import * as nodemailer from 'nodemailer';

type EmailType = {
    to:string
    subject:string
    message:string
}
const options = !config.isGmail ? {
    host: config.hostEmail,
    port: config.portEmail,
    secure: config.portEmail === 465? true: false, // true for 465, false for other ports
}:
{
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    // service: 'gmail'
}

class Mail {

    constructor(
        public to?: string,
        public subject?: string,
        public message?: string) { }


    async sendMail() {

        let mailOptions = {
            from: config.senderEmail,
            to: this.to,
            subject: this.subject,
            html: this.message
        };

        const transporter = nodemailer.createTransport({
            ...options,
            auth: {
                user: config.usernameEmail, 
                pass: config.passwordEmail, 
                },
            tls: { rejectUnauthorized: false }
        });

        return await transporter.sendMail(mailOptions);
    }


}
export {
    Mail,
    EmailType
}