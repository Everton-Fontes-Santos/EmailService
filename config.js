import {config} from 'dotenv'
config()

const conf = {
    hostEmail: process.env.EMAILHOST,
    portEmail: Number(process.env.EMAILPORT) || 587,
    usernameEmail: process.env.EMAILUSERNAME,
    passwordEmail: process.env.EMAILPASSWORD,
    senderEmail: process.env.EMAILSENDER,
    isGmail: Boolean(process.env.EMAILGMAIL) || false,
    port: process.env.PORT || 3000
}

export default conf