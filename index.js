const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); 
const connectDB = require('./config/db');
dotenv.config({path : './config/config.env'});


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
const PORT = process.env.PORT || 5000 ; 
app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))



