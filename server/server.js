require('dotenv').config();
const NODEMAILER = require('./nodemailer')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- SERVER ROUTES ---------- **/
app.use('/email',NODEMAILER);

app.get('*', (req,res) =>{
  res.sendFile(path.join('build'));
});
/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});

