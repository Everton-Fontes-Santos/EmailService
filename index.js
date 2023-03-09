import {Mail} from "./src/services/email.js"

const main = async ()=>{
    const emailOption= {
        to:"efstrader@gmail.com",
        subject:"A Text Test Email from nodemailer",
        message:`<h1>Nice this Test arrived!!</h1><p>Test Email</p>`
    }
    const email = new Mail(emailOption.to, emailOption.subject, emailOption.message)
    const info = await email.sendMail()
    console.log(info)
}

main()