const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); 
const connectDB = require('./config/db');
dotenv.config({path : './config/config.env'});
const node_mailer = require('nodemailer');

connectDB()
.then(()=>
{
    console.log('approached');

});

const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('client'));

app.use('/api/v1/' , require('./routes/MaterialsRoute'))

app.get('/' , (req,res) => {
    res.sendFile('./client/index.html', { root: __dirname });
});
app.get('/contact',(req,res)=>{
    res.sendFile('./client/contact.html',{root:__dirname});
});
app.post('/email',(req,res)=>{;
    const authentication = {
        authentication: {
            key:"",
            domain :""
        }
    };
    
    const transporter = node_mailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
        user: "aqtwebsite@gmail.com",
        pass: process.env.PASSWORD
  }
    });
    
    const mail_content ={
        from:req.body.email,
        to:"aqtwebsite@gmail.com",
        subject:req.body.subject,
        text:req.body.text
    };
    
    transporter.sendMail(mail_content).then(()=>{
        res.json({status:200,success:"mail sent!!!"});
        console.log(mail_content);
    }).catch((err)=>console.log(err));
    
});
const PORT = process.env.PORT || 5000 ; 
app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))



