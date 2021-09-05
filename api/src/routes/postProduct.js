const { Router } = require('express');
const Product = require('../models/Product');

const router = Router();

router.post('/', async (req, res) => {
    const {name, price, description, image_url, categories} = req.body;
    try{
        const product = new Product({name, price, description, image_url, categories});
        await product.save();
        return res.status(200).send('Product successfully created');
    }catch(e){
        console.error(e);
    }
});

module.exports = router;