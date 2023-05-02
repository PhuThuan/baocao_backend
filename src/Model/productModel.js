var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
 
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
 
module.exports = mongoose.model('products', userSchema);