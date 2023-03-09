import {config} from 'dotenv'
config()

const conf = {
    hostEmail: process.env.EMAILHOST || "smtp.gmail.com",
    portEmail: Number(process.env.EMAILPORT) || 587,
    usernameEmail: process.env.EMAILUSERNAME || "efs.fontes@gmail.com",
    passwordEmail: process.env.EMAILPASSWORD || "osdgmckyamzakolj",
    senderEmail: process.env.EMAILSENDER || "efs.fontes@gmail.com",
    isGmail: Boolean(process.env.EMAILGMAIL) || false,
    port: process.env.PORT || 3000
}

export default conf