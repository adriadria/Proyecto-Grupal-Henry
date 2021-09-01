const { Router } = require('express');
const Product = require('../models/Product');

const router = Router();

router.post('/', async (req, res) => {
    const {name, price, description, image, weight, height, width, stock} = req.body;
    try{
        const product = new Product({name, price, description, image, weight, height, width, stock});
        await product.save();
        return res.status(200).send('Product successfully created');
    }catch(e){
        console.error(e);
    }
});

module.exports = router;