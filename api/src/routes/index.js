const { Router } = require('express');

const router = Router();

const Product = require('../models/Product');

router.get('/', (req, res) => {
    res.status(200).json({msg: 'it works!'});
});
router.post('/', async(req, res) => {
    console.log(req.body);
    const product = new Product(req.body);
    console.log(product);
    await product.save();
    res.status(200).json(product);
})

module.exports =  router;
