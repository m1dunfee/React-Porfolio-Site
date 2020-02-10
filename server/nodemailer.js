/** ---------- nodeMailer ---------- **/
const express = require('express');
const router = express();
var nodemailer = require('nodemailer');

router.post('/sendemail',(req,res)=>{

    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    var mailOptions = {
      from: process.env.EMAIL_ACCOUNT,
      to: process.env.EMAIL_ACCOUNT2,
      subject: "Portfolio Message",
      attachments: req.body.files, //function call to parse attachments
      html: `<div>
            <h1>${req.body.name}</h1>
            <h2${req.body.company}</h1>
            <h2>${req.body.email}</h2>
            <p>${req.body.text}</p>
            </div>`
            
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.sendStatus(500)
        } else {
          console.log('Email sent: ' + info.response);
          res.sendStatus(200)
        }
      });
})

    module.exports = router