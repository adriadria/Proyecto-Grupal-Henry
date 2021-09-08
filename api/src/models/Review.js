const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const reviewSchema = new Schema(
    {
        title: {type:String, required:true},
        description: {type:String, required:true},
        calification: {type:Number, min:1, max:5, required:true},
        product_id: {type:Schema.Types.ObjectId, ref:'products'},
        user_id: {type:Schema.Types.ObjectId, ref:'User'}
    },
    { timestamp: true }
);

module.exports = model('review', reviewSchema);