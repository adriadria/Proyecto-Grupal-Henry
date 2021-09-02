const { Router } = require('express');
const {getProducts} = require('../controllers');

const router = Router();

router.get('/', async (req, res) => {
    const {name} = req.query;
    try{
        const products = await getProducts();
        if(!name){
            return res.status(200).send(products);
        }else{
            const productsByName = products.filter( product => product.name.includes(name));
            return res.status(200).send(productsByName);
        }
    }catch(e){
        console.error(e);
    }
});

module.exports = router;