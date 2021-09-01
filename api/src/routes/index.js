const { Router } = require('express');
const Product = require('../models/Product');
const {getProducts} = require('../controllers');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({msg: 'it works!'});
});

router.get('/products', async (req, res) => {
    try{
        const products = await getProducts();
        return res.status(200).send(products);
    }catch(e){
        console.error(e);
    }
});

router.post('/product', async (req, res) => {
    const {name, price, description, image, weight, height, width, stock} = req.body;
    try{
        await new Product({name, price, description, image, weight, height, width, stock});
        return res.status(200).send('Product successfully created')
    }catch(e){
        console.error(e);
    }
});

router.post('/', async(req, res) => {
    console.log(req.body);
    const product = new Product(req.body);
    console.log(product);
    await product.save();
    res.status(200).json(product);
})

module.exports =  router;
