const nodemailer = require('nodemailer')

const sendEmail = async (mailOptions) =>{

    const {SMTP_HOST,SMTP_PORT,EMAIL_USERNAME,EMAIL_PASS}=process.env

    let transporter = nodemailer.createTransport({

        host : SMTP_HOST ,
        port : SMTP_PORT  ,
        secure: false, // true for 465, false for other ports
        auth :{
            user : EMAIL_USERNAME ,
            pass : EMAIL_PASS
        } ,
       
    })

    let info = await transporter.sendMail(mailOptions) ; 

    console.log(`Message send : ${info}`)
    console.log(info)

}

module.exports = sendEmail


