const mongo = require('mongoose');

const Schema = mongo.Schema;

const patient = new Schema({
    title : {
        type: String,
        required: true
    },
    firstName : {
        
    }

})

