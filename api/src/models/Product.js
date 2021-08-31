const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    image_url: {type:String, required:true},
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true}
});

module.exports = mongoose.model('products', Product);
