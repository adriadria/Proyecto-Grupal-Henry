const { Router } = require('express');
const {getCategories} = require('../controllers');

const router = Router();

router.get('/', async (req, res) => {
    try{
        const categories = await getCategories();
        return res.status(200).send(categories);
    }catch(e){
        console.error(e);
    }
});

module.exports = router;