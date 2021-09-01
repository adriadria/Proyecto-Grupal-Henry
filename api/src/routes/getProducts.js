const { Router } = require('express');
const {getProducts} = require('../controllers');

const router = Router();

router.get('/', async (req, res) => {
    try{
        const products = await getProducts();
        return res.status(200).send(products);
    }catch(e){
        console.error(e);
    }
});

module.exports = router;