const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    name: {type:String, required:true},
    products: [{type: Schema.Types.ObjectId, ref: 'products'}]
});


module.exports = mongoose.model('categories', Category);