const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MaterialSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    topic : {
        type : String,
        required : [true , 'Please add correct topic name']   
    },
    urls : {
        type: [String],
    }
});

module.exports = mongoose.model('Materials' , MaterialSchema);