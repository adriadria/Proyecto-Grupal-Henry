const mongoose = require('mongoose');

const Product = new Schema({
    image_url: {type:String, required:true},
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    categories: [{type: Schema.Types.ObjectId, ref: 'categories'}]
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;