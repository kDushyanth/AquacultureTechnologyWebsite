const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://AQT_dev:aqctsvrm@act.io0on.mongodb.net/AQT_dev?retryWrites=true&w=majority',{ useNewUrlParser: true ,})
.then(()=>console.log('connected to database succesfully'))
.catch((err)=>console.log(err));
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('client'));
app.get('/' , (req,res) => {
    res.sendFile('./client/index.html', { root: __dirname });
});

const PORT = process.env.PORT || 5000 ; 
app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))