import { Mail } from '../services/email.js'
const postEmail = async (req, res) =>{
    const email = req.body
    //check email
    if(!email.to || !email.subject || !email.message){
        return res.status(500).send({
            message:"Not a valid email"
        })
    }
    const sender = new Mail(email.to, email.subject, email.message)
    try{
        const info = await sender.sendMail()
        if(info.response.includes("OK")) return res.status(201).send({
            message:"Email Sended"
        })
        
    }catch(err){
        res.status(500).send({
            message:`Cannot send email ${err.message}` 
        })
    }
}


export default {
    postEmail
}