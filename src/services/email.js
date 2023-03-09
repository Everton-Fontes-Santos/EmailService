import config from "../../config.js";
import * as nodemailer from 'nodemailer';

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
        to,
        subject,
        message) {
            this.to = to
            this.subject = subject
            this.message = message
         }


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
        try{
            const info = await transporter.sendMail(mailOptions);
            return info
        }catch(e){
            throw e
        }
        
    }


}
export {
    Mail,
}